import React from 'react'
import ItemPost from './ItemPost';

const ListPosts = ({posts, title}) => {

	return (
      <div>
         <div className="title">{title}</div>
         <div>
            {posts.map((post, index) => (
               <ItemPost number={index + 1} post={post} key={post.id} />
            ))}
         </div>
      </div>
   );
}

export default ListPosts;