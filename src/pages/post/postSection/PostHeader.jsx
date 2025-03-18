import React from 'react'
import PostCreators from './PostCreators'

const PostHeader = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Explore posts</h2>
      <PostCreators/>
    </>
  )
}

export default PostHeader
