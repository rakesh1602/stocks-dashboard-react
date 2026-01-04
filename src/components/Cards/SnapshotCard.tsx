export default function SnapshotCard() {
  return (
    <div className="relative w-[340px] h-[433px] bg-gray-50 rounded-lg p-5 flex flex-col gap-5">
      
      {/* Header */}
      <div className="text-sm font-medium text-gray-900">
        Snapshot
      </div>

      {/* Prev Close / Open */}
      <div className="flex justify-between mt-2">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Prev Close</span>
          <span className="text-xxl font-medium text-gray-900">
            12,051.48
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400">Open</span>
          <span className="text-xl font-medium text-gray-900">
            12,000.21
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E9FF]" />

      {/* Day Low / Day High */}
      <div className="relative">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900">
              11,999.87
            </span>
            <span className="text-xs text-gray-400">Day Low</span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-sm font-medium text-gray-900">
              12,248.15
            </span>
            <span className="text-xs text-gray-400">Day High</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mt-3 h-1 bg-[#F8A5FF] rounded">
          <div className="absolute top-[-6px] left-[75%] w-[3px] h-4 bg-gray-900 rounded" />
        </div>

        <div className="mt-2 text-xl font-medium text-gray-900 text-right">
          12,166.60
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E9FF]" />

      {/* 52 Week Low / High */}
      <div className="relative">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900">
              10,440.64
            </span>
            <span className="text-xs text-gray-400">
              52 Week Low
            </span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-sm font-medium text-gray-900">
              15,265.42
            </span>
            <span className="text-xs text-gray-400">
              52 Week High
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mt-3 h-1 bg-[#F8A5FF] rounded">
          <div className="absolute top-[-6px] left-[30%] w-[3px] h-4 bg-gray-900 rounded" />
        </div>

        <div className="mt-2 text-xl font-medium text-gray-900">
          12,166.60
        </div>
      </div>

       <hr className="border-[#E8E9FF] mb-6" />


    </div>
  );
}
