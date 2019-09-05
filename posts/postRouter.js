const express = 'express';

const Posts = require('../posts/postDb.js'); 

const router = express.Router();

router.get('/', async, (req, res) => {
    try {
        const posts = await Posts.get(req.query); 
        res.status(200).json(posts);  
     } catch (error) {
         console.log(error); 
         res.status(500).json({message: "Error retrieving the users."}); 
     }
});

router.get('/:id', validatePostId, async, (req, res) => {
    try {
        const individualPosts = await Posts.getById(req.params.id); 
        res.status(200).json(individualPosts); 
    }catch (error) {
        console.log(error); 
        res.status(500).json({message: "Post not found"}); 
    }
});

router.delete('/:id', validatePostId, async, (req, res) => {
    try {
        res.status(200).json( await Posts.remove(req.params.id) );    
    } catch(error) {
        console.log(error); 
        res.status(500).json({message: "Error removing post."})
    }
});

router.put('/:id', validatePostId, async, (req, res) => {
    try {
        res.status(200).json(await Posts.update(req.params.id, req.body)); 
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Error updating post."})
    }
});

function validatePostId(req, res, next) {
    if(!req.params.id) {
        res.status(400).json({message: "invalid post id"})
    } else {
        req.post = `${req.params.id}`; 
    } next(); 
};

module.exports = router;
