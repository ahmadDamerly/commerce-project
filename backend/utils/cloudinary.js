import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploads =(file,folder) => {
    console.log("++++++++2222222222++++++++++++")
    console.log(file)
    console.log(folder)
    return new Promise((resolve,reject) => {
        cloudinary.uploader.upload(
            file,
            (result) => {
                resolve({
                    public_id: result.public_id,
                    url: result.url,
                })
            },
            {
                resource_type: "image",
                folder: folder
            }
        )
    })
}

export {uploads, cloudinary};