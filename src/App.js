import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JSONDATA from "./book.json";
import Banner from "./components/banner.jsx";
import Card from "./components/card.jsx";
import Search from "./components/search.jsx";
import Detail from "./components/detail.jsx";

function App() {
  const [searchBook, setSearchBook] = useState("");
  const [setlectedBook, setSelectedBook] = useState(null);

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

  const displayBook = JSONDATA.filter((val, key) => {
    if (searchBook === "") {
      return <Card />;
    } else if (val.title.toLowerCase().includes(searchBook.toLowerCase())) {
      return <Card key={key} book={val} openBook={bookOpen} />;
    }
  }).map((val, key) => {
    return <Card key={key} book={val} openBook={bookOpen} />;
  });

  return (
    <div className="App">
      <div className="container">
        <Banner />
        <Search value={searchBook} setVal={setSearchBook} />
        <div className="Content">{displayBook}</div>
        {Bookdetail}
      </div>
    </div>
  );
}

export default App;
