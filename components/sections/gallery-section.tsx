"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog"

// Sample gallery data - replace with API call
const galleryImages = [
  {
    id: 1,
    title: "Summer Workshop 2024",
    image: "/creative-workshop-event.jpg",
    category: "workshop",
  },
  {
    id: 2,
    title: "Annual Art Exhibition",
    image: "/art-exhibition-gallery.png",
    category: "exhibition",
  },
  {
    id: 3,
    title: "Team Building Activity",
    image: "/outdoor-team-building.png",
    category: "team-building",
  },
  {
    id: 4,
    title: "Photography Workshop",
    image: "/photography-workshop-class.jpg",
    category: "workshop",
  },
  {
    id: 5,
    title: "Cultural Performance Night",
    image: "/cultural-performance-stage-event.jpg",
    category: "performance",
  },
  {
    id: 6,
    title: "Member Appreciation Dinner",
    image: "/elegant-dinner-celebration-event.jpg",
    category: "social",
  },
  {
    id: 7,
    title: "Design Competition",
    image: "/design-competition-showcase.jpg",
    category: "competition",
  },
  {
    id: 8,
    title: "Charity Fundraiser",
    image: "/charity-fundraiser-community-event.jpg",
    category: "fundraiser",
  },
]

const categories = [
  { id: "all", label: "All Events" },
  { id: "workshop", label: "Workshops" },
  { id: "exhibition", label: "Exhibitions" },
  { id: "performance", label: "Performances" },
  { id: "team-building", label: "Team Building" },
  { id: "social", label: "Social" },
  { id: "competition", label: "Competition" },
  { id: "fundraiser", label: "Fundraiser" },
]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
    setSelectedImage(filteredImages[lightboxIndex])
  }

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
    setSelectedImage(filteredImages[lightboxIndex])
  }

  const openImage = (image: (typeof galleryImages)[0], index: number) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Event Highlights Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the memorable moments from our past events and celebrations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id)
                setLightboxIndex(0)
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openImage(image, index)}
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted cursor-pointer"
              aria-label={`View ${image.title}`}
            >
              <img
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Overlay Title */}
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-sm line-clamp-2">{image.title}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No events found in this category</p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogPortal>
          <DialogOverlay className="bg-black/80" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh]">
              {selectedImage && (
                <>
                  {/* Main Image */}
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <img
                      src={selectedImage.image || "/placeholder.svg"}
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>

                  {/* Image Title */}
                  <div className="mt-4 text-center">
                    <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 rounded-full bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 rounded-full bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 p-2 rounded-full bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-110"
                    aria-label="Close lightbox"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {lightboxIndex + 1} / {filteredImages.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogPortal>
      </Dialog>
    </section>
  )
}
