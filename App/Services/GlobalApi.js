import { create } from 'apisauce'
 










const api = create ({
    baseURL: 'https://newsapi.org/v2',
    
})

const apiKey = '?country=us&apiKey=7cc2efe372294d0dbcdf1bf4a8a186b8';


const getTopHeadline = api.get('/top-headlines'+apiKey)



export default{
    getTopHeadline
}