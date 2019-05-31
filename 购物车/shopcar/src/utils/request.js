export default {
    get(url){
        return new Promise(resolve=>{
            wx.request({
                url:url,
                success:(res)=>{
                    resolve(res.data)
                }
            })
        })
    }
}