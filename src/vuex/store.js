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
                    product.quantity = 1;
                    state.cart.push(product);
                }
            } else {
                product.quantity = 1;
                state.cart.push(product);
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.length && state.cart.splice(index, 1);
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },

        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
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
        },

        INCREMENT_FROM_CART({commit}, index) {
            commit('INCREMENT', index)
        },

        DECREMENT_FROM_CART({commit},index) {
            commit('DECREMENT', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        GET_TOTAL_PRODUCTS_CART(state) {
            if(state.cart.length) {
                const arr = [...state.cart];
                return arr.reduce((total, item) => {
                    // eslint-disable-next-line no-prototype-builtins
                    if (item.hasOwnProperty('quantity')) {
                        return total + item.quantity;
                    }
                    return total;
                }, 0);
            } else {
                return 0;
            }
        }
    },
});

export default store;