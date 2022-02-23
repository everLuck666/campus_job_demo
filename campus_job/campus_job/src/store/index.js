import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { handleLogin } from "../api/login";
import { uploadStudentInfo, searchJob } from "../api/user";
import { getNoVerifyJob } from '../api/teacher';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userType: -1,
    // tabActive: '',
    jobList: {},
  },

  mutations: {
    setData(state, payload) {

      for (let key in payload) {
        state[key] = payload[key];
      }
    }
  },
  actions: {
    async getNoVerifyJob(context) {

      const data = await getNoVerifyJob();

      context.commit('setData', {
        jobList: [...data]
      });

    },

    async searchJob(context) {
      const {
        data: {
          data
        }
      } = await searchJob();

      console.log(data);

      

     context.commit('setData',  {
       jobList: {...data.data}
     });
    }

  },
  getters: {}
});

export default store;
