function Post({post}) {
    return (
        <div key={post.id}>
            <h3>{post.id} {post.title}</h3>
            <hr /> 
            <p>{post.body}</p>
        </div>
    );
}

export default Post

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')

    const data  = await response.json()
    const paths = data.map(post => {                                                                                                                                                                                                                                                                                                                                                             
        return {
            params: {
                postId:`${post.id}`
            }
        }
    })
    return{
        // paths:[
        //     { params:{postId:'1'},},
        //     { params:{postId:'2'},},
        //     { params:{postId:'3'},}
        // ],
        paths,
        fallback:false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        )

    const data = await response.json()
    return {
        props:{
            post:data,
        },
    }
}
