"use client";

import { X, Receipt, CreditCard, Smartphone, Banknote } from "lucide-react";
import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  orderNumber: string;
}

export function PaymentModal({
  isOpen,
  onClose,
  totalAmount,
  orderNumber,
}: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<"cash" | "card" | "mfs">(
    "cash"
  );

  if (!isOpen) return null;

  // Input Amount Validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);

    // Prevent negative or zero values
    if (value <= 0 || isNaN(value)) {
      e.target.value = ""; // Clear invalid input
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50">
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 shadow-sm z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium">Order payment</h2>
              <p className="text-sm text-gray-500">Order #{orderNumber}</p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[70vh] p-6">
          {/* Total Amount */}
          <div className="mt-6 flex flex-row items-center justify-between bg-blue-200 p-4 rounded-xl">
            <div className="text-sm text-gray-600">Total Amount</div>
            <div className="text-2xl font-medium text-emerald-600">
              Tk {totalAmount.toFixed(2)}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <div className="mb-3 text-sm text-gray-600">Payment method</div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setSelectedMethod("cash")}
                className={`flex flex-col items-center rounded-lg border p-4 ${
                  selectedMethod === "cash"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200"
                }`}
              >
                <Banknote className="h-6 w-6 text-gray-600" />
                <span className="mt-2 text-sm">Cash</span>
              </button>
              <button
                onClick={() => setSelectedMethod("card")}
                className={`flex flex-col items-center rounded-lg border p-4 ${
                  selectedMethod === "card"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200"
                }`}
              >
                <CreditCard className="h-6 w-6 text-gray-600" />
                <span className="mt-2 text-sm">Bank/Card</span>
              </button>
              <button
                onClick={() => setSelectedMethod("mfs")}
                className={`flex flex-col items-center rounded-lg border p-4 ${
                  selectedMethod === "mfs"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200"
                }`}
              >
                <Smartphone className="h-6 w-6 text-gray-600" />
                <span className="mt-2 text-sm">MFS</span>
              </button>
            </div>
          </div>

          {/* Input Amount */}
          <div className="mt-2">
            <div className="mb-2 text-sm text-gray-600">Input amount</div>
            <input
              type="number"
              className="w-full rounded-lg border text-center border-gray-200 p-3 text-lg outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="0"
              onInput={handleInputChange}
            />
          </div>

          {/* Payment Details Table */}
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <tbody>
                  {/* Subtotal */}
                  <tr>
                    <td className="border border-gray-200 p-2 text-sm text-gray-600">
                      Subtotal
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm">
                      Tk 600.00
                    </td>
                  </tr>

                  {/* Vat/Tax */}
                  <tr>
                    <td className="border border-gray-200 p-2 text-sm text-gray-600">
                      Vat/Tax
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm">
                      Tk 60.00
                    </td>
                  </tr>

                  {/* Discount */}
                  <tr>
                    <td className="border border-gray-200 p-2 text-sm text-gray-600">
                      Discount
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm">
                      Tk 00.00
                    </td>
                  </tr>

                  {/* Adjustment */}
                  <tr>
                    <td className="border border-gray-200 p-2 text-sm text-gray-600">
                      Adjustment
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm">
                      Tk 00.00
                    </td>
                  </tr>

                  {/* Total */}
                  <tr className="bg-cyan-500 text-white">
                    <td className="border border-gray-200 p-2 text-sm font-medium">
                      Total
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm font-medium">
                      Tk 660.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse border p-2 border-gray-200">
                
                <tbody>
                  {/* Token */}
                  <tr>
                    <td className="border border-gray-200 p-2 text-sm text-gray-600">
                      Token
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm">
                      00.00
                    </td>
                  </tr>

                  {/* Return */}
                  <tr>
                    <td className="border border-gray-200 p-2 text-sm text-gray-600">
                      Return
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm">
                      00.00
                    </td>
                  </tr>

                  {/* Paid */}
                  <tr className="bg-emerald-500 text-white">
                    <td className="border border-gray-200 p-2 text-sm font-medium">
                      Paid
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm font-medium">
                      00.00
                    </td>
                  </tr>

                  {/* Due */}
                  <tr className="bg-red-500 text-white">
                    <td className="border border-gray-200 p-2 text-sm font-medium">
                      Due
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm font-medium">
                      00.00
                    </td>
                  </tr>

                  {/* Status */}
                  <tr>
                    <td className="border border-gray-200 p-2 text-sm text-gray-600">
                      Status
                    </td>
                    <td className="border border-gray-200 p-2 text-right text-sm">
                      ---
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white p-6 shadow-sm z-10">
          <div className="mt-2 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-200 py-4 px-2 text-sm text-red-400 font-medium hover:bg-gray-50"
            >
              Close
            </button>
            <button className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm text-green-400  font-medium hover:bg-gray-50">
              <Receipt className="mr-2 inline-block h-4 w-4" />
              Receipt
            </button>
            <button className="flex-1 rounded-lg border border-gray-200  py-2.5 text-sm font-medium text-green-400 ">
              Mark as paid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
