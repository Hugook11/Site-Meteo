export const state = () => ({
  counter: 10,
  cart: [],
})

export const mutations = {
  increment(state, counter) {
    state.counter++
  },
  addToCart(state, object){
    state.cart.push(object)
  }
}

export const actions = {
  addToCart({commit}, product) {
    commit('addToCart', product)
  }
}

export const getters = {

  getStoreCart: (state) => {
    return state.cart
  }
}
