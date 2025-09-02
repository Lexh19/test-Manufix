import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SummaryPreview({ formData }: any) {
  return (
    <Card className="mt-6 bg-muted">
      <CardHeader>
        <h2 className="font-semibold">Preview</h2>
      </CardHeader>
      <CardContent>
        <pre className="text-sm whitespace-pre-wrap">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </CardContent>
    </Card>
  )
}
