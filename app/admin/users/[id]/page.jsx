'use client'

import axios from 'axios'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'








const   updateUserPage =  () => {
    const router = useRouter()
    const {id} = useParams() ;
    const [user, setUser] = useState({
        name :'',
        email:'',
        password :'',
        role:'',

    })

    const {name,email,password,role} = user;

    const onChange = (e) => {
        setUser({ ...user,[e.target.name]: e.target.value})
    }
    
    const updateUser = async(user) =>{
        try {
            {console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")}
            {console.log(id)}

            const{data} = await axios.put(
                `${process.env.API_URL}/api/users/${id}`,
                user
            );
        
           
        } catch (error) {
            
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        updateUser(user);
        router.push('/admin')

        
    }








    const categories = [
        "Laptops",
        "Mobiles",
        "TvScreens",
    ];



    // const router = useRouter();







  return (
    <>



    <div className='First' style={{display : "flex " , width:"50%",flexWrap:"wrap"}}>
    <h1 style={{margin:"20px",color:"red"}}>Update user :</h1>

        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Name' style={{width :"100%",margin:"10px"}} name="name" value={name} onChange={onChange}/>
            <input type="text" placeholder='Email' style={{width :"100%",margin:"10px"}}name="email" value={email} onChange={onChange} />
            <input type="text" placeholder='Password' style={{width :"100%",margin:"10px"}} name="password" value={password} onChange={onChange}/>
            <input type="text" placeholder='Role' style={{width :"100%",margin:"10px"}}name="role" value={role} onChange={onChange}/>
            <button type="submit"   style={{margin:"10px"}}>Update User</button>
        </form>
    </div>

    


    </>
  )
}

export default updateUserPage;