import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../assets/assets';
import '../styles/Add.css';

const EditProduct = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState([null, null, null, null]); // editable files
  const [existingImageURLs, setExistingImageURLs] = useState([]); // display URLs

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [markedPrice, setMarkedPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [category, setCategory] = useState('BedSheet');
  const [material, setMaterial] = useState('Cotton');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          `http://localhost:4001/api/product/single`,
          { id },
          {
            headers: { token },
          }
        );
        if (response.data.success) {
          const product = response.data.product;
          setName(product.name);
          setDescription(product.description);
          setRating(product.rating);
          setMarkedPrice(product.markedPrice);
          setDiscountPercentage(product.discountPercentage);
          setCategory(product.category);
          setMaterial(product.material);
          setBestseller(product.bestseller);
          setSizes(product.sizes || []);

          console.log("Fetched product images:", product.image);
          setExistingImageURLs(product.image || []);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchProduct();
  }, [id, token]);

  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('rating', rating);
      formData.append('markedPrice', markedPrice);
      formData.append('discountPercentage', discountPercentage);

      const discount = markedPrice - (markedPrice * discountPercentage) / 100;
      formData.append('discountPrice', discount);
      formData.append('category', category);
      formData.append('material', material);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      images.forEach((img, i) => {
        if (img) {
          formData.append(`image${i + 1}`, img);
        }
      });

      const response = await axios.put(
        `http://localhost:4001/api/product/update/${id}`,
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success('Product updated successfully');
        navigate("/list");
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSizeToggle = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <div>
        <p className="add-image-head">Edit Images</p>
        <div className="add-image-list">
          {[0, 1, 2, 3].map((i) => (
            <label htmlFor={`image${i}`} key={i}>
              <img
                className="add-image"
                src={
                  images[i]
                    ? URL.createObjectURL(images[i])
                    : existingImageURLs[i] || assets.upload_area
                }
                alt={`Product ${i}`}
              />
              <input
                type="file"
                id={`image${i}`}
                hidden
                onChange={(e) => handleImageChange(i, e.target.files[0])}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="add-input-container">
        <p>Product Name</p>
        <input
          type="text"
          className="add-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="add-input-container">
        <p>Product Description</p>
        <textarea
          className="add-name-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="add-form-content">
        <div>
          <p className="add-form-select-head">Product Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="add-form-select"
          >
            <option value="Bedsheet">BedSheet</option>
            <option value="Towel">Towel</option>
            <option value="KitchenNapkin">Kitchen Napkin</option>
          </select>
        </div>

        <div>
          <p className="add-form-select-head">Product Material</p>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="add-form-select"
          >
            <option value="Cotton">Cotton</option>
            <option value="Linen">Linen</option>
            <option value="Polyester">Polyester</option>
            <option value="Nylon">Nylon</option>
            <option value="Silk">Silk</option>
          </select>
        </div>
      </div>

      <div className="add-content2">
        <div>
          <p>Market Price</p>
          <input
            className="add-price-input"
            type="number"
            value={markedPrice}
            onChange={(e) => setMarkedPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <p>Discount %</p>
          <input
            className="add-price-input"
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            required
          />
        </div>

        <div>
          <p>Rating</p>
          <input
            className="add-price-input"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="add-content2">
        <div>
          <p>Sizes</p>
          <div className="add-size">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size} onClick={() => handleSizeToggle(size)}>
                <p
                  className={`${
                    sizes.includes(size) ? 'add-size-click' : ''
                  } add-size-p`}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="add-bestseller">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
        />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type="submit" className="add-button">
        UPDATE
      </button>
    </form>
  );
};

export default EditProduct;
