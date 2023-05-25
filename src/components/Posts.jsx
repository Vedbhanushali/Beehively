import React from 'react';
import { Outlet,useParams  } from 'react-router-dom';
import Shimmer from './Shimmer';
import useComments from '../../utils/useComments';
import {filterComments} from '../../utils/helper';


const Comments = () => {
  //fetching posts
  const {post_id} = useParams();
  console.log(post_id);
  const commentData = useComments(post_id);
  return (!commentData) ? <Shimmer />:
        (
          <>
          <h1> comments on post ID {post_id}</h1>
          <div className="user-list">
              { 
                
                commentData?.length == 0 ? (<h1>Invalid Post Id</h1>) : filterComments(post_id,commentData).map(({name,email,body}) => {
                  return( 
                    
                        <div className='card'>
                            <h2>{name}</h2>
                            <h3>{email}</h3>
                            <h3>{body}</h3>
                        </div>
                    
                    )
                  })
              }
          </div>
          </>
        );
};
export default Comments;

