import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const sendEmail = axios.post("https://thecondorvision.com/send-email", {
      name: name,
      email: email,
      message: message,
    });

    toast.promise(sendEmail, {
      loading: "Enviando mensaje...",
      success: <b>Informacion enviada correctamente</b>,
      error: <b>Error al enviar la informacion</b>,
    });

    try {
      const response = await sendEmail;
      console.log(response);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-12 grid grid-cols-1 md:grid-cols-2 px-8 gap-4">
      <div className="overflow-x-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3364.5332198922315!2d-117.02686496782299!3d32.51190292472467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949444f8b70e9%3A0x1b68ee1ba31bd7f4!2sThe%20Condor%20Vision!5e0!3m2!1ses!2smx!4v1714763843208!5m2!1ses!2smx"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="border border-blue-500 p-4 shadow-lg shadow-blue-200 rounded-lg">
        <h1 className="text-start text-3xl font-semibold uppercase text-blue-500 px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          placeat!
        </h1>

        <div className="flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-google-maps"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
            <path d="M6.428 12.494l7.314 -9.252" />
            <path d="M10.002 7.935l-2.937 -2.545" />
            <path d="M17.693 6.593l-8.336 9.979" />
            <path d="M17.591 6.376c.472 .907 .715 1.914 .709 2.935a7.263 7.263 0 0 1 -.72 3.18a19.085 19.085 0 0 1 -2.089 3c-.784 .933 -1.49 1.93 -2.11 2.98c-.314 .62 -.568 1.27 -.757 1.938c-.121 .36 -.277 .591 -.622 .591c-.315 0 -.463 -.136 -.626 -.593a10.595 10.595 0 0 0 -.779 -1.978a18.18 18.18 0 0 0 -1.423 -2.091c-.877 -1.184 -2.179 -2.535 -2.853 -4.071a7.077 7.077 0 0 1 -.621 -2.967a6.226 6.226 0 0 1 1.476 -4.055a6.25 6.25 0 0 1 4.811 -2.245a6.462 6.462 0 0 1 1.918 .284a6.255 6.255 0 0 1 3.686 3.092z" />
          </svg>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          asperiores!
        </div>
        <div className="flex justify-center items-center flex-col mb-4 p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="mb-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nombre"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="mb-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Correo"
            />
            <textarea
              value={message}
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="mb-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Mensaje"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700 focus:outline-none"
            >
              Lorem ipsum dolor sit amet.
            </button>
          </form>
          <Toaster position="top-right" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
