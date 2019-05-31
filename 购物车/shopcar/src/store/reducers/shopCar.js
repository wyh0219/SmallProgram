import {handleActions} from 'redux-actions';
import {GET_SHOPCAR_DATA,CHANGE_ALL_CHECKED,CHANGE_TOTAL} from '../types/shopCar';
export default handleActions(
    {
        [GET_SHOPCAR_DATA](state,action){

            return{
                ...state,
                shopCarData:action.payload
            }
        },
        [CHANGE_ALL_CHECKED](state,action){

            return{
                ...state,
                allChecked:action.payload
            }
        },
        [CHANGE_TOTAL](state,action){

            return{
                ...state,
                count:action.payload.count,
                price:action.payload.price
            }
        }
    },
    {   
        shopCarData:[],
        allChecked: false,
        price:0,
        count:0
    }
)