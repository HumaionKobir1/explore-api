function loadPostes(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>  res.json())
    .then(data => displayPosts(data));
}

/**
 1> get the container element where you want to add the new elements
 */


function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');

    for (const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>PostL title: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>            
        `;
        postContainer.appendChild(postDiv);
    }
}
loadPostes()