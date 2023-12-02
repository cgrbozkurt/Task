import Head from "next/head";
import Home from "./homea";
import Howtouse from "./howtouse";
import About from "./about";
import GetSupport from "./getsupport";
import Psychologists from "./therapists";
import Sss from "./faq";
import Footer from "@/components/Footer";

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
      <Sss/>
      <Footer />

      
    </div>
  );
}
