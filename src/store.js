import { createStore } from "vuex";

const store = createStore({
    state: {
        cart: [],
        cartInfo: {},
    },
    mutations: {
        setCount: (state, count) => (state.count = count),
        setCart: (state, tovar) => state.cart.push(tovar),
        setDelCart: (state, tovarIndex) => state.cart = state.cart.filter((el, index) => { return index != tovarIndex }),
        // setDelCart: (state, tovar) => state.cart.forEach(el => {
        //     if (el != tovar) {
        //         state.temp.push(el)
        //     }
        // }),
    },
    getters: {
        getCount: (state) => {
            return state.count;
        },
        getCart: (state) => {
            return state.cart;
        },
        // getDelCart: (state) => {
        //     return state.cart;
        // },
    },
});
export default store;
