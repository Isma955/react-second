import React from 'react'
import styles from './Main.module.css'

export default function Product(props) {
    const {img, price,secondPrice,productName} = props
    return (
        <div >
        <div className = {styles.productCart}>
             <img className = {styles.productImg} src={img} alt=""/>
             <div className={styles.price}>
             <p>{price}</p>
             <span>{secondPrice}</span>
             </div>
             <p className = {styles.nameProduct}>{productName}</p>
             <button>купить</button>
         </div>
         
        </div>
    )
}
