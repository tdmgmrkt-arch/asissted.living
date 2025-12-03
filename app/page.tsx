import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  Heart, Shield, Users, Home, Phone, Mail, MapPin, Award, CheckCircle2,
  Quote, FileText, Calendar, Facebook, Instagram, Linkedin, ClipboardCheck, Building2, HeartHandshake,
  Utensils, Activity, Star
} from 'lucide-react';
import Link from 'next/link';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-700 overflow-x-hidden antialiased">

      {/* ## Header ## */}
      <header className="border-b border-gray-100/80 sticky top-0 bg-white/95 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/senior-care-logo.jpg"
                alt="Senior Care Logo"
                width={140}
                height={56}
                className="h-12 w-auto"
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium">
              <a href="#about" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">About Us</a>

              {/* ## START: Locations Dropdown ## */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#CD7B00] transition-colors duration-200 text-sm font-medium">
                  <span>Locations</span>
                  <svg 
                    className="w-4 h-4 fill-current text-gray-400 group-hover:text-[#CD7B00] transition-colors duration-200" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* FIX: 
                  - Removed 'mt-2' (the gap) and 'py-1'
                  - Added 'mt-0' (no gap)
                  - Added 'pt-3' (to recreate visual spacing, 0.5rem gap + 0.25rem old padding)
                  - Added 'pb-1' (to restore bottom padding)
                */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-40 bg-white rounded-md shadow-lg pt-3 pb-1 z-20 hidden group-hover:block ring-1 ring-black ring-opacity-5 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  {/* FIX: 
                    - Changed 'a' tags to 'Link' components
                    - Updated 'href' paths
                  */}
                  <Link 
                    href="/murrieta"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] transition-colors duration-150"
                  >
                    Murrieta
                  </Link>
                  <Link 
                    href="/temecula"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] transition-colors duration-150"
                  >
                    Temecula
                  </Link>
                </div>
              </div>
              {/* ## END: Locations Dropdown ## */}

              <a href="#homes" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Our Homes</a>
              <a href="#team" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Our Team</a>
              <a href="#why-us" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Why Choose Us</a>
              <a href="#services" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Contact</a>
            </nav>

            {/* Button */}
            <Button asChild className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md shadow-[#CD7B00]/20 hover:shadow-lg hover:shadow-[#CD7B00]/30 transition-all duration-300 hover:-translate-y-px text-sm px-5 py-2.5 rounded-md">
              <a href="#contact">
                <span>Schedule Consultation</span>
              </a>
            </Button>

          </div>
        </div>
      </header>
      {/* ## Hero Section ## */}
      <section className="relative min-h-[75vh] md:min-h-[700px] flex items-center overflow-hidden bg-gray-900">
        {/* ... background image ... */}
        <div className="absolute inset-0">
          <Image
            src="/herobackground.png"
            alt="Compassionate caregiver assisting a senior resident"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
              Compassionate Senior Living
              <br/>
              <span className="text-[#FDCB7A]">Multiple Communities, One Standard of Care</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
              Discover licensed assisted living homes tailored to your loved one's needs, from cozy residences to full-service communities, all delivering professional care and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              {/* Added span wrapper */}
              <Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-lg shadow-[#CD7B00]/30 hover:shadow-xl hover:shadow-[#CD7B00]/40 transition-all duration-300 hover:-translate-y-0.5 px-7 py-3 text-base rounded-md">
                 <a href="tel:9512999978"><span><Phone className="mr-2 h-5 w-5 inline" /> Call Now</span></a>
              </Button>
              {/* Added span wrapper */}
              <Button asChild size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-7 py-3 text-base backdrop-blur-sm bg-white/10 hover:bg-white/100 rounded-md">
                <a href="#contact"><span><Calendar className="mr-2 h-5 w-5 inline" /> Schedule Consultation</span></a>
              </Button>
            </div>
            {/* ... feature badges ... */}
             <div className="flex flex-wrap items-center gap-x-8 gap-y-5 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#FDCB7A]" />
                <span className="text-white font-medium text-sm">State Licensed Facilities</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-5 w-5 text-[#FDCB7A]" />
                <span className="text-white font-medium text-sm">Locally Owned & Operated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ## About Our Network ## (No changes needed here) */}
      <section id="about" className="py-24 md:py-32 bg-white">
        {/* ... content ... */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              About Our Network
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight">Personalized Senior Living Across the Region</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our network offers flexibility to choose the right home based on lifestyle, care needs, and budget. Each location provides professional care, warmth, and peace of mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Variety of Homes", desc: "Multiple licensed assisted living homes across the region." },
              { icon: FileText, title: "Flexible Options", desc: "Pricing and care plans based on room type and care level." },
              { icon: HeartHandshake, title: "Dedicated Care", desc: "Compassionate 24/7 caregivers and on-call nursing support." },
              { icon: Utensils, title: "Nutritious Meals", desc: "Delicious and healthy chef-prepared meals daily." },
              { icon: ClipboardCheck, title: "Daily Assistance", desc: "Support with medication management and activities of daily living." },
              { icon: Activity, title: "Enriching Activities", desc: "Engaging social, wellness, and recreational programs." }
            ].map((item, index) => (
              <Card key={index} className="bg-white p-6 shadow-lg hover:shadow-xl border border-gray-100/80 transition-shadow duration-300 group rounded-xl">
                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 bg-[#FDF8F2] rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100/80 mt-1">
                    <item.icon className="h-6 w-6 text-[#CD7B00]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                 </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ## Explore Our Homes ## */}
      <section id="homes" className="py-24 md:py-32 bg-[#FDF8F2]/50 border-y border-gray-100/80">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ... heading ... */}
           <div className="text-center mb-20">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Explore Our Homes
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight">Choose the Right Setting for Your Loved One</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each residence offers a unique atmosphere and tailored care, from supportive independent living to advanced assistance programs.
            </p>
          </div>
          {/* ... cards ... */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "Comfort Homes", desc: "Cozy, family-style homes for personalized attention in a smaller setting." },
              { icon: Building2, title: "Premium Care", desc: "Larger facilities with dedicated staff, spacious rooms, and community activities." },
              { icon: Heart, title: "Memory Care", desc: "Specialized, secure residences for seniors with Alzheimer's or dementia." },
              { icon: Users, title: "Independent Plus", desc: "Ideal for active seniors seeking light assistance and a vibrant social life." }
            ].map((item, index) => (
              <Card key={index} className="bg-white p-6 shadow-lg hover:shadow-xl border border-gray-100/80 transition-shadow duration-300 hover:-translate-y-1 group rounded-xl text-center">
                 <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#CD7B00] to-[#B56D00] flex items-center justify-center mb-4 shadow-md shadow-[#CD7B00]/20 group-hover:scale-105 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-16">
                {/* Added span wrapper */}
                <Button variant="outline" asChild className="border-2 border-[#CD7B00] text-[#CD7B00] hover:bg-[#CD7B00]/5 transition-all duration-300 px-7 py-3 text-base mx-2 rounded-md">
                    <Link href="/murrieta"><span>Explore Murrieta Home</span></Link>
                </Button>
                {/* Added span wrapper */}
                <Button variant="outline" asChild className="border-2 border-[#CD7B00] text-[#CD7B00] hover:bg-[#CD7B00]/5 transition-all duration-300 px-7 py-3 text-base mx-2 rounded-md">
                    <Link href="/temecula"><span>Explore Temecula Home</span></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* ## Meet Our Team ## (No changes needed here) */}
      <section id="team" className="py-24 md:py-32 bg-white">
        {/* ... content ... */}
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight">Leadership & Care</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the dedicated founders ensuring compassionate, high-quality care for every resident.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
               <Image
                 src="/terrance-sims.webp"
                 alt="Terrance D. Sims"
                 width={120}
                 height={120}
                 className="rounded-full h-28 w-28 md:h-32 md:w-32 flex-shrink-0 object-cover border-4 border-white shadow-md"
               />
               <div className="text-center sm:text-left">
                 <h3 className="text-xl font-semibold text-gray-900">Terrance D. Sims, CSA, CDP</h3>
                 <p className="text-[#CD7B00] font-medium text-sm mb-2">Senior Living Specialist</p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Terrance oversees operations, leveraging extensive experience to ensure the highest standards of care and resident satisfaction.
                 </p>
               </div>
            </Card>
             <Card className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
               <Image
                 src="/jennifer-sims.webp"
                 alt="Jennifer Sims"
                 width={120}
                 height={120}
                 className="rounded-full h-28 w-28 md:h-32 md:w-32 flex-shrink-0 object-cover border-4 border-white shadow-md"
               />
               <div className="text-center sm:text-left">
                 <h3 className="text-xl font-semibold text-gray-900">Jennifer Sims, RN, BSN, CSA</h3>
                 <p className="text-[#CD7B00] font-medium text-sm mb-2">Lead Care Coordinator</p>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Jennifer brings clinical expertise and a passion for care coordination, working closely with residents and families.
                 </p>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ## Why Choose Us ## (No changes needed here) */}
      <section id="why-us" className="py-24 md:py-32 bg-[#FDF8F2]/50 border-y border-gray-100/80">
        {/* ... content ... */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Why Families Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight">Care, Comfort, and Flexibility You Can Trust</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine the warmth of family-style care with professional expertise. Our network makes finding the perfect fit easy – emotionally, medically, and financially.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
              { icon: Building2, title: "Multiple Communities", desc: "Choose from various homes to match your budget and preferences." },
              { icon: Award, title: "Licensed Caregivers", desc: "Compassionate, licensed professionals dedicated to resident well-being." },
              { icon: Shield, title: "Safe Environments", desc: "Secure, clean, and welcoming home-like settings." },
              { icon: Users, title: "Family Communication", desc: "Open, transparent communication and updates for families." },
              { icon: Star, title: "Proven Satisfaction", desc: "High resident satisfaction and positive family referrals." },
              { icon: CheckCircle2, title: "Personalized Plans", desc: "Care plans carefully tailored to individual needs and preferences." }
            ].map((item, index) => (
               <Card key={index} className="bg-white p-6 shadow-lg hover:shadow-xl border border-gray-100/80 transition-shadow duration-300 group rounded-xl">
                 <div className="flex items-start gap-4">
                   <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100/80 mt-1">
                    <item.icon className="h-6 w-6 text-[#CD7B00]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                 </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ## Testimonials ## (No changes needed here) */}
      <section id="testimonials" className="py-24 md:py-32 bg-white border-b border-gray-100/80">
        {/* ... content ... */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#CD7B00]/10 border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight">What Our Families Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear directly from families who have entrusted us with the care of their loved ones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              { quote: "We toured three of their homes and found the perfect match for my father. The staff are incredible, and he's never been happier.", name: "Linda P.", relation: "Daughter of Resident" },
              { quote: "The flexibility they offered made all the difference. We started with light care and transitioned smoothly as my mother's needs changed.", name: "Tom G.", relation: "Son of Resident" }
            ].map((item, index) => (
              <Card key={index} className="bg-[#FDF8F2]/60 p-8 shadow-xl border border-gray-100/80 hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 rounded-xl">
                <div className="flex flex-col items-center text-center">
                   <Quote className="h-8 w-8 text-[#CD7B00]/40 mb-5" />
                  <blockquote className="text-gray-600 leading-relaxed text-base italic mb-6 font-serif">
                    "{item.quote}"
                  </blockquote>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.name}</h3>
                  <p className="text-sm text-[#CD7B00] font-medium">{item.relation}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ## Services & Care Plans ## */}
      <section id="services" className="relative min-h-[650px] flex items-center overflow-hidden bg-gray-800">
        {/* ... background ... */}
        <div className="absolute inset-0">
          <Image
            src="/seniordriving.png"
            alt="Senior receiving personalized care services"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full object-cover opacity-30"
          />
           <div className="absolute inset-0 bg-gradient-to-l from-gray-900/50 via-gray-900/20 to-transparent"></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            {/* ... heading ... */}
             <div className="flex flex-col items-center md:items-start mb-8">
              <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-4 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
                Services & Care Plans
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">Tailored Care for Every Need</h2>
            </div>
            {/* ... text ... */}
            <p className="text-lg text-white/85 mb-10 leading-relaxed [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
              We understand that every senior is unique. Our care plans are fully customizable, ranging from light support to comprehensive, full-time assistance.
            </p>
            {/* ... list ... */}
             <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-left mb-12">
                <ul className="text-base text-white/85 space-y-3 list-none p-0 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> Assistance with Daily Living</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> Medication Management</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> Health Monitoring</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> 24/7 Staff & Emergency Response</li>
                </ul>
                 <ul className="text-base text-white/85 space-y-3 list-none p-0 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> Housekeeping & Laundry</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> Three Daily Meals + Snacks</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> Transportation Coordination</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#FDCB7A] mr-3 flex-shrink-0" /> Social & Recreational Activities</li>
                </ul>
            </div>
            <div className="flex justify-center md:justify-start">
              {/* Added span wrapper */}
              <Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-lg shadow-[#CD7B00]/40 hover:shadow-xl hover:shadow-[#CD7B00]/50 transition-all duration-300 hover:-translate-y-0.5 px-7 py-3 text-base rounded-md">
                <a href="tel:9512999978"><span>Discuss Your Loved One's Needs</span></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ## Location Section ## */}
      <section className="py-24 md:py-32 bg-white">
        {/* ... content ... */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200/80">
               <iframe
                  title="Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106132.8988647038!2d-117.26941864197405!3d33.64053412580796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7f5cc3f0f977%3A0x6a04e578f2445b0a!2sTemecula%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[450px]"
                />
            </div>
            <div>
              <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
                Our Communities
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Serving Temecula, Murrieta & Surrounding Areas</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our homes are conveniently located to provide accessible, high-quality assisted living options across the region. Find compassionate care close to home.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                   <div className="h-10 w-10 rounded-lg bg-[#FDF8F2] flex items-center justify-center flex-shrink-0 border border-gray-100/80 mt-0.5">
                     <MapPin className="h-5 w-5 text-[#CD7B00]" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800 text-base">Service Areas</h4>
                     <p className="text-gray-600 leading-relaxed text-sm">
                       Temecula, Murrieta, Menifee, Winchester, Wildomar & Nearby Cities
                     </p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="h-10 w-10 rounded-lg bg-[#FDF8F2] flex items-center justify-center flex-shrink-0 border border-gray-100/80 mt-0.5">
                     <Phone className="h-5 w-5 text-[#CD7B00]" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-800 text-base">Call Us Anytime</h4>
                     <p className="text-gray-600 leading-relaxed text-sm">
                       <a href="tel:9512999978" className="hover:text-[#CD7B00] transition-colors">(951) 299-9978</a> - We're here to help.
                     </p>
                   </div>
                 </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Added span wrapper */}
                <Button size="lg" asChild className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md shadow-[#CD7B00]/20 hover:shadow-lg hover:shadow-[#CD7B00]/30 transition-all duration-300 hover:-translate-y-px px-7 py-3 text-base rounded-md">
                   <a href="tel:9512999978"><span><Phone className="mr-2 h-4 w-4 inline" /> Call Now</span></a>
                </Button>
                {/* Added span wrapper */}
                <Button size="lg" asChild variant="outline" className="border-2 border-[#CD7B00] text-[#CD7B00] hover:bg-[#CD7B00]/5 transition-all duration-300 px-7 py-3 text-base rounded-md">
                  <a href="#contact"><span><Calendar className="mr-2 h-4 w-4 inline" /> Schedule Consultation</span></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ## FAQ Section ## (No changes needed here) */}
      <section className="py-24 md:py-32 bg-[#FDF8F2]/50 border-y border-gray-100/80">
        {/* ... content ... */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Answers to common inquiries about our network of homes.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "How do I choose the right assisted living home?", a: "During your free consultation, we'll discuss your loved one's health, preferences, and budget, then match you with one or more homes that fit those needs. You can tour as many as you'd like before deciding." },
              { q: "What's included in the monthly cost?", a: "Each home's pricing varies slightly, but most include room, meals, housekeeping, utilities, and basic personal care. Additional support (like medication management or specialized care) can be added as needed." },
              { q: "Do you offer memory care options?", a: "Yes. Several of our locations specialize in memory care for seniors living with Alzheimer's or dementia, with secure environments and trained staff." },
              { q: "Can couples or siblings live together?", a: "Absolutely. We have shared and adjoining suites available in many homes, depending on availability." },
              { q: "What if my loved one's care needs increase over time?", a: "We can easily adjust care plans or help transition your loved one to another one of our homes that offers a higher level of assistance, all within our network." },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white border border-gray-200/80 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-[#CD7B00]/40 data-[state=open]:shadow-lg">
                <AccordionTrigger className="hover:text-[#CD7B00] py-4 transition-colors text-left text-base font-medium text-gray-800 data-[state=open]:text-[#CD7B00] hover:no-underline [&[data-state=open]>svg]:text-[#CD7B00]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm pt-0">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
           <div className="text-center mt-12 text-gray-600">
                Have more questions? <a href="#contact" className="text-[#CD7B00] font-medium hover:underline">Contact us today</a>.
            </div>
        </div>
      </section>

      {/* ## CTA Section ## */}
      <section id="contact" className="relative py-24 md:py-32 bg-[#CD7B00]">
         {/* ... background image ... */}
         <div className="absolute inset-0">
          <Image
             src="/placeholderimage.webp"
             alt="Warm and inviting senior living community space"
             fill
             style={{ objectFit: 'cover' }}
             className="w-full h-full object-cover opacity-10"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#CD7B00] via-[#CD7B00]/95 to-[#CD7B00]"></div>
         </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]">Ready to Find the Perfect Home?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Let our compassionate team guide you through the process. Schedule a free, no-obligation consultation to discuss your needs and explore our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Added span wrapper */}
            <Button size="lg" asChild className="bg-white text-[#B56D00] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-px px-8 py-4 text-base font-semibold rounded-md">
              <a href="tel:9512999978"><span><Phone className="mr-2 h-5 w-5 inline" /> Call (951) 299-9978</span></a>
            </Button>
            {/* Added span wrapper */}
            <Button size="lg" asChild variant="outline" className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-8 py-4 text-base font-semibold rounded-md">
               <a href="#contact"><span><Calendar className="mr-2 h-5 w-5 inline" /> Schedule Consultation Online</span></a>
            </Button>
          </div>
        </div>
      </section>

      {/* ## Footer ## (No changes needed here) */}
      <footer className="bg-gray-800 text-gray-300 pt-16 pb-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Grid: 5-column "Brand + Utility" layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* === COLUMN 1: BRAND BLOCK (Spans 2 columns) === */}
            <div className="lg:col-span-2 space-y-5">
              <Link href="/" className="block">
                <Image
                  src="/footerlogo.png"
                  alt="Senior Care Logo"
                  width={180}
                  height={70}
                  className="w-auto h-14 opacity-95"
                  style={{ objectFit: "contain" }}
                />
              </Link>
              
              {/* Tagline (UPDATED from your old footer) */}
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing compassionate assisted living choices across Temecula, Murrieta, and surrounding areas.
              </p>

              {/* Primary Contact (UPDATED from your old footer) */}
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#CD7B00]" />
                  <a href="tel:9512999978" className="hover:text-white">(951) 299-9978</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#CD7B00]" />
                  <a href="mailto:ie@seniorcareauthority.com" className="hover:text-white">ie@seniorcareauthority.com</a>
                </li>
              </ul>
              
              {/* Social Icons (Placeholder) */}
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* === COLUMN 2: UTILITY BLOCK (Spans 3 columns) === */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                
                {/* List 1: Our Homes (UPDATED links, NO highlight) */}
                <div>
                  <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Our Homes</h4>
                  <ul className="space-y-2 leading-relaxed">
                    {/* CHANGED: No highlights */}
                    <li><Link href="/murrieta" className="hover:text-white">Murrieta Location</Link></li>
                    <li><Link href="/temecula" className="hover:text-white">Temecula Location</Link></li>
                    <li><a href="#homes" className="hover:text-white">Comfort Homes</a></li>
                    <li><a href="#homes" className="hover:text-white">Premium Care</a></li>
                    <li><a href="#homes" className="hover:text-white">Memory Care</a></li>
                  </ul>
                </div>

                {/* List 2: Quick Links (UPDATED links) */}
                <div>
                  <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Quick Links</h4>
                  <ul className="space-y-2 leading-relaxed">
                    <li><a href="#about" className="hover:text-white">About Us</a></li>
                    <li><a href="#team" className="hover:text-white">Our Team</a></li>
                    <li><a href="#services" className="hover:text-white">Services</a></li>
                    <li><a href="#why-us" className="hover:text-white">Why Choose Us</a></li>
                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                  </ul>
                </div>
                
                {/* List 3: Information (UPDATED content) */}
                <div>
                  <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Information</h4>
                  <ul className="space-y-2 leading-relaxed">
                    {/* This content is from your old footer's 4th column */}
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#CD7B00]" /> 
                      <span>Licensed Facilities</span>
                    </li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>

          {/* === BOTTOM SECTION (Simplified to match this page's old footer) === */}
          <div className="border-t border-gray-700 mt-16 pt-10">
            
            {/* NOTE: This page's old footer did not have the "Feature Badges".
              It also did not have the legal links at the bottom (they are in the "Information" column).
              We are matching that structure for consistency with this page's specific content.
            */}

            {/* Copyright (UPDATED) */}
            <div className="text-center text-xs text-gray-500">
              <p>© {new Date().getFullYear()} Senior Care Network. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}