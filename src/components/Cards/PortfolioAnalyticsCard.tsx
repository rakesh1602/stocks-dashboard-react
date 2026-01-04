import Chart from "react-apexcharts";

export default function PortfolioAnalyticsCard() {
  const series = [
    {
      name: "Portfolio Value",
      data: [8200, 9100, 8800, 10200, 11800, 14032],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#6425FE"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.5,
        opacityFrom: 0.35,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    grid: { show: false },
    xaxis: {
      categories: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    tooltip: {
      enabled: false, // using custom marker tooltip
    },
  };

  return (
    <div className="w-[700px] h-[398px] bg-gray-50 rounded-lg px-3 pt-6 pb-14 font-['Everett'] flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-[#2C2C2C]">
          Portfolio Analytics
        </p>

        <div className="flex items-center gap-3 text-xs">
          <span className="text-sm font-medium text-[#6425FE]">1D</span>
          <Divider />
          <span className="text-[#838383]">5D</span>
          <Divider />
          <span className="text-[#838383]">1M</span>
          <Divider />
          <span className="text-[#838383]">6M</span>
          <Divider />
          <span className="text-[#838383]">1Y</span>
          <Divider />
          <span className="text-[#838383]">5Y</span>
          <Divider />
          <span className="text-[#838383]">Max</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex gap-4 h-full">
        {/* Y Axis */}
        <div className="flex flex-col justify-between text-xs text-[#2C2C2C] py-2">
          <span>$15000</span>
          <span>$12000</span>
          <span>$9000</span>
          <span>$6000</span>
          <span>$3000</span>
          <span>$0</span>
        </div>

        {/* Chart */}
        <div className="relative flex-1 border border-[#838383] rounded-sm">
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-4 opacity-10 pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="border border-[#838383]" />
            ))}
          </div>

          {/* Dashed mid line */}
          <div className="absolute top-[30%] w-full border-t border-dashed border-[#2C2C2C]/50 z-10" />

          {/* Apex Chart */}
          <Chart
            options={options}
            series={series}
            type="area"
            height={214}
          />

          {/* Custom Marker */}
          <div className="absolute top-10 left-[48%] z-20 flex flex-col items-center">
            <div className="bg-[#6425FE] text-white px-3 py-2 rounded-lg text-xs">
              <p className="text-[#DCD2D2]">Jan 30, 01:12 AM</p>
              <p className="font-medium text-base">$14,032.56</p>
            </div>
            <div className="w-3 h-3 bg-[#6425FE] rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* X Axis */}
      <div className="flex justify-end gap-20 text-xs text-[#838383] pr-6">
        <span>10 am</span>
        <span>11 am</span>
        <span>12 pm</span>
        <span>1 pm</span>
        <span>2 pm</span>
        <span>3 pm</span>
      </div>
    </div>
  );
}

const Divider = () => (
  <span className="w-5 h-px bg-[#838383]/50 rotate-90" />
);
