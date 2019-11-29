import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPoll, Vote } from "../Redux/action";
import "../App.css";

function Home(props) {
  const { question, list } = props;
  // eslint-disable-next-line

  let voteValue = 0;

  const handleChange = event => {
    voteValue = event.target.value;
    if (event.target.value === 1) {
      document.querySelector(".footerText").textContent =
        "Selected optional: Italian";
    } else if (event.target.value === 2) {
      document.querySelector(".footerText").textContent =
        "Selected optional: Mexican";
    }
    document.getElementById("mainBtn").className = "mainBtn";
  };

  const handleVote = () => {
   props.history.push("/vote");
  };

  return (
    <div>
      <div>
        <strong> {question} </strong>
      </div>
      <div>
        {list.map(item => {
          return (
            <div>
              <label>
                <input
                  type="radio"
                  name="select"
                  value={item.id}
                  onChange={handleChange}
                />
                <strong>{item.type}</strong>
              </label>
              <br />
            </div>
          );
        })}
      </div>
      <div>
        <strong>No optional selected</strong>
        <button onClick={handleVote} className="btn" id="mainBtn">
          vote
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ list, question }) => ({ list, question });
const mapDispatchToProps = dispatch => ({
  getInfo: () => dispatch(getAllPoll()),
  postVote: id => dispatch(Vote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
