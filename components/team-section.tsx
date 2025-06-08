"use client"

import Image from "next/image"
import { Award, GraduationCap, Users } from "lucide-react"

const teamMembers = [
  {
    name: "張雅婷",
    position: "首席設計師",
    experience: "15年經驗",
    speciality: "現代簡約風格",
    education: "台灣科技大學建築系",
    awards: "2023年台灣室內設計大獎",
    image: "/images/client-avatar-1.jpg",
  },
  {
    name: "李建華",
    position: "資深設計師",
    experience: "12年經驗",
    speciality: "豪華古典風格",
    education: "實踐大學室內設計系",
    awards: "2022年亞洲設計獎銀獎",
    image: "/images/client-avatar-2.jpg",
  },
  {
    name: "王美玲",
    position: "空間規劃師",
    experience: "10年經驗",
    speciality: "商業空間設計",
    education: "中原大學室內設計系",
    awards: "2021年商業空間設計獎",
    image: "/images/client-avatar-1.jpg",
  },
]

export default function TeamSection() {
  return (
    <section className="w-full py-16 bg-warm-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">專業設計團隊</h2>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            我們的設計師團隊擁有豐富的經驗和專業認證，致力於為您創造完美空間
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-800 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.position}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Users className="w-4 h-4 mr-2 text-primary-500" />
                    {member.experience} • {member.speciality}
                  </div>
                  <div className="flex items-center text-sm text-secondary-600">
                    <GraduationCap className="w-4 h-4 mr-2 text-primary-500" />
                    {member.education}
                  </div>
                  <div className="flex items-center text-sm text-secondary-600">
                    <Award className="w-4 h-4 mr-2 text-primary-500" />
                    {member.awards}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
