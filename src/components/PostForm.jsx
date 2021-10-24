import React, { useState } from 'react';
import Button from './UI/Buttons/Button';
import Input from './UI/Inputs/Input';

function PostForm({createPost}) {
	const [post, setPost] = useState({title: '', description: ''});
	
	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
         ...post,
			id: Date.now()
      };
      createPost(newPost);
		setPost({title: '', description: ''});
   };

   return (
			<form>
				<Input
					onChange={(e) => setPost({...post, title: e.target.value})}
					value={post.title}
					placeholder="Enter title"
					type="text"
				></Input>
				<Input
					onChange={(e) => setPost({...post, description: e.target.value})}
					value={post.description}
					placeholder="Enter description"
					type="text"
				></Input>
				{/* <input
					onChange={(e) => setPosts(e.target.description)}
					placeholder="Enter text"
					type="text"
					value={f}
				/>
				<input
					onChange={(e) => setPosts(e.target.body)}
					placeholder="Enter text"
					type="text"
					value={f}
				/> */}
				<Button onClick={addNewPost} type="submit">
					Submit
				</Button>
			</form>
   );
}

export default PostForm;
