import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  Eye,
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Star,
  Shield,
  Laptop,
  Building,
  Plane,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ISMTWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Website developed by Siddhant Bhattarai */}
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/ismt-logo.png" alt="ISMT Logo" width={48} height={48} className="rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ISMT</h1>
                <p className="text-sm text-gray-600">College</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                Courses
              </Link>
              <Link href="#mission" className="text-gray-700 hover:text-blue-600 transition-colors">
                Mission
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Established 2011 • UK Partnership</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Earn UK Qualifications in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Nepal
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  ISMT bridges the gap between academia and industry with internationally recognized qualifications from
                  University of Sunderland, UK, and Pearson Edexcel, UK.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Courses
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">13+</div>
                  <div className="text-sm text-gray-600">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Degree Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">UK</div>
                  <div className="text-sm text-gray-600">Partnerships</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/campus-building.jpg"
                  alt="ISMT Campus Building"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-gray-800 mb-4">About ISMT</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Redefining Higher Education in Nepal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2011, ISMT has been on a mission to contribute to Nepal's higher education by providing
              internationally recognized and industry-relevant qualifications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/images/students-classroom.jpg"
                alt="ISMT Students in Modern Classroom"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Academic Excellence & Industry Relevance</h3>
              <p className="text-gray-600 leading-relaxed">
                In academic partnership with the University of Sunderland, UK, and Pearson Edexcel, UK, ISMT is
                redefining higher education with a bold vision—bridging the gap between academia and industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to academic excellence is reflected in our inclusive and cost-effective educational
                approach, delivering international standards while adopting core local values.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">International Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-medium">Local Values</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Holistic Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">UK Qualifications</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Project-Based Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Interactive discussions, presentations, and diverse assessment methodologies that encourage active
                  student engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Extracurricular Activities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Sports clubs, workshops, bootcamps, and special interest groups promoting technical expertise and
                  leadership skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Global Competitive Edge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Earn prestigious UK qualifications without leaving Nepal, gaining a competitive edge in the global job
                  market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Our Programs</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Internationally Recognized Degree Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of industry-relevant programs designed to prepare you for global success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Laptop className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary">Popular</Badge>
                </div>
                <CardTitle className="text-xl">BSc (Hons) Computer Systems Engineering</CardTitle>
                <CardDescription className="text-gray-600">Information Technology</CardDescription>
              </CardHeader>
              <div className="px-4">
                <Image
                  src="/images/computer-engineering.jpg"
                  alt="Computer Systems Engineering"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive program covering software engineering, systems design, and emerging technologies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3-4 Years</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-xl">BA (Hons) Business and Management</CardTitle>
                <CardDescription className="text-gray-600">BBA</CardDescription>
              </CardHeader>
              <div className="px-4">
                <Image
                  src="/images/business-management.jpg"
                  alt="Business and Management"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Develop leadership skills and business acumen for the modern corporate world.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3-4 Years</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Plane className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-xl">BSc (Hons) International Tourism and Hospitality Management</CardTitle>
                <CardDescription className="text-gray-600">BHM</CardDescription>
              </CardHeader>
              <div className="px-4">
                <Image
                  src="/images/tourism-hospitality.jpg"
                  alt="Tourism and Hospitality Management"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Explore the dynamic world of tourism and hospitality management with global perspectives.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3-4 Years</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Laptop className="w-6 h-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">Subject to Approval</Badge>
                </div>
                <CardTitle className="text-xl">BSc (Hons) Computer Science</CardTitle>
                <CardDescription className="text-gray-600">Computing</CardDescription>
              </CardHeader>
              <div className="px-4">
                <Image
                  src="/images/computer-science.jpg"
                  alt="Computer Science"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive computer science program covering algorithms, programming, and software development.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3-4 Years</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <Badge className="bg-green-100 text-green-800">New</Badge>
                </div>
                <CardTitle className="text-xl">BSc (Hons) Cyber Security and Digital Forensics</CardTitle>
                <CardDescription className="text-gray-600">Security</CardDescription>
              </CardHeader>
              <div className="px-4">
                <Image
                  src="/images/cyber-security.jpg"
                  alt="Cyber Security and Digital Forensics"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cutting-edge program in cybersecurity, digital forensics, and information security management.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3-4 Years</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Programs
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Our Foundation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Mission, Vision & Core Values</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated to empowering students with the intellectual pursuit, ethical leadership, and global
                  perspective necessary to secure a competitive edge, enabling them to excel on the international stage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-600">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To emerge as an example of academic excellence, globally recognized for advancing exemplary
                  professional practices across Nepal and South Asia, cultivating leader-managers, educators, and IT
                  professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We empower learners through lifelong education, treat everyone with respect, promote equality and
                  diversity, remain affordable, and make quality education accessible to Nepalese students.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Our Core Values in Action</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Empowering learners through lifelong education and training</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Committed to education, training, and support of our learners</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Treating everyone with respect and promoting equality</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Remaining affordable and accessible to Nepalese students</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/students-group.jpg"
                  alt="ISMT Students and Faculty"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Journey with ISMT?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have transformed their careers with our UK-recognized qualifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/images/ismt-logo.png" alt="ISMT Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-bold">ISMT</h3>
                  <p className="text-gray-400 text-sm">College</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students with internationally recognized qualifications and industry-relevant skills since
                2011.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-400 hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Student Life
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Career Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Computer Systems Engineering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Business & Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tourism & Hospitality
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Computer Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cyber Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">+977-1-XXXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">info@ismt.edu.np</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} ISMT College. All rights reserved.</p>
                <p className="mt-1">Developed by Siddhant Bhattarai</p>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
