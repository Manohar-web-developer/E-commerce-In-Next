"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What makes Living Shapes different from other furniture brands in India?",
    answer: "Living Shapes combines modern design with affordability and quality. We focus on creating furniture that's both aesthetically pleasing and functional for Indian homes."
  },
  {
    id: 2,
    question: "What type of products does Living Shapes specialize in?",
    answer: "We specialize in modern furniture including chairs, tables, sofas, beds, storage solutions, and home decor items designed for contemporary living spaces."
  },
  {
    id: 3,
    question: "Can I customize furniture to match my space or style?",
    answer: "Yes! We offer customization options for colors, materials, and dimensions. Contact our team to discuss your specific requirements."
  },
  {
    id: 4,
    question: "What materials are used in Living Shapes products?",
    answer: "We use premium materials including solid wood, high-quality upholstery, metal frames, and eco-friendly materials to ensure durability and sustainability."
  },
  {
    id: 5,
    question: "How do you ensure the quality of your modern furniture?",
    answer: "Each piece goes through rigorous quality checks at multiple stages of production. We maintain high standards in craftsmanship and material sourcing."
  },
  {
    id: 6,
    question: "Which areas do you deliver to, and what are the delivery charges?",
    answer: "We deliver across major cities in India. Delivery charges vary based on location and product size. Free delivery available on orders above a certain value."
  },
  {
    id: 7,
    question: "What is your return or exchange policy?",
    answer: "We offer a 30-day return/exchange policy for unused items in original condition. For defects, we provide replacements within the warranty period."
  },
  {
    id: 8,
    question: "Do you offer EMI or financing options for large orders?",
    answer: "Yes! We partner with leading financial institutions to offer EMI options for purchases above ₹50,000. Contact us for more details."
  }
];

function FaqSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-center text-2xl font-light tracking-[0.3em] text-gray-900">
            FAQS
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqData.map((faq) => (
            <div key={faq.id}>
              {/* Question */}
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full py-6 flex items-start gap-4 hover:bg-gray-50 transition-colors text-left group"
              >
                {/* Icon */}
                <div className="shrink-0 mt-1">
                  {expandedId === faq.id ? (
                    <Minus size={16} className="text-gray-900" />
                  ) : (
                    <Plus size={16} className="text-gray-900 group-hover:text-gray-600" />
                  )}
                </div>

                {/* Question Text */}
                <h3 className="text-[14px] font-medium text-gray-900 leading-relaxed cursor-pointer">
                  {faq.question}
                </h3>
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="pl-10 pb-6 pr-4">
                  <p className="text-gray-700 leading-relaxed text-[14px]">
                    {faq.answer}
                  </p>
                </div>
              )}

              {/* Divider */}
              <div className="h-px bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;