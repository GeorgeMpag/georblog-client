import {  useState } from "react";

import {  useHistory } from "react-router-dom"

const Login = () => {
    
    const [uname, setUname]=useState('')
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')
    const [rpass, setRPass]=useState('')
    const history=useHistory();
    const handleSubmit=(e)=>{
    e.preventDefault();
    const abortCont=new AbortController();
    
    if (pass===rpass){
        const user ={uname, email, pass};
        fetch('https://geor-blog-backend.herokuapp.com/adduser', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user),
        signal: abortCont.signal
            
        }).then(()=>{
                
            console.log("new user added");
            
            history.push('/');
            
        }).catch(err=>{
            console.log(err)
            console.log('error')
        })
    }else{
        console.log ("Password validation not correct")
    }
    }

    return ( 
        <div className="login-page">
            <h1>georBlog</h1>  
            <form onSubmit={handleSubmit}>
                <label htmlFor="uname">User Name</label>
                <input type="text" id="name" name="uname" required
                value={uname}
                onChange={(e)=>setUname(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="pass">Password</label>
                <input type="password"id="pass" name="pass" required
                value={pass}
                onChange={(e)=>setPass(e.target.value)}/>
                <label htmlFor="rpass">Repeat Password</label>
                <input type="password" id="rpass" name="rpass" required
                value={rpass}
                onChange={(e)=>setRPass(e.target.value)}/>
                <button>Sign up</button>
            </form>
        </div>
     );
}
 
export default Login;