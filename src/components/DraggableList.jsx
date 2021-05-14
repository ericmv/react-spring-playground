import React, { useRef, useEffect } from 'react'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash/clamp'
import swap from 'lodash-move'
import styles from './styles.module.css'

const numColumns = 3
const columnWidth = 220 + 10
const containerWidth = numColumns * columnWidth
const imageHeight = 170 + 10

function insertAndShift(arr, from, to) {
    let cutOut = arr.splice(from, 1) [0]; // cut the element at index 'from'
    arr.splice(to, 0, cutOut);            // insert it at index 'to'
}


const fn = (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0, x=0) => (index: number) =>
    active && index === originalIndex
        ? {
            x: (curIndex % numColumns) * columnWidth + x,
            y: Math.floor(curIndex / numColumns) * imageHeight + y,
            scale: 1.1,
            zIndex: 1,
            shadow: 15,
            immediate: (key: string) => key === 'y' || key === 'zIndex',
          }
        : {
            x: (order.indexOf(index) % numColumns) * columnWidth,
            y: Math.floor(order.indexOf(index) / numColumns) * imageHeight,
            scale: 1,
            zIndex: 0,
            shadow: 1,
            immediate: false,
        }

function DraggableList({ items }: { items: string[] }) {
  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [x, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curCol = (curIndex % numColumns)
    const curRow = Math.floor(curIndex / numColumns)


    const newCol = Math.round((curCol * columnWidth + x) / columnWidth)
    const newRow = Math.round((curRow * imageHeight + y) / imageHeight)

    // const newIndex = clamp(Math.round((curIndex * imageHeight + y) / imageHeight), 0, items.length - 1)
    const newIndex = (numColumns * newRow) + newCol




    const newOrder = swap(order.current, curIndex, newIndex)
    api.start(fn(newOrder, active, originalIndex, curIndex, y, x)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder
  })

  useEffect(() => {
      console.log('updating order.current', items)
      order.current = items.map((_, index) => index)
  }, [items])

  return (
    <div className={styles.content} style={{ height: items.length * imageHeight }}>
      {springs.map(({ zIndex, shadow, y, x, scale }, i) => (
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
            <img src={items[i]} height={170} width={220} onDragStart={(event) => {event.preventDefault()}}/>
        </animated.div>
      ))}
    </div>
  )
}
export default DraggableList;
