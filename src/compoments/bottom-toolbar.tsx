import { Calculator } from 'lucide-react'

export function BottomToolbar() {
  return (
    <div className="grid grid-cols-[1fr,auto,auto] gap-4 p-4">
      <div className="flex items-center gap-4">
        <button className="rounded-md bg-red-100 px-6 py-2 text-sm font-medium text-red-600">
          Reset
        </button>
        <button className="rounded-md bg-blue-100 px-6 py-2 text-sm font-medium text-blue-600">
          Add. info
        </button>
        <button className="rounded-md bg-pink-100 px-6 py-2 text-sm font-medium text-pink-600">
          Discount
        </button>
        <button className="rounded-md bg-orange-100 px-6 py-2 text-sm font-medium text-orange-600">
          Draft
        </button>
      </div>
      <div className="flex items-center gap-8 rounded-md bg-gray-100 px-6">
        <div>
          <div className="text-sm text-gray-600">Subtotal</div>
          <div className="font-medium">Tk. 600.00</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Discount</div>
          <div className="font-medium">Tk. 00.00</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Vat/Tax</div>
          <div className="font-medium">Tk. 60.00</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Ajustment</div>
          <div className="font-medium">0</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-md border p-2">
          <Calculator className="h-5 w-5" />
        </button>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-600">Total</span>
          <span className="text-2xl font-medium">660.00</span>
        </div>
        <button className="rounded-md bg-emerald-500 px-6 py-2 text-sm font-medium text-white">
          Payment
        </button>
      </div>
    </div>
  )
}

