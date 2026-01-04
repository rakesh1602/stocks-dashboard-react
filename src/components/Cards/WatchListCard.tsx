import watchListData from '../../data/WatchListData';

export default function WatchListCard() {

    return (
        <div className="relative w-[350px] h-[436px] bg-gray-50 rounded-lg px-3 py-5 flex flex-col gap-5">
            {/* Header */}
            <div className="text-sm font-medium text-[#2C2C2C]">
                Watchlist
            </div>

            {/* List */}
            <div className="relative flex flex-col gap-4">
                
                {watchListData?.map((item, index) => (
                    <div key={index}>
                        {/* Row */}
                        <div className="flex items-center justify-between">
                            {/* Left */}
                            <div className="flex items-center gap-2">
                                {/* Logo placeholder */}
                                <div className="w-6 h-6 rounded bg-gray-200">{item.logo} </div>
                                <span className="text-xs font-medium text-[#2C2C2C]">
                                    {item.name}
                                </span>
                            </div>

                            {/* Right */}
                            <div className="text-right text-xs">
                                <div className="text-[#2C2C2C]">{item.price}</div>
                                <div className={item.changeColor}>{item.change}</div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mt-3 h-px w-full bg-[#E8E9FF]" />
                    </div>
                ))}
            </div>

            {/* Fade gradient */}
            <div className="absolute bottom-10 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Scroll Button */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-11 h-11 bg-[#E8E9FF] shadow-md rounded-full flex items-center justify-center rotate-90">
                <span className="border-r-2 border-b-2 border-[#6F6AF8] w-3 h-3 rotate-45" />
            </div>

            {/* Add Button */}
            <div className="absolute top-4 right-3 w-6 h-6 bg-[#6425FE] rounded flex items-center justify-center">
                <span className="text-white text-lg leading-none">+</span>
            </div>
        </div>
    );

};