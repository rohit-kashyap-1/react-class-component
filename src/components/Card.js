import React from 'react'
import css from './../assets/css/Main.module.css'

export default function Card(props) {
    return (
        <div className={css.crd}>
            <img src={props.image} className={css.featured} />
            <h4>The Demo Card</h4>
        </div>
    )
}
