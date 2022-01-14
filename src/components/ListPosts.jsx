import React from 'react'
import ItemPost from './ItemPost';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListPosts = ({posts, title, removePost}) => {

	if (!posts.length) {
		return <h1 className="title">No posts found</h1>
	}

	return (
		<div>
			<div className="title">{title}</div>
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
						<ItemPost removePost={removePost} post={post} />
					</CSSTransition>	
				))}
			</TransitionGroup>
		</div>
   )
}

export default ListPosts;