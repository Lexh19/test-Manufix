import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function DesignSection({ formData, setFormData }: any) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Design</h2>

      <div>
        <Label>Upload Design</Label>
        <Input
          type="file"
          onChange={(e) =>
            setFormData({
              ...formData,
              design: {
                ...formData.design,
                file: e.target.files ? e.target.files[0].name : "",
              },
            })
          }
        />
        {formData.design?.file && (
          <p className="text-sm mt-2">File: {formData.design.file}</p>
        )}
      </div>

      <div>
        <Label>Design Note</Label>
        <Textarea
          placeholder="Enter design notes"
          onChange={(e) =>
            setFormData({
              ...formData,
              design: { ...formData.design, note: e.target.value },
            })
          }
        />
      </div>
    </div>
  )
}
