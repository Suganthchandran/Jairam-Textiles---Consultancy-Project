import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    rating: { type: Number, required: true },
    markedPrice: { type: Number, required: true },
    discountPercentage: { type: Number, required: false },
    discountPrice: { type: Number, required: false },
    image: {type: Array, required: true},
    category: {type: String, required: true},
    material: {type: String, required: true},
    sizes: {type: Array, required: true},
    bestseller: {type: Boolean},
    date: {type: Number, required: true},
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel