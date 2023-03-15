import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";

function MyApp({ Component, pageProps }) {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <>
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            <ArrowUpIcon mb="0.5" mr="0.5" />
          </button>
        )}
      </>
    </ChakraProvider>
  );
}

export default MyApp;
