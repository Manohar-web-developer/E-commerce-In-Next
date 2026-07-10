"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Mousewheel } from "swiper/modules";
import Link from "next/link";

function SeeinStyled() {


  const data = [
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/d2b05004fba148c5af35a2acde9b944d.mp4",
      title: "Eden End Swivel Sofa",
      path: "/product/eden-end-swivel-sofa-sofa-rose-brown"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/4569f844dcc0487384d7dd1cfa4ab258.mp4",
      title: "Cedar Crest Charm 3 Seater Sofa",
      path: "/product/cedar-crest-charm-3-seater-sofa-sofa-white"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/2faca469d03b4c7f90253559ebad4a15.mp4",
      title: "Adrienne Bell Chair",
      path: "/product/adrienne-bell-chair-sofa-dark-green"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/b226abe91ed74cc3b1f88264a0678882.mp4",
      title: "Anhillo Mango 4 Seater Wooden Dining Table",
      path: "/product/anhillo-mango-wood-4-seater-dining-table"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/ea4a9057becb427eae1b69d306fd6ae4.mp4",
      title: "Bejoy Butter scotch Marble Coffee Table",
      path: "/product/bejoy-butterscotch-marble-coffee-table"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/7f6979895abe4edaa06be9f4b9efe4a9.mp4",
      title: "Trippie Wollen Carpet",
      path: "/product/trippie-wollen-carpet-ls-0761"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/c270e67287cb4dc69f32a6b7ffb64e1d.mp4",
      title: "Echoes in glass",
      path: "/shop/echoes-in-glass"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/61e3667fb58c461aa40e413b20181b36.mp4",
      title: "Two Faces, One beauty Wall Painting",
      path: "/product/two-faces-one-beauty-wall-painting-ls-0950"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/cb2af7ef032344f78993aee9707a3cc3.mp4",
      title: "Osbour Boucle Chair with Wood",
      path: "/product/sebum-boucle-swivel-chair-ls-1117"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/49e4075f05a04367ab7f5a1963a177dd.mp4",
      title: "Tumbler",
      path: "/product/sebum-boucle-swivel-chair-ls-1117"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/4b5feceebcf04c36a495cf9956c259d5.mp4",
      title: "Emerald Boucle Swivel Chair",
      path: "/product/emerald-boucle-swivel-lounge-chair"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/14af0534a1f24e0696a19576aab8dfd9.mp4",
      title: "Ashford Dining Chair",
      path: "/product/ashford-dining-chair-ls-0630"
    },
    {
      videUrl: "https://cdn.shopify.com/videos/c/o/v/2a3690ed1ec3419db153e795b8f118d3.mp4",
      title: "Water Bottles",
      path: "/shop/water-bottles"
    },
  ]

  return (
    <>

      <div className='md:p-5'>
        <div className='flex justify-center text-center py-6'>
          <h3 className='text-center text-[22px] font-thin font-montserrat capitalize'>See it Styled</h3>
        </div>
        <div className="w-[93%] pt-5 mx-auto" >
          <Swiper
            slidesPerView={4.5}
            spaceBetween={10}
            touchRatio={1}
            simulateTouch={true}
            modules={[Mousewheel]}
            mousewheel={{
              forceToAxis: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 4.5,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={item.path}>

                  <div>
                    <video
                      src={item.videUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full object-cover"
                    />

                    <h3 className="text-center mt-4 text-[14px] font-thin">
                      {item.title}
                    </h3>

                    <div className="text-center mt-1">
                      <p className="underline text-[#A35C3A] font-medium text-[15px]" >
                        Shop Now
                      </p>
                    </div>
                  </div>

                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </>
  )
}

export default SeeinStyled
