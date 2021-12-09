import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    token: null,
    user: null,
    concerts: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeConcerts(state, concerts) {
      state.concerts = concerts;
    },
  },
  actions: {
    getConcerts({ commit }) {
      axios.get("/concert").then((aResponse) => {
        console.log("response in /concert", aResponse);
        commit("storeConcerts", aResponse.data);
      });
    },
  },
});
