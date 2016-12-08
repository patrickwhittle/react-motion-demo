import { ACTION_TYPE_1, ACTION_TYPE_2, ACTION_TYPE_3 } from '../actions/actionTypes'

export const stack = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPE_1:
      return state.slice().push(action.value)
    case ACTION_TYPE_2:
      return state.slice(0, -1)
    default:
      return state
  }
}

export const flag = (state = 'INITIAL_FLAG_VALUE', action) => {
  switch (action.type) {
    case ACTION_TYPE_3:
      return action.flag
    default:
      return state
  }
}

