import Image from "next/image";
import styles from "../styles/index.module.css";
import { SocialIcon } from "react-social-icons";
import { Grid, Box, Text } from "@chakra-ui/react";

export default function Home() {
  const project = [
    {
      id: 1,
      name: "Captain Marine",
      technology: "Next JS",
      url: "https://captainmarin.com/",
      github: "https://github.com/reeyhanyilmaz/CaptainMarineCompanyWebSite",
    },
    {
      id: 2,
      name: "E-Commerce App",
      technology: "React",
      url: "https://reyhanyilmaz-chemdev-ecommerce.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/React-eCommerceApp",
    },
    {
      id: 3,
      name: "Medidation App",
      technology: "JavaScript",
      url: "https://reeyhanyilmaz.github.io/JavaScript-MeditationApp/",
      github: "https://github.com/reeyhanyilmaz/JavaScript-MeditationApp",
    },
    {
      id: 4,
      name: "Typing Speed App",
      technology: "React - Redux",
      url: "https://typing-speed-project.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/Redux-TypingSpeedApp",
    },
    {
      id: 5,
      name: "Wheather App",
      technology: "React",
      url: "https://reyhanyilmaz-react-weatherapp.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/React-WeatherApp",
    },
    {
      id: 6,
      name: "Spend Money App",
      technology: "React - Redux",
      url: "https://reyhan-redux-spend-money.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/Redux-SpendMoney",
    },
    {
      id: 7,
      name: "Notes App",
      technology: "React - Redux",
      url: "https://reyhanyilmaz-redux-notes-app.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/Redux-NotesApp",
    },
  ];
  return (
    <div className={styles.main}>
      <ul className="flex flex-row justify-end items-end p-20 gap-x-4 text-3xl">
        <a href="#about">
          <li> &lt;about /&gt; </li>
        </a>
        <a href="#portfolio">
          <li>&lt;portfolio /&gt;</li>
        </a>
        <a href="#contact">
          <li>&lt;contact /&gt;</li>
        </a>
      </ul>

      {/* about */}
      <div id="about" className="flex justify-center items-center">
        <span className="flex flex-col items-center ">
          <p className="text-6xl">Hi, I&#39;m Reyhan </p>
          <p className=" text-2xl mt-10 w-1/2">
            I finished my undergraduate education as a chemist. I became a
            frontend developer by making a career change. Writing code makes me
            happy. I am currently working as a front end developer at Hype.
          </p>
        </span>
        <Image src="/my_photo.jpeg" alt="my_photo" width="300" height="300" />
      </div>

      {/* portfolio */}
      <div
        id="portfolio"
        className="flex justify-center items-center p-20 text-xl"
      >
        {/* <p>&lt;portfolio /&gt;</p> */}
        <div class="flex flex-wrap justify-center mt-10">
          {project.map((item) => {
            return (
              <div key={item.id} class="p-4 max-w-sm w-64">
                <div class="flex rounded-lg h-full bg-slate-100 text-black  p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 class="text-lg font-medium">{item.name}</h2>
                  </div>
                  <div class="flex flex-col justify-between flex-grow">
                    <p class="leading-relaxed text-base ">
                      {item.technology}
                    </p>
                    <a
                      href="#"
                      class="mt-3 text-black hover:text-blue-600 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="grid gap-2 grid-cols-2">
                    <SocialIcon
                      url={`${item.github}`}
                      style={{ height: 25, width: 25 }}
                    />
                    <SocialIcon
                      url={`${item.url}`}
                      label="Our portfolio"
                      style={{ height: 25, width: 25 }}
                      // bgColor="#ff5a01"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* contact */}
      <div
        id="contact"
        className="flex flex-row justify-center items-center p-20 gap-x-4 text-3xl"
      >
        {/* <p><SocialIcon url="https://mail.google.com/reeyhanyilmaz@gmail.com" /></p> */}
        <p>
          <SocialIcon url="https://linkedin.com/in/reeyhanyilmaz" />
        </p>
        <p>
          <SocialIcon url="https://github.com/reeyhanyilmaz" />
        </p>
        <p>
          <SocialIcon url="https://discord.com/channels/818433563858567178/818433563858567181" />
        </p>
      </div>
    </div>
  );
}
