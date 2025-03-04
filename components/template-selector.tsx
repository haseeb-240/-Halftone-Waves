import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const templates = [
  {
    id: "modern",
    name: "Modern",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful-shot-wooden-pathway-riverbank-burning-forest-opposite-coast.jpg-msPi283BQd2aJwLo7AQSYQ9FtRN1z0.jpeg",
    description: "Sleek Design",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wooden-pathway-water-surrounded-by-trees-with-foggy-background.jpg-bX9odvk0oYpP3ZXhum7utmeV0YO9jt.jpeg",
    description: "Clean Simplicity",
  },
  {
    id: "classic",
    name: "Classic",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-with-fog.jpg-HEFh7GbZeIUAK8rv1IVVo5ug3mpQ3h.jpeg",
    description: "Timeless Appeal",
  },
  {
    id: "professional",
    name: "Professional",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3d-render-tree-against-sunset-sky.jpg-dOXOlirLxBO4g18D1ga2z7yolta6Li.jpeg",
    description: "Executive Style",
  },
]

export default function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-[#343a40]">Choose a Template</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border border-[#dee2e6]">
        <div className="flex w-max space-x-4 p-4">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`w-[250px] flex-shrink-0 cursor-pointer transition-all hover:scale-105 ${
                selectedTemplate === template.id ? "ring-2 ring-[#495057]" : ""
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardContent className="p-0 overflow-hidden">
                <div className="relative aspect-[3/4] mb-2">
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity hover:opacity-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                    <p className="text-xs text-gray-200">{template.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

