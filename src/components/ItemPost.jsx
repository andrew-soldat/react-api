import React from 'react'
import { useHistory } from 'react-router';
import ButtonPost from './UI/Buttons/ButtonPost';

const ItemPost = ({removePost, ...props}) => {
	let router = useHistory();
	
	return (
      <div className="post">
         <div className="post__content">
            <div className="post__title">
               {props.post.id}. {props.post.title}
            </div>
            <div className="post__description">{props.post.body}</div>
         </div>
         <div className="post__btns">
			<ButtonPost onClick={() => router.push(`/posts/${props.post.id}`) }>
				Open
			</ButtonPost>
			<ButtonPost onClick={() => removePost(props.post)}>
				Delete
			</ButtonPost>
         </div>
      </div>
   );
}

export default ItemPost