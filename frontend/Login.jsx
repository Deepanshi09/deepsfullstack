import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import { Component } from "react";

function Login(){
    const history = useHistory();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

 const Login = ()=>
{

    const form ={
        email:email,
         password:password
}   

console.log(form)
        axios.post('/api/login' , form)
        .then(success => {
             console.log({success})
             history.push('http://localhost:3000/url')
        }).catch(error=> {
            console.log({error})
        })
    }

   
    return(
          <React.Fragment>
             <h1 className="head1">Sign In</h1>
                 <div className="log"> 
                <label for="inp">Email</label>
                <div>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" id="inp"></input>
                </div>

                <label for="psd">Password</label>
                <div>
            
                <input type="pwd" id="psd" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" ></input>
                
                </div>


                <div>
                    <h4><a href="https://www.fb.com">forgot password? 😕</a></h4>
                </div>
                
              
                <div className="btn">
                    <button onClick={(e)=>Login()}>Log in &nbsp;  &nbsp;  &nbsp; ➡️  </button>
                </div>
                </div>

                <div>
                    <h3>No Account?<span><a href="#">Create new account </a></span></h3>
                </div>
                 
               
        
        

          </React.Fragment>
    );
}
export default Login;