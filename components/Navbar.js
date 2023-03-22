import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter()
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
      <ul className="flex flex-row justify-center p-20 gap-x-4 text-3xl">
          <li> <Link href="/"> .about() </Link> </li>
          <li> <Link href="/projects"> .projects() </Link></li>
          <li> <Link href="/contact">.contact()</Link></li>
          <li> <Link href="/blog">.blog()</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
