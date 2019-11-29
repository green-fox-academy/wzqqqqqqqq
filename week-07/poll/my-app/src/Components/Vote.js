import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPoll } from "../Redux/action";
import "../App.css";

function Vote({ question, list }) {
  // eslint-disable-next-line

  return (
    <div>
      <div>
        <strong>{question}</strong>
      </div>
      <div>
        {list.map(item => {
          return (
            <strong>
              {item.type}: {item.vote} votes
            </strong>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ list, question }) => ({ list, question });
const mapDispatchToProps = dispatch => ({
  getInfo: () => dispatch(getAllPoll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
