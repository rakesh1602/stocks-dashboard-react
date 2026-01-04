import React from "react";
import Chart from "react-apexcharts";

export default function PortfolioCard() {
  // Sample data for mini chart
  const miniChartData = [29, 35, 30, 45, 40, 50, 42];

  const miniChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#77B900"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0,
        colorStops: [
          { offset: 0, color: "#77B900", opacity: 0.2 },
          { offset: 100, color: "transparent", opacity: 0 },
        ],
      },
    },
    tooltip: { enabled: false },
    yaxis: { min: Math.min(...miniChartData) - 5, max: Math.max(...miniChartData) + 5 },
    grid: { show: false },
    colors: ["#77B900"],
  };

  return (
    <div className="relative w-[340px] h-[436px] bg-gray-50 rounded-lg px-3 py-5 flex flex-col gap-5">
      {/* Balance */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-[#2C2C2C]">Balance</span>
        <div className="bg-[#6425FE] text-white rounded-lg px-5 py-4 text-xl font-medium w-[242px]">
          $14,032.56
        </div>
      </div>

      {/* Invested */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-[#2C2C2C]">Invested</span>
        <div className="bg-[#2C2C2C] text-white rounded-lg px-5 py-4 text-xl font-medium">
          $7,532.21
        </div>
      </div>

      {/* Top Stock */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[#838383]">Top Stock</span>

        <div className="bg-white rounded-lg p-4 flex flex-col gap-4 shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded" />
              <span className="text-xs font-medium text-[#2C2C2C]">Tesla Inc</span>
            </div>

            <div className="text-right text-xs">
              <div className="uppercase text-[#2C2C2C]">TSLA</div>
              <div className="text-[#77B900]">+17.63</div>
            </div>
          </div>

          {/* Values */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#838383]">Invested Value</p>
              <p className="text-sm font-medium text-[#2C2C2C]">$29.34</p>
            </div>

            <div>
              <p className="text-xs text-[#838383]">Current Value</p>
              <p className="text-sm font-medium text-[#2C2C2C]">$177.90</p>
            </div>

            {/* Mini Chart using Apex */}
            <div className="w-[78px] h-6">
              <Chart
                options={miniChartOptions}
                series={[{ data: miniChartData }]}
                type="area"
                height={24}
                width={78}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Arrow Button */}
      <button
        className="absolute bottom-4 left-1/2 -translate-x-1/2
                   w-[44px] h-[44px]
                   bg-[#6425FE]
                   rounded-lg
                   shadow-[0px_4px_17px_rgba(0,0,0,0.06)]
                   flex items-center justify-center"
      >
        <span className="block w-6 h-6 border-r-2 border-b-2 border-white rotate-45" />
      </button>

      {/* Growth Badge */}
      <div className="absolute top-13 right-4 w-[56px] h-[60px] bg-[#C7FFA5] rounded-lg flex items-center justify-center">
        <span className="text-sm text-[#2C2C2C] uppercase">+5.63%</span>
      </div>
    </div>
  );
}
