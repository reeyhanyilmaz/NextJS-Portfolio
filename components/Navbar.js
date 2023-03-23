import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import "../styles/navbar.css";
import { useState } from "react";
import Home from "../pages/index"

function Navbar({children}) {
  const [isHamOpen, setIsHamOpen] = useState(false);

  const handleClick = () =>{
    setIsHamOpen((prev) => !prev);
  }

  // const router = useRouter();
  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === href ? 'red' : 'black',
  // }

  // const handleClick = (e) => {
  //     e.preventDefault()
  //     router.push(href)
  //   }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <i className={`fa-solid fa-bars ham ${isHamOpen ? "open" : "close"}`} onClick={handleClick}></i>
      <i className= {`fa-solid fa-xmark cross ${isHamOpen ? "open" : "close"}`} onClick={handleClick}></i>

      <div className="circle"></div>

      <ul>
        <li>
          <i className="fa-solid fa-house"></i>
          <Link href="/"> .about() </Link>
        </li>
        <li>
          <i className="fa-solid fa-user"></i>
          <Link href="/projects"> .projects() </Link>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <Link href="/contact">.contact()</Link>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <Link href="/blog">.blog()</Link>
        </li>
      </ul>

      {children}

      {/* <Home isHamOpen={isHamOpen} /> */}

      {/* <div className={`container ${isHamOpen ? "open" : "close"}`}>
        <div className="content">
          <h1>Puppies</h1>
          <h3>Satvik Popli</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            inventore iusto quam. Fugiat ut ducimus ratione nostrum dolor nobis,
            error doloremque veritatis, molestiae a molestias earum aspernatur,
            rem quasi maiores! Animi aperiam hic quis minus itaque, nihil,
            dolorem beatae explicabo unde qui officiis facilis ducimus expedita
            illum repellat, esse quos quas sapiente! In, vel ipsam corporis
            fugit odio corrupti quae.
          </p>
          <Image
            src="/assets/my_photo.jpeg"
            alt="doggo"
            width={1000}
            height={500}
          />
          <p>
            Sit, unde? Modi perspiciatis officia labore, repellendus, voluptates
            laboriosam dolor non repellat consectetur esse error ab nesciunt,
            obcaecati minima nihil! Ad maxime corporis distinctio voluptates
            deserunt consequatur. Pariatur, nisi accusamus? Eum dolores eius
            dolorum at ipsa, mollitia, ducimus minima nesciunt provident natus
            asperiores, hic eaque earum impedit? Dicta culpa aliquid, iste quia
            ut rem corrupti tempora, provident facilis fuga cupiditate.
            Voluptatibus quia eos itaque eveniet distinctio temporibus inventore
            velit sunt odit, maxime cupiditate possimus cum, voluptatum
            molestiae beatae unde! Libero consequuntur distinctio officia
            voluptatum magni natus exercitationem voluptatem nemo nihil.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
