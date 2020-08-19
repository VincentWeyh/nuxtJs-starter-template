// INDEX GLOBAL STORE

/** 
    State are datas
    State is a factory fonction for SSR (Server Side Rendering)
    @ref : https://vuex.vuejs.org/guide/state.html
    @example : func({state, getters, commit, rootGetters}, {argument})
*/
export const state = () => ({

})

/** 
  Getters are like computed properties for stores
  @ref : https://vuex.vuejs.org/guide/getters.html
*/
export const getters = {

}

/** 
  Actions decide when a mutation should fire
  @params : {Context}
  @ref : https://vuex.vuejs.org/guide/actions.html
  @example : func({commit}) {commit('MUTATION_NAME', argument)}
*/
export const actions = {

}

/** 
  Mutations are always responsible for state changing
  Mutations name's must be explicit and use UPPER_CASE_SNAKE_CASE
  @params : {State}
  @ref : https://vuex.vuejs.org/guide/mutations.html
  @example : MUTATION_EXAMPLE(state, {argument}){ state.data = argument }
*/
export const mutations = {
}

