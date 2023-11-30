import Head from "next/head";
import Home from "./homea";
import Howtouse from "./howtouse";
import About from "./about";

export default function Index() {
    
  return (
    <div className="">
      <Head>
        <title>home</title>
        <meta />
     
      </Head>
      <Home/>
      <About/>
      
    </div>
  );
}
