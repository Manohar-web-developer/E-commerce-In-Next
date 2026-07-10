"use client"

import { useEffect, useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import { ListFilter, ChevronDown } from 'lucide-react';
import axios from 'axios'
import FilterSidebar from '../components/layout/FilterSidebar';

function Shop({ collection, params }) {
  const activeCollection = collection || params?.collection || params?.slug?.at(-1);
  const [apiData, setapiData] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selected, setSelected] = useState('Most relevant')
  const [sortedProducts, setSortedProducts] = useState([]);
  const [FilterShow, setFilterShow] = useState(true)
  const [FilteredData, setFilteredData] = useState([])
  const [FinalProducts, setFinalProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 500000
  });
  const maxPrice =
  apiData.length > 0
    ? Math.max(
        ...apiData.map((item) =>
          Number(item.variants[0]?.price || 0)
        )
      )
    : 500000;
  useEffect(() => {
    const Filter = sortedProducts.filter((item) => {
  
      const categoryMatch =
        FilteredData.length === 0 ||
        FilteredData.includes(item.product_type);
  
      const price = Number(item.variants[0]?.price);
  
      const priceMatch =
        price >= priceRange.min &&
        price <= priceRange.max;
  
      return categoryMatch && priceMatch;
    });
  
    setFinalProducts(Filter);
  
  }, [FilteredData, sortedProducts, priceRange]);

  const sortOptions = [,
    'Most relevant',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old',
  ]
  useEffect(() => {
    const products = [...apiData]

    switch (selected) {
      case "Alphabetically, A-Z":
        products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetically, Z-A":
        products.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Price, low to high":
        products.sort((a, b) =>
          Number(a.variants[0].price) -
          Number(b.variants[0].price)
        )
        break;
      case "Price, high to low":
        products.sort((a, b) =>
          Number(b.variants[0].price) -
          Number(a.variants[0].price)
        )
        break;
      case "Date, old to new":
        products.sort((a, b) =>
          new Date(a.created_at) -
          new Date(b.created_at)
        )
        break;
      case "Date, new to old":
        products.sort((a, b) =>
          new Date(b.created_at) -
          new Date(a.created_at)
        )
        break;
      default:
        break;
    }
    setSortedProducts(products);
  }, [selected, apiData])

  useEffect(() => {
    if (!activeCollection) return;

    axios.get(`https://livingshapes.in/collections/${activeCollection}/products.json`, {
      params: {
        view: "json",
      }
    })
      .then((res) => {
        setapiData(res.data.products);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [activeCollection])

  return (
    <>
      <div className='w-full'>
        <div className='w-[90%] mx-auto mt-[60px]'>

          <div className='w-full flex justify-between items-center'>
            <div className='cursor-pointer flex items-center gap-1.5' onClick={() => setFilterShow(!FilterShow)}>
              <div className='text-md'>Filter</div>
              <div><ListFilter size={13} /></div>
            </div>

            {/* Sort Dropdown */}
            <div className='relative'>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-2 border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50'
              >
                <span>{selected}</span>
                <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded shadow-lg z-10'>
                  {sortOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSelected(option)
                        setDropdownOpen(false)
                      }}
                      className={`px-4 py-2.5 text-sm hover:bg-gray-100 cursor-pointer ${selected === option ? 'bg-gray-50 font-semibold' : ''
                        }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-nowrap gap-8'>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${FilterShow ? 'w-[20%] opacity-100' : 'w-0 opacity-0'
                }`}
            >
              <FilterSidebar Data={apiData} setFilteredData={setFilteredData} setPriceRange={setPriceRange}  maxPrice={maxPrice}
              />
            </div>

            <div className='grid grid-cols-4 gap-x-5 mt-8 w-full'>
              {FinalProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
