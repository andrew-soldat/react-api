import React, { useState } from 'react';
import Button from './UI/Buttons/Button';
import Input from './UI/Inputs/Input';

function PostForm({createPost}) {
	const [post, setPost] = useState({title: '', body: ''});
	
	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
         ...post,
			id: Date.now()
      };
		if(post.title && post.body) {
			createPost(newPost);
			setPost({title: '', body: ''});
		}
   };

   return (
			<form> 
				<Input
					onChange={(e) => setPost({...post, title: e.target.value})}
					value={post.title}
					placeholder="Enter title"
					type="text"
				/>
				<Input
					onChange={(e) => setPost({...post, body: e.target.value})}
					value={post.body}
					placeholder="Enter body"
					type="text"
				/>
				<Button onClick={addNewPost} type="submit">
					Submit
				</Button>
			</form>
   );
}

export default PostForm;
