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
    <div className="h-full overflow-hidden">
      <table className="w-full">
        <thead className="sticky top-0 z-10 bg-white">
          <tr className="border-b text-sm">
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-600">
              Item
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-600">
              Unit
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-600">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-center font-medium text-gray-600">
              Qty
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-right font-medium text-gray-600">
              Disc%
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-right font-medium text-gray-600">
              Subtotal
            </th>
            <th className="w-[50px]"></th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {orders.map((order) => (
            <tr key={order.id} className="border-b text-sm">
              <td className="whitespace-nowrap px-4 py-3">{order.name}</td>
              <td className="whitespace-nowrap px-4 py-3">{order.unit}</td>
              <td className="whitespace-nowrap px-4 py-3">{order.price}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <div className="flex items-center justify-center gap-2">
                  <button className="rounded-md border p-1 hover:bg-gray-100">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span>{order.qty}</span>
                  <button className="rounded-md border p-1 hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right">
                {order.discount}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right">
                {order.subtotal}
              </td>
              <td className="w-[50px] px-4 py-3">
                <button className="rounded p-1 text-red-500 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

