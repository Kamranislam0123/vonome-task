import { BottomToolbar } from '@/compoments/bottom-toolbar';
import { OrderTable } from '@/compoments/order-table';
import { ProductGrid } from '@/compoments/product-grid';
import { TopHeader } from '@/compoments/top-header';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex h-screen flex-col bg-gray-50">
            <TopHeader />
            <div className="flex flex-1 overflow-hidden">
              {/* Left Side - Products */}
              <div className="flex w-[640px] flex-col border-r">
                {/* Search - Sticky */}
                <div className="sticky top-0 z-10 border-b bg-white p-4">
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
                <div className="sticky top-[73px] z-10 border-b bg-white">
                  <div className="flex items-center gap-2 p-4">
                    <button className="rounded-md bg-emerald-500 px-4 py-1.5 text-sm font-medium text-white">
                      All medicine
                    </button>
                    <button className="rounded-md px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100">
                      Total Medicine (250)
                    </button>
                    <button className="ml-auto rounded-md border px-4 py-1.5 text-sm font-medium text-gray-600">
                      Select brand
                    </button>
                  </div>
                </div>

                {/* Scrollable Product Grid */}
                <div className="flex-1 overflow-y-auto p-4">
                  <ProductGrid />
                </div>
              </div>

              {/* Right Side - Order Details */}
              <div className="flex flex-1 flex-col">
                {/* Customer Selection - Sticky */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">Walking Customer</span>
                  </div>
                  <button className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white">
                    Add customer
                  </button>
                </div>

                {/* Barcode Scanner - Sticky */}
                <div className="sticky top-[65px] z-10 border-b bg-white p-4">
                  <input
                    type="text"
                    placeholder="Scan barcode, product code"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* Order Table */}
                <div className="flex-1 overflow-hidden">
                  <OrderTable />
                </div>

                {/* Bottom Toolbar - Sticky */}
                <div className="sticky bottom-0 border-t bg-white">
                  <BottomToolbar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
