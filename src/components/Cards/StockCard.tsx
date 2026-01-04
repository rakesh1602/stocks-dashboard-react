import type { StockCardData } from "../../data/StockCardData"

const CARD_BASE =
  "flex flex-col justify-center gap-4 px-3 py-4 rounded-lg transition hover:brightness-95"

const TOP_ROW = "flex items-center w-[185px] justify-between"
const BOTTOM_ROW = "flex items-center w-[185px] h-10 gap-[34px]"

export function StockCard({
  bg,
  logo,
  name,
  symbol,
  price,
  change,
  changeColor,
  textColor,
  width = "w-[209px]",
  align = "center",
}: StockCardData) {
  return (
    <a
      href="#"
      className={`${CARD_BASE} ${bg} ${width} h-[116px] ${
        align === "center" ? "items-center" : "items-start"
      }`}
    >
    
      <div className={TOP_ROW}>
        <div className="flex items-center gap-1.5">
          <div className="w-auto h-6 rounded bg-black/10" >
          {logo}</div>
          <span className={`text-xs font-medium ${textColor}`}>
            {name}
          </span>
        </div>

        <div className="flex flex-col items-end text-xs uppercase">
          <span className={textColor}>{symbol}</span>
          <span className={changeColor}>{change}</span>
        </div>
      </div>

    
      <div className={BOTTOM_ROW}>
        <div className="flex flex-col gap-1">
          <span className={`text-xs ${textColor} opacity-80`}>
            Current Value
          </span>
          <span className={`text-lg font-medium ${textColor}`}>
            {price}
          </span>
        </div>

      
      </div>
    </a>
  )
}
