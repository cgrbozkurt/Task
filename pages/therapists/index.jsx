import React, { useState } from "react";
import JobsCard from "../../components/cards/jobscard";
import { psychologists } from "../api/jobs/psychologists";
import { dietitians } from "../api/jobs/dietitians";
import { fitnessTrainers } from "../api/jobs/fitnesstrainers";
import Link from "next/link";

const image = "https://i.pravatar.cc/300";

const Psychologists = () => {
  const [job, setJob] = useState({
    data: psychologists,
    title: "Psikologlar",
    link: "psikolog",
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleButtonClick = (jobs, title, links) => {
    setJob({
      data: jobs,
      title: title,
      link: links,
    });
    setScrollPosition(0);
  };

  const handleScroll = (data) => {
    const amount = 200;
    const newPosition =
      data === "right"
        ? Math.min(scrollPosition + amount, 100)
        : Math.max(scrollPosition - amount, -1400); 
    setScrollPosition(newPosition);
  };

  return (
    <section className="flex flex-col lg:p-0 p-12 items-center h-full w-screen lg:h-[900px] lg:pt-44">
      <div className=" ">
        <h1 className="font-bold text-3xl text-jobtext  flex text-center pb-5 -mt-12 font-lato">
          İhtiyacına En Uygun Uzmanı Seç
        </h1>
        <div className="btn-jobs flex justify-center font-lato text-jobtext gap-5 font-medium">
          <button
            className={` ${job.data === psychologists ? "font-bold" : ""} `}
            onClick={() =>
              handleButtonClick(psychologists, "Psikologlar", "psikolog")
            }
          >
            Psikolog{" "}
          </button>
          <button
            className={` ${job.data === dietitians ? "font-bold" : " "}  `}
            onClick={() =>
              handleButtonClick(dietitians, "Diyetisyenler", "diyetisyen")
            }
          >
            Diyetisyen
          </button>
          <button
            className={`${job.data === fitnessTrainers ? "font-bold" : ""}  `}
            onClick={() =>
              handleButtonClick(
                fitnessTrainers,
                "Spor Eğitmenleri",
                "fitness"
              )
            }
          >
            Spor Eğitmeni
          </button>
        </div>
      </div>
      <div className="flex gap-5 items-center text-jobtext font-lato lg:w-[80%] lg:h-[557px] w-full h-[557px] overflow-x-hidden relative ">
      <button
            onClick={() => handleScroll("left")}
            className={`absolute right-10   hidden h-10 w-10 items-end z-10
            justify-center rounded-full bg-primary text-3xl leading-normal text-white md:flex ${
              scrollPosition===-1400 ?"bg-teal-200":""
            }`}
            tabIndex="0"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-11a5d5f3c841b69e"
            aria-disabled="false"
          >
            ›
          </button>
        
        
          <button
            onClick={() => handleScroll("right")}
            className={`absolute left-10 hidden h-10 w-10 items-end justify-center
            rounded-full bg-primary text-3xl leading-normal text-white md:flex z-10
            ${scrollPosition===100?"bg-teal-200":""}
            `}
            tabIndex="-1"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-11a5d5f3c841b69e"
            aria-disabled="true"
            disabled=""
          >
            ‹
          </button>
        <div
          className="flex items-center gap-5"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {job.data.map((item) => (
            <JobsCard key={item.id} image={image} item={item} />
          ))}
        </div>
        
         
        
      </div>
      <Link
        href={`https://hidoctor.health/online/${job.link}/landing`}
        className="text-lg flex items-center justify-center font-semibold h-14"
      >
        Tüm {job.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-7"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </section>
  );
};

export default Psychologists;