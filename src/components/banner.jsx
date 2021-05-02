import React from 'react'
import { FaBook } from 'react-icons/fa'
import "./banner.css"

export default function Banner() {
    return (
        <div className="container">
            <div className="banner">
                <div className="text-center">
                    <h2 ><FaBook /> Book Search</h2>
                </div>
            </div>

        </div>
    )
}
