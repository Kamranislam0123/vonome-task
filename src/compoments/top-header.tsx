'use client'

import React, { useState } from "react";
import {
  Menu,
  ShoppingCart,
  Package,
  MoreVertical,
  FileText,
  RotateCcw,
  History,
  FileEdit,
  Shrink,
  LogOut,
  Calculator,
} from "lucide-react";

export function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative top-0  flex flex-wrap items-center justify-between border-b bg-white px-4 py-2">
      {/* Mobile View */}
      <div className="w-full flex items-center justify-between lg:hidden">
        {/* Left Section - Mobile */}
        <div className="flex items-center gap-2">
          <button
            className="rounded-full border border-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
            <Package className="h-4 w-4" />
            <span className="text-sm">Order</span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">Cart</span>
          </button>
          <button className="flex items-center   text-yellow-300">
            <FileEdit className="h-5 w-5" />
            <span className="text-sm"> (0)</span>
          </button>
        </div>

        {/* Right Section - Mobile */}
        <div>
          <button className="rounded-full border border-black p-2">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Full View - Web */}
      <div className="hidden lg:flex w-full justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-black p-2">
            <Calculator className="h-5 w-5 text-gray-600" />
          </button>
          <div className="bg-green-100 px-3 py-1.5 rounded-full">
            <span className="text-sm text-green-400">10:53:00 || 26/02/2023</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
            <FileText className="h-4 w-4" />
            <span className="text-sm">Report</span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
            <RotateCcw className="h-4 w-4" />
            <span className="text-sm">Return</span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
            <History className="h-4 w-4" />
            <span className="text-sm">Recent</span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-yellow-300 bg-orange-50 px-3 py-1.5 text-yellow-300">
            <FileEdit className="h-4 w-4" />
            <span className="text-sm">Draft (0)</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-full border border-black px-3 py-1.5">
            <Shrink className="h-4 w-4" />
            <span className="text-sm">Screen</span>
          </button>
          <button className="flex items-center gap-2 rounded-full bg-green-700 px-4 py-2 text-white">
            <span className="text-sm font-medium">R</span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-red-500 bg-orange-50 px-3 py-1.5 text-red-500">
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Exit</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t lg:hidden">
          <ul className="p-4">
            <li className="py-2">Report</li>
            <li className="py-2">Return</li>
            <li className="py-2">Recent</li>
            <li className="py-2">Draft (0)</li>
            <li className="py-2">Screen</li>
            <li className="py-2">Exit</li>
          </ul>
        </div>
      )}
    </header>
  );
}
