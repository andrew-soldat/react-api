import React from 'react'

const ItemPost = (props) => {


	return (
      <div className="post">
         <div className="post__content">
            <div className="post__title">
               {props.number}. {props.post.title}
            </div>
            <div className="post__description">{props.post.description}</div>
         </div>
         <div className="post__btns">
            <button className="post__btn">Remote</button>
         </div>
      </div>
   );
}

export default ItemPost