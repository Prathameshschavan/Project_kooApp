const Post = require("../model/post.model");

async function upload(UserId,name,description, image, likes, comments){
  //  console.log(UserId,name)
      let obj = {
        userId: UserId,
        name:name,
        description : description,
        image: image,
        likes:likes,
        comments:comments
      }

      let post = Post.create(obj);

      return post;
}

async function fetchPosts(){
  
    let posts = await Post.find();
    // console.log(posts);
    return posts;
}

async function findParticular(id,value){
  let post;
  if(value==1){
    post = await Post.updateOne({_id:id},{$inc:{likes:1}});
  }
  else if(value==-1){
    post = await Post.updateOne({_id:id},{$inc:{likes:-1}});
  }
  
  console.log(post);
  return post;
}


async function deleteParticular(id){
  let data = await Post.deleteOne({_id:id});
  return data;
}

module.exports={upload,fetchPosts, findParticular, deleteParticular};