import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        updateItems: []
    },
    getters: {
        getItems: state => state.items
    },
    actions: {
        loadItems(context, items) {
            context.commit('loadItems', items)
        },
        removeItems(context, items) {
            context.commit('removeItems', items)
		}
    },
    mutations: {
        loadItems(state, payload) {
            state.items = payload
        },
        removeItems(state, index) {

            state.items.splice(index, 1)
           
        }
    }
})

