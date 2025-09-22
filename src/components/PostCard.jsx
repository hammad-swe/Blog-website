import React from 'react'
import apwriteService from '../appwrite/config'
import {Link, link} from 'react-router-dom' 

function PostCard({$id, title, featuredImage, }) {

  return (
   <Link to={`/post/${$id}`}>
   <div className='w-full bg-gray-300 rounded-lg p-4'>
    <div className='w-full justify-center mb-4'>
<img src={apwriteService.getFilePreview(featuredImage.$id)} alt={title} className='w-full h-48 object-cover rounded-lg'/>
    </div>
    <h1 className='text-2xl font-bold text-gray-800'>
{title}
    </h1>
   </div>

   </Link>
  )
}

export default PostCard