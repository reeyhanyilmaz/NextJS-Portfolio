import Image from "next/image";
import Head from "next/head";
import "../styles/index.css";
import { SocialIcon } from "react-social-icons";
import { Grid, Box, Text } from "@chakra-ui/react";
import { LinkIcon, InfoOutlineIcon, Button } from "@chakra-ui/icons";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Reyhan Yılmaz</title>
      </Head>
      <p>&lt;html&gt;</p>
      <p>&lt;body&gt;</p>

      <div id="about" className="container">
        <div className="main2">
          <div className="infoContainer">
            <div className="devInfo">
              <p>&lt;h1&gt;</p>
              <div className="hello slideLeft">Hi I am</div>
              <div className="name slideLeft">Reyhan</div>
              <div className="about slideLeft">Frontend Developer</div>
              <p>&lt;h1 /&gt;</p>
              <div className="moreAbout slideLeft w-1/2">
                <p>&lt;p&gt;</p>I finished my undergraduate education as a
                chemist. I became a frontend developer by making a career
                change. Writing code makes me happy. I am currently working as a
                front end developer at Hype.
                <p>&lt;p /&gt;</p>
              </div>
            </div>

            <div className="devPic slideLeft">
              <Image
                src="/my_photo.jpeg"
                alt="my_photo"
                width="600"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
      <p>&lt;body /&gt;</p>
      <p>&lt;html/&gt;</p>

      {/* contact */}
      <div
        id="contact"
        className="flex flex-row justify-center items-center p-20 gap-x-4 text-3xl"
      >
        {/* <p><SocialIcon url="https://mail.google.com/reeyhanyilmaz@gmail.com" /></p> */}

        <SocialIcon url="https://linkedin.com/in/reeyhanyilmaz" />
        <SocialIcon url="https://github.com/reeyhanyilmaz" />
        <SocialIcon url="https://discord.com/channels/818433563858567178/818433563858567181" />
      </div>
    </div>
  );
}