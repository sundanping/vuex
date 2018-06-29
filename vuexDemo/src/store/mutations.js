import * as types from './mutation-type'
// import getInitialState from './state';
// export const checkUser = async ({ commit }, data) => {
//     const res = await api.checkUser(data);
//     commit(types.LOG_IN, res);
//   };
export default {
    [types.RESET_STATE] (state, name) {
        state.token+= name
    },
    [types.INCRESS] (state, n) {
        state.check+= n
    }
}