import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

// redux
import { Provider } from "react-redux";
import { store } from "../redux/store";

//materilize css
import "materialize-css/dist/css/materialize.min.css";

function MyApp({ Component, pageProps }) {
  const [showButton, setShowButton] = useState(false); // The back-to-top button is hidden at the beginning

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
                <div class="animate-bounce bg-[#a1a6fc] dark:bg-slate-800 p-2 w-12 h-12 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                  <ArrowUpIcon mb="0.5" mr="0.5" />
                </div>
              </button>
            )}
          </>
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
