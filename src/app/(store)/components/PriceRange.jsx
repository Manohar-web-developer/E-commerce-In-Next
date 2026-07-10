"use client"

import { useEffect, useState } from "react"

export default function PriceRange({setPriceRange, maxPrice}) {
    const MIN = 0
    const MAX = maxPrice
    const [minVal, setMinVal] = useState(MIN)
    const [maxVal, setMaxVal] = useState(MAX)

    const minPercent = ((minVal - MIN) / (MAX - MIN)) * 100
    const maxPercent = ((maxVal - MIN) / (MAX - MIN)) * 100

    useEffect(() => {
        setPriceRange({
          min: minVal,
          max: maxVal,
        });
      }, [minVal, maxVal]);
    return (
        <div className="border-b border-gray-200 py-6">
            <div className="relative h-1 mb-6">
                <div className="absolute inset-0 rounded-full bg-gray-200" />
                <div
                    className="absolute h-1 rounded-full"
                    style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%`, backgroundColor: '#9c6b4a' }}
                />
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={minVal}
                    onChange={(e) => setMinVal(Math.min(Number(e.target.value), maxVal - 1))}
                    className="range-thumb absolute top-1/2 left-0 w-full -translate-y-1/2 appearance-none bg-transparent pointer-events-none" />
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={maxVal}
                    onChange={(e) => setMaxVal(Math.max(Number(e.target.value), minVal + 1))}
                    className="range-thumb absolute top-1/2 left-0 w-full -translate-y-1/2 appearance-none bg-transparent pointer-events-none" />
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="flex-1 border-b border-gray-300 pb-1 flex items-center gap-1">
                    <span className="text-gray-400 text-sm">₹</span>
                    <span className="text-gray-400 text-sm">{minVal}</span>
                </div>
                <span className="text-gray-400 text-sm">-</span>
                <div className="flex-1 border-b border-gray-300 pb-1 flex items-center gap-1">
                    <span className="text-gray-400 text-sm">₹</span>
                    <span className="text-gray-500 text-sm">{maxVal}</span>
                </div>
            </div>

            
        </div>
    )
}
