import { BottomToolbar } from "@/compoments/bottom-toolbar";
import { OrderTable } from "@/compoments/order-table";
import { ProductGrid } from "@/compoments/product-grid";
import { TopHeader } from "@/compoments/top-header";
import { Plus, QrCode, Search, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex h-screen flex-col bg-gray-50">
            <TopHeader />
            <div className="flex flex-1 overflow-hidden gap-x-4">
              {/* Left Side - Products */}
              <div className="flex flex-1 flex-col border-r w-1/2">
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

                {/* Scrollable Product Grid */}
                <div className="flex-1 overflow-y-auto p-4">
                  <ProductGrid />
                </div>
              </div>

              {/* Right Side - Order Details */}
              <div className="flex flex-1 flex-col w-1/2">
                {/* Customer Selection - Sticky */}
                <div className="sticky top-0  flex items-center justify-between border-b bg-white p-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
                    <select className="pl-10 pr-4 rounded-md border px-4 py-2 text-sm font-medium text-gray-600">
                      <option value="walking">Walking Customer</option>
                      <option value="customer1">Customer 1</option>
                      <option value="customer2">Customer 2</option>
                    </select>
                  </div>
                  <button className="flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white">
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
                <div className="flex-1 overflow-y-auto p-4 border border-gray-300 rounded-md">
                  <div className="h-full overflow-y-auto">
                    <OrderTable />
                  </div>
                </div>
                <div className="flex items-center justify-evenly rounded-md bg-gray-100 ">
                  <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-row  gap-4 items-center">
                      <div className="font-medium text-gray-600">Subtotal</div>
                      <div className="bg-slate-300 border rounded px-4 py-2 font-medium ml-auto">
                        Tk. 600.00
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="font-medium text-gray-600">Vat/Tax</div>
                      <div className="bg-slate-300 border rounded px-4 py-2 font-medium ml-auto">
                        Tk. 60.00
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-4 ">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="font-medium  text-gray-600">Discount</div>
                      <div className=" bg-slate-300  border rounded px-4 py-2 font-medium ml-auto">
                        Tk. 00.00
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center  ">
                      <div className="font-medium  text-gray-600">
                        Adjustment
                      </div>
                      <div className=" bg-white border rounded px-8 py-2 font-medium ml-auto">
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Toolbar - Sticky */}
        <div className="sticky bottom-0 w-full border-t justify-center bg-white">
          <BottomToolbar />
        </div>
      </section>
    </>
  );
}
