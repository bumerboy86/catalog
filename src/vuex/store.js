import { createStore } from 'vuex';
import axios from "axios";
const apiUrl = process.env.VUE_APP_API_URL;

const store = createStore({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExist = false;
                state.cart.map(item =>{
                    if (item.article === product.article) {
                        isProductExist = true;
                        item.quantity++
                    }
                })
                if (!isProductExist) {
                    state.cart.push(product);
                }
            } else {
                state.cart.push(product);
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            if (state.cart.length) {
                let isDeleteProduct = false;
                state.cart.map((item, i) =>{
                    if (i === index) {
                        item.quantity > 1 ? item.quantity-- : isDeleteProduct = true;
                    }
                })
                if (isDeleteProduct) {
                    state.cart.splice(index, 1);
                }
            } else {
                state.cart.splice(index, 1);
            }
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
        },

        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },

        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
});

export default store;