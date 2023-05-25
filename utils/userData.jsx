import {useState,useEffect} from 'react';
import {JSON_API} from '../src/constants';
//creating Hooks
// this will fetch the data and send it to component for render in RestaurantMenu
//Hooks returns some data - it doesn't return jsx.

const userData = () => {
    const [users,setUsers] = useState(null); 

    useEffect(() => {
        getUserData();
    },[]);

    async function getUserData(){
        // console.log(JSON_API);
        const data = await fetch(JSON_API+"/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) =>{
            console.log(err);
        })
    }
    return [users,setUsers];
};

export default userData;