import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import "../styles/ab-test.css";

function abTest() {
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen); //state

  return (
    <div
      id="ab-test"
      className={`min-w-full container ${isHamOpen ? "open" : "close"}`}
    >
      <div className="blog-content">
        <h1>How to Create an A/B Test Using JavaScript?</h1>
        <br />

        <h2>What is JavaScript?</h2>

        <p>
          JavaScript is a programming language that can run on many different
          browsers and platforms. JavaScript is one of the fundamental building
          blocks of web technologies along with HTML and CSS. It can perform
          many operations such as controlling dynamically generated content on a
          web page, capturing user interactions, creating animations, validating
          form fields on web pages, and transferring information between web
          pages. JavaScript can also run on a platform called Node.js, allowing
          the creation of server-side applications. By running JavaScript code
          on the server, Node.js shows that JavaScript is more than just a
          programming language not used only in web browsers.
        </p>
        <br />
        <h2>What is an A/B Test?</h2>
        <p>
          A/B tests are used to measure the effect of different variables on
          websites or mobile applications. For example, variables such as the
          color or position of a button on a website can be tested. These tests
          are performed to understand user behavior and to improve the user
          experience of the website or mobile application. Using JavaScript to
          create A/B tests is a common method. With this method, you can compare
          the performance of two different versions and determine which version
          is better. In this article, I will provide a step-by-step guide and
          examples for creating an A/B test.
        </p>
        <br />

        <h2>What are the steps to create a test?</h2>
        <p>
          <strong>1.</strong> Open Developer Tools on our browser and select the
          element we want to change from the &quot;Element&quot; section.
          <Image
            src="/assets/abtest/element.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>
        <br />
        <p>
          <strong>2.</strong> After selecting our selectors, we test whether our
          JavaScript codeß manipulates the right place by pasting it into the
          &quot;Console&quot; section. We mostly use Vanilla JavaScript or a
          JavaScript-based library called jQuery.
          <Image
            src="/assets/abtest/console.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>
        <br />
        <p>
          <strong>3.</strong> If everything is as we want, open Google Optimize
          and create our test.
          <Image
            src="/assets/abtest/3.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>
        <br />
        <p>
          <strong>4.</strong> We create our variant and click the
          &quot;Edit&quot; button in the variation section.
          <Image
            src="/assets/abtest/4.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>
        <br />

        <p>
          <strong>5.</strong> In the opened page, we select the &quot;Global
          JavaScript&quot; option in the red area within &quot;&lt; &gt; &quot;.
          We paste our JavaScript code into the window that appears in front of
          us and click the &quot;Apply&quot; option. Then we click the
          &quot;Save &gt; Finished&quot; buttons in order.
          <Image
            src="/assets/abtest/5.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>

        <br />
        <p>
          <strong>6.</strong> In the lower section, we put the conditions of the
          URL or path where we want it to work in the &quot;Page Targeting&quot;
          section. In the &quot;Audience targeting&quot; section, we can target
          various devices, set cookie conditions, and write Custom JavaScript.
          This is a very diverse section. For more information: Google Optimize
          Targeting.
          <Image
            src="/assets/abtest/6.png"
            width="600"
            height="400"
            alt="abtest"
          />
          <Image
            src="/assets/abtest/7.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>
        <br />
        <p>
          <strong>7.</strong> After editing our conditions and targeting, we
          start our test by clicking the &quot;start&quot; button.
          <Image
            src="/assets/abtest/8.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>
        <br />
        <p>
          <strong>8.</strong> We can also edit the end date of the test from the
          right-hand side when we click the &quot;Edit&quot; button. If we want
          to end the test, we need to click the &quot;End&quot; button.
          <Image
            src="/assets/abtest/9.png"
            width="600"
            height="400"
            alt="abtest"
          />
          <Image
            src="/assets/abtest/10.png"
            width="600"
            height="400"
            alt="abtest"
          />
          <Image
            src="/assets/abtest/11.png"
            width="600"
            height="400"
            alt="abtest"
          />
        </p>
        <br />
        <p>By following these steps, we have opened our A/B test.</p>
      </div>
    </div>
  );
}

export default abTest;
