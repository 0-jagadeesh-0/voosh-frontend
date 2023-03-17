import React from 'react'
import Item from '../../components/Item/Item'
import Navbar from '../../components/Navbar/Navbar'
import { data } from '../../data/restaurants'

const Items = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: "3%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {
                    data.map((val, i) => {
                        return <Item key={i} item={val} />
                    })
                }
            </div>
        </>

    )
}

export default Items