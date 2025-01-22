import logo from "../assets/logo.png";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="overflow-x-hidden overflow-y-hidden md:h-[250px] bg-blue-600">
      <div className="flex flex-col items-center  md:flex-row md:justify-between px-8 py-4">
        <div>
          <a className="text-white" href="/">
            {/* <img src={logo} className="w-32 h-20 cursor-pointer" alt="" /> */}
            Logo del cliente
          </a>
        </div>
        <div className="flex flex-col items-center justify-center md:items-center md:flex-row gap-4 cursor-pointer font-semibold text-white">
          {/* <p className='hover:text-blue-400'>Sobre Nosotros</p>
                    <p className='hover:text-blue-400'>Terminos y Servicio</p>
                    <p className='hover:text-blue-400'>Política de Privacidad</p>
                    <p className='hover:text-blue-400'>Contactanos</p> */}
        </div>
      </div>
      <hr className="border-gray-300 w-screen border" />
      <div className="text-center px-4 py-4 md:px-12 md:py-12 text-white">
        Todos los derechos reservados © {year}, sitioweb.com desarrollado por
        <a
          href="https://ecommetrica.com"
          className="hover:text-blue-400 hover:underline font-semibold"
          target="_blank"
        >
          {" "}
          Ecommetrica.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
