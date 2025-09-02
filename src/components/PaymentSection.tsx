import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export default function PaymentSection({ formData, setFormData }: any) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Add Payment</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Wallet</Label>
            <Select
              onValueChange={(val) =>
                setFormData({
                  ...formData,
                  payment: { ...formData.payment, wallet: val },
                })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Wallet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="ewallet">E-Wallet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Payment Amount</Label>
            <Input
              type="number"
              placeholder="Rp"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  payment: {
                    ...formData.payment,
                    amount: parseInt(e.target.value) || 0,
                  },
                })
              }
            />
          </div>

          <div>
            <Label>Remaining Payment</Label>
            <Input value={formData.payment?.remaining || 0} readOnly />
          </div>
        </div>

        {/* Kanan */}
        <div className="space-y-4">
          {/* Payment Date */}
          <div>
            <Label>Payment Date</Label>
            <Input
              type="date"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  payment: { ...formData.payment, date: e.target.value },
                })
              }
            />
          </div>

          {/* Attachment */}
          <div>
            <Label>Attachment</Label>
            <div className="border rounded-md p-4 text-center text-sm text-gray-500 cursor-pointer">
              Drag & drop your files or <span className="text-blue-500">Browse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
