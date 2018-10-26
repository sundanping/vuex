import * as types from './mutation-type'
import axios from 'axios'

export const check = async ({ commit },{num}) => {
    //  {name,password}-------------   -|
    console.log(axios,num) // 传值 接受值
     const { data} = await axios.get('http://www.hletong.com/web/public/hletong/contents/alllist')
     const res = data.length
     console.log(data, res)
    commit(types.INCRESS,res);
}

