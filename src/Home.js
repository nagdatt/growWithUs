import React from "react";
import austronant from './images/astronaut1.svg'
import SimpleForm from "./SimpleForm";
function Home() {
  return (
   <SimpleForm
   name="Grow your business with"
   brandName="@Nagdatt"
   btn="Get Started"
   img={austronant}
   info={"We are the who create new modern websites using latest technology stack"}
    visit={"/Services"}

   
   
   />
  );
}

export default Home;
