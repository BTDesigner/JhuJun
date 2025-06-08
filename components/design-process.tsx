"use client"

import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "初步諮詢",
    description: "深入了解您的需求、預算和時間安排，制定初步設計方向。",
    details: ["需求分析", "預算評估", "時程規劃", "風格定位"],
    gradient: "from-coral-400 to-coral-600",
    bgLight: "bg-coral-50",
    textColor: "text-coral-600",
  },
  {
    step: "02",
    title: "概念設計",
    description: "創建初步設計概念，包括空間規劃、色彩方案和材料選擇。",
    details: ["空間分析", "概念草圖", "材料樣板", "3D預覽"],
    gradient: "from-sky-400 to-sky-600",
    bgLight: "bg-sky-50",
    textColor: "text-sky-600",
  },
  {
    step: "03",
    title: "詳細設計",
    description: "完善設計細節，提供詳細的施工圖紙和材料清單。",
    details: ["施工圖紙", "材料清單", "燈光設計", "家具配置"],
    gradient: "from-emerald-400 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    step: "04",
    title: "項目執行",
    description: "協調施工團隊，監督項目進度，確保設計完美實現。",
    details: ["施工監督", "質量控制", "進度管理", "最終驗收"],
    gradient: "from-purple-400 to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
]

export default function DesignProcess() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-white via-warm-50 to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">專業設計流程</h2>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            我們遵循嚴格的專業流程，確保每個項目都能達到最高標準
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((process, index) => (
            <div key={index} className="relative">
              <div
                className={`bg-white rounded-lg p-6 shadow-lg border border-warm-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${process.bgLight}`}
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${process.gradient} text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-lg`}
                  >
                    {process.step}
                  </div>
                  <h3 className={`text-xl font-bold ${process.textColor}`}>{process.title}</h3>
                </div>

                <p className="text-secondary-600 mb-4 text-sm leading-relaxed">{process.description}</p>

                <ul className="space-y-2">
                  {process.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-secondary-700">
                      <CheckCircle className={`w-4 h-4 ${process.textColor} mr-2 flex-shrink-0`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-teal-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
