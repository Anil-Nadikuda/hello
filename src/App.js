import React from "react";

import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import Section from "./Section";
import Content from "./Content";
import Footersec from "./Components/Footersec";

const App=()=>{

    return(
        <div><Nav />
        <AboutMe/>
        {
            Content.map((value)=>(
                <Section title={value.title} des={value.des} />
            ))
        }
        <Footersec />
        
        </div>

    ) 
}
export default App;