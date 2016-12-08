import { ACTION_TYPE_1, ACTION_TYPE_2, ACTION_TYPE_3 } from './actionTypes'

export const act1 = value => ({
  type: ACTION_TYPE_1,
  value,
})

export const act2 = index => ({
  type: ACTION_TYPE_2,
  index,
})

export const act3 = flag => ({
  type: ACTION_TYPE_3,
  flag,
})

