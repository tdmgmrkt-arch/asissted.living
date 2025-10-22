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

// Renamed Home to HomeIcon to avoid conflict with the component name
import { Phone, Mail, MapPin, CheckCircle, Home as HomeIcon, Heart, Users } from 'lucide-react';

// Main component is already named Home
export default function Home() {

  const locations = [
    {
      name: "Murrieta",
      href: "/murrieta",
      imageSrc: "https://placehold.co/600x400/a2a2a2/FFF?text=Murrieta+Home",
    },
    {
      name: "Temecula",
      href: "/temecula",
      imageSrc: "https://placehold.co/600x400/a2a2a2/FFF?text=Temecula+Home",
    },
  ];

  const testimonials = [
    {
      quote: "The care my mother received was exceptional. The staff treated her like family.",
      name: "John D.",
      relation: "Son of Resident"
    },
    {
      quote: "We were so impressed with the beautiful facility and the variety of activities.",
      name: "Mary S.",
      relation: "Daughter of Resident"
    },
    {
      quote: "A loving and supportive environment. We couldn't have asked for more.",
      name: "Robert P.",
      relation: "Family of Resident"
    }
  ];

  const services = [
    {
      icon: <HomeIcon className="w-10 h-10 text-brand" />,
      title: "24/7 Supervised Care",
      description: "Continuous professional supervision ensures safety and immediate assistance."
    },
    {
      icon: <Heart className="w-10 h-10 text-brand" />,
      title: "Personalized Care Plans",
      description: "Tailored plans to meet the unique needs and preferences of each resident."
    },
    {
      icon: <Users className="w-10 h-10 text-brand" />,
      title: "Engaging Social Activities",
      description: "A vibrant calendar of activities to promote social interaction and well-being."
    }
  ];

  // --- NEW TEAM SECTION DATA ---
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center space-x-3">
          <Image
            src="https://placehold.co/150x50/333/FFF?text=Assisted+Living+Logo"
            // Use width and height for next/image
            width={150}
            height={50}
            alt="Assisted Living Logo"
          />
        </div>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="text-lg font-medium text-gray-700 hover:text-brand">Home</Link>
          <Link href="/murrieta" className="text-lg font-medium text-gray-700 hover:text-brand">Murrieta</Link>
          <Link href="/temecula" className="text-lg font-medium text-gray-700 hover:text-brand">Temecula</Link>
          <Link href="#contact" className="text-lg font-medium text-gray-700 hover:text-brand">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] text-white">
        <Image
          src="https://placehold.co/1920x1080/555/FFF?text=Hero+Background"
          alt="Comfortable living room"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-4 text-5xl font-extrabold md:text-7xl">Compassionate Assisted Living</h1>
          <p className="mb-8 text-xl md:text-2xl max-w-3xl">
            Providing exceptional care and a vibrant community for seniors in Murrieta and Temecula.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-brand hover:bg-brand-dark">
            <Link href="#contact">Schedule a Tour</Link>
          </Button>
        </div>
      </section>

      {/* Our Locations Section */}
      <section id="locations" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Locations</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {locations.map((location) => (
              <Card key={location.name} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="relative w-full h-64">
                  <Image
                    src={location.imageSrc}
                    alt={`${location.name} assisted living home`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl text-center text-gray-800">{location.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild size="lg" className="w-full bg-brand-dark hover:bg-brand-darkest">
                    <Link href={location.href}>Learn More & See Gallery</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="text-center p-6 shadow-md">
                <CardHeader className="flex flex-col items-center">
                  <div className="p-4 bg-brand-lightest rounded-full mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-brand text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Families Say</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white text-gray-800">
                      <CardContent className="p-6">
                        <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                        <p className="font-bold text-right text-brand-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 text-right">{testimonial.relation}</p>
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
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-medium">What is assisted living?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Assisted living provides housing, personalized supportive services, and healthcare to individuals who need help with activities of daily living.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-medium">What services are included?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Services typically include 24-hour supervision, meals, medication management, personal care assistance, housekeeping, and social activities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-medium">How much does it cost?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Cost varies based on the location and the level of care required. We offer transparent pricing and can discuss payment options with you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              We'd love to answer your questions and show you our homes. Please reach out to schedule a tour or request more information.
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
                <span className="text-lg text-gray-800">Murrieta & Temecula, CA</span>
              </div>
            </div>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-gray-800">Send Us a Message</CardTitle>
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
                    <Textarea placeholder="Your message..." id="message" required className="text-base p-3" />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg bg-brand hover:bg-brand-dark">
                    Send Message
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
          <p>&copy; {new Date().getFullYear()} Assisted Living. All rights reserved.</p>
          <p className="text-sm mt-2">License # 123456789</p>
        </div>
      </footer>
    </div>
  );
}


