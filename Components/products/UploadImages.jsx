'use client'



import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

export const UploadImages = ({id}) => {
    const [images, setImages] = useState([])
    const [imagesPreview,setImagesPreview] = useState([])

    const onChange = (e) => {
       
        console.log("-----------------")
        const files =Array.from(e.target.files)
        
        
        console.log(files)
        setImages([])
        setImagesPreview([])


        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState ===2) {
                    setImagesPreview((oldArray) => [...oldArray, reader.result]);
                }
            };
            console.log("**######################****");
            console.log(images);
            setImages((oldArray) => [...oldArray, file]) ;
            reader.readAsDataURL(file);
        });

  
    };
    console.log("+++++++++++++")
    console.log(images)

    const uploadProductImages = async (formData, id) => {
        try{
          console.log("//////////////////////////")
   
          console.log("//////////////////////////")

          const { data} = await axios.post(
            `${process.env.API_URL}/api/products/upload_images/${id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          );
          console.log("999999999999999999999999")
          if (data?.data){
            router.replace("/admin/products");
          }
        }catch (error) {
          console.log("|||||||||||||||||||||")
        }
      }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("*******%%%%%********")
        console.log(images)
        const formData = new FormData()
        images.forEach((image) => {

            formData.append("image",image)
        })
        console.log("**********999999*************")
        console.log(formData.get("image"))
        console.log("**********8888888*************")


        uploadProductImages(formData,id)
    }


  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100vh",width:"100vv"}}> 
    <div style={{width:"500px",height:"500px", border:"solid 1px black",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
       <div style={{width:"100%", textAlign:"center"}}>
        <h3 style={{display:"block"}}>Upload Product Images</h3>
        </div>
            <div>
            {console.log("OOOOOOOOOOOOOOOOO")}
            {imagesPreview?.map((img) => (
                <Image style={{marginRight:"10px"}} src={img} key={img} width="50" height="50" />
           ))}
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <form onSubmit={submitHandler}>
        <input type="file" name='image' id='formFile' multiple onChange={onChange}/>
        <button type='submit'>Upload</button>
        </form>
        </div>
    </div>
    </div>
  )
}
