import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import api from '../utils/api';

const PostListPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Posts</h1>
            <PostList posts={posts} />
        </div>
    );
};

export default PostListPage;
