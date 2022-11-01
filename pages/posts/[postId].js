function Post({post}) {
    return (
        <div key={post.id}>
            <h3>{post.id} {post.title}</h3>
            <hr /> 
            <p>{post.body}</p>
        </div>
    );
}

export async function getStaticPaths(){
    return{
        paths:[
            { params:{postId:'1'},},
            { params:{postId:'2'},},
            { params:{postId:'3'},}
        ],
        fallback:false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        )

    const data = await response.json()
    console.log(data)
    return {
        props:{
            post:data,
        },
    }
}

export default Post