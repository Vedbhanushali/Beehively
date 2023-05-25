import {useState,useEffect} from 'react';
import {JSON_API} from '../src/constants';

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