import React, { useState, useEffect } from 'react';
import ListPhotos from '../ListPhotos';
import PhotoFilter from '../PhotoFilter';
import { usePosts } from '../../hooks/usePosts';
import PostService from '../../API/api'
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPagesCount } from '../../utils/pages';
import Pagination from '../UI/Pagination/Pagination';


function Photos() {
   const [photos, setPhotos] = useState([])
	const [filter, setFilter] = useState({query: '', sort: ''})
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(4)
	const [currentPage, setCurrentPages] = useState(1)
	const sortedAndSearchedPost = usePosts(photos, filter.sort, filter.query)

	const [fetchPhotos, isPhotosLoding, photosError] = useFetching(async () => {
		const response = await PostService.getAllPhotos(limit, currentPage)
		setPhotos(response.data)
		
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
		
	})
	
	const changeCurrentPages = (number) => {
		setCurrentPages(number)
	}

	useEffect(() => {
		fetchPhotos(limit, currentPage)
	}, [currentPage, limit])


   return (
      <div className="photos">
         <div className="container">
				{photosError && <h1 className="title">{photosError}</h1>}
				<PhotoFilter filter={filter} setFilter={setFilter} setLimit={setLimit} limit={limit} setCurrentPages={setCurrentPages} />
				{isPhotosLoding ? <Loader /> : <ListPhotos photos={sortedAndSearchedPost} />}
				<Pagination 
					changeCurrentPages={changeCurrentPages}
					totalPages={totalPages}
					currentPage={currentPage}
				/>
         </div>
      </div>
   );
}

export default Photos;
