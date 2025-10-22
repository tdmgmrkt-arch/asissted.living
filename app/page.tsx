import Image from 'next/image'; // Import next/image
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Shield, Users, Home, Clock, Star, Phone, Mail, MapPin, Award, CheckCircle2, Quote, Search, FileText, Calendar, ClipboardCheck, Building2, HeartHandshake, Car, Utensils, Activity } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              {/* Replaced ImageWithFallback with Image */}
              <Image
                src="/senior-care-logo.jpg"
                alt="Senior Care Logo"
                width={160} // Added width (adjust as needed)
                height={64} // Added height (adjust as needed, maintain aspect ratio)
                className="h-16 w-auto" // Keep className for potential styling
                style={{ objectFit: 'contain' }} // Added objectFit
              />
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#about" className="text-gray-700 hover:text-[#CD7B00] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#CD7B00] after:transition-all after:duration-300 hover:after:w-full">About Us</a>
              <a href="#homes" className="text-gray-700 hover:text-[#CD7B00] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#CD7B00] after:transition-all after:duration-300 hover:after:w-full">Our Homes</a>
              <a href="#why-us" className="text-gray-700 hover:text-[#CD7B00] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#CD7B00] after:transition-all after:duration-300 hover:after:w-full">Why Choose Us</a>
              <a href="#services" className="text-gray-700 hover:text-[#CD7B00] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#CD7B00] after:transition-all after:duration-300 hover:after:w-full">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-[#CD7B00] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#CD7B00] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
            </nav>
            <Button className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-lg shadow-[#CD7B00]/20 hover:shadow-xl hover:shadow-[#CD7B00]/30 transition-all duration-300 hover:-translate-y-0.5">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width Banner */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Replaced ImageWithFallback with Image, using fill */}
          <Image
            src="/herobackground.png"
            alt="Compassionate senior living communities"
            fill // Use fill for background images
            style={{ objectFit: 'cover' }} // objectFit needs to be in style prop with fill
            className="w-full h-full object-cover" // Keep className
            priority // Add priority for LCP images
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/60"></div>
          {/* Additional accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#CD7B00]/20 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Compassionate Senior Living - Multiple Communities, One Standard of Care
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
              Find the right assisted living home for your loved one - from cozy family-style residences to luxury care communities.
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Personalized support, comfort, and dignity are at the heart of everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-xl shadow-[#CD7B00]/30 hover:shadow-2xl hover:shadow-[#CD7B00]/40 transition-all duration-300 hover:-translate-y-0.5 px-8 py-6 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-6 text-lg backdrop-blur-sm">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Free Consultation
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#CD7B00]" />
                </div>
                <div>
                  <div className="text-sm text-white/70">State</div>
                  <div className="text-white font-semibold">Licensed Facilities</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <HeartHandshake className="h-6 w-6 text-[#CD7B00]" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Locally</div>
                  <div className="text-white font-semibold">Owned & Operated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-16 w-16 text-[#CD7B00]/20 mx-auto mb-8" />
          <blockquote className="text-3xl md:text-4xl text-gray-700 mb-8 leading-relaxed italic font-serif">
            "We toured three of their homes and found the perfect match for my father. The staff are incredible, and he's never been happier."
          </blockquote>
          <cite className="text-xl text-gray-500 not-italic">— Linda P., Daughter of Resident</cite>
        </div>
      </section>

      {/* About Our Network */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#FDF8F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-white text-[#CD7B00] border border-[#CD7B00]/20 mb-6 px-4 py-1.5 shadow-sm font-semibold">
              About Our Network of Homes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Personalized Senior Living Across Multiple Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our assisted living network provides seniors and their families the flexibility to choose the right home based on their lifestyle, care needs, and budget. Whether you're seeking an intimate residential home or a vibrant, full-service community, each of our locations delivers professional care, warmth, and peace of mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              { icon: Home, title: "Variety of Homes", desc: "A variety of licensed assisted living homes across the region." },
              { icon: FileText, title: "Flexible Pricing", desc: "Flexible pricing based on room type and care level." },
              { icon: HeartHandshake, title: "24/7 Care", desc: "24/7 caregivers and on-call nurses." },
              { icon: Utensils, title: "Nutritious Meals", desc: "Nutritious chef-prepared meals." },
              { icon: ClipboardCheck, title: "Daily Assistance", desc: "Medication management and daily assistance." },
              { icon: Activity, title: "Enriching Activities", desc: "Enriching social and wellness activities." }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur group p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-[#CD7B00] to-[#B56D00] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#CD7B00]/20 group-hover:shadow-xl group-hover:shadow-[#CD7B00]/30 transition-all duration-500 group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Homes */}
      <section id="homes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#FDF8F2] text-[#CD7B00] border border-[#CD7B00]/20 mb-6 px-4 py-1.5 font-semibold">
              Explore Our Homes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Choose the Right Home for Your Loved One</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each of our assisted living residences offers a unique atmosphere and level of care, from independent-style living to advanced assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Home Type Cards */}
            {[
              { icon: Home, title: "Comfort Homes", desc: "Cozy, family-style homes designed for seniors who want personalized attention in a smaller setting." },
              { icon: Building2, title: "Premium Care Homes", desc: "Larger facilities with on-site staff, spacious rooms, and engaging community activities." },
              { icon: Heart, title: "Memory Care Homes", desc: "Specialized residences for seniors with Alzheimer's or dementia, providing secure environments and compassionate staff." },
              { icon: Users, title: "Independent Plus", desc: "Perfect for active seniors seeking light assistance and a vibrant social life." }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#CD7B00]/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group p-6">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#CD7B00] to-[#B56D00]"></div>
                <CardHeader className="p-0 mb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#CD7B00] to-[#B56D00] flex items-center justify-center mb-4 shadow-lg shadow-[#CD7B00]/20">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section id="why-us" className="py-24 bg-gradient-to-b from-[#FDF8F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-white text-[#CD7B00] border border-[#CD7B00]/20 mb-6 px-4 py-1.5 shadow-sm font-semibold">
              Why Families Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Care, Comfort, and Flexibility Families Can Trust</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Families choose our assisted living homes because we combine the warmth of family-style care with the professionalism of licensed caregivers. With multiple homes to choose from, we make it easy to find the perfect fit - emotionally, medically, and financially.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason Cards */}
            {[
              { icon: Building2, title: "Multiple Communities", desc: "Multiple communities to match your budget and preferences." },
              { icon: Award, title: "Licensed Caregivers", desc: "Licensed, compassionate caregivers dedicated to resident well-being." },
              { icon: Shield, title: "Safe Environments", desc: "Safe, clean, and welcoming home-like environments." },
              { icon: Users, title: "Transparent Communication", desc: "Open and transparent communication with families." },
              { icon: Star, title: "High Satisfaction", desc: "Proven track record of high resident satisfaction and family referrals." },
              { icon: CheckCircle2, title: "Personalized Plans", desc: "Care plans tailored to individual needs and preferences." }
            ].map((item, index) => (
              <Card key={index} className="bg-white p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#CD7B00]/10 to-[#CD7B00]/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-[#CD7B00]/10">
                    <item.icon className="h-7 w-7 text-[#CD7B00]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#FDF8F2] text-[#CD7B00] border border-[#CD7B00]/20 mb-6 px-4 py-1.5 font-semibold">
              Testimonials & Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What Our Families Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to serve our community and provide peace of mind to families.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Testimonial Cards */}
            {[
              { quote: "We toured three of their homes and found the perfect match for my father. The staff are incredible, and he's never been happier.", name: "Linda P.", relation: "Daughter of Resident" },
              { quote: "The flexibility they offered made all the difference. We started with light care and transitioned smoothly as my mother's needs changed.", name: "Tom G.", relation: "Family Member" }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#FDF8F2] to-white p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[#CD7B00]/20 to-[#B56D00]/10 flex items-center justify-center mb-6 ring-4 ring-white shadow-lg">
                    <Quote className="h-12 w-12 text-[#CD7B00]/80" />
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed text-lg italic mb-4 font-serif">
                    "{item.quote}"
                  </blockquote>
                  <h3 className="text-2xl font-semibold mb-1 text-gray-900">{item.name}</h3>
                  <p className="text-lg text-[#CD7B00] mb-4">{item.relation}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Care Plans */}
      <section id="services" className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Replaced ImageWithFallback with Image, using fill */}
          <Image
            src="/seniordriving.png" // Consider a more relevant image for services
            alt="Tailored care plans for seniors"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#CD7B00]/15 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="max-w-2xl ml-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#CD7B00] to-[#B56D00] flex items-center justify-center shadow-xl shadow-[#CD7B00]/40">
                <ClipboardCheck className="h-7 w-7 text-white" />
              </div>
              <Badge className="bg-white/10 text-white border border-white/20 px-4 py-1.5 backdrop-blur-sm font-semibold">
                Services & Care Plans
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">Tailored Care for Every Need</h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              We understand that no two seniors are alike. That's why our care plans are fully customizable, from light support to full-time assistance.
            </p>
            <ul className="text-lg text-white/80 mb-10 leading-relaxed space-y-2 list-none p-0">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#CD7B00] mr-3 flex-shrink-0" /> Assistance with bathing, dressing, and grooming</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#CD7B00] mr-3 flex-shrink-0" /> Medication management and health monitoring</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#CD7B00] mr-3 flex-shrink-0" /> 24-hour staff and emergency response</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#CD7B00] mr-3 flex-shrink-0" /> Housekeeping, laundry, and maintenance</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#CD7B00] mr-3 flex-shrink-0" /> Three daily meals plus snacks</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#CD7B00] mr-3 flex-shrink-0" /> Transportation to appointments and outings</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#CD7B00] mr-3 flex-shrink-0" /> Activities: music, crafts, fitness, and games</li>
            </ul>
            <Button className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-xl shadow-[#CD7B00]/40 hover:shadow-2xl hover:shadow-[#CD7B00]/50 transition-all duration-300 hover:-translate-y-0.5 px-8 py-6 text-lg">
              Call Now to Discuss Your Loved One's Needs
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#CD7B00]/10 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#CD7B00]/5 rounded-full blur-3xl opacity-50"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 ring-1 ring-gray-900/5 relative z-10">
                <iframe
                  title="Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106132.8988647038!2d-117.26941864197405!3d33.64053412580796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7f5cc3f0f977%3A0x6a04e578f2445b0a!2sTemecula%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" // Replace with actual embed URL
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl w-full h-[500px]" // Simplified classes
                />
              </div>
            </div>
            <div>
              <Badge className="bg-[#FDF8F2] text-[#CD7B00] border border-[#CD7B00]/20 mb-6 px-4 py-1.5 font-semibold">
                Serving Our Communities
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Serving Temecula, Murrieta, Menifee & Surrounding Areas</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                With multiple homes conveniently located, we provide accessible, high-quality assisted living options across the region. Find compassionate care close to home.
              </p>
              <div className="space-y-6 mb-10">
                {/* Contact Info Cards */}
                <Card className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#FDF8F2]/50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="h-12 w-12 rounded-xl bg-[#CD7B00]/10 flex items-center justify-center flex-shrink-0 border border-[#CD7B00]/10">
                     <MapPin className="h-6 w-6 text-[#CD7B00]" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800 mb-1">Service Area</h4>
                     <p className="text-gray-600 leading-relaxed text-base">
                       Temecula, Murrieta, Menifee & Surrounding Areas
                     </p>
                   </div>
                 </Card>
                 <Card className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#FDF8F2]/50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="h-12 w-12 rounded-xl bg-[#CD7B00]/10 flex items-center justify-center flex-shrink-0 border border-[#CD7B00]/10">
                     <Phone className="h-6 w-6 text-[#CD7B00]" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800 mb-1">Call Us Anytime</h4>
                     <p className="text-gray-600 leading-relaxed text-base">
                       <a href="tel:9512999978" className="hover:text-[#CD7B00] transition-colors">(951) 299-9978</a><br />
                       We're here to answer your questions
                     </p>
                   </div>
                 </Card>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-lg shadow-[#CD7B00]/20 hover:shadow-xl hover:shadow-[#CD7B00]/30 transition-all duration-300 hover:-translate-y-0.5 px-8 py-6 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button variant="outline" className="border-2 border-[#CD7B00] text-[#CD7B00] hover:bg-[#FDF8F2] transition-all duration-300 px-8 py-6 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-[#FDF8F2] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-white text-[#CD7B00] border border-[#CD7B00]/20 mb-6 px-4 py-1.5 shadow-sm font-semibold">
              Questions & Answers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Common questions about our network of homes
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "How do I choose the right assisted living home?", a: "During your free consultation, we'll discuss your loved one's health, preferences, and budget, then match you with one or more homes that fit those needs. You can tour as many as you'd like before deciding." },
              { q: "What's included in the monthly cost?", a: "Each home's pricing varies slightly, but most include room, meals, housekeeping, utilities, and basic personal care. Additional support (like medication management or specialized care) can be added as needed." },
              { q: "Do you offer memory care options?", a: "Yes. Several of our locations specialize in memory care for seniors living with Alzheimer's or dementia, with secure environments and trained staff." },
              { q: "Can couples or siblings live together?", a: "Absolutely. We have shared and adjoining suites available in many homes." },
              { q: "What if my loved one's care needs increase over time?", a: "We can easily adjust care plans or help transition your loved one to another one of our homes that offers a higher level of assistance, all within our network." },
              { q: "Are tours available?", a: "Yes. We highly encourage families to schedule a free tour and experience our care environments in person." },
              { q: "Is there a waiting list for certain homes?", a: "Some homes have limited availability. We recommend scheduling a consultation soon to secure your preferred location." }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white border-2 border-gray-100 rounded-2xl px-8 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-[#CD7B00]/30 data-[state=open]:shadow-lg">
                <AccordionTrigger className="hover:text-[#CD7B00] py-6 transition-colors text-left text-lg font-medium text-gray-800 data-[state=open]:text-[#CD7B00]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Replaced ImageWithFallback with Image, using fill */}
          <Image
            src="/placeholderimage.webp" // Consider a relevant image
            alt="Contact us for a free consultation"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full object-cover"
          />
          {/* Strong Overlay with brand color */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#CD7B00]/95 via-[#B56D00]/90 to-[#CD7B00]/95"></div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">Find the Perfect Assisted Living Home for Your Loved One</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed">
            With multiple homes to choose from and personalized care at every level, we make it easy to find the right fit emotionally, physically, and financially. Let our compassionate team guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#CD7B00] hover:bg-gray-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 px-10 py-7 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#CD7B00] transition-all duration-300 px-10 py-7 text-lg font-semibold backdrop-blur-sm">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: About */}
            <div>
              <h3 className="text-white mb-6 text-xl font-semibold">Assisted Living Network</h3>
              <p className="text-sm mb-6 leading-relaxed text-gray-400">
                Our network provides seniors and families flexibility to choose the right home based on lifestyle, care needs, and budget.
              </p>
              <div className="space-y-3">
                 <div className="flex items-start gap-3 group">
                   <div className="h-9 w-9 rounded-lg bg-[#CD7B00]/10 flex items-center justify-center group-hover:bg-[#CD7B00]/20 transition-colors flex-shrink-0 border border-[#CD7B00]/20">
                     <Phone className="h-4 w-4 text-[#CD7B00]" />
                   </div>
                   <a href="tel:9512999978" className="text-sm hover:text-[#CD7B00] transition-colors pt-1.5">(951) 299-9978</a>
                 </div>
                 <div className="flex items-start gap-3 group">
                   <div className="h-9 w-9 rounded-lg bg-[#CD7B00]/10 flex items-center justify-center group-hover:bg-[#CD7B00]/20 transition-colors flex-shrink-0 border border-[#CD7B00]/20">
                     <Mail className="h-4 w-4 text-[#CD7B00]" />
                   </div>
                   <a href="mailto:info@yourcompany.com" className="text-sm hover:text-[#CD7B00] transition-colors pt-1.5">info@yourcompany.com</a>
                 </div>
                 <div className="flex items-start gap-3 group">
                   <div className="h-9 w-9 rounded-lg bg-[#CD7B00]/10 flex items-center justify-center group-hover:bg-[#CD7B00]/20 transition-colors flex-shrink-0 border border-[#CD7B00]/20">
                     <MapPin className="h-4 w-4 text-[#CD7B00]" />
                   </div>
                   <p className="text-sm text-gray-400 pt-1.5">
                     Serving Temecula, Murrieta, Menifee & Surrounding Areas
                   </p>
                 </div>
              </div>
            </div>

            {/* Column 2: Our Homes */}
            <div>
              <h4 className="text-white mb-6 font-semibold text-lg">Our Homes</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#homes" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Comfort Homes</a></li>
                <li><a href="#homes" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Premium Care Homes</a></li>
                <li><a href="#homes" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Memory Care Homes</a></li>
                <li><a href="#homes" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Independent Plus</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="text-white mb-6 font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">About Us</a></li>
                <li><a href="#services" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Services</a></li>
                <li><a href="#why-us" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-[#CD7B00] transition-colors hover:translate-x-1 inline-block text-gray-400">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Trust */}
            <div>
              <h4 className="text-white mb-6 font-semibold text-lg">Trust & Accreditation</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#CD7B00] flex-shrink-0"></div>
                  Licensed Facility
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#CD7B00] flex-shrink-0"></div>
                  Locally Owned & Operated
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#CD7B00] flex-shrink-0"></div>
                  State Certified
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#CD7B00] flex-shrink-0"></div>
                  Google 5-Star Rating
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Senior Care Network. All rights reserved. {/* Updated year dynamically */}
              </p>
              <div className="flex gap-8 text-sm">
                <a href="#" className="hover:text-[#CD7B00] transition-colors text-gray-400">Privacy Policy</a>
                <a href="#top" className="hover:text-[#CD7B00] transition-colors text-gray-400">Back to Top</a> {/* Changed Home to Back to Top */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
