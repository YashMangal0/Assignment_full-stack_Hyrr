import React from 'react';

const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <div key={post._id} className="border p-4 mb-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-700">{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
