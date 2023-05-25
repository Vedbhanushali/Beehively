import { useState,useEffect } from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";
// import userData from "../../utils/userData";
import {JSON_API} from '../constants';
import UserDeconstructor from "./UserDeconstructor";

const Body = () => {
  // const [allData,setAllData] = userData();
  // const [filteredData,setFilteredData] = userData();
  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
      getUserData();
  },[]);

  async function getUserData(){
      // console.log(JSON_API);
      const data = await fetch(JSON_API+"/users")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data)
        setFilteredData(data);
      })
      .catch((err) =>{
          console.log(err);
      })
  }


  if(!useOnline()){
    return <h1>Please check your internet connection</h1>
  }

    return (!allData) ? <Shimmer />:
        (
          <>
          <h1>User dashboard</h1>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="search" 
              value={searchText}
              onChange = {(e)=>{
                setSearchText(e.target.value);
              }}
            />
            <button 
              className="search-btn"
              onClick={()=>{
                const data = filterData(searchText,allData);
                setFilteredData(data);
              }}
            >search</button>
          </div>
          <div className="user-list">
              { 
                
                filteredData?.length == 0 ? (<h1>No user found</h1>) : filteredData.map((user) => {
                  return( 
                    <Link 
                      to={"/user_details/" + user.id}
                      key={user.id}
                    >
                    <UserDeconstructor {...user}/>
                    </Link>)
                  })
              }
          </div>
          </>
      );
};

export default Body;