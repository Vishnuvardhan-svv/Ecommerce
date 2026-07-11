import React, { useState, useEffect, use } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category,setCategory]=useState([]);
  const [type,setType]=useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((cat) => cat !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (type.includes(e.target.value)) {
      setType(type.filter((t) => t !== e.target.value));
    } else {
      setType([...type, e.target.value]);
    } 
  }

  const sortProducts = (sortBy) => {
    let filtered = filteredProducts;
    if(sortBy === "price_low_high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }
    if(sortBy === "price_high_low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    if(sortBy === "relevant") {
      filtered = [...filtered].sort((a, b) => a._id.localeCompare(b._id));
    }
    setFilteredProducts(filtered);
  }

  const applyFilters = () => {
    let filtered  = products;
    if(showSearch && search){
      filtered=filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      filtered = filtered.filter((product) => category.includes(product.category));
    }
    if (type.length > 0) {
      filtered = filtered.filter((product) => type.includes(product.subCategory));
    }
    setFilteredProducts(filtered);
  }
  useEffect(() => {
    applyFilters();
  }, [category, type,search,showSearch,products]);

  


  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t">
      {/* Filter Sidebar */}
      <div className="w-full sm:w-64">
        {/* Filter Toggle */}
        <div
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between cursor-pointer sm:cursor-default"
        >
          <h2 className="text-xl font-semibold">FILTERS</h2>

          <img
            src={assets.dropdown_icon}
            alt=""
            className={`w-3 transition-transform duration-300 sm:hidden ${
              showFilters ? "rotate-90" : ""
            }`}
          />
        </div>

        {/* Categories */}
        <div
          className={`mt-6 border rounded-md p-5 ${
            showFilters ? "block" : "hidden"
          } sm:block`}
        >
          <p className="font-medium mb-3">CATEGORIES</p>

          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" value="Men" onChange={toggleCategory}/>
            Men
          </label>

          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" value="Women" onChange={toggleCategory}/>
            Women
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" value="Kids" onChange={toggleCategory}/>
            Kids
          </label>
        </div>

        {/* Types */}
        <div
          className={`mt-5 border rounded-md p-5 ${
            showFilters ? "block" : "hidden"
          } sm:block`}
        >
          <p className="font-medium mb-3">TYPE</p>

          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" value="Topwear" onChange={toggleType} />
            Topwear
          </label>

          <label className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" value="Bottomwear" onChange={toggleType} />
            Bottomwear
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" value="Winterwear" onChange={toggleType} />
            Winterwear
          </label>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex text-base sm:text-2xl mb-4 justify-between">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select className="border-2 border-gray-300 text-sm px-2" onChange={(e) =>sortProducts(e.target.value)}>
            <option value="relevant">Sort by: Relavant</option>
            <option value="price_low_high">Sort by: Price Low to High</option>
            <option value="price_high_low">Sort by: Price High to Low</option>
          </select>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {filteredProducts.map((each) => (
              <ProductItem
                key={each._id}
                id={each._id}
                image={each.image}
                name={each.name}
                price={each.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
