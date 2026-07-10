"use client"

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Kanika Pawar",
    rating: 5,
    title: "Really Happy With it!",
    image: "https://livingshapes.in/cdn/shop/files/s-blob-v1-image-woy2ghqscag_results-blob-v1-image-woy2ghqscag_webp.webp?v=1762596099",
    text: "I recently purchased the Hill Haven Chair, and I'm really pleased with it. The chair arrived promptly and was well-packaged, which was a good start.\n\nFirst off, I love the design—it's modern yet subtle, fitting in perfectly with my study room. The chair feels sturdy but surprisingly light, so moving it around is no hassle. The seat is comfortable with just the right amount of cushioning, making it great for both work and meals.\n\nPutting it together was straightforward; the instructions were clear, and all the tools were included. The materials seem durable, and the craftsmanship is top-notch.\n\nWhat I really appreciate is how ergonomic it is. The back support is excellent, which is crucial for someone like me who spends hours at a desk. It's definitely helping with my posture.\n\nOverall, I'm really happy with my purchase. It's practical, stylish, and adds a nice touch to my space. I'd definitely recommend it if you're looking for a comfortable and well-designed chair for your home."
  },
  {
    id: 2,
    name: "Pulkit Nagpal",
    rating: 5,
    title: "Beautiful and comfortable chair",
    image: "https://livingshapes.in/cdn/shop/files/s-blob-v1-image-6d-jfqy-diy_results-blob-v1-image-6d-jfqy-diy_webp.webp?v=1762596144",
    text: "It looks amazing in my livingroom. The seat and pillow is very comfortable too. The chair got delivered very fast within 3-4 days. The packaging was properly done and installation is also very easy. Overall great product."
  },
  {
    id: 3,
    name: "Nagavidya Nagavidya",
    rating: 5,
    title: "Quality and Comfortable",
    image: "https://livingshapes.in/cdn/shop/files/image_5.webp?v=1762595894",
    text: "Package - very safely packed\nLook - exactly as shown in the picture\nMaterial - looks posh\nComfort - it's a low seating with a comfortable back rest\nFinish - definitely a premium quality!\nDelivery - was delivered very quick.\nCustomer service - immediate response\nDefinitely a good buy and a very satisfied customer."
  }
];

function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-center text-2xl md:text-3xl font-light tracking-wide text-gray-900">
            Customer Love
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={handlePrev}
            className="hidden md:flex shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Card */}
          <div className="w-full md:flex-1 bg-[#FFF5EF] rounded-2xl md:rounded-3xl p-6 md:p-8 md:max-w-2xl">
            
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6">
              
              {/* Image */}
              <div className="shrink-0 mx-auto sm:mx-0">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={96}
                  height={96}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-sm"
                />
              </div>

              {/* Name & Rating */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {current.name}
                </h3>
                <div className="flex gap-1 justify-center sm:justify-start">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Title */}
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              {current.title}
            </h4>

            {/* Review Text */}
            <div className="h-40 sm:h-48 overflow-y-auto pr-2 md:pr-4">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-xs sm:text-sm">
                {current.text}
              </p>
            </div>

            {/* Scrollbar styling */}
            <style>{`
              div::-webkit-scrollbar {
                width: 6px;
              }
              div::-webkit-scrollbar-track {
                background: #f0ebe5;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb {
                background: #d4b5a0;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: #c29f8a;
              }
            `}</style>
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={handleNext}
            className="hidden md:flex shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Mobile Controls - Arrows below card */}
        <div className="md:hidden flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerTestimonials;