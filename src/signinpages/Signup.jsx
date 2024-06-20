import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Signup=(props)=>{
    const navigate=useNavigate()
    const setusers=props.setusers
    const users=props.users
    const [signinUser,setsigninUser]=useState("")
    const [signinPass,setsigninPass]=useState("")
    const[conPass,setconPass]=useState("")
    const[flag,setflag]=useState(false)
    const handleuser=(evt)=>{
      setsigninUser(evt.target.value)
    }
    const handlepass=(evt)=>{
      setsigninPass(evt.target.value)
    }
    const handleconpass=(evt)=>{
        setconPass(evt.target.value)
    }
    const handlesignup=()=>{
        if(signinPass===conPass){
        setusers([...users,{name:signinUser,password:signinPass}])
        navigate('/')
    }else{
       setflag(true)
    }

    }

    return(
        <>
                <div className='bg-black p-14'>
            <div className='bg-white p-14'>

          
        <h1 className='text-2xl font-medium'> Hey Hai </h1>
        <p>I help you to manage activity after Signup :)</p>
        <div className="flex flex-col w-52 gap-2 my-2">
          <input type="text" className='border border-black rounded-md p-1'
          placeholder="Username" 
          value={signinUser} onChange={handleuser}/>
          <input type="password" className="border border-black rounded-md p-1"
          placeholder="Password"
          value={signinPass} onChange={handlepass} />
           <input type="password" className="border border-black rounded-md p-1"
          placeholder="Confirm Password"
          value={conPass} onChange={handleconpass} />

        </div>
        {
            flag?<p className="text-red-500">Confirm password did not match </p>:<p></p>
        }
        <button className='bg-[#fcf00f] px-4 py-1 rounded-md my-2' onClick={handlesignup}>Signup</button>
        <p>Already have an account ? <Link to={'/'} className='underline'>Login</Link></p>
        </div>
        </div>
        </>
    )
}
export default Signup