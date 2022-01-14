import { useMemo } from 'react';

export const useSortedPosts = (posts, methodSort) => {
	const sortedPosts = useMemo(() => {
		if (methodSort) {
			return [...posts].sort((a, b) => a[methodSort].localeCompare(b[methodSort]))
		}
		return posts
	}, [methodSort, posts])
	return sortedPosts
}

export const usePosts = (posts, methodSort, methodQuery) => {
	const sortedPosts = useSortedPosts(posts, methodSort)

	const sortedAndSearchedPost = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(methodQuery.toLowerCase()))
	}, [methodQuery, sortedPosts])

	return sortedAndSearchedPost
}