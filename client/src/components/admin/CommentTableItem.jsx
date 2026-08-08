import { assets } from '../../assets/assets'

const CommentTableItem = ({ comment, onApprove, onDelete }) => {
    const { blog, createdAt, _id } = comment;
    const BlogDate = new Date(createdAt);

    return (
        <tr className='border-y border-gray-300'>
            <td className='px-4 py-4'>
                <b className='font-medium text-gray-700'>Blog: </b>{blog?.title || 'N/A'}
                <br />
                <b className='font-medium text-gray-700'>Name: </b>{comment.name}
                <br />
                <b className='font-medium text-gray-700'>Comment: </b>{comment.content}
            </td>
            <td className='px-4 py-4 max-sm:hidden whitespace-nowrap text-slate-500'>
                {BlogDate.toLocaleDateString()}
            </td>
            <td className='px-4 py-4'>
                <div className='inline-flex items-center gap-3'>
                    {!comment.isApproved ? (
                        <button type='button' onClick={() => onApprove(_id)} title='Approve comment' className='cursor-pointer'>
                            <img src={assets.tick_icon} alt="Approve" className='w-8 hover:scale-110 transition-all' />
                        </button>
                    ) : (
                        <button
                            type='button'
                            onClick={() => onApprove(_id)}
                            title='Click to Unapprove'
                            className='text-xs border border-green-600 rounded-full px-3 py-1 text-green-600 hover:bg-red-50 hover:border-red-500 hover:text-red-500 transition cursor-pointer font-medium'
                        >
                            Approved
                        </button>
                    )}
                    <button type='button' onClick={() => onDelete(_id)} title='Delete comment' className='cursor-pointer'>
                        <img src={assets.bin_icon} alt="Delete" className='w-8 hover:scale-110 transition-all' />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default CommentTableItem;
