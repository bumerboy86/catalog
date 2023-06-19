import axios from "axios";
const apiUrl = process.env.VUE_APP_API_URL;

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios(`${apiUrl}products.json`, {
            method: "GET"
        }).then((products) => {
            commit('SET_PRODUCT_TO_STATE', products.data);
            return products.data;
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
}