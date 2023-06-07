import React from 'react'
import styles from "./Header.module.css"
// import cart from 'src/assets/cart.png'

export default function Header() {
    return (
        <div className = {styles.Header}>
            <p>
                Intocode Codding Shopcamp 
            </p>
            <img src="src/assets/cart.png" alt=""/>

        </div>
    )
}
