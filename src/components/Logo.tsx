import logo from "../assets/logo.png";
function Logo() {
  return (
    <div className="md:h-screen bg-blue-500 flex justify-center items-center">
      {/* <img src={logo} alt="Logo Condor Vision" className='w-[800px]' /> */}
      <p className="h-screen flex justify-center items-center text-white">
        Logo del cliente
      </p>
    </div>
  );
}

export default Logo;
