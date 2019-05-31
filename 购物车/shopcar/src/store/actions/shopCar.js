import {createAction} from 'redux-actions';
import {GET_SHOPCAR_DATA} from '../types/shopCar';
import Utils from '../../utils/request';

export const getShopData=createAction(
    GET_SHOPCAR_DATA,
    (url)=>{
        return Utils.get(url)
    }
)