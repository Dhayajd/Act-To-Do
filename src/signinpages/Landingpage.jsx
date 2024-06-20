
import Header from "../components/Header";
import Cards from "../components/Cards";
import Listcomp from "../components/Listcomp";
import { useLocation } from "react-router-dom";

const Landingpage=()=>{
    const data=useLocation()
    return(<>
       <div className="bg-black p-14" >
      <div className='bg-white p-10 border rounded-md'>
        <Header user={data.state.users} />
        {/* cards */}
        <div className='flex justify-between gap-3 flex-wrap'>
          <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Cards bgcolor={"#FD6663"} title={"June"} subtitle={"04:36:60"} />
          <Cards bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
        </div>
        {/* my activity and today activity */}
        <div className="flex gap-3 flex-wrap">
       
        <Listcomp/>
        </div>
        </div>
        </div>
    </>)
}
export default Landingpage