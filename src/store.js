import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

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
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getConcerts({ commit }) {
      axios.get("/concert").then((aResponse) => {
        console.log("response in /concert", aResponse);
        commit("storeConcerts", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/attendee/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
