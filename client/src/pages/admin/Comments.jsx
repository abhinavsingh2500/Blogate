import { useEffect, useState } from 'react'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')
  const { axios } = useAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin/comments');
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const approveComment = async (id) => {
    try {
      const { data } = await axios.post('/api/admin/approve-comment', { id });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const deleteComment = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
    if (!confirmDelete) return;
    try {
      const { data } = await axios.post('/api/admin/delete-comment', { id });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className='flex-1 bg-[#fcfaf5] p-5 md:p-10' >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-primary-700'>Community</p>
            <h1 className='mt-1 text-3xl font-semibold text-slate-800'>Reader comments</h1>
          </div>
          <div className='flex rounded-xl border border-primary/20 bg-white p-1 shadow-sm'>
            <button onClick={() => setFilter('Approved')} className={`rounded-lg px-4 py-2 cursor-pointer text-xs font-medium transition ${filter === 'Approved' ? 'bg-primary text-slate-900' : 'text-slate-500 hover:bg-primary/10'}`}> Approved</button>
            <button onClick={() => setFilter('Not Approved')} className={`rounded-lg px-4 py-2 cursor-pointer text-xs font-medium transition ${filter === 'Not Approved' ? 'bg-primary text-slate-900' : 'text-slate-500 hover:bg-primary/10'}`}> Pending</button>
          </div>
        </div>
        <div className='relative overflow-x-auto rounded-2xl border border-primary/15 bg-white shadow-sm scrollbar-hide'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='bg-slate-800 text-xs uppercase tracking-wider text-slate-200'>
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
    </div>
  )
}

export default Comments

