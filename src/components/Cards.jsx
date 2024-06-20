const Cards=(props)=>{
    return(
        <>
        <div style={{backgroundColor:props.bgcolor}} className=' p-4 border rounded-md flex-grow text-center my-3'>
        <h1 className='font-bold'>{props.title}</h1>
        <p>{[props.subtitle]}</p>
      </div>
        </>
    )
}
export default Cards