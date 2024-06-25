



import { UploadImages } from '@/Components/products/UploadImages';
import React from 'react'
import { useParams } from 'react-router-dom';

 const uploadImagePage = (searchParams) => {
    const id = searchParams.params.id;
    console.log("555555555555555555555")
    console.log(id)
   

  return (
    <div>
        <UploadImages id={id}/>
       
    </div>
  )
}
export default uploadImagePage;