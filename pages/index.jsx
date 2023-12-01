import Head from "next/head";
import Home from "./homea";
import Howtouse from "./howtouse";
import About from "./about";
import GetSupport from "./getsupport";
import Psychologists from "./psychologists";

export default function Index() {
    
  return (
    <div className="">
      <Head>
        <title>home</title>
        <meta />
     
      </Head>
      <Home/>
      <About/>
      <GetSupport/>
      <Psychologists/>
      
    </div>
  );
}
