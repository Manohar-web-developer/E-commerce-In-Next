"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./product/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function PoufUpYourSpace() {

    const [Data, setData] = useState([])

    useEffect(() => {
        axios.get("https://livingshapes.in/collections/poufs/products.json")
            .then((res) => {
                setData(res.data.products.slice(0, 10))

            })
    }, [])

    return (
        <section className="w-full py-10 mt-10">
            <div className="w-[90%] mx-auto">

                {/* Heading */}
                <div className="flex items-center justify-between mb-8 w-full">


                    <div className="flex items-center justify-between gap-4 w-full">

                        <button className="custom-prev cursor-pointer w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                            <ChevronLeft size={18} />
                        </button>

                        <h2 className="text-2xl md:text-xl font-thin">
                            Pouf Up Your Space
                        </h2>

                        <button className="custom-next cursor-pointer w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                            <ChevronRight size={18} />
                        </button>

                    </div>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    spaceBetween={24}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,
                        },
                        640: {
                            slidesPerView: 2.2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    
                        {Data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ProductCard product={item} />
                            </SwiperSlide>
                        ))}
                    
                </Swiper>
            </div>
        </section>
    );
}

export default PoufUpYourSpace;