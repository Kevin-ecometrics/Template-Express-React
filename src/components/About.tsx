import React, { useState } from 'react';

function About() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleToggle = (index: React.SetStateAction<number>) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const services = [
        { title: 'Eventos deportivos', description: 'Competencias de atletismo, natación, gimnasia, box, futbol, americano, basquetbol, beisbol, tenis, golf, ya no se van a limitar solo desde las gradas, ve todos los movimientos claves' },
        { title: 'Carreras automovilistas, exhibición', description: 'Ya es posible seguirles la pista, ver todo el trayecto y no solo la meta final' },
        { title: 'Conciertos', description: '¿Te perdiste a tu artista favorito? peor aún acudiste al concierto y no pudiste ver nada  ya podrás verlo y escucharlo en primera fila' },
        { title: 'Eventos escolares', description: 'No te pierdas de ningún recuerdo ni  detalle importante' },
        { title: 'Excursiones', description: 'Conoce lugares mágicos desde todos sus ángulos' },
        { title: 'Eventos sociales', description: 'todos los momentos más cautivadores desde diferentes perspectivas' },
        { title: 'Eventos públicos', description: 'Además de tener tomas panorámicas puedes tener seguridad de todo lo que se concentra en el espacio, permitiendo mayor control logístico' },
        { title: 'Publicidad', description: 'Impacta y atrae a tu audiencia cib vistas originales y diferentes' },
        { title: 'Rescate y rutas', description: 'Tener ojos en todas partes permiten ahorrar tiempo valioso velocidad, control atraviesa las nubes' },
        { title: 'Construcción y residencia', description: 'Ve el avance del proyecto, desde un lugar seguro inspecciona cada hueco, tubería y viga' },
        { title: 'Cobertura', description: 'Toda Baja California, República Mexicana, U.S.A' }
    ];
    return (
        <div className='flex justify-center items-center py-8 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-8 py-4 gap-8'>
                <div>
                    <h1 className='text-4xl font-bold mb-4 text-start text-blue-500'>
                        Somos The condor vision
                    </h1>
                    <p className='mb-4'>
                        Donde el drone se fusiona con lentes de realidad virtual permitiendo volar en primera persona,
                        Volar con The condor vision
                        {" "}
                        <span className='font-bold text-blue-500'>
                            Revoluciona la forma de ver y vivir experiencias
                        </span>
                    </p>
                    <h2 className='mb-4'>
                        Más que poder admirar la caída de las cascadas, las estructuras de edificios los detalles, de la playa, montañas  y deportes , sentirás que estás ahí, aunque estés a miles de kilómetros de distancia  definitivamente será un recorrido inmersivo que te genere felicidad, adrenalina
                    </h2>
                    <h2 className="text-4xl font-bold mt-8 text-start text-blue-500">Encuéntranos</h2>
                    <p className="text-start">Estamos ubicados en Tijuana Baja California</p>
                    <p className="text-start mb-4">22040, Col. Madero (Cacho), 22040 Tijuana, B.C.</p>
                    <a href='https://www.google.com/maps/place/The+Condor+Vision/@32.5119029,-117.026865,17z/data=!4m6!3m5!1s0x80d949444f8b70e9:0x1b68ee1ba31bd7f4!8m2!3d32.5117265!4d-117.0252771!16s%2Fg%2F11t4hsbg1n?entry=ttu' target='_blank' className='bg-blue-500 px-8 py-2 text-white rounded-lg hover:bg-blue-700'>Ver ubicacion</a>
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-start  text-blue-500">Nuestros Servicios</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="border-b border-gray-200 py-4">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="flex justify-between items-center w-full text-left text-gray-800 hover:text-blue-500 focus:outline-none"
                                >
                                    <span>{service.title}</span>
                                    <span>{activeIndex === index ? '-' : '+'}</span>
                                </button>
                                {activeIndex === index && <p className="mt-2 text-gray-600">{service.description}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About