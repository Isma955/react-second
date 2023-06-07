import React from 'react'
import Product from './Product'
import styles from './Main.module.css'

export default function Main() {
    return (
        <div className = {styles.productWrap}>
            <Product img = 'https://static.eldorado.ru/photos/mv/Pdb/400106264b.jpg/resize/380x240/'  price = '15000'secondPrice = '20000' productName= 'MacBook' />
            <Product img = 'https://static.eldorado.ru/photos/mv/Pdb/400106264b.jpg/resize/380x240/'  price = '15000'secondPrice = '20000' productName= 'MacBook' />
            <Product img = 'https://static.eldorado.ru/photos/mv/Pdb/400106264b.jpg/resize/380x240/'  price = '15000'secondPrice = '' productName= 'MacBook' />
            <Product img = 'https://static.eldorado.ru/photos/mv/Pdb/400106264b.jpg/resize/380x240/'  price = '15000'secondPrice = '20000' productName= 'MacBook' />
            <Product img = 'https://static.eldorado.ru/photos/mv/Pdb/400106264b.jpg/resize/380x240/'  price = '15000'secondPrice = '' productName= 'MacBook' />
            <Product img = 'https://static.eldorado.ru/photos/mv/Pdb/400106264b.jpg/resize/380x240/'  price = '15000'secondPrice = '2000' productName= 'MacBook' />
        </div>
    )
}
