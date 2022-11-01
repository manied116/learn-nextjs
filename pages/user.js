import User from "../component/user"

function UserList({users}){
    return(
        <>
            <h3>User list</h3>
            <table style={{padding:"5px"}}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            {users.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <User user={user}/>
                        </tr>
                    )
                })
            }
            </table>
        </>
    )
}
export default UserList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return{
        props:{
            users:data,
        }
    }
}