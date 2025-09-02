import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProductDetail({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-sm font-semibold">PRODUCT DETAIL</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Material Detail */}
          <div>
            <Label className="mb-2 block">Material Detail</Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Category */}
              <Select
                onValueChange={(val) =>
                  setFormData({ ...formData, productDetail: { ...formData.productDetail, category: val } })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat1">Category 1</SelectItem>
                  <SelectItem value="cat2">Category 2</SelectItem>
                </SelectContent>
              </Select>

              {/* Material */}
              <Select
                onValueChange={(val) =>
                  setFormData({ ...formData, productDetail: { ...formData.productDetail, material: val } })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mat1">Material 1</SelectItem>
                  <SelectItem value="mat2">Material 2</SelectItem>
                </SelectContent>
              </Select>

              {/* Input Color */}
              <Input
                className="mt-4"
                placeholder="Input Color"
                onChange={(e) =>
                  setFormData({ ...formData, productDetail: { ...formData.productDetail, color: e.target.value } })
                }
              />
            </div>

            {/* Add Button */}
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="mt-3"
              onClick={() => console.log("Add material")}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Printing Detail */}
          <div>
            <Label className="mb-2 block">Printing Detail</Label>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => console.log("Add printing detail")}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Product Note */}
          <div>
            <Label className="mb-2 block">Product Note</Label>
            <Textarea
              placeholder="Enter product note"
              onChange={(e) =>
                setFormData({ ...formData, productDetail: { ...formData.productDetail, note: e.target.value } })
              }
            />
          </div>

          {/* Embroidery Detail */}
          <div>
            <Label className="mb-2 block">Embroidery Detail</Label>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => console.log("Add embroidery detail")}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
