import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Wrench,
  ImageIcon,
  GitBranch,
  Users,
  Info,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import ImageGallery from "@/components/image-gallery"
import HeroCarousel from "@/components/hero-carousel"
import ProfessionalStats from "@/components/professional-stats"
import DesignProcess from "@/components/design-process"
import TeamSection from "@/components/team-section"
import Certifications from "@/components/certifications"
import LineContact from "@/components/line-contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" id="top">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#top">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="築雋室內設計工程 Logo" width={120} height={30} className="h-8 w-auto" />
            <span className="font-semibold text-lg">築雋室內設計工程</span>
          </div>
        </Link>
        <nav className="flex gap-6">
          <Link
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors flex items-center gap-2"
            href="#services"
          >
            <Wrench className="h-4 w-4" />
            服務項目
          </Link>
          <Link
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors flex items-center gap-2"
            href="#portfolio"
          >
            <ImageIcon className="h-4 w-4" />
            作品集
          </Link>
          <Link
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors flex items-center gap-2"
            href="#process"
          >
            <GitBranch className="h-4 w-4" />
            設計流程
          </Link>
          <Link
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors flex items-center gap-2"
            href="#team"
          >
            <Users className="h-4 w-4" />
            設計團隊
          </Link>
          <Link
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors flex items-center gap-2"
            href="#about"
          >
            <Info className="h-4 w-4" />
            關於我們
          </Link>
          <Link
            className="text-sm font-medium text-secondary-700 hover:text-primary-600 transition-colors flex items-center gap-2"
            href="#contact"
          >
            <MessageSquare className="h-4 w-4" />
            聯繫我們
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section with User Provided Background */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* 用戶提供的背景圖片 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-background.jpg"
              alt="極簡室內設計背景"
              fill
              className="object-cover"
              style={{ objectPosition: "center 62%" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-transparent"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium shadow-sm">
                    ✨ 15年專業經驗 • 500+成功案例
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-secondary-800">
                    打造您夢想中的
                    <span className="bg-gradient-to-r from-primary-600 via-teal-600 to-purple-600 bg-clip-text text-transparent">
                      居住空間
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-secondary-700 text-lg md:text-xl leading-relaxed">
                    我們是台灣領先的室內設計工程公司，專注於創造美觀且實用的空間。從概念設計到最終實施，我們提供全方位的專業服務。
                  </p>
                </div>
                <div className="flex justify-start">
                  <Link href="#portfolio">
                    <Button
                      className="bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      查看我們的作品
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/20">
                    <div className="text-2xl font-bold text-primary-600">500+</div>
                    <div className="text-sm text-secondary-600">完成項目</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/20">
                    <div className="text-2xl font-bold text-primary-600">4.9★</div>
                    <div className="text-sm text-secondary-600">客戶評分</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/20">
                    <div className="text-2xl font-bold text-primary-600">15+</div>
                    <div className="text-sm text-secondary-600">設計獎項</div>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl shadow-2xl">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </section>

        <ProfessionalStats />

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-16 md:py-24 bg-gradient-to-br from-white via-coral-50 to-emerald-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">專業服務項目</h2>
                <p className="max-w-[900px] text-secondary-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我們提供全方位的室內設計服務，從住宅到商業空間，滿足您的各種需求
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-8 w-8 text-primary-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3h20" />
                    <path d="M21 3v18" />
                    <path d="M3 3v18" />
                    <path d="M2 21h20" />
                    <path d="M12 3v18" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">住宅空間設計</h3>
                  <p className="text-secondary-600">
                    從小坪數到豪宅，為每個家庭創造最適合的生活空間，注重功能性與美觀的完美結合。
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-sky-50 to-sky-100 border-sky-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-8 w-8 text-primary-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                    <path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                    <path d="M9 7V4a2 2 0 012-2h2a2 2 0 012 2v3" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">輕裝修空間設計</h3>
                  <p className="text-secondary-600">
                    以軟裝配置為主的空間改造，透過家具、色彩、燈光等元素提升空間質感，經濟實惠的設計方案。
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-8 w-8 text-primary-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">商業空間設計</h3>
                  <p className="text-secondary-600">
                    辦公室、餐廳、零售店面等商業空間設計，提升品牌形象，創造更好的商業價值。
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-8 w-8 text-primary-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <path d="M6 12H3" />
                    <path d="M9 3v15a3 3 0 0 1-6 0v-3" />
                    <circle cx="9" cy="9" r="1" />
                    <circle cx="21" cy="12" r="1" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">全案統包服務</h3>
                  <p className="text-secondary-600">
                    從設計到施工一條龍服務，專業團隊管理，讓您省心省力，確保品質與進度。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="w-full py-16 md:py-24 bg-gradient-to-br from-sky-50 via-warm-50 to-purple-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">精選作品集</h2>
                <p className="max-w-[900px] text-secondary-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  探索我們完成的一些精選室內設計項目，每個作品都體現了我們的專業水準
                </p>
              </div>
            </div>
            <ImageGallery />
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg" className="shadow-md">
                查看完整作品集
              </Button>
            </div>
          </div>
        </section>

        <section id="process">
          <DesignProcess />
        </section>

        <section id="team">
          <TeamSection />
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">關於我們</h2>
                  <p className="max-w-[600px] text-secondary-600 text-lg leading-relaxed">
                    成立於2008年，築雋室內設計工程是台灣領先的室內設計工程公司，致力於為客戶創造美觀、功能性和個性化的空間。
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">15年專業經驗</h3>
                      <p className="text-secondary-600">
                        我們的設計師團隊擁有豐富的行業經驗，累積完成500+個成功項目，涵蓋住宅與商業空間。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">客戶至上的服務理念</h3>
                      <p className="text-secondary-600">
                        我們重視每位客戶的獨特需求和願景，提供量身定制的設計方案，確保最終結果超出您的期望。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">品質保證與售後服務</h3>
                      <p className="text-secondary-600">
                        我們提供完整的品質保證和售後服務，確保每個細節都達到最高標準。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  alt="我們的工作室"
                  className="aspect-video object-cover"
                  height={450}
                  src="/images/team-photo.jpg"
                  width={800}
                />
              </div>
            </div>
          </div>
        </section>

        <Certifications />

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-warm-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">客戶見證</h2>
                <p className="max-w-[900px] text-secondary-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  聽聽我們的客戶怎麼說，真實的評價是我們最好的推薦
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between gap-6 rounded-lg border bg-white p-8 shadow-lg">
                <div>
                  <div className="flex gap-0.5 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-3">完全超出我的期望</p>
                    <p className="text-secondary-600 leading-relaxed">
                      "築雋的設計師們非常專業且有創意。他們完全理解了我的需求，並將我的想法轉化為一個美麗的家。整個過程非常順暢，從設計到施工都有專人負責，我對最終結果非常滿意。"
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    alt="客戶照片"
                    className="rounded-full object-cover"
                    height={50}
                    src="/images/client-avatar-1.jpg"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <p className="font-semibold">陳雅婷女士</p>
                    <p className="text-sm text-secondary-600">台北市信義區 • 住宅設計</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-lg border bg-white p-8 shadow-lg">
                <div>
                  <div className="flex gap-0.5 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-3">專業且高效的服務</p>
                    <p className="text-secondary-600 leading-relaxed">
                      "我們的辦公室需要重新設計，築雋的團隊提供了令人驚嘆的解決方案。他們不僅考慮了美觀，還特別注重功能性和員工的舒適度。項目按時完成，預算控制得很好，非常推薦！"
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    alt="客戶照片"
                    className="rounded-full object-cover"
                    height={50}
                    src="/images/client-avatar-2.jpg"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <p className="font-semibold">林建宏先生</p>
                    <p className="text-sm text-secondary-600">新竹科學園區 • 辦公室設計</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">聯繫我們</h2>
                <p className="max-w-[900px] text-secondary-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  準備開始您的設計之旅？掃描Line QR code立即與我們聯繫，獲得免費初步諮詢
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 p-4 bg-warm-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-500" />
                  <div>
                    <h3 className="font-bold">工作室地址</h3>
                    <p className="text-secondary-600">台北市信義區松仁路100號12樓</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-warm-50 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-500" />
                  <div>
                    <h3 className="font-bold">聯繫電話</h3>
                    <p className="text-secondary-600">02-2345-6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-warm-50 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-500" />
                  <div>
                    <h3 className="font-bold">電子郵件</h3>
                    <p className="text-secondary-600">info@interiordesign.com.tw</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Image
                    alt="工作室位置"
                    className="rounded-lg object-cover shadow-lg"
                    height={300}
                    src="/images/office-location.jpg"
                    width={500}
                  />
                </div>
              </div>

              {/* Line Contact Component */}
              <LineContact />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-warm-50">
        <p className="text-xs text-secondary-600">© 2025 築雋室內設計工程. 版權所有. | 統一編號: 12345678</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-secondary-600" href="#">
            服務條款
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-secondary-600" href="#">
            隱私政策
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-secondary-600" href="#">
            網站地圖
          </Link>
        </nav>
      </footer>
    </div>
  )
}
