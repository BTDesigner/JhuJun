"use client"

import { Award, Users, Home, Star } from "lucide-react"

const stats = [
  {
    icon: Home,
    number: "500+",
    label: "完成項目",
    description: "成功交付的設計項目",
    bgColor: "bg-gradient-to-br from-teal-400 to-teal-600",
    textColor: "text-teal-600",
  },
  {
    icon: Users,
    number: "300+",
    label: "滿意客戶",
    description: "信任我們的客戶",
    bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
    textColor: "text-purple-600",
  },
  {
    icon: Award,
    number: "15+",
    label: "設計獎項",
    description: "獲得的專業認證",
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-600",
    textColor: "text-rose-600",
  },
  {
    icon: Star,
    number: "4.9",
    label: "客戶評分",
    description: "平均客戶滿意度",
    bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    textColor: "text-emerald-600",
  },
]

export default function ProfessionalStats() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-warm-50 via-sky-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>{stat.number}</div>
              <div className="text-lg font-semibold text-secondary-800 mb-1">{stat.label}</div>
              <div className="text-sm text-secondary-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
