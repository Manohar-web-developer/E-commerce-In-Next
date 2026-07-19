import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search, X } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput, } from "@/components/ui/input-group"
import { serchBoxPopup } from '../redux/SearchSlice';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import axios from 'axios';
function SearchPopup() {
    const [search, setSearch] = useState("");
    const [suggest, setSuggest] = useState([])
    const [product, setProduct] = useState()


    const isOpen = useSelector((stage) => stage.SerchValue.serchBoxOpen);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('https://livingshapes.in/collections/all/products.json')
            .then((res) => {

                setProduct(res.data.products)

            })
    }, [])



    return (
        <div className='flex justify-center'>
            <div className='w-4/5 mx-auto bg-white absolute top-1/6 border h-[350px] z-99999 p-5 rounded-xl'>
                <div className='h-full'>
                    <div>
                        {
                            isOpen ? (
                                <div className='flex w-full items-center justify-between'>
                                    <InputGroup className="w-5/6 mx-auto focus-within:ring-0! focus-within:shadow-none!">
                                        <InputGroupInput
                                            className="focus-visible:ring-0! focus-visible:shadow-none! focus:ring-0!"
                                            placeholder="Search for products, categories, collections..."
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <InputGroupAddon>
                                            <Search />
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <X className='cursor-pointer' onClick={() => dispatch(serchBoxPopup())} />
                                </div>

                            ) : ('')
                        }
                    </div>
                    <div className='w-5/6 mx-auto pt-5 h-full'>
                        {
                            search.length === 0 ? (
                                <div className='flex justify-between items-start mt-5 border-t h-full '>
                                    <div className='flex-1 pt-6 ps-6 border-s border-b h-5/6'>
                                        <div><h4 className='font-montserrat text-lg'>Popular Search</h4></div>
                                        <div className='pt-5 flex items-center gap-3 flex-wrap'>
                                            <Bubble variant="secondary" align="end">
                                                <BubbleContent className='font-montserrat cursor-pointer'>Sofa</BubbleContent>
                                            </Bubble>
                                            <Bubble variant="secondary" align="end">
                                                <BubbleContent className='font-montserrat cursor-pointer'>L Shape Sofa</BubbleContent>
                                            </Bubble>
                                            <Bubble variant="secondary" align="end">
                                                <BubbleContent className='font-montserrat cursor-pointer'>Dinning Table</BubbleContent>
                                            </Bubble>
                                            <Bubble variant="secondary" align="end">
                                                <BubbleContent className='font-montserrat cursor-pointer'>Chair</BubbleContent>
                                            </Bubble>
                                            <Bubble variant="secondary" align="end">
                                                <BubbleContent className='font-montserrat cursor-pointer'>Wardrobe</BubbleContent>
                                            </Bubble>
                                            <Bubble variant="secondary" align="end">
                                                <BubbleContent className='font-montserrat cursor-pointer'>Bed</BubbleContent>
                                            </Bubble>
                                        </div>
                                    </div>
                                    <div className='px-6 border-x pt-6 border-b h-5/6'>
                                        <h5 className='font-montserrat font-semibold pb-3'>Trending</h5>
                                        <ul className='flex flex-col gap-4'>
                                            <li>Modern Sofa</li>
                                            <li>Wooden Table</li>
                                            <li>Luxury Sofa</li>
                                            <li>6 Seater Sofa</li>
                                        </ul>
                                    </div>
                                </div>
                            ) : ('')
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SearchPopup