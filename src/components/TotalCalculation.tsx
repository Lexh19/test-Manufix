import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function TotalCalculation({ formData, setFormData }: any) {
  const totalProducts =
    (formData.productVariants || []).reduce(
      (acc: number, v: any) => acc + (v.qty || 0),
      0
    ) || 0
  const totalAmount =
    (formData.productVariants || []).reduce(
      (acc: number, v: any) => acc + (v.qty || 0) * (v.price || 0),
      0
    ) || 0

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Total Calculation</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Total Product (pcs)</Label>
          <Input value={totalProducts} readOnly />
        </div>
        <div>
          <Label>Total Amount</Label>
          <Input value={totalAmount} readOnly />
        </div>
      </div>
    </div>
  )
}
