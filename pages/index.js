import Image from "next/image";
import Head from "next/head";
import "../styles/index.css";
import { Grid, Box, Text } from "@chakra-ui/react";
import { LinkIcon, InfoOutlineIcon, Button } from "@chakra-ui/icons";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state

  return (
    <div
      className={`container py-20 min-w-full ${isHamOpen ? "open" : "close"}`}
    >
      <Head>
        <title>Reyhan Yılmaz</title>
      </Head>

      <div id="about" className="content">
        <p className="html">&lt;html&gt;</p>
        <p className="body">&lt;body&gt;</p>
        <div className="infoContainer">
          <div className="devInfo">
            <p className="h1">&lt;h1&gt;</p>
            <div className="hello slideLeft">Hi,I&#39;m Reyhan</div>
            {/* <div className="name slideLeft">Reyhan</div> */}
            <div className="about slideLeft">Frontend Developer</div>
            <p className="h1">&lt;h1 /&gt;</p>
            <p className="p mt-5">&lt;p&gt;</p>
            <div className="moreAbout slideLeft md:w-1/2">
              <p>I finished my undergraduate education as a chemist. </p>
              <p>I became a
              frontend developer by making a career change. </p>
              <p>I am currently working as a frontend developer and developing projects.</p>
            </div>
            <p className="p mt-5">&lt;p /&gt;</p>
          </div>

          <div className="devPic slideLeft mt-5 flex justify-content ">
            <Image
              src="/my_photo.jpeg"
              alt="my_photo"
              width="300"
              height="300"
            />
          </div>
        </div>
        <p className="body">&lt;body /&gt;</p>
        <p className="html">&lt;html/&gt;</p>
      </div>
    </div>
  );
}
