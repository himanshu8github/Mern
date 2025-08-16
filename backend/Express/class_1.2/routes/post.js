import express from 'express';
const router = express.Router();

let posts = [
    { id: 1, name: 'john' },
    { id: 2, name: 'harshi' },
    { id: 3, name: 'radhika' },
    { id: 4, name: 'himansi' },
];

// const logger = (req, res, next) => {
//     console.log('Logger ran:', req.method, req.originalUrl);

//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

router.get('/:id',  (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
       const error = new Error(`A post with id ${id} is not found.` )
       error.status=404;
       return next(error);
    }
    res.status(200).json(post);
});


// GET post by id
// router.get('/:id',  (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find(p => p.id === id);

//     if (!post) {
//         return res.status(404).json({ message: `A post with id ${id} is not found.` });
//     }
//     res.status(200).json(post);
// });

// POST create new post
router.post('/postsroute', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        return res.status(400).json({ message: 'Please include a title' });
    }

    posts.push(newPost);
    res.status(201).json(posts);
});

// PUT update post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ msg: `A post with id ${id} not found` });
    }

    // update only fields provided
    post.title = req.body.title || post.title;
    res.status(200).json(posts);
});

// DELETE post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    //Find if the post exists ot not
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ msg: `A post with id ${id} not found` });
    }

    //Filter out the deleted post => Array.filter() returns a new array containing only the posts whose id is NOT equal to the one we want to delete.
    posts = posts.filter(p => p.id !== id);
    res.status(200).json(posts);
});

export default router;
