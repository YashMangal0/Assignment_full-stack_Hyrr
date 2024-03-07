exports.getPosts = async (req, res) => {
    try {
        // Fetch posts from database
        const posts = await Post.find().lean();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error in getPosts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
