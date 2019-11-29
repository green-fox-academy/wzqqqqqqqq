export const GET_ALL_POLL_ACTION = "GET_ALL_POLL_ACTION";
export const VOTE_ACTION = "VOTE_ACTION";

export const getAllPoll = () => {
  const url = "http://localhost:3001/api/poll";

  return async function(dispatch) {
    const result = await fetch(url);
    const data = await result.json();

    dispatch({
      type: GET_ALL_POLL_ACTION,
      question: data.question,
      list: data.options
    });
  };
};

export const Vote = id => {
  const url = `http://localhost:3001/api/vote/${id}`;

  return async function(dispatch) {
    const result = await fetch(url, { method: "POST" });
    const data = await result.json();

    dispatch({
      type: VOTE_ACTION,
      question: data.question,
      list: data.options
    });
  };
};
