import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import PostService from '../../API/api'
import { useFetching } from '../../hooks/useFetching'
import Loader from '../UI/Loader/Loader';

function PostIdPage() {
	let params = useParams();
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])

	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})
	const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id) => {
		const response = await PostService.getCommentsById(params.id)
		setComments(response.data)
	})
	useEffect(() => {
		fetchPostById(params.id)
		fetchCommentsById(params.id)
	}, [])


   return (
      <div className="item-post">
      	<div className="container">
				{error && <h1 className="title">{error}</h1>}
				{isLoading
					? <Loader />
					: <div className="item-post__body">
					    	<h1 className="item-post__title">{post.title}</h1>
							<div className="item-post__desc">{post.body}</div>
						</div>
				}
				<div className="comment">
					<div className="comment__title">Comments</div>
					{isCommentsLoading
						? <Loader />
						: comments.map((comment) => 
							<div className="item-comment">
								<div className="item-comment__email">{comment.email}</div>
								<div className="item-comment__text">{comment.body}</div>
							</div>
						)
					}
				</div>
      	</div>
      </div>
   );
}

export default PostIdPage;
