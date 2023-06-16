import { createStore } from 'vuex';
import axios from "axios";
const apiUrl = process.env.VUE_APP_API_URL;

const store = createStore({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios(`${apiUrl}products.json`, {
                method: "GET"
            }).then((products) => {
                commit('SET_PRODUCT_TO_STATE', products.data);
                return products;
            }).catch((error) => {
                console.log(error);
                return error;
            })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    },
});

export default store;