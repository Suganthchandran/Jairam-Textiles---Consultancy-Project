import React, { useContext, useEffect, useState } from 'react'
import '../styles/Collection.css'
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [material, setMaterial] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category);
    }
  }, [location.state]);


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));  // For deselecting the filter option (Untick the checkbox)
    }
    else {
      setCategory(prev => [...prev, e.target.value]);  // For selecting the filter option (Tick the checkbox)
    }
  }

  const toggleMaterial = (e) => {
    if (material.includes(e.target.value)) {
      setMaterial(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setMaterial(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (material.length > 0) {
      productsCopy = productsCopy.filter(item => material.includes(item.material));
    }
    setFilterProducts(productsCopy);
  }

  useEffect(() => {
    applyFilter();
  }, [category, material, search, showSearch, products]);

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.discountPrice - b.discountPrice)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.discountPrice - a.discountPrice)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className="collection">
      <div className="collection-filter-options">
        <p onClick={() => setShowFilter(!showFilter)} className="collection-filter-text">
          FILTERS
          <img className={`collection-filter-icon ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        <div className={`category-filter ${showFilter ? '' : 'hidden'}`}>
          <p className="category-title">CATEGORIES</p>
          <div className='categorise'>
            <p className='categorise-content'>
              <input type='checkbox' value={'BedSheet'} onClick={toggleCategory} checked={category.includes('BedSheet')} /> BedSheet
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Towel'} onClick={toggleCategory} checked={category.includes('Towel')} /> Towel
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'KitchenNapkin'} onClick={toggleCategory} checked={category.includes('KitchenNapkin')} /> Kitchen Napkin
            </p>
          </div>
        </div>

        <div className={`category-filter ${showFilter ? '' : 'hidden'}`}>
          <p className="category-title">MATERIAL</p>
          <div className='categorise'>
            <p className='categorise-content'>
              <input type='checkbox' value={'Cotton'} onClick={toggleMaterial} /> Cotton
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Linen'} onClick={toggleMaterial} /> Linen
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Polyester'} onClick={toggleMaterial} /> Polyester
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Silk'} onClick={toggleMaterial} /> Silk
            </p>
            <p className='categorise-content'>
              <input type='checkbox' value={'Nylon'} onClick={toggleMaterial} /> Nylon
            </p>
          </div>
        </div>
      </div>

      <div className='collection-right'>
        <div className='collection-right-up'>
          <Title title1={'ALL'} title2={'COLLECTION'} size={'2.3rem'} />

          <select onChange={(e) => setSortType(e.target.value)} className='collection-sort'>
            <option value="relavent">Sort by: Relavent</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='collection-products'>
          {
            filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} markedPrice={item.markedPrice} discount={item.discountPercentage} discountPrice={item.discountPrice} image={item.image} />
              ))
            ) : (
              <div className="flex justify-center items-center w-[1200px] mt-12">
                <img src={assets.No_Products} alt='No Product Found' className='w-[800px] h-[450px]' />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Collection;
