import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth.context";
import { login, register,logout,getMe  } from "../services/auth.api";

export const useAuth =()=>{

    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used inside AuthProvider")
    }
    const {user, setUser, loading, setLoading} = context



    const handleLogin = async({email, password}) =>{
        setLoading(true)
      try {
         const data =  await login({email, password})
          setUser(data.user)  
          return true  
      } catch (error) {
        console.log(error.response?.data || error.message);
        return false
      } finally{
        setLoading(false)
      }
        
    }

    const handleRegister = async({username , email, password}) =>{
        setLoading(true)

        try {
            const data = await register({username , email, password})
            setUser(data.user)
            return true;
        } catch (error) {
            console.log(error.response?.data || error.message);
            return false
        }
        finally{
            setLoading(false)
        }
    }
    const handleLogout = async() =>{
        setLoading(true)
        try {
            await logout()
            setUser(null)
            return true
        } catch (error) {
            console.log(error.response?.data || error.message);
            return false
        }
        finally{
            setLoading(false)
        }
    }
     useEffect(()=>{
        const getAndSetUser = async()=>{
           try {
             const data = await getMe()
             setUser(data.user)
           } catch (error) {
            console.log(error);
            setUser(null)
           }finally{
               setLoading(false)
            }
        }
        getAndSetUser()
    },[])
    return{user, loading, handleLogin, handleLogout, handleRegister}
}
