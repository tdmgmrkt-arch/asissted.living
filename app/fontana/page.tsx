"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import CalendarModal from '@/components/CalendarModal';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Calendar, CheckCircle2, Facebook, Instagram, Linkedin, Heart, Star, Quote } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  { name: "Terrance D. Sims, CSA, CDP", role: "Senior Living Specialist", src: "/terrance-sims.webp", bio: "Terrance oversees operations, leveraging extensive experience to ensure the highest standards of care and resident satisfaction." },
  { name: "Jennifer Sims, RN, BSN, CSA", role: "Lead Care Coordinator", src: "/jennifer-sims.webp", bio: "Jennifer brings clinical expertise and a passion for care coordination, working closely with residents and families." }
];

const fontanaHomes = [
  { title: "Steel City Care Homes", description: "Quality residential care in Fontana's diverse neighborhoods, offering personalized attention in welcoming environments." },
  { title: "Premier Assisted Living", description: "Comprehensive care communities with modern amenities, professional staff, and enriching daily programs." },
  { title: "Memory Care Centers", description: "Specialized secure environments for seniors with Alzheimer's or dementia, featuring trained memory care staff." },
  { title: "Active Senior Communities", description: "Ideal for independent seniors wanting light assistance while staying active and socially connected." },
];

const fontanaServices = [
  "Personal care and daily living assistance",
  "Medication management and monitoring",
  "Three nutritious meals plus snacks daily",
  "Housekeeping and laundry services",
  "Transportation to medical appointments",
  "Social activities and fitness programs",
];

const whyChooseFontana = [
  "Diverse, growing community with quality care options",
  "Affordable senior care in San Bernardino County",
  "Personalized attention with experienced staff",
  "Close proximity to major medical facilities",
  "Family-oriented care approach",
  "Strong community healthcare network",
];

const fontanaTestimonials = [
  { quote: "Fontana has been the perfect location for dad. Great care, wonderful staff, and close to family.", name: "Michael R.", relation: "Son of Fontana Resident" },
  { quote: "The team made finding care easy. We're thrilled with the home we found for mom.", name: "Teresa M.", relation: "Daughter of Resident" },
  { quote: "Quality care at prices we could afford. The staff genuinely cares about every resident.", name: "Roberto S.", relation: "Fontana Family Member" }
];

const fontanaFaqs = [
  { q: "What senior care options are available in Fontana?", a: "Fontana offers various options including residential care homes, assisted living communities, and specialized memory care facilities through our network." },
  { q: "Is Fontana affordable for senior care?", a: "Yes, Fontana provides quality senior care at competitive prices, making it a great choice for families seeking value." },
  { q: "Do you offer memory care in Fontana?", a: "Yes, several partner homes in Fontana specialize in memory care with secure, supervised environments." },
  { q: "How do I choose the right Fontana care home?", a: "Contact us for a free consultation. We'll assess needs and arrange tours at homes matching your requirements." },
  { q: "Can care be adjusted as needs change?", a: "Absolutely. Our network provides flexibility to adjust care levels as your loved one's needs evolve." },
  { q: "Are tours available?", a: "Yes! We encourage families to tour facilities. Schedule a Free Tour or Call Now to get started." },
];

