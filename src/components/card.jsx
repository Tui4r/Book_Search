import React from 'react'
import './card.css'

export default function card(props) {

    const { book, openBook } = props;
    return (
        <div className="text-center">
            <div className="Card" onClick={() => { openBook(book) }}>
                <div className="Card-img"> <img src={book.thumbnailUrl} ></img></div>
                <hr /><div className="Card-title">
                    <h5>{book.title}</h5>
                </div>
            </div></div>

    )
}

