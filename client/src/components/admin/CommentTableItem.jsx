import { assets } from '../../assets/assets'

const CommentTableItem = ({ comment, onApprove, onDelete }) => {

    const{blog,createdAt,_id} = comment;
    const BlogDate= new Date(createdAt);
  return (
    <tr className='border-y border-gray-300'>
        <td className='px-2 px-4'>
            <b className='font-medium text-gray-600'>Blog</b>:{blog.title}
            <br/>
            <br/>
            <b className='font-medium text-gray-600'>Name</b>: {comment.name}
            <br/>
            <b className='font-medium text-gray-600'>Comment</b>: {comment.content}
        </td>
        <td className='px-2 px-4 max-sm:hidden'>
          {BlogDate.toLocaleDateString()}  
        </td>
        <td className='px-2 px-4'>
       <div className='inline-flex items-center gap-4'> 
        {!comment.isApproved ? 
        <button type='button' onClick={() => onApprove(_id)} aria-label='Approve comment'>
          <img src={assets.tick_icon} alt="Approve" className='w-8 hover:scale-110 transition-all cursor-pointer'/>
        </button>: <p className=' text-xs border border-green-600 rounded-full px-2 py-0.5 text-green-500'>Approved</p>}
        <button type='button' onClick={() => onDelete(_id)} aria-label='Delete comment'>
          <img src={assets.bin_icon} alt="Delete" className='w-8 hover:scale-110 transition-all cursor-pointer'/>
        </button>
       </div>
        </td>
    </tr>
  )
}

export default CommentTableItem
