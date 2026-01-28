// ! You can declare the same interface multiple times, typescript will automatically merge them into one. This is great for third-party libraries
interface User{
    id:number;
    hisName:string;
}

const users:User[]=[
    {id:1,hisName:"Alice"},
    {id:2,hisName:"Bob"},
];

function UserList(){
    return(
        <ul>
            {/* We use .map() to transform data into jsx */}
            {users.map(user=>(
                <li key={user.id}>{user.hisName}</li>
            ))}
        </ul>
    );
}
export default UserList;