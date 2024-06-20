import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



const Login=(props)=>{
    const[flag,setflag]=useState(true)
    const navigate=useNavigate()
    const users=props.users
    const[user,setuser]=useState("")
    const [pass,setpass]=useState("")
    const handleuser=(evt)=>{
     setuser(evt.target.value)
    }
    const handlepass=(evt)=>{
        setpass(evt.target.value)
    }
    const handlelogin=()=>{
      users.forEach(function(item){
        if(item.name===user&&item.password===pass){
            navigate('/Landingpage',{state:{users:user}})
        }else{
            setflag(false)
        }
      });
    }
    return(
        <>
        
        <div className='bg-black p-14'>
            <div className='bg-white p-14'>

          
        <h1 className='text-2xl font-medium'> Hey Hai </h1>
        {
            flag?<p>I help you to manage activity after login :)</p>:<p className="text-red-500">please signup before login :(</p>
        }
        
        <div className="flex flex-col w-52 gap-2 my-2">
          <input type="text" 
          onChange={handleuser}
          className='border border-black rounded-md p-1'
          placeholder="Username" 
          value={user}/>
          <input type="password" 
          onChange={handlepass} className="border border-black rounded-md p-1"
          placeholder="Password" 
          value={pass}/>

        </div>
        <button className='bg-[#8272da] px-4 py-1 rounded-md' onClick={handlelogin}>Login</button>
        <p>Don't have an account ? <Link to={'/signup'} className='underline'>Signup</Link></p>
        </div>
        </div>
        </>
    )
}
export default Login