import React from 'react'
import SimpleForm from "./SimpleForm";
import contact from "./images/blogging.svg"
function About() {
    return (
        <SimpleForm
        name="Connect with us on"
        brandName="@Caller_tune"
        btn="Contact Now"
        img={contact}
        info={"Satisfaction is a rating. Loyalty is a brand"}
         visit={"/Contact"}
     
        
        
        />
    )
}

export default About
