import logo from "../assets/logo.png"
function Logo() {
    return (
        <div className='md:h-screen bg-blue-500 flex justify-center items-center'>
            <img src={logo} alt="Logo Condor Vision" className='w-[800px]' />
        </div>
    )
}

export default Logo