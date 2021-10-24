import React, { useState } from 'react';
import './App.css';
import ListPosts from './components/ListPosts';
import PostForm from './components/PostForm';

function App() {
   const [posts, setPosts] = useState([
			{id: 1, title: 'Football', description: 'Note that the development build is not optimized.'},
			{id: 2, title: 'Bascetball', description: 'Note that the development build is not optimized.'},
			{id: 3, title: 'Valleyball', description: 'Note that the development build is not optimized.'}
      ])
	
	const createPost = (post) => {
      setPosts([...posts, post]);
   };

   return (
      <div className="wrapper">
         <header className="header">
            <div className="header__body"></div>
         </header>
         <div className="page">
            <PostForm createPost={createPost} />
            <ListPosts posts={posts} title={'List Posts'} />
         </div>
      </div>
   );
}

export default App;
