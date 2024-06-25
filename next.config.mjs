/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
    },
    env: {
        API_URL: "https://pro.vercel.app",
        MONGODB_URI:"mongodb+srv://ahmad:ahmad@cluster0.9fnnrbg.mongodb.net/project1?retryWrites=true&w=majority&appName=Cluster0",
        // NEXTAUTH_URL : "https://pro.vercel.app",
        NEXTAUTH_SECRET:"codingwithahmad",
            CLOUD_NAME:"dnn2qyu1r",
            CLOUDINARY_API_KEY:"476899495917671",
            CLOUDINARY_API_SECRET:"prnrcwR5JB4Kcc2YNUIxHq603SE",

           
    }
};

export default nextConfig;

