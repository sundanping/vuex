import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import getInitialState from './state'
const state = getInitialState({
    userinfo: {a:'hoge'} || {},
    token:  3
});
Vue.use(Vuex)
export default new Vuex.Store({
 state,
 getters,
 actions,
 mutations
})