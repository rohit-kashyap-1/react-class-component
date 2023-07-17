import React from 'react'
import css from './../assets/css/Main.module.css'
import rimg from '../assets/images/r.jpg'
import Card from './Card'

export default function Main() {
    return (
        <section className={css.sec}>
            <div className='container'>
                <h1 className={css.white + " mb-4"}>Why choose our services</h1>
                <div className='row'>
                    <div className='col-md-3'>
                        <Card image={rimg} />
                    </div>
                    <div className='col-md-3'>
                        <Card image={rimg} />
                    </div>
                    <div className='col-md-3'>
                        <Card image={rimg} />
                    </div>
                    <div className='col-md-3'>
                        <Card image={rimg} />
                    </div>
                </div>
            </div>
        </section>
    )
}
