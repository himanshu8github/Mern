import express from 'express';
const router = express.Router();

const posts =[
    {id:1, name: 'john'},
    {id:2, name: 'harshi'},
    {id:3, name: 'radhika'},
    {id:4, name: 'himansi'},

]

// router.get('/', (req, res) => {
//     console.log(req.query)
//     res.send(posts);
// })

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
        const post = posts.find(p => p.id === id);

    if(!post){
        res.status(400).json({message: `A post with id of ${id} is not found.`})
    }else{
        res.status(200).json(post);
    }
})

// router.get('/', (req, res) => {
//     // res.send('hello')
//     res.send({message : 'hello'})
// })

export default router;