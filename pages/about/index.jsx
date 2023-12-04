import React from "react";
import Aboutcard from "./aboutcard";
import { aboutdoc } from "../api/aboutdoc";
import Link from "next/link";

const About = () => {
  return (
    <section className=" lg:h-[1215px] w-screen bg-about  lg:px-24 pb-5 lg:pt-20 ">
      <div className="about-top w-full flex flex-col  justify-between lg:pt-16 gap-2 text-white items-center">
        <h4 className="text-[20px] w-full lg:justify-center lg:flex hidden font-bold leading-6 ">
          BIZIM HAKKIMIZDA BIRAZ
        </h4>
        <h2 className="lg:text-[3.75rem] text-[2rem] font-bold  ">yapmayı seviyoruz</h2>
        <p>
          Tarafından resimler <Link className="border-b" href="https://www.freepik.com/">Freepik</Link>
        </p>
      </div>
      <div className="about-items  w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:p-10 gap-5 p-16">
        {aboutdoc.map((item) => (
          <Aboutcard item={item} key={item.id} />
        ))}
      </div>
      <Link href={"https://nicepage.com/c/video-website-mockup"} className="btn flex gap-1 w-[359px] h-[63px]  mx-auto rounded-[2rem] items-center
       border-2      border-orangeabout justify-center hover:bg-orangeabout cursor-pointer ">
      <div className="h-5 w-5">
      <svg
        className="w-5 h-5 "
          class="u-svg-content"
          viewBox="0 0 512 512"
          fill="white"
         
        >
          <path d="m256 512c-68.378906 0-132.667969-26.628906-181.019531-74.980469-48.351563-48.351562-74.980469-112.640625-74.980469-181.019531s26.628906-132.667969 74.980469-181.019531c48.351562-48.351563 112.640625-74.980469 181.019531-74.980469s132.667969 26.628906 181.019531 74.980469c48.351563 48.351562 74.980469 112.640625 74.980469 181.019531s-26.628906 132.667969-74.980469 181.019531c-48.351562 48.351563-112.640625 74.980469-181.019531 74.980469zm0-472c-119.101562 0-216 96.898438-216 216s96.898438 216 216 216 216-96.898438 216-216-96.898438-216-216-216zm138.285156 182-28.285156-28.285156-110 110-110-110-28.285156 28.285156 138.285156 138.285156zm0 0"></path>
        </svg>
      </div>
        <span className="text-white ">IŞLERIMIZI GÖRÜN</span>

      </Link>
    </section>
  );
};

export default About;
