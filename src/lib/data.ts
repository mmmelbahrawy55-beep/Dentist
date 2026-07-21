import {
  Smile,
  Sparkles,
  Shield,
  Heart,
  Stethoscope,
  Baby,
  Syringe,
  Eye,
  Scissors,
  Activity,
  Zap,
  Clock,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  qualifications: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
  service: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements using titanium implants that fuse with your jawbone for a lifetime of confident smiles.",
    icon: Shield,
    color: "#0EA5E9",
  },
  {
    title: "Hollywood Smile",
    description:
      "Complete smile makeover combining veneers, whitening, and contouring to give you a celebrity-worthy radiant smile.",
    icon: Sparkles,
    color: "#F59E0B",
  },
  {
    title: "Porcelain Veneers",
    description:
      "Ultra-thin, custom-crafted shells bonded to teeth to correct shape, color, and alignment for a flawless appearance.",
    icon: Smile,
    color: "#14B8A6",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening treatments that brighten your smile up to 8 shades in a single comfortable session.",
    icon: Sparkles,
    color: "#0EA5E9",
  },
  {
    title: "Orthodontics",
    description:
      "Modern braces and clear aligners to straighten teeth and perfect your bite with discreet, comfortable options.",
    icon: Activity,
    color: "#14B8A6",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle, fun dental care specifically designed for children in a welcoming environment that makes visits enjoyable.",
    icon: Baby,
    color: "#F59E0B",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Pain-free, advanced endodontic treatment to save infected teeth using the latest technology and techniques.",
    icon: Heart,
    color: "#EF4444",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Comprehensive aesthetic treatments including bonding, contouring, and smile design to enhance your natural beauty.",
    icon: Eye,
    color: "#8B5CF6",
  },
  {
    title: "Oral Surgery",
    description:
      "Expert surgical procedures from extractions to bone grafting, performed with precision and minimal recovery time.",
    icon: Scissors,
    color: "#0EA5E9",
  },
  {
    title: "Dental Crowns",
    description:
      "Custom porcelain crowns that restore damaged teeth to full strength and beauty, matching your natural teeth perfectly.",
    icon: Stethoscope,
    color: "#14B8A6",
  },
  {
    title: "Gum Treatment",
    description:
      "Advanced periodontal therapies to treat gum disease, restore gum health, and prevent future complications.",
    icon: Activity,
    color: "#F59E0B",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency dental services for urgent situations — severe pain, trauma, or broken teeth when you need us most.",
    icon: Zap,
    color: "#EF4444",
  },
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Cosmetic Dentistry & Smile Design",
    experience: "15+ Years",
    qualifications: ["DDS - Harvard School", "Fellowship in Cosmetic Dentistry", "AACD Accredited"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Dr. James Anderson",
    specialty: "Oral Surgery & Implantology",
    experience: "20+ Years",
    qualifications: ["DMD - University of Pennsylvania", "Board Certified Oral Surgeon", "ITI Fellow"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Orthodontics & Aligners",
    experience: "12+ Years",
    qualifications: ["DDS - NYU", "Invisalign Diamond Provider", "ABO Certified"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Roberts",
    specialty: "Endodontics & Root Canal",
    experience: "18+ Years",
    qualifications: ["DDS - Columbia University", "Microscopic Endodontics Specialist", "AAE Member"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=85&auto=format&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amanda K.",
    text: "Absolutely incredible experience! The Hollywood Smile transformation exceeded all my expectations. The team was professional, caring, and the results are stunning.",
    rating: 5,
    image: "/patients/patient1.jpg",
    service: "Hollywood Smile",
  },
  {
    name: "Robert M.",
    text: "I was terrified of dentists my whole life. Dr. Mitchell completely changed that. Painless, efficient, and the dental implants look and feel like real teeth.",
    rating: 5,
    image: "/patients/patient2.jpg",
    service: "Dental Implants",
  },
  {
    name: "Sofia L.",
    text: "My veneers are perfect! Everyone asks me about my smile now. The entire process was smooth and the clinic feels like a 5-star hotel.",
    rating: 5,
    image: "/patients/patient3.jpg",
    service: "Porcelain Veneers",
  },
  {
    name: "David W.",
    text: "Best dental experience ever! From the moment I walked in, I felt valued. The teeth whitening results were immediate and dramatic. Highly recommend!",
    rating: 5,
    image: "/patients/patient4.jpg",
    service: "Teeth Whitening",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our website, by calling us directly, via WhatsApp, or by visiting our clinic. We offer online scheduling with instant confirmation and flexible time slots.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we work with most major dental insurance providers. Our team will verify your coverage and help maximize your benefits before any treatment begins.",
  },
  {
    question: "How long does a dental implant procedure take?",
    answer:
      "The implant placement itself takes 1-2 hours. The full process from implant to final crown typically takes 3-6 months, as the implant needs time to fuse with the jawbone (osseointegration).",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Absolutely. Our professional whitening treatments are dentist-supervised and use clinically proven, safe concentrations of whitening agents. We customize the treatment to minimize sensitivity.",
  },
  {
    question: "What age should my child first visit the dentist?",
    answer:
      "We recommend the first dental visit by age 1 or within 6 months of the first tooth erupting. Early visits help establish good oral habits and allow us to catch any issues early.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible financing options, interest-free payment plans, and can work with you to create a payment schedule that fits your budget. No one should delay dental care due to cost.",
  },
  {
    question: "What makes your clinic different from others?",
    answer:
      "We combine world-class expertise with cutting-edge technology, a luxury patient experience, and a genuine commitment to your comfort. Our outcomes-focused approach and 98% patient satisfaction rate set us apart.",
  },
  {
    question: "How do I handle a dental emergency?",
    answer:
      "Call our 24/7 emergency line immediately. We keep emergency slots open every day for urgent situations like severe pain, knocked-out teeth, or dental trauma. Do not wait — early treatment is critical.",
  },
];

export const stats: Stat[] = [
  { value: 15000, suffix: "+", label: "Happy Patients", icon: Users },
  { value: 20, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 50, suffix: "+", label: "Awards Won", icon: Award },
  { value: 98, suffix: "%", label: "Success Rate", icon: Activity },
];

export const insurancePartners = [
  "Cigna", "Aetna", "MetLife", "Delta Dental",
  "United Healthcare", "Humana", "Guardian", "Blue Cross",
];

export const socialLinks = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
};
