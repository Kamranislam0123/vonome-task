import {
  Clock,
  FileText,
  RotateCcw,
  History,
  FileEdit,
  Keyboard,
  Shrink,
  LogOut,
} from "lucide-react";

export function TopHeader() {
  return (
    <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between border-b bg-white px-4 py-2">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {/* Keyboard Button */}
        <button className="rounded-full border border-black p-2">
          <Keyboard className="h-5 w-5 text-gray-600" />
        </button>
        {/* Time Display */}
        <div className="bg-green-100 px-3 py-1.5 rounded-full">
          <span className="text-sm text-green-400">10:53:00 || 26/02/2023</span>
        </div>
      </div>

      {/* Middle Section - Buttons */}
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        {/* Report Button */}
        <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
          <FileText className="h-4 w-4" />
          <span className="text-sm">Report</span>
        </button>
        {/* Return Button */}
        <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
          <RotateCcw className="h-4 w-4" />
          <span className="text-sm">Return</span>
        </button>
        {/* Recent Button */}
        <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
          <History className="h-4 w-4" />
          <span className="text-sm">Recent</span>
        </button>
        {/* Draft Button */}
        <button className="flex items-center gap-2 rounded-full border border-yellow-300 bg-orange-50 px-3 py-1.5 text-yellow-300">
          <FileEdit className="h-4 w-4" />
          <span className="text-sm">Draft (0)</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex gap-2 mt-2 sm:mt-0">
        {/* Screen Button */}
        <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
          <Shrink className="h-4 w-4" />
          <span className="text-sm">Screen</span>
        </button>
        {/* Rounded Green Button */}
        <button className="flex items-center gap-2 rounded-full bg-green-700 px-4 py-2 text-white">
          <span className="text-sm font-medium">R</span>
        </button>
        {/* Exit Button */}
        <button className="flex items-center gap-2 rounded-full border border-red-500 bg-orange-50 px-3 py-1.5 text-red-500">
          <LogOut className="h-4 w-4" />
          <span className="text-sm">Exit</span>
        </button>
      </div>
    </header>
  );
}
