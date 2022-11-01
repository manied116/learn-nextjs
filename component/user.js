function User({user}) {
    return (
        <div>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </div>
    );
}

export default User;