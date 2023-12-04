import Image from "next/image";
import Link from "next/link";
import React from "react";
import SpecialitisCard from "./SpecialitisCard";
import { jobsimg } from "../../pages/api/jobs/jobsimage";
import StarIcon from "./StarIcon";
import { svg } from "@/components/svg";

const JobsCard = ({ item, image }) => {
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * jobsimg.length);
    return jobsimg[randomIndex];
  };

  return (
    <div className="jobs-card w-[305px] h-[524px] rounded-xl flex flex-col items-center border p-5 overflow-hidden ">
      <div className="jc-top h-[115px] w-[115px] rounded-full border-2 border-jobsborder flex justify-center relative">
        <Link
          className=""
          href={`https://hidoctor.health/online/${item?.joblink}/${item.namelink}`}
        >
          <Image
            className="flex rounded-full"
            src={getRandomImage().url}
            width={111}
            height={111}
            alt="Gul Colak"
          />
        </Link>
        <div className="greendot w-5 h-5 rounded-full bg-jobsborder border-4 border-white absolute top-2 right-1" />
      </div>
      <span
        className="online w-[78px] h-[24px] -mt-[12px] text-jobsborder relative border border-jobsborder bg-ajobbg rounded-full
     text-[0.75rem] flex justify-center text-center  "
      >
        {(item.online === true && "Çevrimiçi") || "Çevrimdışı"}
      </span>
      <StarIcon/>
      <Link
        className="user-profile font-bold text-lg"
        href={`https://hidoctor.health/online/${item?.joblink}/${item.namelink}`}
      >
        {item.name}
      </Link>
      <span className="profession text-[12px] mt-2">{item.title}</span>
      <div className="flex items-center gap-2 text-[12px] mt-3 ">
        {svg[2].session}
        <span className="video">{item.sessions}</span>
       {svg[2].call}
        <span className="call">{item.rating}</span>
      {svg[2].language}
        <span className="nation ">{item.language}</span>
      </div>
      <div className="specialitis w-[305px] h-[98px] p-2 mb-8 font-semibold  relative flex flex-wrap justify-center gap-1 ">
        {item.specialties.map((product) => (
          <SpecialitisCard product={product} />
        ))}
      </div>
      <span className="flex items-center text-center border-b pb-4 font-semibold border-black ">
        Eğitim ve Sertifikaları Gör{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4 stroke-2 text-themeBlack"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </span>
      <span className="mt-3 text-[14px]">
        ₺{item.fee} <span>(Minimum Tutar)</span>{" "}
      </span>
      <Link
        className="w-[256px] h-[32px] bg-jobsborder text-[0.75rem] text-white p-2 rounded-full flex items-center justify-center mt-5 "
        href={`https://hidoctor.health/online/${item?.joblink}/${item.namelink}`}
      >
        Hemen Başla
      </Link>
    </div>
  );
};

export default JobsCard;
