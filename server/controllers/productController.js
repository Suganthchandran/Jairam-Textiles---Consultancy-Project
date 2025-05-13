import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';

// Add Product
const addProduct = async (req,res) => {
    try {
        const {name, description, rating, markedPrice, discountPercentage, discountPrice, category, material, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined )

        const imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            rating: Number(rating),
            markedPrice: Number(markedPrice),
            discountPercentage: Number(discountPercentage),
            discountPrice: Number(discountPrice),
            category,
            material,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),  // We cannot send a array to form data directly, so convert it into json format
            image: imagesUrl,
            date: Date.now()
        }

        const product = new productModel(productData);
        await product.save();

        res.json({
            success: true,
            message: "Product Added Successfully"
        })
        
    }
    catch(error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// List all Product
const listProducts = async (req,res) => {
    try {
        const products = await productModel.find({})
        res.json({
            success: true,
            products
        })
    }
    catch(error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Remove Product
const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Product Removed Successfully"
        })
    }
    catch(error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Single Product Information
const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);

        if (!product) {
            return res.json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            product
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;  // Extract the id from the URL
        const { name, description, rating, markedPrice, discountPercentage, discountPrice, category, material, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = [];
        if (images.length > 0) {
            imagesUrl = await Promise.all(
                images.map(async (item) => {
                    let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                    return result.secure_url;
                })
            );
        }

        const updateData = {
            name,
            description,
            rating: Number(rating),
            markedPrice: Number(markedPrice),
            discountPercentage: Number(discountPercentage),
            discountPrice: Number(discountPrice),
            category,
            material,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            date: Date.now()
        };

        if (imagesUrl.length > 0) {
            updateData.image = imagesUrl;
        }

        // Update the product in the database using the ID from the URL
        await productModel.findByIdAndUpdate(id, updateData);

        res.json({
            success: true,
            message: "Product Updated Successfully"
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

export { addProduct, listProducts, removeProduct, singleProduct, updateProduct };