export default function FontanaPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-700 overflow-x-hidden antialiased">
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />

      <header className="border-b border-gray-100/80 sticky top-0 bg-white/95 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center"><Image src="/senior-care-logo.webp" alt="Senior Care Authority Logo" width={180} height={72} className="h-14 w-auto" style={{ objectFit: 'contain' }} priority /></Link>
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium">
              <Link href="/#about" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">About Us</Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#CD7B00] transition-colors duration-200 text-sm font-medium"><span>Locations</span><svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-[#CD7B00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-7 w-[560px] bg-white rounded-md shadow-lg pt-4 pb-3 px-5 z-20 hidden group-hover:block ring-1 ring-black ring-opacity-5 before:content-[''] before:absolute before:top-[-28px] before:left-0 before:right-0 before:h-[28px]">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                    <Link href="/corona" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Corona</Link>
                    <Link href="/fontana" className="block whitespace-nowrap px-3 py-2 text-sm text-[#CD7B00] bg-gray-50 rounded">Fontana</Link>
                    <Link href="/indio" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Indio</Link>
                    <Link href="/menifee" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Menifee</Link>
                    <Link href="/moreno-valley" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Moreno Valley</Link>
                    <Link href="/murrieta" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Murrieta</Link>
                    <Link href="/norco" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Norco</Link>
                    <Link href="/ontario" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Ontario</Link>
                    <Link href="/palm-desert" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Palm Desert</Link>
                    <Link href="/rancho-cucamonga" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Rancho Cucamonga</Link>
                    <Link href="/rialto" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Rialto</Link>
                    <Link href="/riverside" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Riverside</Link>
                    <Link href="/san-bernardino" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">San Bernardino</Link>
                    <Link href="/temecula" className="block whitespace-nowrap px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#CD7B00] rounded transition-colors duration-150">Temecula</Link>
                  </div>
                </div>
              </div>
              <a href="#homes" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Our Homes</a>
              <a href="#services" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Services</a>
              <Link href="/blog" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Blog</Link>
              <a href="#contact" className="text-gray-600 hover:text-[#CD7B00] transition-colors duration-200">Contact</a>
            </nav>
            <Button onClick={() => setIsCalendarOpen(true)} className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md shadow-[#CD7B00]/20 hover:shadow-lg hover:shadow-[#CD7B00]/30 transition-all duration-300 hover:-translate-y-px text-sm px-5 py-2.5 rounded-md">Schedule Consultation</Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[60vh] md:min-h-[500px] flex items-center justify-center text-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0"><Image src="/fontanahero.webp" alt="Fontana California community" fill style={{ objectFit: 'cover' }} className="w-full h-full object-cover opacity-50" priority /><div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
          <Badge className="bg-white/10 border border-white/20 text-white backdrop-blur-sm mb-4 px-3 py-1 font-medium tracking-wide text-sm rounded-full">Assisted Living in Fontana, CA</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">Trusted Senior Care in Fontana's Thriving Community</h1>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto mb-8 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">Discover quality assisted living in Fontana. Our network of licensed care homes provides personalized support in a diverse, welcoming community.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md"><a href="tel:951-299-9962"><Phone className="mr-2 h-5 w-5" /> Call (951) 299-9962</a></Button>
            <Button onClick={() => setIsCalendarOpen(true)} size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-7 py-3 text-base rounded-md"><Calendar className="mr-2 h-5 w-5" /> Free Consultation</Button>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 md:gap-16 items-center">
          <div className="md:col-span-2">
            <Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-4 px-4 py-1 font-medium tracking-wide text-sm rounded-full">Fontana Senior Living</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Professional Assisted Living Services in Fontana, California</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Fontana, once known as the "City of Action," continues to thrive as a diverse community with excellent healthcare access. Our network of licensed care homes provides compassionate, affordable care tailored to individual needs.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">From daily assistance to specialized memory care, our Fontana communities deliver personalized support honoring each resident's dignity and independence.</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Fontana:</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-600 mb-8 text-sm">
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Diverse, welcoming community</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Affordable care options</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> 24/7 professional staff</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Nutritious daily meals</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Medication management</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Engaging activities</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" /> Close to Kaiser and hospitals</li>
              </ul>
            </div>
            <Card className="bg-[#FDF8F2]/60 p-6 border border-gray-100/80 rounded-lg shadow-sm"><blockquote className="text-gray-700 italic text-center md:text-left">"Fontana has been the perfect location for dad. Great care, wonderful staff, and close to family."<cite className="block text-sm text-gray-500 not-italic mt-2">— Michael R., Son of Fontana Resident</cite></blockquote></Card>
          </div>
          <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-xl border border-gray-100/80"><Image src="/fontanapersonalizedcare.webp" alt="Fontana senior care community" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 hover:scale-105" /></div>
        </div>
      </section>

      <section id="homes" className="py-24 md:py-32 bg-[#FDF8F2]/50 border-y border-gray-100/80">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">Fontana Options</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">Senior Care Communities in Fontana</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">Explore quality care homes throughout Fontana, each offering personalized services in comfortable environments.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">{fontanaHomes.map((home) => (<Card key={home.title} className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl text-center hover:shadow-xl transition-shadow duration-300 flex flex-col"><CardHeader className="p-0 mb-3 flex-shrink-0"><CardTitle className="text-xl font-semibold text-gray-800">{home.title}</CardTitle></CardHeader><CardContent className="p-0 flex-grow"><p className="text-sm text-gray-600 leading-relaxed">{home.description}</p></CardContent></Card>))}</div>
          <div className="text-center mt-12"><Button onClick={() => setIsCalendarOpen(true)} size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md"><Calendar className="mr-2 h-5 w-5" /> Schedule a Free Tour</Button></div>
        </div>
      </section>

      <section id="team" className="py-24 md:py-32 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20"><Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">Our Team</Badge><h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900 tracking-tight">Your Fontana Senior Care Team</h2><p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">Our experienced team guides Fontana families through senior care decisions with expertise and compassion.</p></div>
          <div className="grid md:grid-cols-2 gap-10">{teamMembers.map((member) => (<Card key={member.name} className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-xl transition-shadow duration-300"><Image src={member.src} alt={member.name} width={120} height={120} className="rounded-full h-28 w-28 md:h-32 md:w-32 flex-shrink-0 object-cover border-4 border-white shadow-md" /><div className="text-center sm:text-left flex-1"><h3 className="text-xl font-semibold text-gray-900">{member.name}</h3><p className="text-[#CD7B00] font-medium text-sm mb-3">{member.role}</p><p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p></div></Card>))}</div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32 bg-[#FDF8F2]/50 border-t border-gray-100/80">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border border-gray-100/80 order-last md:order-first"><Image src="/fontanaourservices.webp" alt="Senior services in Fontana" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 hover:scale-105" /></div>
          <div><Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-4 px-4 py-1 font-medium tracking-wide text-sm rounded-full">Our Services</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Senior Care Services in Fontana</h2><p className="text-lg text-gray-600 mb-8 leading-relaxed">Our Fontana care homes provide comprehensive services tailored to each resident's unique needs.</p><h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-600 mb-8 text-sm">{fontanaServices.map(service => (<div key={service} className="flex items-start"><CheckCircle2 className="h-4 w-4 text-[#CD7B00]/80 mr-2 mt-0.5 flex-shrink-0" />{service}</div>))}</div><Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md"><a href="tel:951-299-9962"><Phone className="mr-2 h-5 w-5" /> Discuss Care Needs</a></Button></div>
        </div>
      </section>

      <section id="why-us" className="py-24 md:py-32 bg-white border-b border-gray-100/80">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">Why Choose Fontana</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">Fontana's Trusted Senior Care Network</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">Families throughout Fontana trust us for affordable, quality senior care.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{whyChooseFontana.map((reason, index) => (<Card key={index} className="bg-white p-6 shadow-lg border border-gray-100/80 rounded-xl"><div className="flex items-start gap-4"><div className="h-10 w-10 bg-[#FDF8F2] rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100/80 mt-1"><Star className="h-5 w-5 text-[#CD7B00]" /></div><p className="text-sm leading-relaxed text-gray-700">{reason}</p></div></Card>))}</div>
        </div>
      </section>

      <section id="testimonials" className="relative py-24 md:py-32 border-b border-gray-100/80 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/fontanatestimonials.webp')" }}>
        <div className="absolute inset-0 bg-white/80" aria-hidden="true" />
        <div className="relative z-10 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">Testimonials</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">What Fontana Families Say</h2></div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">{fontanaTestimonials.map((item, index) => (<Card key={index} className="bg-white p-8 shadow-xl border border-gray-100/80 rounded-xl"><div className="flex flex-col items-center text-center"><Quote className="h-8 w-8 text-[#CD7B00]/40 mb-5" /><blockquote className="text-gray-600 leading-relaxed text-base italic mb-6 font-serif flex-grow">"{item.quote}"</blockquote><h3 className="text-lg font-semibold mb-1 text-gray-800">{item.name}</h3><p className="text-sm text-[#CD7B00] font-medium">{item.relation}</p></div></Card>))}</div>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32 bg-white border-b border-gray-100/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><Badge className="bg-[#CD7B00]/10 text-[#B56D00] border border-[#CD7B00]/20 mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">FAQs</Badge><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">Fontana Senior Care FAQs</h2><p className="text-lg text-gray-600 leading-relaxed">Common questions about assisted living in Fontana, California.</p></div>
          <Accordion type="single" collapsible className="space-y-4">{fontanaFaqs.map((faq, index) => (<AccordionItem key={index} value={`item-${index + 1}`} className="bg-white border border-gray-200/80 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-[#CD7B00]/40 data-[state=open]:shadow-lg"><AccordionTrigger className="hover:text-[#CD7B00] py-4 transition-colors text-left text-base font-medium text-gray-800 data-[state=open]:text-[#CD7B00] hover:no-underline [&[data-state=open]>svg]:text-[#CD7B00]">{faq.q}</AccordionTrigger><AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm pt-0">{faq.a}</AccordionContent></AccordionItem>))}</Accordion>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 bg-[#FDF8F2]/50 border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white border border-[#CD7B00]/20 text-[#B56D00] mb-6 px-4 py-1 font-medium tracking-wide text-sm rounded-full">Contact Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Find Quality Senior Care in Fontana Today</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">Ready to explore senior care options in Fontana? Contact us for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#CD7B00] hover:bg-[#B56D00] text-white shadow-md hover:shadow-lg transition-shadow duration-300 px-7 py-3 text-base rounded-md"><a href="tel:951-299-9962"><Phone className="mr-2 h-5 w-5" /> Call (951) 299-9962</a></Button>
            <Button onClick={() => setIsCalendarOpen(true)} size="lg" variant="outline" className="border-2 border-[#CD7B00] text-[#CD7B00] hover:bg-[#CD7B00]/5 transition-all duration-300 px-7 py-3 text-base rounded-md"><Calendar className="mr-2 h-5 w-5" /> Schedule Consultation</Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 pt-16 pb-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-5">
              <Link href="/" className="block"><Image src="/senior-care-logo.webp" alt="Senior Care Authority Logo" width={180} height={70} className="w-auto h-14 opacity-95" style={{ objectFit: "contain" }} /></Link>
              <div className="flex items-start gap-2 text-gray-400 text-sm"><MapPin className="h-4 w-4 text-[#CD7B00] mt-0.5 flex-shrink-0" /><span>Serving Fontana, Rialto, Rancho Cucamonga & the Inland Empire</span></div>
              <ul className="space-y-3 text-sm"><li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#CD7B00]" /><a href="tel:951-299-9962" className="hover:text-white">(951) 299-9962</a></li><li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#CD7B00]" /><a href="mailto:ie@seniorcareauthority.com" className="hover:text-white">ie@seniorcareauthority.com</a></li></ul>
              <div className="flex items-center space-x-4 pt-2"><a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a><a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a><a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a></div>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                <div><h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Locations</h4><ul className="space-y-2 leading-relaxed"><li><Link href="/fontana" className="text-[#CD7B00] font-medium hover:text-white">Fontana</Link></li><li><Link href="/rialto" className="hover:text-white">Rialto</Link></li><li><Link href="/san-bernardino" className="hover:text-white">San Bernardino</Link></li><li><Link href="/rancho-cucamonga" className="hover:text-white">Rancho Cucamonga</Link></li></ul></div>
                <div><h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Quick Links</h4><ul className="space-y-2 leading-relaxed"><li><Link href="/" className="hover:text-white">Home</Link></li><li><Link href="/#about" className="hover:text-white">About Us</Link></li><li><Link href="/blog" className="hover:text-white">Blog</Link></li><li><Link href="#contact" className="hover:text-white">Contact</Link></li></ul></div>
                <div><h4 className="text-white mb-4 font-semibold text-sm tracking-wide uppercase">Hours</h4><div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-2 leading-relaxed"><span>Mon–Fri</span><span className="text-gray-400 font-medium text-right">9 AM – 6 PM</span><span>Saturday</span><span className="text-gray-400 font-medium text-right">By Appointment</span><span>Sunday</span><span className="text-gray-400 font-medium text-right">Closed</span></div></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-16 pt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400 flex-wrap mb-6"><div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /><span>State-Licensed Care</span></div><div className="hidden sm:block w-px h-4 bg-gray-600" /><div className="flex items-center gap-2"><Heart className="h-3.5 w-3.5 text-red-500" /><span>Locally Owned</span></div><div className="hidden sm:block w-px h-4 bg-gray-600" /><div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 text-yellow-400" /><span>5-Star Reviews</span></div></div>
            <div className="text-center text-xs text-gray-500"><p>© {new Date().getFullYear()} Senior Care Authority - Fontana. All rights reserved.</p></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
