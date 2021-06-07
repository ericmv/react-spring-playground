
import React, { useState, useEffect } from 'react';
import DraggableGrid from './components/DraggableGrid';
import DraggableList from './components/DraggableList';
import styles from './components/styles.module.css'
import axios from 'axios';

function fetchImageUrls() {
    return axios.get("https://picsum.photos/v2/list?limit=50").then((res) => {
        return res.data.map(data => data.download_url);
    })
}
export default function App() {
    const [urls, setUrls] = useState([])
    useEffect(() => {
        fetchImageUrls().then((urls) => {
            setUrls(urls)
        })
    }, [])
    if (!urls.length) return null
    return (
        <div className={styles.container}>
          <DraggableList items={urls} />

        </div>
    )
}
