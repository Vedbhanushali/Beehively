import {useState,useEffect} from 'react';
import {JSON_API} from '../src/constants';
//creating Hooks
// this will fetch the data and send it to component for render in RestaurantMenu
//Hooks returns some data - it doesn't return jsx.

const userPosts = (user_id) => {
    const [userPost,setUserPost] = useState(null); 

    useEffect(() => {
        getUserPost();
    },[]);

    async function getUserPost(){
        // console.log(JSON_API);
        const data = await fetch(JSON_API+"/posts")
        .then((res) => res.json())
        .then((data) => setUserPost(data))
        .catch((err) =>{
            console.log(err);
        })
    }
    return userPost;
};

export default userPosts;