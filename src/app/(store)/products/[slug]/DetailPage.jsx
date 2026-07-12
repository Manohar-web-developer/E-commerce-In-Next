"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


function DetailPage() {
  const { slug } = useParams();
  const [apiData, setapiData] = useState(null)
  const [openGallery, setOpenGallery] = useState(false);
  const [displayImage, setDisplayImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`https://livingshapes.in/products/${slug}.json`)
      .then((res) => {
        setapiData(res.data.product)
        setDisplayImage(res.data.product.image.src)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [slug])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!openGallery || !apiData?.images) return;

      if (e.key === "ArrowRight") {
        const next =
          currentIndex === apiData.images.length - 1
            ? 0
            : currentIndex + 1;

        setCurrentIndex(next);
        setDisplayImage(apiData.images[next].src);
      }

      if (e.key === "ArrowLeft") {
        const prev =
          currentIndex === 0
            ? apiData.images.length - 1
            : currentIndex - 1;

        setCurrentIndex(prev);
        setDisplayImage(apiData.images[prev].src);
      }

      if (e.key === "Escape") {
        setOpenGallery(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openGallery, currentIndex, apiData]);

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    const prev =
      currentIndex === 0
        ? apiData.images.length - 1
        : currentIndex - 1;

    setCurrentIndex(prev);
    setDisplayImage(apiData.images[prev].src);
  };

  const goNext = (e) => {
    if (e) e.stopPropagation();
    const next =
      currentIndex === apiData.images.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(next);
    setDisplayImage(apiData.images[next].src);
  };

  return (
    <>
      <div className='w-full'>
        <div className='min-h-0 md:min-h-[700px] w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 pt-10'>

          {/* Image + thumbnails block */}
          <div className='flex flex-col-reverse md:grid md:grid-cols-[1fr_5fr] gap-3 md:gap-2 min-w-0'>

            {/* Thumbnails: horizontal scroll on mobile, vertical column on desktop */}
            <div className='w-full flex flex-row md:flex-col gap-2 md:gap-4 items-center md:items-end overflow-x-auto md:overflow-visible pb-2 md:pb-0'>
              {apiData?.images?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`shrink-0 w-[48px] h-[48px] sm:w-[58px] sm:h-[58px] border cursor-pointer ${currentIndex === index ? 'border-black' : 'border-[#cacaca]'
                      }`}
                    onClick={() => {
                      setDisplayImage(item.src);
                      setCurrentIndex(index);
                    }}
                  >
                    <img src={item.src} alt={item.title} className='w-full h-full object-cover' />
                  </div>
                )
              })}
            </div>

            {/* Main image */}
            <div
              className='w-full h-[280px] sm:h-[420px] md:h-[658px] cursor-zoom-in border border-gray-300'
              onClick={() => setOpenGallery(true)}
            >
              <img src={displayImage} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details block */}
          <div className='ps-0 md:ps-7'>
            <div className='pb-3 md:pb-5'>
              <h1 className='text-[17px] sm:text-[20px] capitalize font-semibold font-montserrat'>
                {apiData?.title}
              </h1>
            </div>
            <div>
              <div className='font-semibold flex flex-wrap items-center gap-2 sm:gap-4'>
                <h1 className='text-[18px] sm:text-[22px] capitalize font-medium font-montserrat'>
                  Rs. {Number(apiData?.variants?.[0]?.price).toLocaleString("en-IN")}
                </h1>
                <h1 className='text-[18px] sm:text-[22px] capitalize font-medium font-montserrat line-through text-gray-700'>
                  Rs. {Number(apiData?.variants?.[0]?.compare_at_price).toLocaleString("en-IN")}
                </h1>
                <h1 className='text-[16px] sm:text-[22px] capitalize font-medium font-montserrat'>
                  ({Math.round(
                    ((Number(apiData?.variants?.[0]?.compare_at_price) -
                      Number(apiData?.variants?.[0]?.price)) /
                      Number(apiData?.variants?.[0]?.compare_at_price)) *
                    100
                  )}% OFF)
                </h1>
              </div>
              <div className='text-[#976E4D] font-thin'>(All-inclusive price — No hidden charges)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen gallery */}
      <div>
        {openGallery && (
          <div
            className="fixed inset-0 bg-white w-screen h-screen z-50 flex items-center justify-center px-4"
            onClick={() => setOpenGallery(false)}
          >
            {/* Prev button: bottom on mobile, side on desktop */}
            <button
              className="absolute left-2 sm:left-8 bottom-16 sm:bottom-0 sm:-translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center text-2xl sm:text-3xl cursor-pointer bg-white"
              onClick={goPrev}
            >
              ‹
            </button>

            <img
              src={displayImage}
              alt=""
              className="w-full sm:w-5/6 h-[70%] sm:h-5/6 object-contain"
            />

            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-sm sm:text-l text-[#bababa]">
              {currentIndex + 1} / {apiData?.images?.length}
            </div>

            <button
              className="absolute right-2 sm:right-8 bottom-16 sm:bottom-0 sm:-translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center text-2xl sm:text-3xl cursor-pointer bg-white"
              onClick={goNext}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default DetailPage