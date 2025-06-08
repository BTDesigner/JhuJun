"use client"

import Image from "next/image"
import { MessageCircle, Clock, Users, Award } from "lucide-react"

export default function LineContact() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 p-8 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-sky-200/30 to-emerald-200/30 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="text-center mb-6 relative z-10">
        <div className="flex items-center justify-center mb-3">
          <MessageCircle className="w-8 h-8 text-emerald-600 mr-2" />
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Line 即時諮詢
          </h3>
        </div>
        <p className="text-secondary-600 text-lg">掃描QR code加入我們的Line官方帳號</p>
        <p className="text-sm text-secondary-500 mt-1">立即獲得專業設計師的免費諮詢服務</p>
      </div>

      <div className="relative mb-6 group">
        <div className="w-64 h-64 bg-white rounded-2xl shadow-xl p-4 border-4 border-emerald-200 group-hover:border-emerald-300 transition-colors duration-300">
          <Image
            src="/placeholder.svg?height=240&width=240"
            alt="Line QR Code - 室內設計工作室官方帳號"
            width={240}
            height={240}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
        </div>

        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
          📱 掃描加入
        </div>
      </div>

      <div className="text-center space-y-3 mb-6 relative z-10">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-center space-x-2 text-emerald-600 bg-white/60 rounded-lg px-4 py-2">
            <Clock className="w-4 h-4" />
            <span className="font-medium text-sm">24小時快速回覆</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-teal-600 bg-white/60 rounded-lg px-4 py-2">
            <Users className="w-4 h-4" />
            <span className="font-medium text-sm">免費設計諮詢</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sky-600 bg-white/60 rounded-lg px-4 py-2">
            <Award className="w-4 h-4" />
            <span className="font-medium text-sm">專業設計師服務</span>
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-white/80 rounded-lg border border-emerald-200 backdrop-blur-sm relative z-10">
        <div className="text-center">
          <p className="text-sm text-secondary-600 mb-1">
            <strong className="text-emerald-600">Line ID:</strong> @interiordesign2025
          </p>
          <p className="text-xs text-secondary-500">或搜尋「室內設計工作室」</p>
        </div>
      </div>
    </div>
  )
}
