import React, { useState, useEffect } from 'react';
import ListPosts from '../ListPosts';
import PostFilter from '../PostFilter';
import PostForm from '../PostForm';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Buttons/Button';
import { usePosts } from '../../hooks/usePosts';
import PostService from '../../API/api'
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPagesCount } from '../../utils/pages';
import Pagination from '../UI/Pagination/Pagination';


function Posts() {
   const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({query: '', sort: ''})
	const [openModal, setOpenModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(5)
	const [currentPage, setCurrentPages] = useState(1)
	const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostsLoding, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, currentPage)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
		
	})
	
	const changeCurrentPages = (number) => {
		setCurrentPages(number)
	}

	useEffect(() => {
		fetchPosts(limit, currentPage)
	}, [filter, currentPage, limit])

	const createPost = (post) => {
      setPosts([...posts, post])
		setOpenModal(false)
   };

	const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id));
   };

   return (
      <div className="posts">
         <div className="container">
				<div style={{marginBottom: 20}}>
					<Button onClick={() => setOpenModal(true)}>
						Add post
					</Button>
				</div>
				<Modal openModal={openModal} setOpenModal={setOpenModal} >
            	<PostForm createPost={createPost} />
				</Modal>
				<PostFilter filter={filter} setFilter={setFilter} setLimit={setLimit} limit={limit} setCurrentPages={setCurrentPages} />
				{postError && <h1 className="title">{postError}</h1>}
				{isPostsLoding ? <Loader /> : <ListPosts removePost={removePost} posts={sortedAndSearchedPost} />}
				<Pagination 
					changeCurrentPages={changeCurrentPages}
					totalPages={totalPages}
					currentPage={currentPage}
				/>
         </div>
      </div>
   );
}

export default Posts;
