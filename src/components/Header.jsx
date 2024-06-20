const Header=(props)=>{
    return(
        <>
        <h1 className='text-xl font-medium'>Hello {props.user} ! </h1>
        <p>I help you to manage your activity here :)</p>
        </>
    )
}
export default Header