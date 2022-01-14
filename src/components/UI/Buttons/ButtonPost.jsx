import React from 'react'

const ButtonPost = ({children, ...props}) => {
	return (
      <button {...props} className="post-button">
        {children}
      </button>
   );
}

export default ButtonPost;