import { useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'

const Comments = () => {
  const [comments, setComments] = useState(comments_data)
  const [filter, setFilter] = useState('Not Approved')

  const approveComment = (id) => {
    setComments((currentComments) =>
      currentComments.map((comment) =>
        comment._id === id ? { ...comment, isApproved: true } : comment,
      ),
    )
  }

  const deleteComment = (id) => {
    setComments((currentComments) =>
      currentComments.filter((comment) => comment._id !== id),
    )
  }
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50 ' >
      <div className='flex justify-between items-center max-w-3xl mb-5'>
        <h1>Comments</h1>
        <div className='flex gap-4 items-center'>
          <button onClick={() => setFilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved' ? 'text-primary': 'text-gray-700'}`}> Approved</button>

           <button onClick={() => setFilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved' ? 'text-primary': 'text-gray-700'}`}> Not Approved</button>

        </div>
      </div>
     <div className='relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
     <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th scope="col" className='px-6 py-3'>
            Comment
          </th>
          <th scope="col" className='px-6 py-3 max-sm:hidden'>
            Date
          </th>
          <th scope="col" className='px-6 py-3'>
            Action
          </th>
          
        </tr>
      </thead>
      <tbody>
        {comments
          .filter((comment) => filter === 'Approved' ? comment.isApproved : !comment.isApproved)
          .map((comment) => (
            <CommentTableItem
              key={comment._id}
              comment={comment}
              onApprove={approveComment}
              onDelete={deleteComment}
            />
          ))}
      </tbody>
     </table>

     </div>
    </div>
   
  )
}

export default Comments
