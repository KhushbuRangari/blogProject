const express = require('express');
const router =express.Router();

const Post = require('../models/Post')
//routes
router.get('',async (req,res)=>{
    try {
    const locals = {
        title:"Node js Blog",
        description: " Simple Blog create with NodeJs, Express & MonogoDb."
    }

    const perPage = 10 ;
    let page = req.query.page || 1;
    const data = await Post.aggregate([{$sort:{createdAt:-1}}])
    .skip(perPage * page - perpage).limit(perPage)
    .exec();

    const count = await Post.count();
    const nextPage = parseInt(page)+1;
    const hasNextPage = nextPage <=Math.ceil(count/perpage);

    res.render('index',{locals
    ,data})



 
        // const data = await Post.find();
        res.render('index',{locals,data});

    }  catch(error){
        console.log(error);
    }
    
    


   
});







// function insertPostData() {
    
//     Post.insertMany(
//         [
//             {
//                 "title": "Building a Blog",
//                 "body": "this is a body text"
//             },
//             {
//                 "title": "Introduction to Python",
//                 "body": "Python is a popular programming language known for its simplicity and versatility."
//             },
//             {
//                 "title": "Exploring Space Travel",
//                 "body": "Space travel has captivated human imagination for generations, and new advancements are making it closer to reality."
//             },
//             {
//                 "title": "The Art of Photography",
//                 "body": "Photography is not just about capturing moments, but also about conveying emotions and stories through images."
//             },
//             {
//                 "title": "Healthy Eating Habits",
//                 "body": "Maintaining a balanced diet and making mindful food choices are essential for a healthy lifestyle."
//             },
//             {
//                 "title": "Understanding Climate Change",
//                 "body": "Climate change is a pressing global issue that requires collective efforts to mitigate its impact on the planet."
//             },
//             {
//                 "title": "Mastering the Guitar",
//                 "body": "Learning to play the guitar takes practice, dedication, and a deep appreciation for music."
//             },
//             {
//                 "title": "Exploring Ancient Civilizations",
//                 "body": "Studying ancient civilizations offers insights into the development of human societies and cultures over time."
//             },
//             {
//                 "title": "The World of Fantasy Literature",
//                 "body": "Fantasy literature transports readers to magical realms where imagination knows no bounds."
//             },
//             {
//                 "title": "The Power of Meditation",
//                 "body": "Meditation provides a way to achieve mental clarity, reduce stress, and promote overall well-being."
//             }
//         ]
        
//     )
// }
// insertPostData();








router.get('/about',(req,res)=>{
    res.render('about');
});

module.exports = router;