import {  useState } from "react";
import PropTypes from 'prop-types';
import { Link,  useHistory }from "react-router-dom"





export default function Login () {
    const [uname, setUname]=useState('')
    const [pass, setPass]=useState('')
    const [resMessage, setResMessage]=useState('')
    const history=useHistory()

    const handleVisitor=()=>{
        sessionStorage.setItem('user', JSON.stringify({id:-1}));
        window.location.reload();
        history.push('/')
    }
      



    const handleSubmit=(e)=>{
        e.preventDefault();
        const cred= {uname, pass}
        fetch('https://geor-blog-backend.herokuapp.com/login', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(cred),
        }).then((response)=>{
            const data=response.json()
            
            return data;
        }).then(responsedata=>{
            console.log(responsedata)
            if ((responsedata.id)){
                
                console.log("333")
               // setToken(responsedata)  
                sessionStorage.setItem('user', JSON.stringify(responsedata));
                window.location.reload()
            }else{
                setResMessage(responsedata.message)
               // console.log(responsedata.message)
            }
        }).then(()=>{
            
            history.push("/")
        })
    }
    return ( 
        <div className="login-page">
            <h1>georBlog</h1>  
            <div id="error-message">
                <h3>{resMessage}</h3>   
            </div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">User Name</label>
                <input type="text" required value={uname}
                onChange={(e)=>setUname(e.target.value)}/>
                
                <label htmlFor="">Password</label>
                <input type="password" required value={pass}
                onChange={(e)=>setPass(e.target.value)}/>
                <button>Login</button>
            </form>
            <div className="bot">
                <p>Not Singed up?? </p>
                <div id="sign-visitor">
                    <Link id="link" to="/signup"> Sign up</Link>
                    <button title='As a visitor you can only view the  other user posts'onClick={handleVisitor}>Continue as visitor</button>
                    
                </div>
                {/* <div id ="visitor-message">
                        <p >As a visitor you can only view the  other user posts</p>
                </div>  */}
                
            </div>
        </div>
     );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
//  export default Login();