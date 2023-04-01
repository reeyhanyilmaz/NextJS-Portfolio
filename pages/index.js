import Image from "next/image";
import Head from "next/head";
import "../styles/index.css";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

const TypeWriter = ({ text }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 100); // 100ms gecikme süresi

    return () => clearTimeout(timer);
  }, [index]);

  return <div>{text.slice(0, index)}</div>;
};

export default function Home({ isMobile }) {
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state

  return (
    <div
      id="about"
      className={`container py-20 min-w-full ${isHamOpen ? "open" : "close"}`}
    >
      <Head>
        <title>Reyhan Yılmaz</title>
      </Head>

      <div className="content">
        <p className="html">&lt;html&gt;</p>
        <p className="body">&lt;body&gt;</p>
        <div className="infoContainer">
          <div className="devInfo">
            <p className="h1">&lt;h1&gt;</p>
            <div className="hello slideLeft">
              {isMobile ? (
                <TypeWriter text="Hi, I&#39;m Reyhan" />
              ) : (
                "Hi, I am Reyhan"
              )}
            </div>
            <div className="about md:w-[600px] slideLeft">
              {isMobile ? (
                <TypeWriter text="Frontend Developer" />
              ) : (
                "Frontend Developer"
              )}
            </div>
            <p className="h1">&lt;h1 /&gt;</p>
            <p className="p mt-5">&lt;p&gt;</p>
            <div className="moreAbout md:w-[600px] slideLeft">
              <p>
                I finished my undergraduate education as a Chemist. I became a
                Frontend Developer by making a career change. I am currently
                working as a Frontend Developer.
              </p>
              <p></p>
              <br />
              <p>
                I&#39;m developing projects with React, Next JS, TypeScript. I
                am using Redux in state management. I also use API services in
                the projects I develop. As styling, I use Styled Components ,
                Bootstrap, Tailwind CSS , SCSS, Chakra-UI and many libraries. I
                started learning in React Native and am developing it.
              </p>
            </div>
            <p className="p mt-5">&lt;p /&gt;</p>
            <p className="p mt-5">&lt;i &gt;</p>
            <div className="mt-5 flex flex-row justify-center">
              <i className="float_html duration-500 fab fa-html5 fa-2x text-orange-400"></i>
              <i className="float_html duration-500 fab fa-css3 fa-2x text-red-400"></i>
              <i className="float_html duration-500 fa-2x fa-brands fa-bootstrap text-[#894ba0]"></i>
              <i className="float_html duration-500 fab fa-js-square fa-2x text-yellow-400"></i>
              <i className="float_html duration-500 fa-2x fa-brands fa-react text-[#234d95]"></i>
              <Image
                className="float_html duration-500"
                alt="redux"
                width="30"
                height="36"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              />
              <Image
                className="float_html duration-500"
                alt="nextjs"
                width="36"
                height="36"
                src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/nextjs.svg"
              />
            </div>
            <p className="p mt-5">&lt;i /&gt;</p>
          </div>

          <div
            className={`devPic mt-5 flex justify-content ${
              isMobile ? "" : "slideLeft"
            }`}
          >
            <Image
              src="/assets/picture.jpeg"
              alt="my_photo"
              width="500"
              height="200"
              className="img"
            />
          </div>
        </div>
        <p className="body">&lt;body /&gt;</p>
        <p className="html">&lt;html /&gt;</p>
      </div>
    </div>
  );
}

//ssr oldugu için bu şekilde çekmeliyiz
Home.getInitialProps = ({ req }) => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      req ? req.headers["user-agent"] : navigator.userAgent
    );
  return { isMobile };
};
