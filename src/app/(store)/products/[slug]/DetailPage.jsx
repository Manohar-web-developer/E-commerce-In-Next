"use client";
import axios from 'axios';
import Cookies from 'js-cookie'
import { Star } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"
import TrustDataHome from '../../components/TrustDataHome';
import ProductCard from '../../components/product/ProductCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/Cartslice';
import CartSlide from '../../components/CartSlide';

function DetailPage() {
  const { slug } = useParams();
  const [apiData, setapiData] = useState(null)
  const [openGallery, setOpenGallery] = useState(false);
  const [displayImage, setDisplayImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [qty, SetQty] = useState(1)
  const [relatedProducts, setRelatedProducts] = useState([]);

  const QtyIncress = () => {
    SetQty((prev) => prev + 1)
  }
  const QtyDecress = () => {
    if (qty > 1) {
      SetQty((prev) => prev - 1)
    }
  }

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
    if (!apiData) return;

    axios.get('https://livingshapes.in/collections/all/products.json?limit=250')
      .then((res) => {
        const filtered = res.data.products
          .filter((item) =>
            item.product_type == apiData.product_type
          )
          .slice(0, 4);


        setRelatedProducts(filtered);

      })
      .catch((err) => console.log("Related products error:", err));
  }, [apiData]);



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
  const AccordionItems = [
    {
      value: "item-1",
      trigger: "Description",
      content:
        "Crafted with high-quality polyresin this piece showcases sleek modern look, infusing your space with art and elegance Sienna Polyresin is crafted with peak modernity, the high quality Polyresin showcases the sculptures art of finesse. This product is manmade, with gentle care making each piece truly one of a kind! This craftsmanship ensure no two items are exactly alike, adding a personal touch to your decor.Please note: due to variations in screen displays across devices, the actual colors of the product may differ slightly from what you see on your screen.",
    },
    {
      value: "item-2",
      trigger: "Care Instructions",
      content:
        `   Keep dry to prevent rust; wipe spills immediately.
           Wipe with a lint- free cloth to avoid streaks.
           Avoid sharp or heavy objects that may scratch glazed surfaces.
          Place on stable, flat surfaces to prevent tipping.
          Avoid stacking heavy items on top of delicate trays or bowls.
          Be careful with fragile items like glass or ceramic bowls and trays.
          Avoid dragging items across surfaces to prevent scratches or dents`
    },
    {
      value: "item-3",
      trigger: "Shipping & Returns",
      content:
        "Your purchase is eligible for return or replacement only if it meets the following conditions: Click Here",
    },
  ]

  const dispatch = useDispatch()




  return (
    <>
      <div className='w-full'>
        <div className='w-[85%] mx-auto flex items-center pt-7'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/shop/${apiData?.product_type?.toLowerCase().replace(/\s+/g, "-")}`}>{apiData?.product_type}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{apiData?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className='min-h-0 md:min-h-[700px] w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 pt-10'>

          <div className='md:hidden block'>



            <div className='pb-3 md:pb-5'>
              <h1 className='text-[17px] sm:text-[20px] capitalize font-semibold font-montserrat'>
                {apiData?.title}
              </h1>
            </div>

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
            <div className='text-sm pt-3'>Flat <span className='text-3xl font-montserrat text-[#3c1d04]'> {Math.round(
              ((Number(apiData?.variants?.[0]?.compare_at_price) -
                Number(apiData?.variants?.[0]?.price)) /
                Number(apiData?.variants?.[0]?.compare_at_price)) *
              100
            )}%</span>OFF</div>
            <div className='text-[#48392c] font-medium font-montserrat py-2'>Prepaid Orders — Get <strong>5%</strong> off with <strong>LIVING5</strong></div>
          </div>
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
            <div className='hidden md:block'>



              <div className='pb-3 md:pb-5'>
                <h1 className='text-[17px] sm:text-[20px] capitalize font-semibold font-montserrat'>
                  {apiData?.title}
                </h1>
              </div>

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
              <div className='text-sm pt-3'>Flat <span className='text-3xl font-montserrat text-[#3c1d04]'> {Math.round(
                ((Number(apiData?.variants?.[0]?.compare_at_price) -
                  Number(apiData?.variants?.[0]?.price)) /
                  Number(apiData?.variants?.[0]?.compare_at_price)) *
                100
              )}%</span>OFF</div>
              <div className='text-[#48392c] font-medium font-montserrat py-2'>Prepaid Orders — Get <strong>5%</strong> off with <strong>LIVING5</strong></div>
            </div>
            <hr className='md:w-1/2 pb-5' />
            <div className='flex gap-1 text-sm pb-5'>
              <Star size={18} className='text-[#97644d]' />
              <Star size={18} className='text-[#97644d]' />
              <Star size={18} className='text-[#97644d]' />
              <Star size={18} className='text-[#97644d]' />
              <Star size={18} className='text-[#97644d]' />
              <p className='underline font-semibold'> No Reviews </p>
            </div>
            <div className='text-sm font-medium'>{apiData?.variants?.[0]?.sku}</div>
            <div className='flex items-center pt-5'>
              <button onClick={() => QtyDecress()} className='px-5 py-3 text-xl bg-gray-100 cursor-pointer'>-</button>
              <p className='text-center px-5 py-3 text-xl border border-gray-200'>{qty}</p>
              <button onClick={() => QtyIncress()} className='px-5 py-3 text-xl bg-gray-100 cursor-pointer'>+</button>

            </div>
            {/*  Details Page Add To Cart And Buy Button */}
            <div className='pt-5 md:flex gap-4 hidden '>
              <button className='text-center border border-[#3c1d04] bg-[#FAF7F6] px-15 py-4 cursor-pointer' onClick={() => dispatch(addToCart(apiData))}>Add To Cart</button>
              <button className='text-center bg-[#3C1D04] text-white uppercase font-extralight px-15 py-4 cursor-pointer'>Buy It Now</button>
            </div>
            {/* Accordion */}
            <div className='pt-8'>
              <h3 className='font-semibold pb-3'>Fast & Free Delivery Within 8-9 Working Days</h3>
              <hr className='md:w-1/2 text-gray-300' />
              <Accordion className="max-w-lg">
                {AccordionItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
        <div className='pt-9'>
          <TrustDataHome />
        </div>
        <div className='w-full pt-6'>
          <div className='w-5/6 mx-auto'>
            <h2 className="text-2xl font-semibold mb-6">
              Trending Now
            </h2>
            <hr />
            <div className='grid grid-cols-4 gap-x-5 mt-8'>

              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
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

      <div className='fixed bottom-0 border w-screen h-[60px] bg-white md:hidden'>
        <div className='p-3 w-full grid grid-cols-2 gap-4 '>
          <button className='text-center border border-[#3c1d04] bg-[#FAF7F6] h-full py-1 cursor-pointer' onClick={() => dispatch(addToCart(apiData))}>Add To Cart</button>
          <button className='text-center bg-[#3C1D04] text-white uppercase font-extralight h-full py-2 cursor-pointer'>Buy It Now</button>
        </div>
      </div>
      
    </>
  )
}

export default DetailPage