import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Trash2, Plus } from "lucide-react"

export default function ProductVariantForm() {
  const [variants, setVariants] = useState([
    { size: "XS", qty: 0, price: 0 },
    { size: "S", qty: 0, price: 0 },
    { size: "M", qty: 0, price: 0 },
    { size: "L", qty: 0, price: 0 },
    { size: "XL", qty: 0, price: 0 },
    { size: "2XL", qty: 0, price: 0 },
    { size: "3XL", qty: 0, price: 0 },
    { size: "4XL", qty: 0, price: 0 },
    { size: "5XL", qty: 0, price: 0 },
  ])

  const [shipping, setShipping] = useState({ method: "", weight: 0, cost: 0 })
  const [addition, setAddition] = useState([{ category: "", desc: "", amount: 0 }])
  const [deduction, setDeduction] = useState([{ category: "", desc: "", amount: 0 }])

  const totalProduct = variants.reduce((sum, v) => sum + v.qty * v.price, 0)
  const totalAddition = addition.reduce((sum, a) => sum + Number(a.amount || 0), 0)
  const totalDeduction = deduction.reduce((sum, d) => sum + Number(d.amount || 0), 0)
  const totalBill = totalProduct + Number(shipping.cost || 0) + totalAddition - totalDeduction

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-sm">PRODUCT VARIANT</h2>

      {/* Select Size */}
      <div className="mb-4">
        <Select>
          <SelectTrigger className="w-[30%]">
            <SelectValue placeholder="Select Size" />
          </SelectTrigger>
          <SelectContent>
            {variants.map((v, i) => (
              <SelectItem key={i} value={v.size}>
                {v.size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Input tambahan Variant */}
      <div className="flex gap-2">
        <Input placeholder="Variant" />
        <Input placeholder="Sub Variant" />
        <Input placeholder="Rp" type="number" />
        <Input placeholder="Price" type="number" />
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Variant Sizes */}
      <div className="flex flex-wrap gap-2">
        {variants.map((v, i) => (
          <div
            key={i}
            className="flex items-center border rounded-md overflow-hidden"
          >
            <span className="px-3 py-2 text-sm bg-gray-50 border-r">{v.size}</span>
            <Input
              type="number"
              min="0"
              value={v.qty}
              className="w-16 border-0 focus-visible:ring-0 focus:outline-none"
              onChange={(e) => {
                const newVariants = [...variants]
                newVariants[i].qty = Number(e.target.value)
                setVariants(newVariants)
              }}
            />
          </div>
        ))}
      </div>

      {/* Total Product */}
      <div className="flex items-center gap-3">
        <span className="w-32">Total Product</span>
        <Input className="w-20" value={variants.reduce((sum, v) => sum + v.qty, 0)} readOnly />
        <span>Pcs</span>
        <Input className="w-32" value={totalProduct} readOnly />
      </div>

      {/* Shipping */}
      <div className="flex items-center gap-3">
        <span className="w-32">Shipping</span>
        <Select
          onValueChange={(val) => setShipping({ ...shipping, method: val })}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Shipping" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jne">JNE</SelectItem>
            <SelectItem value="jnt">J&T</SelectItem>
          </SelectContent>
        </Select>
        <Input
          className="w-24"
          type="number"
          placeholder="Weight"
          onChange={(e) => setShipping({ ...shipping, weight: Number(e.target.value) })}
        />
        <span>Kg</span>
        <Input
          className="w-32"
          type="number"
          placeholder="Rp"
          onChange={(e) => setShipping({ ...shipping, cost: Number(e.target.value) })}
        />
      </div>

      {/* Addition */}
      <div className="flex items-center gap-3">
        <span className="w-32">Addition</span>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
        </Select>
        <Input placeholder="Description" className="flex-1" />
        <Input
          type="number"
          className="w-32"
          placeholder="Rp"
          onChange={(e) => setAddition([{ ...addition[0], amount: Number(e.target.value) }])}
        />
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Deduction */}
      <div className="flex items-center gap-3">
        <span className="w-32">Deduction</span>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
        </Select>
        <Input placeholder="Description" className="flex-1" />
        <Input
          type="number"
          className="w-32"
          placeholder="Rp"
          onChange={(e) => setDeduction([{ ...deduction[0], amount: Number(e.target.value) }])}
        />
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Total Bill */}
      <div className="font-semibold">
        Total Bill: Rp {totalBill.toLocaleString()}
      </div>
    </div>
  )
}
