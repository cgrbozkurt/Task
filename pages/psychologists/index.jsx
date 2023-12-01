import React, { useState } from "react";
import JobsCard from "./jobscard";
import { psychologists } from "../api/jobs/psychologists";
import { dietitians } from "../api/jobs/dietitians";
import { fitnessTrainers } from "../api/jobs/fitnesstrainers";
import Link from "next/link";

const image = "https://i.pravatar.cc/300";

const Psychologists = () => {
  const [job, setJob] = useState(psychologists);
  const [activeButton, setActiveButton] = useState("psychologists");
  const [all, setAll] = useState("Psikologlar");
  const [links,setLinks]=useState("psikolog");

  const handleButtonClick = (jobs, title,links) => {
    setJob(jobs);
    setActiveButton(jobs);
    setAll(title);
    setLinks(links)
  };

  return (
    <section className="flex flex-col  items-center h-screen w-screen">
      <div className=" ">
        <h1 className="font-bold text-3xl text-jobtext  flex text-center pb-5 -mt-12 font-lato">
          İhtiyacına En Uygun Uzmanı Seç
        </h1>
        <div className="btn-jobs flex justify-center font-lato text-jobtext gap-5 font-bold">
          <button
              className= {`${ activeButton == "Psikologlar" ? "border-b-8 bg-red-300" : ""
              } ${activeButton === "Diyetisyenler" ? "your-other-class" : ""}`}
            onClick={() => handleButtonClick(psychologists, "Psikologlar","psikolog")}
          >
            Psikolog{" "}
          </button>
          <button
            className={` ${activeButton==="diyetisyen"?"border-b-8":" " }  `}
            onClick={() => handleButtonClick(dietitians, "Diyetisyenler","diyetisyen")}
          >
            Diyetisyen{" "}
          </button>
          <button
               className={`${activeButton==="fitness" ?"border-b-8":"" }  `}
            onClick={() =>
              handleButtonClick(fitnessTrainers, "Fitnes Eğitmenleri","fitness")
            }
          >
            Spor Eğitmeni{" "}
          </button>
        </div>
      </div>
      <div className="flex gap-5 items-center text-jobtext font-lato w-[1200px] h-[557px] overflow-x-auto ">
        {job.map((item) => (
          <JobsCard image={image} item={item} />
        ))}
      </div>
      <Link href={`https://hidoctor.health/online/${links}/landing`} className="text-lg flex items-center justify-center font-semibold h-14">
        Tüm {all}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          class="h-4 w-7"
        >
          <path
            fill-rule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
    </section>
  );
};

export default Psychologists;
