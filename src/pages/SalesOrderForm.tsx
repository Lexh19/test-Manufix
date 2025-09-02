import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import OrderData from "@/components/OrderData"
import ProductDetail from "@/components/ProductDetail"
import ProductVariant from "@/components/ProductVariant"
import TotalCalculation from "@/components/TotalCalculation"
import PaymentSection from "@/components/PaymentSection"
import DesignSection from "@/components/DesignSection"
import SummaryPreview from "@/components/SummaryPreview"

export default function SalesOrderForm() {
  const [formData, setFormData] = useState<any>({
    orderData: {},
    productDetails: [],
    productVariants: [],
    totals: {},
    payment: {},
    design: {},
  })
  const [showPreview, setShowPreview] = useState(false)

  const handleSave = () => {
    console.log("Form Data:", formData)
    setShowPreview(true)
  }

  return (
    <div className="w-full min-h-screen p-8">

      <Card className="w-full p-6 space-y-6">
        <h2 className="text-center font-bold mb-6">Create Sales Order</h2>
        <OrderData formData={formData} setFormData={setFormData} />
        <ProductDetail formData={formData} setFormData={setFormData} />
        <ProductVariant formData={formData} setFormData={setFormData} />
        <TotalCalculation formData={formData} setFormData={setFormData} />
        <PaymentSection formData={formData} setFormData={setFormData} />
        <DesignSection formData={formData} setFormData={setFormData} />

        <Button onClick={handleSave} className="w-sm flex right">
          Save Order
        </Button>

        {showPreview && <SummaryPreview formData={formData} />}
      </Card>
    </div>
  )
}
