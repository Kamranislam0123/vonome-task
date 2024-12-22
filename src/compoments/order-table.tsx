import { Minus, Plus, Trash2 } from 'lucide-react'

export function OrderTable() {
  const orders = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    name: "Paracetamol 500Mg",
    unit: "Pcs",
    price: 300,
    qty: 0,
    discount: 99,
    subtotal: 300,
  }))

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm sm:text-base">
          <thead className="sticky top-0 bg-white shadow-sm">
            <tr className="border-b border-gray-200">
              <th className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-left font-medium text-gray-600">
                Item
              </th>
              <th className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-left font-medium text-gray-600">
                Unit
              </th>
              <th className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-left font-medium text-gray-600">
                Price
              </th>
              <th className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-center font-medium text-gray-600">
                Qty
              </th>
              <th className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-right font-medium text-gray-600">
                Disc%
              </th>
              <th className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-right font-medium text-gray-600">
                Subtotal
              </th>
              <th className="w-[40px] sm:w-[50px] border border-gray-200"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200">
                <td className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3">{order.name}</td>
                <td className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3">{order.unit}</td>
                <td className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3">{order.price}</td>
                <td className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <button className="rounded-md border p-1 hover:bg-gray-100">
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <span>{order.qty}</span>
                    <button className="rounded-md border p-1 hover:bg-gray-100">
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </td>
                <td className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-right">
                  {order.discount}
                </td>
                <td className="whitespace-nowrap border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-right">
                  {order.subtotal}
                </td>
                <td className="w-[40px] sm:w-[50px] border border-gray-200 px-2 py-2 sm:px-4 sm:py-3">
                  <button className="rounded p-1 text-red-500 hover:bg-red-50">
                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
