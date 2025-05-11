import React, { useState } from 'react'
import '../styles/Add.css'
import {assets} from '../assets/assets'
import axios from 'axios'
import {toast} from 'react-toastify'

const Add = ({token}) => {

    const [image1,setImage1] = useState(false);
    const [image2,setImage2] = useState(false);
    const [image3,setImage3] = useState(false);
    const [image4,setImage4] = useState(false);

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [markedPrice, setMarkedPrice] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [category,setCategory] = useState("BedSheet");
    const [material,setMaterial] = useState("Cotton");
    const [bestseller,setBestseller] = useState(false);
    const [sizes,setSizes] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData()

            formData.append("name",name)
            formData.append("description",description)
            formData.append("rating",rating)
            formData.append("markedPrice",markedPrice)
            formData.append("discountPercentage",discountPercentage)
            formData.append("discountPrice",discountPrice)
            formData.append("category",category)
            formData.append("material",material)
            formData.append("bestseller",bestseller)
            formData.append("sizes",JSON.stringify(sizes))

            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)

            // const response = await axios.post("https://diago-backend.vercel.app/api/product/add",formData,{headers:{token}})
            const response = await axios.post("http://localhost:4001/api/product/add",formData,{headers:{token}})

            if(response.data.success) {
                toast.success(response.data.message);
                setName("")
                setDescription("")
                setMarkedPrice("")
                setDiscountPercentage("")
                setRating("");
                setDiscountPrice("")
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
            }
            else {
                toast.error(response.data.message)
            }
        }
        catch(error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <form onSubmit={handleSubmit} className='add-form'>
        <div>
            <p className='add-image-head'>Upload Image</p>

            <div className='add-image-list'>
                <label htmlFor='image1'>
                    <img className='add-image' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt=''/>
                    <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id='image1' hidden />
                </label>
                <label htmlFor='image2'>
                    <img className='add-image' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt=''/>
                    <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id='image2' hidden />
                </label>
                <label htmlFor='image3'>
                    <img className='add-image' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt=''/>
                    <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id='image3' hidden />
                </label>
                <label htmlFor='image4'>
                    <img className='add-image' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt=''/>
                    <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id='image4' hidden />
                </label>
            </div>
        </div>

        <div className='add-input-container'>
            <p>Product Name</p>
            <input onChange={(e)=> setName(e.target.value)} value={name} className='add-name-input' type='text' placeholder='Type here' required />
        </div>

        <div className='add-input-container'>
            <p>Product Description</p>
            <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='add-name-input' type='text' placeholder='Write Content here' required />
        </div>

        <div className='add-form-content'>
          
            <div>
                <p className='add-form-select-head'>Product Category</p>
                <select onChange={(e)=>setCategory(e.target.value)} className='add-form-select'>
                    <option value="Bedsheet">BedSheet</option>
                    <option value="Towel">Towel</option>
                    <option value="KitchenNapkin">Kitchen Napkin</option>
                </select>
            </div>

            <div>
                <p className='add-form-select-head'>Product Material</p>
                <select onChange={(e)=>setMaterial(e.target.value)} className='add-form-select'>
                    <option value="Cotton">Cotton</option>
                    <option value="Linen">Linen</option>
                    <option value="Polyester">Polyester</option>
                    <option value="Nylon">Nylon</option>
                    <option value="Silk">Silk</option>
                </select>
            </div>

          
        </div>

        <div className='add-content2'>

            <div>
                <p>Product Market Price</p>
                <input onChange={(e)=> setMarkedPrice(e.target.value)} className='add-price-input' type='Number' placeholder='69' required />
            </div>

            <div>
                <p>Product Discount Percentage</p>
                <input onChange={(e)=> setDiscountPercentage(e.target.value)} className='add-price-input' type='Number' placeholder='69' required />
            </div>

            <div>
                <p>Product Discounted Price</p>
                <input onChange={(e)=> setDiscountPrice(e.target.value)} className='add-price-input' type='Number' placeholder='69' required />
            </div>

<div>
           
            </div>
        </div>

        <div className='add-content2'>

            <div>
                <p>Rating</p>
                <input onChange={(e)=> setRating(e.target.value)} className='add-price-input' type='Number' placeholder='4' required />
            </div>

            <div>
                 <p>Product Sizes</p>
            <div className='add-size'>
                <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>
                    <p className={` ${sizes.includes("S") ? "add-size-click" : " "} add-size-p`}>S</p>
                </div>

                <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
                    <p className={` ${sizes.includes("M") ? "add-size-click" : " "} add-size-p`}>M</p>
                </div>

                <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
                    <p className={` ${sizes.includes("L") ? "add-size-click" : " "} add-size-p`}>L</p>
                </div>

                <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
                    <p className={` ${sizes.includes("XL") ? "add-size-click" : " "} add-size-p`}>XL</p>
                </div>

                <div onClick={()=> setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
                    <p className={` ${sizes.includes("XXL") ? "add-size-click" : " "} add-size-p`}>XXL</p>
                </div>
            </div>
            </div>

        </div>


        
        
        <div className='add-bestseller'>
            <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
            <label htmlFor='bestseller' style={{cursor:'pointer'}}>Add to bestseller</label>
        </div>

        <button type='submit' className='add-button'>ADD</button>
    </form>
  )
}

export default Add
