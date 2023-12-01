import Image from "next/image";
import Link from "next/link";
import React from "react";
import SpecialitisCard from "./SpecialitisCard";

const JobsCard = ({item}) => {
  return (
    <div className="jobs-card w-[338px] h-[524px] rounded-xl flex flex-col items-center border p-5 ">
      <div className="jc-top h-[115px] w-[115px] rounded-full border-2 border-jobsborder flex justify-center relative">
        <Link className="" href={`https://hidoctor.health/online/psikolog/${item.namelink}`}>
          <Image
            className="flex rounded-full"
            src={"https://i.pravatar.cc/300"}
            width={111}
            height={111}
            alt="Gul Colak"
          />
        </Link>
        <div className="greendot w-5 h-5 rounded-full bg-jobsborder border-4 border-white absolute top-2 right-1"/>
      </div>
      <span
        className="online w-[78px] h-[24px] -mt-[12px] text-jobsborder relative border border-jobsborder bg-ajobbg rounded-full
     text-[0.75rem] flex justify-center text-center  "
      >
        {item.online===true && "Çevrimiçi"|| "Çevrimdışı" }
      </span>
      <div className="svg flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#52b69a"
          aria-hidden="true"
          class="h-5 w-5 text-secondary-500"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#52b69a"
          aria-hidden="true"
          class="h-5 w-5 text-secondary-500"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#52b69a"
          aria-hidden="true"
          class="h-5 w-5 text-secondary-500"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#52b69a"
          aria-hidden="true"
          class="h-5 w-5 text-secondary-500"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#52b69a"
          aria-hidden="true"
          class="h-5 w-5 text-secondary-500"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <Link
        className="user-profile font-bold text-lg"
        href={`https://hidoctor.health/online/psikolog/${item.namelink}`}
      >
{item.name}
      </Link>
      <span className="profession text-[12px] mt-2">{item.title}</span>
      <div className="flex items-center gap-2 text-[12px] mt-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="h-5 w-5 stroke-1 text-primary-500"
        >
          <path
            stroke-linecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          ></path>
        </svg>
        <span className="video">{item.session}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 stroke-1 text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
      <span className="call">{item.rating}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 stroke-1 text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
     <span className="nation ">{item.language}</span>
      </div>
      <div className="specialitis w-[305px]  h-[96px] relative flex flex-wrap justify-center gap-2 "> 
{item.specialties.map((product)=>
       <SpecialitisCard product={product} />

)}      
       </div>
      <span className="flex items-center text-center border-b pb-4 font-semibold border-black ">Eğitim ve Sertifikaları Gör <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 stroke-2 text-themeBlack"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></span>
<span className="mt-3 text-[14px]">₺{item.fee} <span>(Minimum Tutar)</span> </span>
<Link className="w-[256px] h-[32px] bg-jobsborder rounded-full flex items-center justify-center mt-5 " href={`https://hidoctor.health/online/psikolog/${item.namelink}`}>Hemen Başla</Link>
    </div>
  );
};

export default JobsCard;
