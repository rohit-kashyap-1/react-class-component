import React from 'react'

import uk from './../assets/images/uttarakhand2.jpg'

export default function Hero() {
   
    function abc(){

    }
    const style = {
        section: {
            height: "400px",
            backgroundImage:"url('"+uk+"')",
            backgroundSize:"cover"
        },
        div: {
            width:"1300px",
            margin:"auto",
            height:"400px",
            color:"white",
            padding:"100px 0"
        },
        h1: {
            color:"#f1f1f"
        }
    }

    //style.
    return (
        <section style={style.section}>
            <div style={style.div}>
                <h1 style={style.h1}>First Styled Component</h1>
                <div>{abc()}</div>
            </div>
        </section>
    )
}
