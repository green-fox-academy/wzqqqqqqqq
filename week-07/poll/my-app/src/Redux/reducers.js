import { GET_ALL_POLL_ACTION, VOTE_ACTION } from "./action";

const init = {
  question: [],
  lists: []
};

export default function(state = init, action) {
  if (action.type === GET_ALL_POLL_ACTION) {
    const question = action.question;
    const list = action.list;
    return {
      question: question,
      list: list
    };
  } else if (action.type === VOTE_ACTION) {
    const question = action.question;
    const list = action.list;
    return {
      question: question,
      list: list
    };
  }
}
