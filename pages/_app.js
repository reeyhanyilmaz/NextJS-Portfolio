import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

// redux
import { Provider } from "react-redux";
import { store } from "../redux/store";

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

  const router = useRouter();

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component key={router.asPath} {...pageProps} />
          <>
            {showButton && (
              <button onClick={scrollToTop} className="back-to-top">
                <ArrowUpIcon mb="0.5" mr="0.5" />
              </button>
            )}
          </>
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
