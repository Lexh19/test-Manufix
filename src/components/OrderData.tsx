import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useState } from "react"

export default function OrderData({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-sm font-semibold">ORDER DATA</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {/* Customer */}
          <div>
            <Label>Customer</Label>
            <Select
              onValueChange={(val) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, customer: val } })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cust1">Customer 1</SelectItem>
                <SelectItem value="cust2">Customer 2</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-blue-500 cursor-pointer mt-1">+ add new customer</p>
          </div>

          {/* Province */}
          <div>
            <Label>Province</Label>
            <Select
              onValueChange={(val) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, province: val } })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="-" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="province1">Province 1</SelectItem>
                <SelectItem value="province2">Province 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Order Name */}
          <div>
            <Label>Order Name</Label>
            <Input
              placeholder="Input Name"
              onChange={(e) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, orderName: e.target.value } })
              }
            />
          </div>

          {/* Product */}
          <div>
            <Label>Product</Label>
            <Select
              onValueChange={(val) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, product: val } })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product1">Product 1</SelectItem>
                <SelectItem value="product2">Product 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Segment */}
          <div>
            <Label>Segment</Label>
            <Select
              onValueChange={(val) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, segment: val } })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Segment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="segment1">Segment 1</SelectItem>
                <SelectItem value="segment2">Segment 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Priority Switch */}
          <div className="flex items-center space-x-2 pt-2">
            <Switch id="priority" />
            <Label htmlFor="priority">Priority</Label>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Address */}
          <div>
            <Label>Address</Label>
            <Textarea
              placeholder="Enter address"
              onChange={(e) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, address: e.target.value } })
              }
            />
          </div>

          {/* Date Pickers */}
          <div>
            <Label>Date</Label>
            <DatePicker
              value={formData.orderData?.date}
              onChange={(val) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, date: val } })
              }
            />
          </div>
          <div>
            <Label>Due Payment</Label>
            <DatePicker
              value={formData.orderData?.duePayment}
              onChange={(val) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, duePayment: val } })
              }
            />
          </div>
          <div>
            <Label>Date SPK</Label>
            <DatePicker
              value={formData.orderData?.dateSpk}
              onChange={(val) =>
                setFormData({ ...formData, orderData: { ...formData.orderData, dateSpk: val } })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Simple Date Picker with shadcn + popover
function DatePicker({ value, onChange }: any) {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full justify-start text-left font-normal", !value && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {/* Kalau sudah pakai shadcn calendar, bisa render di sini */}
        <div className="p-4">Calendar component here</div>
      </PopoverContent>
    </Popover>
  )
}
