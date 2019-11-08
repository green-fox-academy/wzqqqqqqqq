import React, { useState, useEffect } from "react";
import "../App.css";

function News() {
  let input = "";
  const [country, setCountry] = useState("china");
  const [news, setNews] = useState([]);

  const newsApiKey = "8777ec425cc8456eb20058160f83c1af";
  const newsApiURL = `https://newsapi.org/v2/top-headlines?q=${country}&apiKey=${newsApiKey}`;

  let startup = () => {
    fetch(newsApiURL)
      .then(response => response.json())
      .then(news => {
        // eslint-disable-next-line
        {
          setNews(news.articles);
        }
      });
  };

  useEffect(() => {
    if (country !== "") {startup(); }
    // eslint-disable-next-line
 }, [country]);

  return (
    <div className="App">
      <header>
        <input
          type="text"
          className="input-text"
          onChange={event => (input = event.target.value)}
        />
        <button className="button-text" onClick={() => setCountry(input)}>
          search
        </button>
      </header>
        <ol type='1'>
          {news.map((e, i) => (
            <li key={i}> {e.title} </li>
          ))}
        </ol>
    </div>
  );
}

export default News;
