import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import "../styles/projects.css";
import { useState } from "react";

export default function Projects() {
  const [activeCard, setActiveCard] = useState(null);
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state
  const data = useSelector((state) => state.portfolio.data); //state

  function handleCardClick(index) {
    setActiveCard(index === activeCard ? null : index);
  }

  return (
    <div
      id="portfolio"
      className={`flex flex-col justify-center align-center container ${
        isHamOpen ? "open" : "close"
      }`}
    >
      <Head>
        {/* sunucu tarafında çalıştırılan JavaScript kodunun, bir tarayıcı ortamı gerektiren Materialize kütüphanesi gibi istemci tarafı bir kütüphane ile uyumsuz olduğundan bu şekilde kullandım. */}
        <script
          type="text/javascript"
          src="/js/materialize.min.js"
          defer
        ></script>
        <title>Projects</title>
      </Head>
      <p className="html">&lt;html&gt;</p>
      <p className="body">&lt;body&gt;</p>
      <p className="sectionn">&lt;section&gt;</p>
      <p class="sectionn mt-5 mb-5">&#91; &#123;</p>

      <div className="content_projects">
        <div className="row">
          {data.data.map((item, index) => (
            <div key={index} className="col m4 hover:transform hover:scale-105">
              <div
                className="card hoverable"
                onClick={() => handleCardClick(index)}
              >
                <div
                  id="projects_card"
                  className="card-image waves-effect waves-block waves-light"
                >
                  <img className="activator" src={item.image} />
                </div>
                <div className="card-content">
                  <StackIcons data={item.stack} />
                  <span className="card-title activator grey-text text-darken-4">
                    {item.project}
                  </span>
                  <div>
                    <span>
                      <a
                        href={item.website}
                        className="website"
                        target="_blank"
                      >
                        Website
                      </a>
                    </span>
                    <span>
                      <a className="github" href={item.github} target="_blank">
                        GitHub
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
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p class="sectionn mb-5">&#125; &#93;</p>
      <p className="sectionn">&lt;section /&gt;</p>
      <p className="body">&lt;body /&gt;</p>
      <p className="html">&lt;html /&gt;</p>
    </div>
  );
}

function StackIcons(props) {
  const array = props.data;
  const icons = array.map((item) => {
    return (
      <div key={item} className="icons">
        <span className={item}>
          <span />
        </span>
      </div>
    );
  });
  return <div> {icons} </div>;
}
