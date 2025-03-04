import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const[userData,setUserData] = useState({

    name:"Rahul Arya",
    image:assets.profile_pic,
    email:"rahul@gmail.com",
    phone:"1234567890",
    address:{
      line:"57th cross, Richmond",
      line2:"Circle,Chrrch Road,London"
    },
    gender:'Male',
    dob:"2002-15-05"
  })
  const [isEdit,setIsEdit] =useState()
  
  return (
    <div>
<img src={userData.image}alt=""/>
{
  isEdit
  ? <input type="text"/>
  :<p>{userData.name}</p>
}
    </div>
  )
}

export default MyProfile