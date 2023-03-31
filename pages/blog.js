import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import "../styles/blog.css";
import Link from "next/link";

function Blog() {
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <div
        id="blog"
        className={`container py-20 min-w-full ${isHamOpen ? "open" : "close"}`}
      >
        <p className="html">&lt;html&gt;</p>
        <p className="body">&lt;body&gt;</p>
        <p className="sectionn">&lt;section&gt;</p>
        {/* postcss */}
        <div className="content-wrapper">
          <div className="news-card">
            <Link href="/ab-test" className="news-card__card-link"></Link>
            <img
              src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="ab-test"
              className="news-card__image"
            />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">A/B Test with JavaScript</h2>
              <div className="news-card__post-date">Feb 02, 2023</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  A/B tests are used to measure the effect of different
                  variables on websites or mobile applications. For example,
                  variables such as the color or position of a button on a
                  website can be tested.
                </p>
                <Link href="/ab-test" className="news-card__read-more">
                  Read more <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="news-card">
            <a href="https://medium.com/@hakanolgun/universal-links-for-react-native-cli-f0a1c87360f1" className="news-card__card-link"></a>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="reac-native"
              className="news-card__image"
            />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">
                How to set up Universal Links with React Native CLI
              </h2>
              <div className="news-card__post-date">Feb 18, 2023</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  In this article, we will see how to set up Universal Links for
                  iOS devices in projects using React Native CLI and React
                  Navigation.
                </p>
                <a
                  href="https://medium.com/@hakanolgun/universal-links-for-react-native-cli-f0a1c87360f1"
                  className="news-card__read-more"
                  target="_blank"
                >
                  Read more <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="sectionn">&lt;section/&gt;</p>
        <p className="body">&lt;body /&gt;</p>
        <p className="html">&lt;html/&gt;</p>
      </div>
    </div>
  );
}

export default Blog;
