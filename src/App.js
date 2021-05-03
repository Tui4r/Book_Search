import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JSONDATA from "./book.json";
import Banner from "./components/banner.jsx";
import Card from "./components/card.jsx";
import Search from "./components/search.jsx";
import Detail from "./components/detail.jsx";
import ReactPaginate from "react-paginate";

function App() {
  const [Books, setBooks] = useState(JSONDATA);
  const [searchBook, setSearchBook] = useState("");
  const [setlectedBook, setSelectedBook] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const bookPerPage = 12;

  const pageVisited = pageNumber * bookPerPage;
  const pageCount = Math.ceil(Books.length / bookPerPage);

  function bookOpen(ClickBook) {
    setSelectedBook(ClickBook);
  }

  function CloseDetail() {
    setSelectedBook(null);
  }

  let Bookdetail = null;
  if (!!setlectedBook) {
    Bookdetail = <Detail book={setlectedBook} onBgClick={CloseDetail} />;
  }

  // Fillter 
  const DSB = Books.filter((book, index) => {
    if (searchBook === "") {
      return book;
    } else if (book.title.toLowerCase().includes(searchBook.toLowerCase())) {
      return <Card key={index} book={book} openBook={bookOpen} />;
    }
  }) // Slice JSON Data show 
    .slice(pageVisited, pageVisited + bookPerPage)
    .map((book, index) => {
      return <Card key={index} book={book} openBook={bookOpen} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <div className="container">
        <Banner />
        <Search value={searchBook} setVal={setSearchBook} />
        <div className="Content">{DSB}</div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
        {Bookdetail}
      </div>
    </div>
  );
}

export default App;
