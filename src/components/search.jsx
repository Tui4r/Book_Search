import React from 'react'
import "./search.css"

export default function search(props) {
    const { val, setVal } = props

    return (
        <div className="search-area">
            <input
                type="text"
                placeholder="Search..."
                className="search-box"
                value={val}
                onChange={(e) => {
                    setVal(e.target.value);
                }}
            ></input>
        </div>
    )
}
