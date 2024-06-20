import { useState } from "react"

const Inputcomp=(props)=>{
    const arrlist=props.arrlist
    const setarrlist=props.setarrlist
     const [getinput,setinput]=useState("")
     const handlechange=(event)=>{
        setinput(event.target.value)

     }
     const additem=()=>{
        setarrlist([...arrlist,{id:arrlist.length+1,activity:getinput}])
        setinput("")
     }
    return(
        <>
         <div className='flex flex-col gap-2'>
         <h1> Manage Activity</h1>
          <div>
          <input value={getinput} onChange={handlechange} type="text" placeholder="Enter Activity" className='border border-black p-1'></input>
          <button onClick={additem} className='bg-green-500 p-1 border border-green-600 px-4'>ADD</button>
          </div>
        </div>

        </>
    )
}
export default Inputcomp