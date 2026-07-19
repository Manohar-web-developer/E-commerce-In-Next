import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search, X } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput, } from "@/components/ui/input-group"
import { serchBoxPopup } from '../redux/SearchSlice';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import axios from 'axios';
import { Separator } from '@base-ui/react/separator';
import Link from 'next/link';

function SearchPopup() {
    const [search, setSearch] = useState("");
    const [suggestTags, setSuggestTags] = useState([]);
    const [suggestProducts, setSuggestProducts] = useState([]);
    const [product, setProduct] = useState([]);

    const isOpen = useSelector((stage) => stage.SerchValue.serchBoxOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://livingshapes.in/collections/all/products.json')
            .then((res) => {
                setProduct(res.data.products || []);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
            });
    }, []);

    useEffect(() => {
        if (search.trim().length === 0) {
            setSuggestTags([]);
            setSuggestProducts([]);
            return;
        }

        const searchLower = search.toLowerCase();
        const matchedTags = new Set();
        const matchedProducts = [];

        product.forEach((item) => {
            let isProductMatch = false;

            if (Array.isArray(item.tags)) {
                item.tags.forEach((tag) => {
                    const cleanTag = tag.includes('/')
                        ? tag.split('/').slice(1).join('/').trim()
                        : tag.trim();

                    if (cleanTag.toLowerCase().includes(searchLower)) {
                        matchedTags.add(cleanTag);
                        isProductMatch = true;
                    }
                });
            }

            // title se bhi match karega
            if (item.title.toLowerCase().includes(searchLower)) {
                isProductMatch = true;
            }

            if (isProductMatch) {
                matchedProducts.push({
                    id: item.id,
                    title: item.title,
                    handle: item.handle,
                    price: item.variants?.[0]?.price || null,
                    image: item.images?.[0]?.src || item.image?.src || null,
                });
            }
        });

        setSuggestTags(Array.from(matchedTags));
        setSuggestProducts(matchedProducts);
    }, [search, product]);

    return (
        <div className='flex justify-center'>
            {isOpen ? (
                <div className='w-[95%] sm:w-4/5 mx-auto bg-white fixed sm:absolute inset-x-0 top-[5%] sm:top-[15%] border min-h-[350px] max-h-[90vh] overflow-y-auto z-[9999] p-4 sm:p-5 rounded-xl'>
                    <div className='h-full'>
                        <div>
                            <div className='flex w-full items-center justify-between gap-3'>
                                <InputGroup className="w-full sm:w-5/6 mx-auto focus-within:ring-0! focus-within:shadow-none!">
                                    <InputGroupInput
                                        className="focus-visible:ring-0! focus-visible:shadow-none! focus:ring-0!"
                                        placeholder="Search for products, categories, collections..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <InputGroupAddon>
                                        <Search />
                                    </InputGroupAddon>
                                </InputGroup>
                                <X
                                    className='cursor-pointer shrink-0'
                                    onClick={() => {
                                        dispatch(serchBoxPopup());
                                        setSearch("");
                                    }}
                                />
                            </div>
                        </div>

                        <div className='w-full sm:w-5/6 mx-auto pt-5 h-full'>
                            {search.length === 0 ? (
                                <div className='flex flex-col sm:flex-row justify-between items-stretch sm:items-start mt-5 border-t h-full'>
                                    <div className='flex-1 pt-6 ps-2 sm:ps-6 border-b sm:border-s min-h-fit sm:min-h-[350px]'>
                                        <div>
                                            <h4 className='font-montserrat text-lg'>Popular Search</h4>
                                        </div>
                                        <div className='pt-5 flex items-center gap-3 flex-wrap'>
                                            {["Sofa", "L Shape Sofa", "Dinning Table", "Chair", "Wardrobe", "Bed"].map((label) => (
                                                <Bubble key={label} variant="secondary" align="end">
                                                    <BubbleContent
                                                        className='font-montserrat cursor-pointer'
                                                        onClick={() => setSearch(label)}
                                                    >
                                                        {label}
                                                    </BubbleContent>
                                                </Bubble>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='px-2 sm:px-6 sm:border-x pt-6 border-b min-h-fit sm:min-h-[350px]'>
                                        <h5 className='font-montserrat font-semibold pb-3'>Trending</h5>
                                        <ul className='flex flex-col gap-4'>
                                            <li>Modern Sofa</li>
                                            <li>Wooden Table</li>
                                            <li>Luxury Sofa</li>
                                            <li>6 Seater Sofa</li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Tags/Category suggestion */}
                                    <div>
                                        <div>
                                            <h5 className='text-gray-500 font-montserrat'>Suggestion</h5>
                                        </div>
                                        <div className="flex w-full max-w-full sm:max-w-sm flex-col gap-2 text-sm py-5">
                                            {suggestTags.length === 0 ? (
                                                <p className='text-gray-400'>No results found</p>
                                            ) : (
                                                suggestTags.slice(0, 5).map((tag) => (
                                                    <dl
                                                        className="flex items-center justify-between cursor-pointer"
                                                        key={tag}
                                                        onClick={() => setSearch(tag)}
                                                    >
                                                        <dt>{tag}</dt>
                                                    </dl>
                                                ))
                                            )}
                                        </div>
                                        <hr />
                                    </div>

                                    {/* Products with image + price */}
                                    <div className='pt-6'>
                                        <div>
                                            <h5 className='text-gray-500 font-montserrat'>Products</h5>
                                        </div>
                                        <div className="flex w-full flex-col gap-4 text-sm py-5">
                                            {suggestProducts.length === 0 ? (
                                                <p className='text-gray-400'>No results found</p>
                                            ) : (
                                                suggestProducts.slice(0, 5).map((item) => (

                                                    <Link href={`/products/${item.handle}`}
                                                        className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
                                                        key={item.id}
                                                        onClick={() => {
                                                            dispatch(serchBoxPopup());
                                                            setSearch("");
                                                        }}
                                                    >
                                                        {item.image ? (
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md border shrink-0"
                                                            />
                                                        ) : (
                                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-md border flex items-center justify-center text-xs text-gray-400 shrink-0">
                                                                No Image
                                                            </div>
                                                        )}
                                                        <div className="flex flex-col min-w-0">
                                                            <span className="font-montserrat truncate">{item.title}</span>
                                                            {item.price && (
                                                                <span className="text-gray-500">₹{item.price}</span>
                                                            )}
                                                        </div>
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                        <hr />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default SearchPopup