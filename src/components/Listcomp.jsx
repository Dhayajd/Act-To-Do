import { useState } from "react"
import Adding from "./Adding"
import Inputcomp from "./Inpurcomp"

const Listcomp = () => {
    const [arrlist,setarrlist]=useState([
        {
            id:1,
            activity:"wake up at morning"
        },
        {
         id:2,
         activity:"Eat at morning"   
        },
        {
            id:3,
            activity:"Go to gym"
        }
    ])
    return (
        <>
        <Inputcomp arrlist={arrlist} setarrlist={setarrlist}/>
            <div className='bg-[#BDB4EA] p-3 border rounded-md flex-grow my-3'>
                <h1 className='text-xl font-medium'>Today's Activity</h1>
                
                {
                    arrlist.length===0? <p>You haven't added any activity yet :(</p> :""
                }
                {
                    arrlist.map(function(item,index){
                        return <Adding id={item.id} arrlist={arrlist} setarrlist={setarrlist} item={item} index={index}/>
                        
                    })

                }
            
            </div>

        </>
    )
}
export default Listcomp