import React, { useState, useRef, useEffect } from 'react'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import swap from 'lodash-move'
import styles from './styles.module.css'
import { StyledThumbnailButton } from './styled'
import { Edit } from './Icons';
import ThumbnailContainer from './ThumbnailContainer';

const numColumns = 3
const columnWidth = 220 + 10
const imageHeight = 170 + 30


const fn = (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0, x=0) => (index: number) =>
    active && index === originalIndex
        ? {
            x: (curIndex % numColumns) * columnWidth + x,
            y: Math.floor(curIndex / numColumns) * imageHeight + y,
            scale: 1.1,
            zIndex: 1,
            shadow: 15,
            immediate: true,
            index: curIndex
          }
        : {
            x: (order.indexOf(index) % numColumns) * columnWidth,
            y: Math.floor(order.indexOf(index) / numColumns) * imageHeight,
            scale: 1,
            zIndex: 0,
            shadow: 1,
            immediate: false,
            index
        }

function DraggableList({ items }: { items: string[] }) {
    const [order, setOrder] = useState(items.map((_, index) => index));
    // const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
    const [scrollOrder, setScrollOrder] = useState([])

    const [springs, api] = useSprings(items.length, fn(order)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.

    const handleMovePageUp = (originalIndex) => {
        const curPosition = order.indexOf(originalIndex);
        if (curPosition >= order.length - 1) return;

        const newPosition = curPosition + 1;

        const newOrder = swap(order, curPosition, newPosition);
        api.start(fn(newOrder, false, originalIndex, newPosition));
        setOrder(newOrder);

    }

    const handleMovePageDown = (originalIndex) => {
        const curPosition = order.indexOf(originalIndex);
        if (curPosition <= 0) return;

        const newPosition = curPosition - 1;

        const newOrder = swap(order, curPosition, newPosition);
        api.start(fn(newOrder));
        setOrder(newOrder);

    }
    const handleDrag = ({ args: [originalIndex], active, movement: [x, y], xy, previous, tap}) => {
        if (tap) {
            console.log('is tap')
            return;
        }
        const curIndex = order.indexOf(originalIndex)
        const curCol = (curIndex % numColumns)
        const curRow = Math.floor(curIndex / numColumns)

        const newCol = Math.round((curCol * columnWidth + x) / columnWidth)
        const newRow = Math.round((curRow * imageHeight + y) / imageHeight)
        const newIndex = (numColumns * newRow) + newCol

        const newOrder = swap(order, curIndex, newIndex)
        // const newOrder = order
        api.start(fn(newOrder, active, originalIndex, curIndex, y, x)) // Feed springs new style data, they'll animate the view without causing a single render

        if (!active) {
            // console.log('drag setting new order to', newOrder)

            setOrder(newOrder)
        }
    }

    // const handleScroll = ({ args: [originalIndex], active, movement: [x, y], dragging}) => {
    //     if (!dragging) return
    //     const curIndex = order.indexOf(current)
    //     const curCol = (curIndex % numColumns)
    //     const curRow = Math.floor(curIndex / numColumns)
    //
    //     const newCol = Math.round((curCol * columnWidth + x) / columnWidth)
    //     const newRow = Math.round((curRow * imageHeight + y) / imageHeight)
    //     const newIndex = (numColumns * newRow) + newCol
    //
    //     const newOrder = swap(order, curIndex, newIndex)
    //     api.start(fn(newOrder, true, current, curIndex, y, x))
    //
    //     if (!active) {
    //         setScrollOrder(newOrder)
    //     }
    // }

    const bind = useDrag(handleDrag, { filterTaps: true })

    // useEffect(() => {
    //     console.log('updating order', items)
    //     order = items.map((_, index) => index)
    // }, [items])
    console.log('rerendering')
    return (
        <div className={styles.content} style={{ height: Math.ceil((items.length / 3)) * imageHeight }}>
            {springs.map(({ zIndex, shadow, y, x, scale, index }, i) => {
                console.log('x',x)
                return (

                <animated.div
                    {...bind(i)}
                    key={i}
                    style={{
                        zIndex,
                        boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                        y,
                        x,
                        scale,
                    }}
                >
                    <ThumbnailContainer
                        imageUri={items[i]}
                        handleMovePageUp={handleMovePageUp}
                        handleMovePageDown={handleMovePageDown}
                        originalIndex={i}
                    />
                    <StyledThumbnailButton>
                        <Edit />
                        {order.indexOf(i) + 1}
                    </StyledThumbnailButton>
                </animated.div>
            )})}
        </div>
    )
}


export default DraggableList;
