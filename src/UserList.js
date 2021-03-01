import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

const UserList = () => {
    const[listOfUSer,setListOfUSer]=useState([]) ;
    useEffect(()=>{
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then((res)=>{ setListOfUSer(res.data)}) 
          .catch((error)=>{console.log(error)}) 
    },[])
    
    return (
        <div >
             <div className="title">OUR LIST</div>
             <ul className="list">
             {listOfUSer.map((user)=> <li className="name">{user.name}</li>)}
             </ul>
        </div>
    )
}

export default UserList
