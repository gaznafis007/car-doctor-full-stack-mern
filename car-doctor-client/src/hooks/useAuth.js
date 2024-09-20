/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useAxios from './useAxios';

const useAuth = () => {
    const auth = useContext(AuthContext)
    const {logOut} = auth
    const axiosSecure = useAxios()
    useEffect(()=>{
        axiosSecure.interceptors.response.use((res) =>{
            console.log('hole hole')
            return res
        }, (err) =>{
            if(err){
                logOut()
                .then(() =>{
                    axiosSecure.get('/logOut')
                    .then(res => {
                        
                    })
                }) 
            }
            
        })
    },[])
    return auth
}
export default useAuth;