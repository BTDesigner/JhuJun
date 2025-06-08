"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    src: "/images/hero-living-room.jpg",
    alt: "現代客廳設計",
    title: "現代簡約客廳",
    category: "住宅",
  },
  {
    src: "/images/luxury-kitchen.jpg",
    alt: "豪華廚房設計",
    title: "開放式廚房",
    category: "住宅",
  },
  {
    src: "/images/modern-living-room.jpg",
    alt: "軟裝配置空間設計",
    title: "軟裝配置改造",
    category: "輕裝修",
  },
  {
    src: "/images/office-space.jpg",
    alt: "辦公空間設計",
    title: "現代辦公室",
    category: "商空",
  },
  {
    src: "/images/luxury-bathroom.jpg",
    alt: "豪華浴室設計",
    title: "豪華浴室",
    category: "住宅",
  },
  {
    src: "/images/cozy-bedroom.jpg",
    alt: "臥室軟裝設計",
    title: "臥室軟裝改造",
    category: "輕裝修",
  },
]

const categoryColors = {
  全部: { bg: "bg-primary-500", text: "text-primary-600", light: "bg-primary-50" },
  住宅: { bg: "bg-secondary-500", text: "text-secondary-600", light: "bg-secondary-50" },
  輕裝修: { bg: "bg-accent-500", text: "text-accent-600", light: "bg-accent-50" },
  商空: { bg: "bg-primary-500", text: "text-primary-600", light: "bg-primary-50" },
}

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const categories = ["全部", "住宅", "輕裝修", "商空"]

  const filteredImages =
    selectedCategory === "全部" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const colors = categoryColors[category]
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
                  selectedCategory === category
                    ? `${colors.bg} text-white shadow-lg`
                    : `${colors.light} ${colors.text} hover:${colors.light}`
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => {
            const colors = categoryColors[image.category]
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="object-cover w-full aspect-square group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${colors.bg} text-white text-xs font-medium rounded-full shadow-lg`}>
                    {image.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-6 w-full">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">點擊查看詳細資訊</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
