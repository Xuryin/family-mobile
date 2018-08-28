import * as types from './mutation-types'

const mutations = {
  [types.SET_NAME] (state, name) {
    state.name = name
  },
  [types.SET_AGE] (state, age) {
    state.age = age
  },
  [types.SET_TITLE] (state, title) {
      console.log(title)
    state.title = title
  }
}
export default mutations
