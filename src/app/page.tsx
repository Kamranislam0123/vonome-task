'use client'
import { useState } from "react";

import { Plus, QrCode, Search, User } from 'lucide-react';
import { TopHeader } from "@/compoments/top-header";
import { ProductGrid } from "@/compoments/product-grid";
import { OrderTable } from "@/compoments/order-table";
import { BottomToolbar } from "@/compoments/bottom-toolbar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Tablets");
  const [activeSection, setActiveSection] = useState("products");

  const tabs = ["Tablets", "Syrups", "Injections", "Capsules", "Others"];

  return (
    <section className="flex flex-col h-screen bg-gray-50">
      <TopHeader />
      
      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex border-b bg-white">
        <button
          onClick={() => setActiveSection("products")}
          className={`flex-1 py-2 text-center ${activeSection === "products" ? "text-emerald-600 border-b-2 border-emerald-600" : "text-gray-600"}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveSection("order")}
          className={`flex-1 py-2 text-center ${activeSection === "order" ? "text-emerald-600 border-b-2 border-emerald-600" : "text-gray-600"}`}
        >
          Order
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-2 md:flex-row overflow-hidden">
        {/* Left Side - Products */}
        <div className={`flex-1 flex flex-col border-r ${activeSection === "products" ? 'flex' : 'hidden'} md:flex overflow-y-hidden`}>

          {/* Search - Sticky */}
          <div className="sticky top-0  border-b bg-white p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Product name, Generic, Barcode no"
                className="w-full rounded-md border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Categories - Sticky */}
          <div className="sticky top-[73px]  border-b bg-white">
            <div className="flex items-center gap-2 p-4">
              <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100">
                Total Medicine (250)
              </button>
              <select className="ml-auto rounded-md border px-4 py-1.5 text-sm font-medium text-gray-600">
                <option value="brand1">Select Brand </option>
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
                <option value="brand3">Brand 3</option>
                <option value="brand4">Brand 4</option>
              </select>
            </div>
          </div>

          {/* Tabs for Medicine Categories */}
          <div className="sticky top-[137px]  border-b bg-white p-4">
            <div className="flex gap-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-md px-4 py-1.5 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab ? "bg-emerald-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Product Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            <ProductGrid />
          </div>
        </div>

        {/* Right Side - Order Details */}
        <div className={`flex-1 flex flex-col ${activeSection === "order" ? 'flex' : 'hidden'} md:flex`}>
          {/* Customer Selection - Sticky */}
          <div className="sticky top-0  flex items-center justify-between border-b bg-white p-4">
            <div className="relative flex-1 mr-2">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
              <select className="w-full pl-10 pr-4 rounded-md border px-4 py-2 text-sm font-medium text-gray-600">
                <option value="walking">Walking Customer</option>
                <option value="customer1">Customer 1</option>
                <option value="customer2">Customer 2</option>
              </select>
            </div>
            <button className="flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
              <Plus className="h-4 w-4" /> Add customer
            </button>
          </div>

          {/* Barcode Scanner - Sticky */}
          <div className="sticky top-[65px]  border-b bg-white p-4">
            <div className="relative">
              <QrCode className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Scan barcode, product code"
                className="w-full rounded-md border border-gray-200 bg-gray-50 pl-10 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Order Table - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="h-full overflow-y-auto border border-gray-300 rounded-md">
              <OrderTable />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar - Sticky */}
      <div className="sticky bottom-0 w-full border-t bg-white">
        <BottomToolbar />
      </div>
    </section>
  );
}

