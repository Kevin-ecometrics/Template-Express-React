import React, { useState } from "react";

function About() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: React.SetStateAction<number>) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const services = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tortor nec dui pharetra, vitae iaculis lectus aliquam.",
    },
    {
      title: "Sed do eiusmod tempor incididunt",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      title: "Consectetur adipiscing elit",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur pretium tincidunt lacus.",
    },
    {
      title: "Nulla aliquet, sem quis",
      description:
        "Nulla aliquet, sem quis blandit placerat, felis odio faucibus leo, id lacinia elit lectus non est.",
    },
    {
      title: "Fusce vehicula arcu",
      description:
        "Fusce vehicula arcu in orci volutpat, vitae dictum mauris condimentum. Aliquam non purus auctor, mollis risus eu, volutpat eros.",
    },
    {
      title: "Etiam viverra scelerisque",
      description:
        "Etiam viverra scelerisque augue, id lacinia erat facilisis ut. Nunc cursus ligula in felis fermentum volutpat.",
    },
    {
      title: "Aenean suscipit libero",
      description:
        "Aenean suscipit libero ut nulla faucibus, et cursus nunc aliquam. In pharetra nisi vitae velit porttitor tincidunt.",
    },
    {
      title: "Mauris viverra sapien",
      description:
        "Mauris viverra sapien nec nisi tempor, a varius nunc auctor. Integer volutpat ligula id dolor iaculis, ut scelerisque velit varius.",
    },
    {
      title: "Cras id ante egestas",
      description:
        "Cras id ante egestas, feugiat eros et, tempor ligula. Proin vel orci ut lorem suscipit lobortis nec ac elit.",
    },
    {
      title: "Integer vitae turpis",
      description:
        "Integer vitae turpis ac ante pellentesque auctor. In et dui ut magna efficitur porttitor. Sed nec risus sit amet libero.",
    },
    {
      title: "Donec interdum urna",
      description:
        "Donec interdum urna sed lectus porttitor, sed gravida urna pretium. Donec sed turpis tempor, venenatis urna at, tincidunt ligula.",
    },
  ];

  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 py-4 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-start text-blue-500">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod tortor nec dui pharetra, vitae iaculis lectus aliquam.
          </p>
          <h2 className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <h2 className="text-4xl font-bold mt-8 text-start text-blue-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
            aperiam!
          </h2>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-start mb-4">
            22040, Lorem ipsum dolor sit amet, B.C.
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            className="bg-blue-500 px-8 py-2 text-white rounded-lg hover:bg-blue-700"
          >
            Lorem ipsum dolor sit amet.
          </a>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4 text-start text-blue-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            est?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full text-left text-gray-800 hover:text-blue-500 focus:outline-none"
                >
                  <span>{service.title}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
