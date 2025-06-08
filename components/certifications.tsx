"use client"

const certifications = ["台灣室內設計協會會員", "國際室內設計協會認證", "綠建築設計認證", "ISO 9001 品質管理認證"]
const partners = ["Herman Miller", "Steelcase", "Knoll", "Vitra", "B&B Italia", "Cassina"]

export default function Certifications() {
  return (
    <section className="w-full py-16 bg-white border-t border-warm-100">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-6">專業認證</h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-warm-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-secondary-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-6">合作夥伴</h3>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-warm-50 rounded-lg border border-warm-200"
                >
                  <span className="text-secondary-600 font-medium text-center">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
