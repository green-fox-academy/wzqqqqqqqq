import React from "react";
import "../App.css";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      country: "china",
      loaded: false
    };
    this.item = "";
    this.newsApiKey = "8777ec425cc8456eb20058160f83c1af";
    this.newsApiURL = `https://newsapi.org/v2/top-headlines?q=${this.state.country}&apiKey=${this.newsApiKey}`;
  }

  componentDidMount() {
    fetch(this.newsApiURL)
      .then(response => response.json())
      .then(news => {
        // eslint-disable-next-line
        {
          this.setState({ news: [...news.articles], loaded: true });
        }
      });
  }

  componentDidUpdate(prevState) {
    this.newsApiKey = "8777ec425cc8456eb20058160f83c1af";
    this.newsApiURL = `https://newsapi.org/v2/top-headlines?q=${this.state.country}&apiKey=${this.newsApiKey}`;

    if (this.state.country !== prevState.country) {
      fetch(this.newsApiURL)
        .then(response => response.json())
        .then(news => {
          // eslint-disable-next-line
          {
            this.setState({ news: [...news.articles], loaded: true });
          }
        });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <input
            type="text"
            className="input-text"
            onChange={event => (this.item = event.target.value)}
          />
          <button
            className="button-text"
            onClick={() => this.setState({ country: this.item, loaded: true })}
          >
            Search
          </button>
        </header>
        <ol type="1">
          {this.state.loaded ? (
            this.state.news.map(e => <li key={e.title}> {e.title} </li>)
          ) : (
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </ol>
      </div>
    );
  }
}
