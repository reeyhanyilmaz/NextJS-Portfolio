import Navbar from "../components/Navbar";
import FooterMenu from "./FooterMenu";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterMenu />
    </>
  );
}
