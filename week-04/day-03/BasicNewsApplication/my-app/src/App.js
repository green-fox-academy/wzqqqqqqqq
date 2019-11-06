import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.newApiKey = "8777ec425cc8456eb20058160f83c1af";
    this.delayTime = 3000;
    this.newApiURL = `https://newsapi.org/v2/top-headlines?q=china&apiKey=${this.newApiKey}`;
    this.delayURL = `http://slowwy.greenfox.academy/delay/${this.delayTime}/url/${this.newApiURL}`;
    this.state = {
      news: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetch(this.delayURL)
      .then(response => response.json())
      .then(news => {
        // eslint-disable-next-line
        {
          this.setState({news: [...news.articles],loaded: true});
        }});
  }

  render() {
    return (
      <div className="App">
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

