const Adding=(props)=>{
    let arrlist=props.arrlist
    let setarrlist=props.setarrlist
    const handledelete=(deleteid)=>{
    let temparr=arrlist.filter(function(item){
      if(deleteid===item.id){
        return false
      }else{
        return true
      }
    })
    setarrlist(temparr)
    }
    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.item.activity}</p>
        <button className='text-orange-700 ' onClick={()=>handledelete(props.id)}>Delete</button>
        </div>
    )
}
export default Adding