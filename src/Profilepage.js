import Address from 'ipaddr.js';
import  BlogList from './BlogList';
import useFetch from './usefetch';

const ProfilePage = () => {
    const authorName= JSON.parse(sessionStorage.getItem('user')).user_name
    const user_id= JSON.parse(sessionStorage.getItem('user')).id
    const {data: blogs, isPending, error}=useFetch('http://localhost:3001/user/'+user_id);
    //const {data: userInfo,infoPending, infoerror}=useFetch('http://localhost:3001/userinfo/'+user_id);
    const usermail=JSON.parse(sessionStorage.getItem('user')).email
    const signDate=JSON.parse(sessionStorage.getItem('user')).sing_date
    const handleLogout=()=>{
        sessionStorage.removeItem('user')
        window.location.reload()
    }

    var sdate = new Date(signDate);
     var day = sdate.getDate();
     var month = sdate.getMonth();
     var year = sdate.getFullYear();

    
    return ( 
    <div className="profile">
            <div className="profileInfo">
                {/* <h4>avatar image</h4> */}
                <h4>User Name :</h4>
                <p>{authorName}</p>
                <h4>Email:</h4>
                <p>{usermail}</p>
                <h4>Member Since:</h4>
                <p>{day}/{month}/{year}</p>
                <h4>Total posts:</h4>
                <p>{!isPending && blogs.length}</p>

                <button onClick={handleLogout}> Logout</button>
            </div> 

            <div className="userPosts">
            {error && <div>{ error }</div> }
            { isPending && <div> Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="Your posts" />}
            </div>
    </div>

    
    );
}
 
export default ProfilePage;