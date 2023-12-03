import Head from "next/head";
import Home from "./home";
import Howtouse from "./howtouse";


export default function Index() {
    
  
  return (
    <div className="w-full">
      <Head>
        <title>home</title>
        <meta />
     
      </Head>
      <Home/>
      <Howtouse/>

      
      

      
    </div>
  );
}
