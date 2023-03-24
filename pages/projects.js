import React from "react";
import Head from "next/head";
import { SocialIcon } from "react-social-icons";
import { LinkIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import "../styles/projects.css";

// function projects() {
//   const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state

//   const project = [
//     {
//       id: 1,
//       name: "Captain Marine",
//       technology: "Next JS",
//       url: "https://captainmarin.com/",
//       github: "https://github.com/reeyhanyilmaz/CaptainMarineCompanyWebSite",
//     },
//     {
//       id: 2,
//       name: "E-Commerce App",
//       technology: "React",
//       url: "https://reyhanyilmaz-chemdev-ecommerce.netlify.app/",
//       github: "https://github.com/reeyhanyilmaz/React-eCommerceApp",
//     },
//     {
//       id: 3,
//       name: "Medidation App",
//       technology: "JavaScript",
//       url: "https://reeyhanyilmaz.github.io/JavaScript-MeditationApp/",
//       github: "https://github.com/reeyhanyilmaz/JavaScript-MeditationApp",
//     },
//     {
//       id: 4,
//       name: "Typing Speed App",
//       technology: "React - Redux",
//       url: "https://typing-speed-project.netlify.app/",
//       github: "https://github.com/reeyhanyilmaz/Redux-TypingSpeedApp",
//     },
//     {
//       id: 5,
//       name: "Wheather App",
//       technology: "React",
//       url: "https://reyhanyilmaz-react-weatherapp.netlify.app/",
//       github: "https://github.com/reeyhanyilmaz/React-WeatherApp",
//     },
//     {
//       id: 6,
//       name: "Spend Money App",
//       technology: "React - Redux",
//       url: "https://reyhan-redux-spend-money.netlify.app/",
//       github: "https://github.com/reeyhanyilmaz/Redux-SpendMoney",
//     },
//     {
//       id: 7,
//       name: "Notes App",
//       technology: "React - Redux",
//       url: "https://reyhanyilmaz-redux-notes-app.netlify.app/",
//       github: "https://github.com/reeyhanyilmaz/Redux-NotesApp",
//     },
//   ];

//   return (
//     <div
//       id="portfolio"
//       className={`flex flex-col p-20 text-lg justify-center align-center container ${
//         isHamOpen ? "open" : "close"
//       }`}
//     >
//       <Head>
//         <title>Projects</title>
//       </Head>
//       <p className="html">&lt;html&gt;</p>
//       <p className="body">&lt;body&gt;</p>
//       <p className="section">&lt;section&gt;</p>
//       <div className="flex flex-wrap my-10 content flex justify-center items-center">
//         {project.map((item) => {
//           return (
//             <div key={item.id} className="p-4 lg:w-64 ">
//               <div className="cards flex rounded-lg h-full bg-slate-100 p-8 flex-col hover:transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
//                 <div className="flex items-center mb-3">
//                   <h2 className="text-lg font-medium">{item.name}</h2>
//                 </div>
//                 <div className="flex flex-row align-center">
//                   <Icon
//                     icon="grommet-icons:code"
//                     color="green"
//                     width="24"
//                     className="mr-5"
//                   />
//                   <p className="leading-relaxed text-base ">
//                     {item.technology}
//                   </p>
//                 </div>

//                 <div className="flex justify-around mt-5">
//                   <SocialIcon
//                     url={`${item.github}`}
//                     style={{ height: 25, width: 25 }}
//                     target="_blank"
//                   />
//                   {/* <SocialIcon
//                       url={`${item.url}`}
//                       label="Our portfolio"
//                       style={{ height: 25, width: 25 }}
//                       // bgColor="#ff5a01"
//                     /> */}
//                   <a href={`${item.url}`} target="_blank">
//                     <Icon
//                       icon="mingcute:link-fill"
//                       color="#215da0"
//                       width="24"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <p className="section">&lt;section/&gt;</p>
//       <p className="body">&lt;body /&gt;</p>
//       <p className="html">&lt;html/&gt;</p>
//     </div>
//   );
// }

// export default projects;

import { useState } from "react";

export default function Projects() {
  const data = [
    {
      project: "Captain Marine",
      stack: ["nextjs"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://captainmarin.com/",
      github: "https://github.com/reeyhanyilmaz/CaptainMarineCompanyWebSite",
      image: "https://images.unsplash.com/photo-1601919972568-768b9bbcf548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      status: "In Development",
    },
    {
      project: "E-Commerce App",
      stack: ["react"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reyhanyilmaz-chemdev-ecommerce.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/React-eCommerceApp",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Memory Card Game",
      stack: ["JavaScript"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reeyhanyilmaz.github.io/JavaScript-MemoryCardGame/",
      github: "https://github.com/reeyhanyilmaz/JavaScript-MemoryCardGame",
      image:
        "https://images.unsplash.com/photo-1588591795084-1770cb3be374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needs: "People with super powers",
      status: "In Development",
    },
    {
      project: "Meditation App",
      stack: ["JavaScript"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reeyhanyilmaz.github.io/JavaScript-MeditationApp",
      github: "https://github.com/reeyhanyilmaz/JavaScript-MeditationApp",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80",
      needs: "People with super powers",
      status: "In Development",
    },
    {
      project: "Typing Speed App",
      stack: ["react", "redux"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://typing-speed-project.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/Redux-TypingSpeedApp",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      status: "Live",
    },
    {
      project: "BMI Calculator",
      stack: ["react", "typescript"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reyhan-bmi-calculator.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/ReactTypeScript-BMICalculate",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1618939291225-8d558ea4369f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Wheather App",
      stack: ["react"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reyhanyilmaz-react-weatherapp.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/React-WeatherApp",
      image:
        "https://images.unsplash.com/photo-1465577512280-1c2d41a79862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80",
      needs: "People with super powers",
      status: "In Development",
    },
    {
      project: "Tip Calculator",
      stack: ["JavaScript"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reeyhanyilmaz.github.io/JavaScript-TipCalculator/",
      github: "https://github.com/reeyhanyilmaz/JavaScript-TipCalculator",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Spend Money App",
      stack: ["react", "redux"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reyhan-redux-spend-money.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/Redux-SpendMoney",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Notes App",
      stack: ["react", "redux"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reyhanyilmaz-redux-notes-app.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/Redux-NotesApp",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
     
        "https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Object Catching Game",
      stack: ["JavaScript"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reeyhanyilmaz.github.io/JavaScript-NesneYakalamaOyunu/",
      github: "https://github.com/reeyhanyilmaz/JavaScript-NesneYakalamaOyunu",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Rick And Morty App",
      stack: ["react", "typescript"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://nextjs-typescript-rickandmorty.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/NextJSwithTypeScript-RickandMortyApp",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Todos App",
      stack: ["react"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reyhanyilmaz-todos.netlify.app/",
      github: "https://github.com/reeyhanyilmaz/React-todos",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Live",
    },
    {
      project: "Color Flipper",
      stack: ["JavaScript"],
      description:
        "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
      website: "https://reeyhanyilmaz.github.io/JavaScript-ColorFlipper//",
      github: "https://github.com/reeyhanyilmaz/JavaScript-ColorFlipper",
      needs: "People with super powers, semi-super powers, or no powers at all",
      image:
        "https://images.unsplash.com/photo-1541723011216-c57eaed19919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      status: "Live",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state

  function handleCardClick(index) {
    setActiveCard(index === activeCard ? null : index);
  }

  return (
    <div
      id="portfolio"
      className={`flex flex-col p-20 text-lg justify-center align-center container ${
        isHamOpen ? "open" : "close"
      }`}
    >
      <Head>
        {/* sunucu tarafında çalıştırılan JavaScript kodunun, bir tarayıcı ortamı gerektiren Materialize kütüphanesi gibi istemci tarafı bir kütüphane ile uyumsuz olduğundan bu şekilde kullandım. */}
        <script type="text/javascript" src="/js/materialize.min.js"></script>
        <title>Projects</title>
      </Head>
      <p className="html">&lt;html&gt;</p>
      <p className="body">&lt;body&gt;</p>
      <p className="section">&lt;section&gt;</p>
      <div className="row">
        {data.map((item, index) => (
          <div
            key={index}
            className="col m4  hover:transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
          >
            <div
              className="card hoverable"
              onClick={() => handleCardClick(index)}
            >
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  style={{ width: "410px" , height: "220px"}}
                  className="activator"
                  src={item.image}
                />
              </div>
              <div className="card-content">
                <StackIcons data={item.stack} />
                <span className="card-title activator grey-text text-darken-4">
                  {item.project}
                  <Icon
                    icon="gg:more-vertical-o"
                    width="25"
                    className="right"
                  />
                </span>
                <div>
                  <span>
                    <a href={item.website} className="website" target="_blank">Website</a>
                  </span>
                  <span>
                    <a className="github" href={item.github} target="_blank">
                      Github
                    </a>
                  </span>
                </div>
              </div>
              {activeCard === index && (
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4 mb-5">
                    {item.project}
                    <Icon
                      icon="line-md:close-circle"
                      className="right"
                      width="25"
                    />
                  </span>
                  {/* <div>
                    <span className="status">{item.status}</span>
                  </div> */}
                  <p>{item.description}</p>
                  {/* <p>
                    <strong>Need:</strong>
                  </p>
                  <p>{item.needs}</p> */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="section">&lt;section/&gt;</p>
      <p className="body">&lt;body /&gt;</p>
      <p className="html">&lt;html/&gt;</p>
    </div>
  );
}

function StackIcons(props) {
  const array = props.data;
  const icons = array.map((item) => {
    return (
      <div key={item} className="icon">
        <span className={item}>
          <span />
        </span>
      </div>
    );
  });
  return <div> {icons} </div>;
}
