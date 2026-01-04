import Chart from "react-apexcharts";

export default function MarketCard() {
  // Sample chart data
  const chartData = [11600, 11620, 11610, 11650, 11630, 11680, 11670, 11690];
  
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      sparkline: { enabled: true },
      animations: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#6425FE"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0,
        colorStops: [
          { offset: 0, color: "#6425FE", opacity: 0.3 },
          { offset: 100, color: "transparent", opacity: 0 },
        ],
      },
    },
    grid: { show: false },
    tooltip: { enabled: true },
    yaxis: {
      min: Math.min(...chartData) - 20,
      max: Math.max(...chartData) + 20,
    },
    xaxis: { labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false } },
  };

  return (
    <div className="relative w-[340px] h-[433px] bg-gray-50 rounded-lg px-3 py-5 flex flex-col gap-5">
      
      {/* Exchange Pills */}
      <div className="flex gap-3">
        <span className="px-3 py-1 text-xs font-medium text-white bg-[#6425FE] rounded-lg">NASDAQ</span>
        <span className="px-3 py-1 text-xs font-medium text-[#838383] rounded-lg">SSE</span>
        <span className="px-3 py-1 text-xs font-medium text-[#838383] rounded-lg">Euronext</span>
        <span className="px-3 py-1 text-xs font-medium text-[#838383] rounded-lg">BSE</span>
      </div>

      {/* Time Range Selector */}
      <div className="relative flex items-center justify-center gap-5 text-sm">
        <span className="font-medium text-[#6425FE]">1D</span>
        <Divider />
        <span className="text-[#838383] text-xs">5D</span>
        <Divider />
        <span className="text-[#838383] text-xs">1M</span>
        <Divider />
        <span className="text-[#838383] text-xs">6M</span>
        <Divider />
        <span className="text-[#838383] text-xs">1Y</span>

        {/* Active underline */}
        <span className="absolute bottom-0 left-0 w-7 h-[2px] bg-[#6425FE]" />
      </div>

      {/* Chart Area */}
      <div className="relative h-[160px] mt-2 flex">
        {/* Y Axis */}
        <div className="flex flex-col justify-between text-xs text-[#838383] pr-2">
          <span>11,700</span>
          <span>11,650</span>
          <span>11,600</span>
          <span>11,550</span>
        </div>

        {/* Apex Chart */}
        <div className="flex-1">
          <Chart
            options={chartOptions}
            series={[{ data: chartData }]}
            type="area"
            height={160}
          />
        </div>
      </div>

      {/* Time Labels */}
      <div className="flex justify-end gap-[78px] text-xs text-[#838383] pr-4">
        <span>10 am</span>
        <span>11 am</span>
        <span>12 pm</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {/* High */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">High</span>
          <span className="text-sm font-medium text-gray-900">11,691.89</span>
        </div>

        {/* Prev Close */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Prev close (Avg 28 Days)</span>
          <span className="text-sm font-medium text-gray-900">11,512.41</span>
        </div>

        {/* Low */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Low</span>
          <span className="text-sm font-medium text-gray-900">11,470.47</span>
        </div>

        {/* Open */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Open</span>
          <span className="text-sm font-medium text-gray-900">11,690.11</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */
function Divider() {
  return <span className="w-[20px] h-[1px] bg-[#838383]/50 rotate-90" />;
}
