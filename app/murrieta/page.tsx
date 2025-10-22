"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';

import { Phone, Mail, MapPin, CheckCircle, Home, Heart, Users, ArrowLeft, Sun, Coffee, Tv } from 'lucide-react';

const galleryImages = [
  { src: "https://placehold.co/800x600/a2a2a2/FFF?text=Gallery+Image+1", alt: "Bright common room" },
  { src: "https://placehold.co/800x600/b2b2b2/FFF?text=Gallery+Image+2", alt: "Spacious private bedroom" },
  { src: "https://placehold.co/800x600/c2c2c2/FFF?text=Gallery+Image+3", alt: "Modern accessible bathroom" },
  { src: "https://placehold.co/800x600/d2d2d2/FFF?text=Gallery+Image+4", alt: "Beautiful outdoor patio" },
  { src: "https://placehold.co/800x600/e2e2e2/FFF?text=Gallery+Image+5", alt: "Cozy dining area" },
];

const amenities = [
  { icon: <Sun className="w-6 h-6 text-brand-dark" />, text: "Private & Semi-Private Rooms" },
  { icon: <Tv className="w-6 h-6 text-brand-dark" />, text: "Cable TV & Wi-Fi" },
  { icon: <Coffee className="w-6 h-6 text-brand-dark" />, text: "Home-Cooked Meals" },
  { icon: <CheckCircle className="w-6 h-6 text-brand-dark" />, text: "Housekeeping & Laundry" },
];

// --- TEAM SECTION DATA ---
const teamMembers = [
  {
    name: "Terrance Sims",
    role: "Administrator / Co-Founder",
    // Using placeholders. You can replace 'src' with '/terrance-sims.webp'
    src: "https://placehold.co/400x400/a2a2a2/FFF?text=Terrance+Sims",
    bio: "With over 20 years of experience in healthcare management, Terrance oversees all operations, ensuring the highest standard of care."
  },
  {
    name: "Jennifer Sims",
    role: "Lead Care Coordinator / Co-Founder",
    // Using placeholders. You can replace 'src' with '/jennifer-sims.webp'
    src: "https://placehold.co/400x400/a2a2a2/FFF?text=Jennifer+Sims",
    bio: "Jennifer brings a passion for compassionate care, managing all resident needs and coordinating with families to create a loving environment."
  }
];

export default function MurrietaPage() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted for Murrieta");
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Mini Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <Link href="/" className="flex items-center space-x-2 text-brand-dark hover:text-brand">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Back to Main Site</span>
        </Link>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-600" />
          <span className="text-lg font-medium text-gray-800">(951) 123-4567</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] text-white">
        <Image
          src="https://placehold.co/1920x1080/a2a2a2/FFF?text=Murrieta+Home+Exterior"
          alt="Murrieta assisted living home exterior"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-4 text-5xl font-extrabold md:text-7xl">Our Murrieta Home</h1>
          <p className="mb-8 text-xl md:text-2xl max-w-3xl">
            A warm, inviting, and safe environment for your loved ones.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Murrieta Location</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nestled in a quiet, beautiful neighborhood in Murrieta, our home is designed to provide maximum comfort and security. We are a 6-bed facility, allowing us to offer truly personalized and attentive care to each resident.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our dedicated staff is trained to assist with all activities of daily living, from medication management to mobility assistance, all while fostering a sense of independence and dignity.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-brand hover:bg-brand-dark">
              <Link href="#contact">Schedule a Personal Tour</Link>
            </Button>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x400/b2b2b2/FFF?text=Cozy+Interior"
              alt="Cozy interior of Murrieta home"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Amenities & Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity) => (
              <Card key={amenity.text} className="text-center p-6 shadow-md bg-white">
                <CardHeader className="flex flex-col items-center">
                  <div className="p-3 bg-brand-lightest rounded-full mb-3">
                    {amenity.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{amenity.text}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We also provide 24/7 staffing, assistance with bathing and dressing, daily social activities, transportation coordination, and much more.
            </p>
          </div>
        </div>
      </section>

      {/* --- NEW TEAM SECTION --- */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                    <Image
                      src={member.src}
                      alt={`Portrait of ${member.name}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="md:w-3/5">
                    <CardHeader>
                      <CardTitle className="text-3xl text-gray-800">{member.name}</CardTitle>
                      <p className="text-xl font-medium text-brand-dark">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{member.bio}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* --- END OF NEW TEAM SECTION --- */}

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50"> {/* Changed bg to maintain alternating pattern */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Photo Gallery</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="relative w-full h-64 p-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-brand-dark" />
            <CarouselNext className="text-brand-dark" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white"> {/* Changed bg to maintain alternating pattern */}
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Questions About Our Murrieta Home</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-medium">What is the staff-to-resident ratio?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                As a 6-bed facility, we pride ourselves on a high staff-to-resident ratio, ensuring personalized and prompt attention for everyone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-medium">Are specialized care services available?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Yes, we offer care plans for residents with specific needs, including memory care and mobility assistance. Please contact us to discuss your specific requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-medium">Am I locked into a long-term contract?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                We offer flexible month-to-month agreements. We believe in earning your trust and satisfaction every day.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50"> {/* Changed bg to maintain alternating pattern */}
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Schedule Your Visit</h2>
            <p className="text-lg text-gray-700 mb-8">
              The best way to experience our Murrieta home is to see it for yourself. Contact us today to schedule a no-obligation tour with our care team.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-brand" />
                <span className="text-lg text-gray-800">(951) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-brand" />
                <span className="text-lg text-gray-800">info@assistedliving.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-brand" />
                <span className="text-lg text-gray-800">Murrieta, CA 92562</span>
              </div>
            </div>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-gray-800">Request Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name" className="text-base">Name</Label>
                    <Input type="text" id="name" placeholder="Your Name" required className="text-base p-3" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input type="email" id="email" placeholder="Your Email" required className="text-base p-3" />
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message" className="text-base">Message</Label>
                    <Textarea placeholder="I'm interested in the Murrieta home..." id="message" required className="text-base p-3" />
                  </div>
                  <p className="text-sm text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                  <Button type="submit" size="lg" className="w-full text-lg bg-brand hover:bg-brand-dark">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Assisted Living - Murrieta. All rights reserved.</p>
          <p className="text-sm mt-2">License # 123456789</p>
        </div>
      </footer>
    </div>
  );
}





