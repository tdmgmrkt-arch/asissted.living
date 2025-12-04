"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import CalendarModal from '@/components/CalendarModal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import {
  Phone, Mail, MapPin, Calendar, CheckCircle2, Facebook, Instagram, Linkedin, HeartHandshake, Utensils, Activity, Home, Building2, Heart, Users, ArrowLeft, Star, FileText, Wine, Clock,
  Quote
} from 'lucide-react';
import Link from 'next/link';

// ... (Keep const definitions: teamMembers, temeculaHomes, etc. the same as before) ...
const teamMembers = [
  {
    name: "Terrance D. Sims, CSA, CDP",
    role: "Senior Living Specialist",
    src: "/terrance-sims.webp",
    bio: "Terrance oversees operations, leveraging extensive experience to ensure the highest standards of care and resident satisfaction."
  },
  {
    name: "Jennifer Sims, RN, BSN, CSA",
    role: "Lead Care Coordinator",
    src: "/jennifer-sims.webp",
    bio: "Jennifer brings clinical expertise and a passion for care coordination, working closely with residents and families."
  }
];
const temeculaHomes = [
  { title: "Comfort Homes", description: "Intimate, family-style environments with personal attention and a cozy feel." },
  { title: "Premium Care Homes", description: "Spacious residences with dedicated staff, private rooms, and vibrant activities." },
  { title: "Memory Care Homes", description: "Safe, secure settings for seniors with Alzheimer’s or dementia, staffed by trained professionals." },
  { title: "Independent Plus", description: "Ideal for active seniors who need light daily assistance and enjoy social living." },
];
const temeculaServices = [
  "Assistance with bathing, dressing, and mobility",
  "Medication management and supervision",
  "Three nutritious meals plus snacks daily",
  "Housekeeping and laundry services",
  "Transportation to appointments and community events",
  "Fitness and social activities for mind and body",
];
const whyChooseTemecula = [
  "Multiple homes to match your budget and care requirements",
  "Low caregiver-to-resident ratios",
  "Licensed and background-checked staff",
  "Clean, comfortable, and welcoming homes",
  "Transparent communication with families",
  "Excellent community reviews and referrals",
];
const temeculaTestimonials = [
    { quote: "We toured three of their Temecula homes and found one that felt like family from day one. The staff are amazing.", name: "Michelle T.", relation: "Daughter of Resident" },
];
const temeculaFaqs = [
  { q: "How do I choose the right home in Temecula?", a: "During your free consultation, we discuss your loved one’s care needs, preferences, and budget, then recommend the best homes to tour." },
  { q: "What’s included in the monthly rate?", a: "Room and board, meals, utilities, personal care, and activities are included. Additional medical or memory care support is available if needed." },
  { q: "Can couples or siblings live together?", a: "Yes, many of our Temecula homes offer shared suites or adjoining rooms for companionship and comfort." },
  { q: "What if care needs increase over time?", a: "We can easily adjust your loved one’s plan or transition them to another home within our Temecula network that offers higher assistance." },
  { q: "Do you offer memory care?", a: "Yes, several of our homes specialize in Alzheimer’s and dementia care with trained staff and secure environments." },
  { q: "Can I schedule a tour?", a: "Absolutely! Schedule a Free Tour or Call Now to speak with our Care Coordinator." },
];


