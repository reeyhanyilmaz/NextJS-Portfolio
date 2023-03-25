import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import "../styles/blog.css";

function blog() {
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <div
        className={`container py-20 min-w-full ${isHamOpen ? "open" : "close"}`}
      >
        {/*   
      <div class="absolute top-24 left-1/2">
      <img class="h-64 w-full object-contain object-bottom rounded-lg shadow-lg" src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
    <div class="relative pb-5/6">
        <img class="absolute h-64 w-full" src="https://picsum.photos/200/300" alt=""/>
      </div> 
      <div class="relative px-4 -mt-16">
        <div class="p-6 bg-white rounded shadow-xl">
          <div class="flex items-baseline">
            <span class="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase">Novo</span>
            <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wider">
              3 camas &bull; 2 banheiros
            </div>
          </div>    
          <h4 class="mt-1 font-semibold text-lg leading-tight truncate">Casa moderna no centro da cidade</h4>
          <div class="mt-1">
            R$ 453,00
            <span class="text-gray-600 text-sm"> / sem</span>
          </div>
        </div>
   
      </div>
    </div> */}

        {/* postcss */}
        <div class="content-wrapper">
          <div class="news-card">
            <a href="#" class="news-card__card-link"></a>
            <img
              src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt=""
              class="news-card__image"
            />
            <div class="news-card__text-wrapper">
              <h2 class="news-card__title">A/B Test with JavaScript</h2>
              <div class="news-card__post-date">Feb 02, 2023</div>
              <div class="news-card__details-wrapper">
                <p class="news-card__excerpt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  pariatur nemo tempore repellat? Ullam sed officia iure
                  architecto deserunt distinctio, pariatur&hellip;
                </p>
                <a href="/ab-test" class="news-card__read-more">
                  Read more <i class="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="news-card">
            <a href="#" class="news-card__card-link"></a>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt=""
              class="news-card__image"
            />
            <div class="news-card__text-wrapper">
              <h2 class="news-card__title">
                How to set up Universal Links with React Native CLI
              </h2>
              <div class="news-card__post-date">Feb 18, 2023</div>
              <div class="news-card__details-wrapper">
                <p class="news-card__excerpt">
                  In this article, we will see how to set up Universal Links for
                  iOS devices in projects using React Native CLI and React
                  Navigation.
                </p>
                <a href="https://medium.com/@hakanolgun/universal-links-for-react-native-cli-f0a1c87360f1" class="news-card__read-more" target="_blank">
                  Read more <i class="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* animation  */}
        <div class="hidden float flex justify-center sm:flex  absolute w-full   duration-500">
          <i class="float_html my-2 opacity-0 fab fa-html5 fa-2x text-orange-400"></i>
          <i class="float_html duration-500 fab fa-html5 fa-2x text-orange-400"></i>
          <i class="float_html duration-500 fab fa-css3 fa-2x text-red-400"></i>
          <i class="float_html duration-500 fab fa-js-square fa-2x text-yellow-400"></i>
        </div>
      </div>
    </div>
  );
}

export default blog;
