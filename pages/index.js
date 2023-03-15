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
        className="flex flex-column justify-center items-center p-20 text-xl"
      >
        {/* <p>&lt;portfolio /&gt;</p> */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {project.map((item) => {
            return (
              <Box key={item.id} className="bg-white rounded p-3">
                <Text>{item.name}</Text>
                <Text className="text-sm">{item.technology}</Text>
               <SocialIcon url={`${item.github}`} />
              </Box>
            );
          })}
        </Grid>
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
