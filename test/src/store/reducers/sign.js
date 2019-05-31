import { handleActions } from 'redux-actions'
import {CHANGE_START_DATE,CHANGE_END_DATE,CHANGE_PERSON,CHANGE_CHHOSE_LIST,ISSHOW,
TITLE,MSG,CHANGE_MSG,COUNT} from '../types/sign';
export default handleActions(
    {
        [TITLE](state,action){
            return {
                ...state,
                title:action.payload
            }
        },
        [MSG](state,action){
            return {
                ...state,
                msg:action.payload
            }
        },
        [CHANGE_START_DATE](state,action){
            return{
                ...state,
                startDate:action.payload
            }
        },
        [CHANGE_END_DATE](state,action){
            return{
                ...state,
                endDate:action.payload
            }
        },
        [CHANGE_PERSON](state,action){
            return{
                ...state,
                person:action.payload
            }
        },
        [CHANGE_CHHOSE_LIST](state,action){
            return {
                ...state,
                chooseList:action.payload.choose,
                list:action.payload.list
            }
        },
        [ISSHOW](state,action){
            return{
                ...state,
                isShow:action.payload,
            }
        },
        [CHANGE_MSG](state,action){
            console.log(action.payload)
            return{
                ...state,
                msgObj:action.payload.msg,
                joinList:action.payload.list,
                count:action.payload.count
            }
        },
        [COUNT](state,action){
            return {
                ...state,
                count:action.payload
            }
        }
    },
    {
        count:0,
        isShow:false,
        title:"",
        msg:"",
        startDate:'2019-04-01',
        endDate:'2019-04-07',
        person:"",
        joinList:[],
        list:[{
            name:"姓名",
            check:true,
            require:"*"
        }],
        chooseList:[{
            name:"姓名",
            check:true,
            require:"*"
        },{
            name:"手机号",
            check:false,
            require:"*"
        },{
            name:"性别",
            check:false,
            require:"*"
        },{
            name:"年龄",
            check:false,
            require:"*"
        },{
            name:"婚姻状况",
            check:false,
            require:""
        },{
            name:"地址",
            check:false,
            require:""
        },{
            name:"微信号",
            check:false,
            require:""
        },{
            name:"身份证号",
            check:false,
            require:"*"
        }],
        msgObj:{
            name:"",
            old:'',
            phone:"",
            time:''
        }
    }
)