import * as types from './mutation-types'

const actions = {
  nameAsyn ({commit}, {age, name}) {
    commit(types.SET_NAME, name)
    commit(types.SET_AGE, age)
  }
}

export default  actions
