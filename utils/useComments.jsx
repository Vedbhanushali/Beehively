import {useState,useEffect} from 'react';
import {JSON_API} from '../src/constants';


const userComments = (user_id) => {
    const [userComments,setUserComments] = useState(null); 

    useEffect(() => {
        getUserComments();
    },[]);

    async function getUserComments(){
        // console.log(JSON_API);
        const data = await fetch(JSON_API+"/comments")
        .then((res) => res.json())
        .then((data) => setUserComments(data))
        .catch((err) =>{
            console.log(err);
        })
    }
    return userComments;
};

export default userComments;