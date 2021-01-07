import React from "react";

const Welcome=()=>
{
    return(
        <React.Fragment>
            <div>
                <h1 className="head2">
               Welcome to Deepanshi's Fitness
                </h1>
                <img className="imgs" src="https://tse3.mm.bing.net/th?id=OIP.mkoGTecmPCyXkV8IzhII8gHaF7&pid=Api&P=0&w=218&h=176" alt="Logo" ></img>
            </div>
            <div>
                 
                <div className="mark">
                <div className="txt">
         <marquee direction="right"><h1><strong>BUILD YOUR BODY STRONG </strong></h1></marquee>
         </div>
         <div className="txt1">
         <marquee direction="left"><h1><strong>EAT CLEAN. TRAIN MEAN. GET LEAN.</strong></h1></marquee>
         </div>
         </div>
         </div>

        </React.Fragment>
    );
}
export default Welcome;