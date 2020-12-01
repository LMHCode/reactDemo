const calculate = (state, action) => {
  switch (action.type) {
      case INCREMENT:
          return {num: state.num + action.count}
      case REDUCE:
          return {num: state.num - action.count}
      default:
          return state
  }
}

export {calculate}