"use client"

import { useRef, useState, useEffect } from "react"
import STOCKS from "../../data/StockCardData"
import { StockCard } from "./StockCard"
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline"

const SCROLL_AMOUNT = 240

export default function StockCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = () => {
    const el = containerRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current
    if (!el) return

    el.scrollBy({
      left: direction === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    updateScrollButtons()
  }, [])

  return (
    <div className="relative">
      {/* Cards */}
      <div
        ref={containerRef}
        onScroll={updateScrollButtons}
        className="flex gap-4 px-1 py-6 overflow-x-auto scroll-smooth no-scrollbar"
        style={{ maxWidth: "1200px" }}
      >
        {STOCKS.map((stock) => (
          <StockCard key={stock.symbol} {...stock} />
        ))}
      </div>

      {/* LEFT Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute bottom-[47.5px] left-4 z-[5]
                   flex items-center justify-center
                   w-[44px] h-[44px] rounded-lg
                   bg-[#6425FE]
                   shadow-[0px_4px_17px_rgba(0,0,0,0.12)]"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
      )}

      {/* RIGHT Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute bottom-[47.5px] right-4 z-[5]
                   flex items-center justify-center
                   w-[44px] h-[44px] rounded-lg
                   bg-[#6425FE]
                   shadow-[0px_4px_17px_rgba(0,0,0,0.12)]"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  )
}
