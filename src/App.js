import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/User';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.users.value)
  const [name,setName]=useState("");
  const [userName,setUserName]=useState("");
  const [newUserName,setNewUserName]=useState("");
  console.log(userList)
  return (
    <div className="App">
      <div className='addUsers'>
          <input type='text' 
          placeholder='Name..' 
          onChange={(e)=>{setName(e.target.value)}}
          />

          <input type='text' 
          placeholder='UserName..' 
          onChange={(e)=>{setUserName(e.target.value)}}
          />

          <button onClick={()=>{dispatch(addUser({id:userList[userList.length -1].id + 1,name:name,username:userName}))}}>Add User</button>
      </div>
      <div className='displayUsers'>
          {userList.map((user)=>{

            return(
              <div>
             <h1>{user.name}</h1>
             <h1>{user.username}</h1>
             <input type='text' 
          placeholder='New UserName..' 
          onChange={(e)=>{setNewUserName(e.target.value)}}
          />
          <button onClick={()=> dispatch(updateUsername({id:user.id, username:newUserName}))}>update username</button>
          <button onClick={()=> dispatch(deleteUser({id:user.id}))}>Delete user</button>
             </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
