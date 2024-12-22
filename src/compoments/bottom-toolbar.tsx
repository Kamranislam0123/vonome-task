"use client";
import { ArrowRight, Calculator } from "lucide-react";
import { useState } from "react";
import { PaymentModal } from "./payment-modal";

export function BottomToolbar() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,auto] gap-4 p-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-md bg-red-500 px-4 py-2 md:px-6 md:py-4 text-sm font-medium text-white">
            Reset
          </button>
          <button className="rounded-md bg-blue-400 px-4 py-2 md:px-6 md:py-4 text-sm font-medium text-white">
            Add. info
          </button>
          <button className="rounded-md bg-pink-400 px-4 py-2 md:px-6 md:py-4 text-sm font-medium text-white">
            Discount
          </button>
          <button className="rounded-md bg-orange-400 px-4 py-2 md:px-6 md:py-4 text-sm font-medium text-white">
            Draft
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="font-medium text-base text-gray-600">Total</span>
          <span className="text-xl md:text-2xl font-medium">660.00</span>
        </div>
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <button className="rounded-md bg-slate-600 border px-4 py-2 md:px-6 md:py-4 ">
            <Calculator className="h-6 w-6 md:h-10 md:w-10 text-white" />
          </button>
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="flex items-center flex-row rounded-md bg-emerald-500 px-4 py-2 md:px-6 md:py-4 text-base font-medium text-white"
          >
            Payment
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalAmount={660.0}
        orderNumber="102"
      />
    </>
  );
}
