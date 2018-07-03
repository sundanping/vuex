import * as types from './mutation-type'
import axios from 'axios'

export const check = async ({ commit }) => {
    //  {name,password}--------------|
    console.log(axios)
     const { data} = await axios.get('http://www.hletong.com/web/public/hletong/contents/alllist')
     const res = data.length
     console.log(data, res)
    commit(types.INCRESS,res);
}

