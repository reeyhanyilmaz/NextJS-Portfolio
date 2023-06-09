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
            <a
              href="https://medium.com/@reyhanylmz1993/creating-a-project-with-next-js-and-its-advantages-517be757259f"
              className="news-card__card-link"
              target="_blank"
            ></a>
            <img
              src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
              alt="reac-native"
              className="news-card__image"
            />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">
                Creating a Project with Next JS and Its Advantages
              </h2>
              <div className="news-card__post-date">Apr 1, 2023</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  Next JS is a popular open-source JavaScript framework that is
                  built on top of React. React proposes to create projects with
                  Next JS in its new version.
                </p>
                <a
                  href="https://medium.com/@reyhanylmz1993/creating-a-project-with-next-js-and-its-advantages-517be757259f"
                  className="news-card__read-more"
                  target="_blank"
                >
                  Read more <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="news-card">
            <Link href="/ab-test" className="news-card__card-link"></Link>
            <img
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2805&q=80"
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
        </div>
        <p className="sectionn">&lt;section /&gt;</p>
        <p className="body">&lt;body /&gt;</p>
        <p className="html">&lt;html /&gt;</p>
      </div>
    </div>
  );
}

export default Blog;