export default function TemeculaPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-700 overflow-x-hidden antialiased">
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />

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
      <Button
        onClick={() => setIsCalendarOpen(true)}
        className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md shadow-[#CD7B00]/20 hover:shadow-lg hover:shadow-[#CD7B00]/30 transition-all duration-300 hover:-translate-y-px text-sm px-5 py-2.5 rounded-md"
      >
        Schedule Consultation
      </Button>

    </div>
  </div>
</header>

       {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[500px] flex items-center justify-center text-center overflow-hidden bg-gray-900">
        {/* ... background image ... */}
        <div className="absolute inset-0">
          <Image
            src="/temeculahero1.webp" // Placeholder
            alt="Beautiful landscape representing Temecula Valley wine country"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
           <Badge className="bg-white/10 border border-white/20 text-white backdrop-blur-sm mb-4 px-3 py-1 font-medium tracking-wide text-sm rounded-full">
              Assisted Living in Temecula, CA
            </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
            Comfort, Dignity & Peace of Mind
          </h1>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-8 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
            Our network of licensed Temecula homes offers the flexibility to choose the environment, care level, and price that best fits your loved one’s needs.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Removed span wrapper, removed inline from icon */}
              <Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md">
                 <a href="tel:###-###-####"><Phone className="mr-2 h-5 w-5" /> Call Now</a>
              </Button>
              {/* Schedule Consultation Button */}
              <Button
                onClick={() => setIsCalendarOpen(true)}
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-7 py-3 text-base rounded-md"
              >
                <Calendar className="mr-2 h-5 w-5" /> Schedule Consultation
              </Button>
            </div>
        </div>
      </section>

      {/* About Section - REBALANCED LAYOUT */}
       <section className="py-24 md:py-32 bg-white">
        {/* Changed grid to md:grid-cols-3, text spans 2 cols */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 md:gap-16 items-center">
          {/* Text content spans 2 columns */}
          <div className="md:col-span-2">
             <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-4 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Our Temecula Homes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">About Our Temecula Assisted Living Homes</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We proudly serve the Temecula Valley, offering seniors a choice of several beautiful assisted living homes. Each is designed to promote safety, comfort, and independence while providing professional care 24/7.
            </p>
             <h3 className="text-xl font-semibold text-gray-800 mb-4">What Makes Our Homes Different:</h3>
             {/* Split list into two columns */}
             <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-600 mb-8 text-sm">
                 <ul className="space-y-2">
                    <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> A range of homes and pricing options</li>
                    <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Licensed caregivers & nurses on call 24/7</li>
                    <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Personalized care plans</li>
                    <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Home-cooked meals prepared fresh daily</li>
                </ul>
                 <ul className="space-y-2">
                    <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Medication management & health monitoring</li>
                    <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Scheduled transportation & outings</li>
                    <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Engaging social & wellness activities</li>
                </ul>
            </div>
             <p className="text-lg text-gray-600 italic leading-relaxed">
              We believe seniors deserve the perfect balance of independence, care, and community — and families deserve peace of mind.
            </p>
          </div>
          {/* Image takes 1 column */}
          <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-xl border border-gray-100/80">
            <Image
              src="/caretaker2.webp" // Placeholder
              alt="Beautifully landscaped grounds of a Temecula assisted living home"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Choose Homes Section */}
      <section id="homes" className="py-24 md:py-32 bg-[#FDF8F2]/50 border-y border-gray-100/80">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* ... Heading ... */}
           <div className="text-center mb-16">
            <Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Our Temecula Homes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">Choose the Right Home in Temecula</h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Each of our Temecula-area residences offers its own atmosphere and amenities.
             </p>
          </div>
           {/* ... Cards ... */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {temeculaHomes.map((home) => (
              <Card key={home.title} className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl text-center hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0 mb-3 flex-shrink-0">
                  <CardTitle className="text-xl font-semibold text-gray-800">{home.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-sm text-gray-600 leading-relaxed">{home.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
              {/* Schedule a Free Tour Button */}
              <Button
                onClick={() => setIsCalendarOpen(true)}
                size="lg"
                className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md"
              >
                <Calendar className="mr-2 h-5 w-5"/> Schedule a Free Tour
              </Button>
           </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="py-24 md:py-32 bg-white">
         {/* ... Content identical to Murrieta ... */}
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900 tracking-tight">Leadership & Care</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the dedicated founders ensuring compassionate, high-quality care for every resident.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-xl transition-shadow duration-300">
                 <Image
                   src={member.src}
                   alt={member.name}
                   width={120}
                   height={120}
                   className="rounded-full h-28 w-28 md:h-32 md:w-32 flex-shrink-0 object-cover border-4 border-white shadow-md"
                 />
                 <div className="text-center sm:text-left flex-1">
                   <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                   <p className="text-[#CD7B00] font-medium text-sm mb-3">{member.role}</p>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     {member.bio}
                   </p>
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Care Plans Section */}
       <section className="py-24 md:py-32 bg-[#FDF8F2]/50 border-t border-gray-100/80">
         <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border border-gray-100/80 order-last md:order-first">
             <Image
              src="/tailoredcare2.webp" // Placeholder
              alt="Resident participating in an activity at a Temecula home"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
           <div>
             <Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-4 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Personalized Care Plans</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We tailor every care plan around your loved one’s lifestyle and health needs.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-600 mb-8 text-sm">
               {temeculaServices.map(service => (
                   <div key={service} className="flex items-start">
                       <CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" />
                       {service}
                   </div>
               ))}
            </div>
             {/* Removed span wrapper, removed inline from icon */}
             <Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md">
                <a href="tel:###-###-####"><Phone className="mr-2 h-5 w-5"/> Discuss Care Needs</a>
              </Button>
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
       <section id="why-us" className="py-24 md:py-32 bg-white border-b border-gray-100/80">
        {/* ... Content identical to Murrieta ... */}
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Why Choose Us in Temecula
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">The Trusted Choice in Temecula Valley</h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Families throughout Riverside County trust our network for its balance of flexibility and quality care.
             </p>
          </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseTemecula.map((reason, index) => (
                   <Card key={index} className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl">
                     <div className="flex items-start gap-4">
                       <div className="h-10 w-10 bg-[#FDF8F2] rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100/80 mt-1">
                           <Star className="h-5 w-5 text-[#CD7B00]" />
                       </div>
                       <p className="text-sm leading-relaxed text-gray-700">{reason}</p>
                     </div>
                   </Card>
               ))}
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
  <section
    id="testimonials"
    className="relative py-24 md:py-32 border-b border-gray-100/80 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/testimonialsbackgroundtemecula.webp')" }}
  >
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-white/80"
      aria-hidden="true"
    />

    {/* Content */}
    <div className="relative z-10 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
          Testimonials
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
          Hear From Temecula Families
        </h2>
      </div>
      <div className="grid md:grid-cols-1 gap-10 max-w-3xl mx-auto">
        {temeculaTestimonials.map((item, index) => (
          <Card
            key={index}
            className="bg-white p-8 shadow-xl border border-gray-100/80 rounded-xl"
          >
            <div className="flex flex-col items-center text-center">
              <Quote className="h-8 w-8 text-[#CD7B00]/40 mb-5" />
              <blockquote className="text-gray-600 leading-relaxed text-base italic mb-6 font-serif">
                "{item.quote}"
              </blockquote>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-[#CD7B00] font-medium">
                {item.relation}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>

       {/* FAQ Section */}
       <section id="faq" className="py-24 md:py-32 bg-white border-b border-gray-100/80">
          {/* ... Content identical to Murrieta (but uses Temecula data) ... */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Answers about our assisted living options in Temecula.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {temeculaFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white border border-gray-200/80 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-[#CD7B00]/40 data-[state=open]:shadow-lg">
                <AccordionTrigger className="hover:text-[#CD7B00] py-4 transition-colors text-left text-base font-medium text-gray-800 data-[state=open]:text-[#CD7B00] hover:no-underline [&[data-state=open]>svg]:text-[#CD7B00]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm pt-0">
                   {faq.a.includes("Schedule a Free Tour") ? (
                      <>
                          {faq.a.split("Schedule a Free Tour")[0]}
                          <a href="#contact" className="text-[#CD7B00] font-medium hover:underline">Schedule a Free Tour</a>
                          {faq.a.split("Call Now")[1] ? ' or ' : '.'}
                          {faq.a.includes("Call Now") && <a href="tel:###-###-####" className="text-[#CD7B00] font-medium hover:underline">Call Now</a>}
                          {faq.a.includes("Call Now") && '.'}
                      </>
                  ) : (
                      faq.a
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
       <section id="contact" className="py-24 md:py-32 bg-[#FDF8F2]/50 border-b border-gray-100/80">
          {/* ... Content identical to Murrieta (but uses Temecula text) ... */}
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">
               Find Care in Temecula
            </Badge>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Ready to Find the Right Assisted Living Home in Temecula?</h2>
           <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Your loved one deserves comfort, safety, and genuine care — and you deserve peace of mind. Let our team guide you, answer questions, and help compare homes that fit your needs and budget.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Removed span wrapper, removed inline from icon */}
              <Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md">
                 <a href="tel:###-###-####"><Phone className="mr-2 h-5 w-5"/> Call Now</a>
              </Button>
              {/* Schedule Consultation Button */}
              <Button
                onClick={() => setIsCalendarOpen(true)}
                size="lg"
                variant="outline"
                className="border-2 border-[#CD7B00] text-[#CD7B00] hover:bg-[#CD7B00]/5 transition-all duration-300 px-7 py-3 text-base rounded-md"
              >
                <Calendar className="mr-2 h-5 w-5"/> Schedule Consultation
              </Button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 pt-16 pb-12">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Top Grid: A 5-column grid for an asymmetrical "Brand + Utility" layout */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
      
      {/* === COLUMN 1: BRAND BLOCK (Spans 2 columns) === */}
      {/* This block contains the logo, tagline, contact, and social links. */}
      <div className="lg:col-span-2 space-y-5">
        <Link href="/" className="block">
          <Image
            src="/footerlogo.png" // NOTE: Use a logo version that works on a dark BG
            alt="Senior Care Logo"
            width={180}
            height={70}
            className="w-auto h-14 opacity-95"
            style={{ objectFit: "contain" }}
          />
        </Link>
        
        {/* Serving Area (as tagline) */}
        <div className="flex items-start gap-2 text-gray-400 text-sm">
          <MapPin className="h-4 w-4 text-[#CD7B00] mt-0.5 flex-shrink-0" />
          <span>Serving Temecula Valley & Surround Areas</span>
        </div>

        {/* Primary Contact */}
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#CD7B00]" />
            <a href="tel:###-###-####" className="hover:text-white"> (951) 299-9962</a>
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
      {/* This block has its OWN 3-column grid inside it for the links */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          
          {/* List 1: Our Homes */}
          <div>
            <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Our Homes</h4>
            <ul className="space-y-2 leading-relaxed">
              <li><Link href="/murrieta" className="hover:text-white">Murrieta Location</Link></li>
              <li><Link href="/temecula" className="text-[#CD7B00] font-medium hover:text-white">Temecula Location</Link></li>
              <li><Link href="/#homes" className="hover:text-white">Home Types Overview</Link></li>
            </ul>
          </div>

          {/* List 2: Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2 leading-relaxed">
              <li><Link href="/" className="hover:text-white">Main Home</Link></li>
              <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/#team" className="hover:text-white">Our Team</Link></li>
              <li><Link href="/#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact Temecula</Link></li>
            </ul>
          </div>
          
          {/* List 3: Business Hours */}
          <div>
            <h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Business Hours</h4>
            {/* Using an internal grid for clean hour alignment */}
            <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-2 leading-relaxed">
              <span>Mon–Fri</span>
              <span className="text-gray-400 font-medium text-right">9 AM – 6 PM</span>
              
              <span>Saturday</span>
              <span className="text-gray-400 font-medium text-right">By Appointment</span>
              
              <span>Sunday</span>
              <span className="text-gray-400 font-medium text-right">Closed</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    {/* === BOTTOM SECTION (Re-styled for Dark Mode) === */}
    {/* This is the section you liked, with colors adjusted for the dark BG */}
    <div className="border-t border-gray-700 mt-16 pt-10"> {/* Darker border */}
      
      {/* Feature Badges */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400 flex-wrap mb-6"> {/* Lighter text */}
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> {/* Brighter Green */}
          <span>State-Licensed Homes</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-gray-600" /> {/* Darker divider */}
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          <span>Compassionate Certified Caregivers</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-gray-600" />
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          <span>Member: CALA</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-gray-600" />
        <div className="flex items-center gap-2">
          <Star className="h-3.5 w-3.5 text-yellow-400" /> {/* Brighter Yellow */}
          <span>5-Star Family Reviews</span>
        </div>
      </div>

      {/* Copyright / Legal Links */}
      <div className="text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p>© {new Date().getFullYear()} Assisted Living - Temecula. All rights reserved. License # [Your License Number Here].</p>
        <div className="flex items-center gap-3">
          <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <span className="w-px h-3 bg-gray-600" /> {/* Darker divider */}
          <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </div>
  </div>
</footer>





    </div>
  );
}