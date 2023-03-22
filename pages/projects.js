import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/index.css";
import { SocialIcon } from "react-social-icons";
import { Grid, Box, Text } from "@chakra-ui/react";
import { LinkIcon, InfoOutlineIcon, Button } from "@chakra-ui/icons";

function projects() {
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
    <div id="portfolio" className="flex flex-col p-20 text-xl">
      <p>&lt;html&gt;</p>
      <p>&lt;body&gt;</p>

      <p>&lt;section&gt;</p>
      {/* <p>&lt;portfolio /&gt;</p> */}
      <div className="flex flex-wrap  mt-10">
        {project.map((item) => {
          return (
            <div key={item.id} className="p-4 max-w-sm w-64">
              <div className="flex rounded-lg h-full bg-slate-100 text-black  p-8 flex-col hover:transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
                <div className="flex items-center mb-3">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                </div>
                <div className="flex flex-row align-center">
                  {/* <InfoOutlineIcon /> */}
                  <p className="leading-relaxed text-base ">
                    {item.technology}
                  </p>
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="grid gap-2 grid-cols-2">
                  <SocialIcon
                    url={`${item.github}`}
                    style={{ height: 25, width: 25 }}
                    target="_blank"
                  />
                  {/* <SocialIcon
                      url={`${item.url}`}
                      label="Our portfolio"
                      style={{ height: 25, width: 25 }}
                      // bgColor="#ff5a01"
                    /> */}
                  <a href={`${item.url}`} target="_blank">
                    <LinkIcon color="blue.600" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p>&lt;section/&gt;</p>

      <p>&lt;body /&gt;</p>
      <p>&lt;html/&gt;</p>
    </div>
  );
}

export default projects;
