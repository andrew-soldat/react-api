import React from 'react'
import ItemPhoto from './ItemPhoto';

const ListPhotos = ({photos}) => {

	if (!photos.length) {
		return <h1 className="title">No photos found</h1>
	}

	return (
		<div className="photos__wrapper">
			{photos.map((photo) => (
				<ItemPhoto key={photo.id} photo={photo} />	
			))}
		</div>
   )
}

export default ListPhotos;