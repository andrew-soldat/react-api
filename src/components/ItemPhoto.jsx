import React from 'react'

const ItemPhoto = ({removePost, ...props}) => {
	
	return (
		<div className="photos__column">
			<div className="photo">
				<a href={props.photo.url} className="photo__img" target="_blank" rel="noopener noreferrer">
					<img src={props.photo.url} alt={props.photo.id} />
				</a>
				<div className="photo__content">
					<div className="post__title">{props.photo.title}</div>
				</div>
			</div>
      </div>
   );
}

export default ItemPhoto