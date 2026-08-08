import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
    const { title, createdAt } = blog;
    const BlogDate = new Date(createdAt);

    const { axios, fetchblogs } = useAppContext();

    const deleteBlog = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (!confirmDelete) return;
        try {
            const { data } = await axios.post('/api/blog/delete', { id: blog._id });
            if (data.success) {
                toast.success(data.message);
                if (fetchBlogs) fetchBlogs();
                if (fetchblogs) fetchblogs();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const togglePublish = async () => {
        try {
            const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id });
            if (data.success) {
                toast.success(data.message);
                if (fetchBlogs) fetchBlogs();
                if (fetchblogs) fetchblogs();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };


    return (
        <tr className='border-y border-gray-300'>
            <th className='px-2 px-4'>{index}</th>
            <td className='px-2 px-4'>{title}</td>
            <td className='px-2 px-4 max-sm:hidden'>{BlogDate.toLocaleDateString()}</td>
            <td className='px-2 px-4 max-sm:hidden'>
                <p className={`${blog.isPublished ? 'text-green-500' : 'text-red-500'}`}>
                    {blog.isPublished ? 'Published' : 'Unpublished'}
                </p>
            </td>
            <td className='px-2 py-4 flex text-xs gap-3'>
                <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer hover:bg-gray-100 transition'>
                    {blog.isPublished ? 'Unpublish' : 'Publish'}
                </button>
                <img onClick={deleteBlog} src={assets.cross_icon} className='w-8 hover:scale-110 transition-all cursor-pointer' alt="" />
            </td>
        </tr>
    );
};

export default BlogTableItem;