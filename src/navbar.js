
import {Link} from 'react-router-dom';

const Navbar = () => {
    //const isAuth=props.isAuth

    // useEffect(() => {
        
    //     if (sessionStorage.getItem('user') !== null){
    //         setIsauth(true)
            
    //      }else{
    //         setIsauth(false) 
    //      }
         
    //  })
    const handleLogout=()=>{
        sessionStorage.removeItem('user')
        window.location.reload()
    }
    let visitor=false
    const user_id= JSON.parse(sessionStorage.getItem('user')).id     
    const authorName= JSON.parse(sessionStorage.getItem('user')).user_name    
    if (user_id<0)
        visitor=true

    return ( 
       
            
            <nav className="navbar"> 
            <h1>georBlog</h1>
           
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/userProfile">{authorName}</Link>
                {visitor && <button onClick={handleLogout}> Go to login page</button>}
               {/* {!isAuth && <Link to ="/login">  Login </Link>}
               {isAuth && <a href="">tets</a>} */}
               
              
            </div>
        </nav>
     
     );   
            
        //setIsauth(JSON.parse(localStorage.getItem('isAuth') ))
    
   
    //console.log(isAuth)
    // const [user, setUser]= useState({id:null,userName:null})
    // if (isAuth){
    //     console.log('yesss')
    //      //setUser(JSON.parse(localStorage.getItem('user')));
    // }
    // const user=  JSON.parse(localStorage.getItem('user'))
    // console.log(user)
  
}
 
export default Navbar;