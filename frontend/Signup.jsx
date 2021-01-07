import React,{useState} from "react";
import axios from "axios";
import { Component } from "react";


function Signup(){
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobileNo,setMobileNo] = useState("")
    const [location,setLocation] = useState("")

    const signup = () =>{
        const form ={
            name:name,
            age:age,
            email:email,
             password:password,
             mobileNo:mobileNo,
             location:location
        
        }
        console.log(form)
        axios.post('/api/signup' , form)
        .then(success => {
            console.log({success})
            // alertify.success(success.data.message)
            
            // this.props.history.push('/')
            // history.push('/')
        }).catch(error=> {
            console.log({error})
            // alertify.error(error.response.data.message)

        })
    }
    return(
        <React.Fragment>
            
         <div className="top">  
         <h1 className="head">
            Register Yourself!! 💻    
        </h1>
        </div> 
        
        
           <div className="signup">
            <div>
                <label for="name">Name</label>
                <div>
               <input type="textbox" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name"></input>
               </div>
               <label for="age">Age</label>
               <div>
               <input type="number" id="age"  value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter your Age"></input>
               </div>
               <label for="email">Email</label>
               <div>
               <input type="emai" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email Address"></input>
               </div>
               <label for="pd">Password</label>
               <div>
               <input type="password" id="pd" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></input>
               </div>
               <label for="pwd">Confirm Password</label>
               <div>
               <input type="password" id="pwd"  placeholder="Enter Password"></input>
               </div>
               <label for="m">Mobile Number</label>
               <div>
               <input type="number" id="m" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} placeholder="Enter your Phone Number"></input>
               </div>
            
               <label for="I">Location</label>
               <div>
               <input type="textbox" id="I" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Enter your Locality"></input>
               </div>
               <div>
               <button onClick={(e)=>signup()}>Submit</button>
               </div>
            </div>
            </div>

            <marquee direction="right"><h1><strong>Hurry up Join Now!! 😃 </strong></h1></marquee>

        
            
                {/* {
                arr.length?
                arr.map(val=><div>{arr.body}</div>):null
                }
                {
                    error ? <div>{error}</div>:null
                } */}
            
        </React.Fragment>
    );
}

export default Signup;