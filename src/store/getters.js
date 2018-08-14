// 一般使用getters 来获取state的状态，为不是直接使用state
export const name = (state) => {
  return state.name.toUpperCase()
}

export const age = (state) => {
  return state.name.toUpperCase()
}

export const title = (state) => {
  return state.title
}

export const other = (state) => {
  return `My name is ${state.name}, I am ${state.age} years old`
}
