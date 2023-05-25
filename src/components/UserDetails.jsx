import React from 'react';
import { useParams,Link  } from 'react-router-dom';
import Shimmer from './Shimmer';
import userPosts from '../../utils/userPosts';
import {filterPosts} from '../../utils/helper';

const UserDetailsMain = () => {
  //fetching posts
  const {user_id} = useParams();
  console.log(user_id);
  const postData = userPosts(user_id);

  return (!postData) ? <Shimmer />:
        (
          <>
          <h1> User Posts of ID {user_id}</h1>
          <div className="user-list">
              { 
                
                postData?.length == 0 ? (<h1>Invalid User Id</h1>) : filterPosts(user_id,postData).map(({userId,id,title,body}) => {
                  return( 
                    <Link
                      to={"/posts/" + id}
                      key={id}
                    >
                    <div className='card'>
                      <h2>{userId}</h2>
                      <h3>{title}</h3>
                      <h3>{body}</h3>
                    </div>
                    </Link>
                    )
                  })
              }
          </div>
          </>
        );
};
export default UserDetailsMain;

