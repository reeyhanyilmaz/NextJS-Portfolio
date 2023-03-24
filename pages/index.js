import Image from "next/image";
import Head from "next/head";
import "../styles/index.css";
import { Grid, Box, Text } from "@chakra-ui/react";
import { LinkIcon, InfoOutlineIcon, Button } from "@chakra-ui/icons";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state
  const activePage = useSelector((state) => state.portfolio.activePage);

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
            <div className="hello slideLeft">Hi, I&#39;m Reyhan</div>
            {/* <div className="name slideLeft">Reyhan</div> */}
            <div className="about slideLeft">Frontend Developer</div>
            <p className="h1">&lt;h1 /&gt;</p>
            <p className="p mt-5">&lt;p&gt;</p>
            <div className="moreAbout slideLeft md:w-96">
              <p>
                I finished my undergraduate education as a chemist. I became a
                frontend developer by making a career change. I am currently
                working as a Frontend Developer.
              </p>
              <p></p>
              <br />
              <p>
                I&#39;m developing projects with React, Next JS, TypeScript. As
                styling, I use Bootstrap, Tailwind CSS , SCSS, Chakra-UI and
                many libraries. I started learning in React Native and am
                developing it.
              </p>
            </div>
            <p className="p mt-5">&lt;p /&gt;</p>
          </div>

          <div className="devPic slideLeft mt-5 flex justify-content ">
            <Image
              src="/assets/my_photo.jpeg"
              alt="my_photo"
              width="500"
              height="200"
            />
          </div>
        </div>
        <p className="body">&lt;body /&gt;</p>
        <p className="html">&lt;html/&gt;</p>
      </div>
    </div>
  );
}
