



import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true , 'please enter your name']
    },
    description: {
        type : String,
        required: [true , 'please enter your description']
    },
    price: {
        type : Number,
        required: [true , 'please enter product price']
    },
    images: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            },
        },
    ],
    category: {
        type:String,
        required: [true,'please enter product category'],
        enum: {
            values: [
                'Laptops',
                'Mobiles',
                'TvScreens',
            ],
            message: 'please select correct category'
        }
    },
    seller:{
        type: String,
        required: [true , 'please enter product seller']
    },
    stock: {
        type: Number,
        required: [true,'please enter product stock']
    },
    ratings: {
        type: Number,
       default: 0
    },
    reviews: [
        {
            rating: {
                type: Number,
                required: true
            },
            comments: {
                type: String,
                required: true
            },
            createdAt:{
                type : Date,
                default: Date.now,
            },
        },
    ],
    createdAt:{
        type : Date,
        default: Date.now,
    },
});

export default mongoose.models.Product || mongoose.model('Product',productSchema);







