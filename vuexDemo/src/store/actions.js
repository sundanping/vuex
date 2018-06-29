import * as types from './mutation-type'
export const check = async ({ commit }) => {
    //  {name,password}--------------|
    // ajax   const res = await $http.api(...,{name,password})

    const res = 11111;
    commit(types.INCRESS,res);
}

