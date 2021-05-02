import React from 'react'
import "./detail.css"

export default function detail(props) {
    const { book, onBgClick } = props;
    return (
        <div className="book-detail" >
            <div className="detail-bg" onClick={onBgClick} />
            <div className="Card-Detail" >
                <div className="detail ">
                    <div className="text-center">
                        <img src={book.thumbnailUrl} ></img></div>

                    <div className="text">
                        <span>Title : </span>
                        <p>{book.title}</p>

                        <span>Description : </span>
                        <p>{book.shortDescription}</p>

                        <span>Authors : </span>
                        <p>{book.authors}</p>

                        <span>Categories : </span>
                        <p>{book.categories}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
