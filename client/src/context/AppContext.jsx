import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [blog, setBlog] = useState([]);
    const [input, setInput] = useState("");

    const fetchblogs = async () => {
        try {
            const { data } = await axios.get('/api/blog/all');
            if (data.success) {
                setBlog(data.blogs);
            }
        } catch (err) {
            console.error("Failed to fetch blogs:", err.message);
        }
    };


    useEffect(() => {
        fetchblogs();
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            axios.defaults.headers.common['Authorization'] = storedToken;
        }
    }, []);

    const value = {
        axios, navigate, token, setToken, blog, setBlog, input, setInput, searchInput: input, setSearchInput: setInput
    };


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => { return useContext(AppContext); };
 
