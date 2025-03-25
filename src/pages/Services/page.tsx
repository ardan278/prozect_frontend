import { useState } from "react";

// Define form type
type ServiceType = {
  title: string;
  desc: string;
  href: string;
};

// Array of forms with URLs
const forms: ServiceType[] = [
  {
    title: "Spare Parts",
    desc: "Order complete spares of any elevator brand here. If you have your own service company maintaining / servicing other brand elevators, we can be your reliable partners.",
    href: "/services/spareParts",
  },
  {
    title: "New Sales",
    desc: "We offer both standard and custom lift car designs, utilizing a variety of materials chosen by you for new elevator installations.",
    href: "/services/newSales",
  },
  {
    title: "Service",
    desc: "We can help find great after sales comprehensive service package that suits YOUR budget.",
    href: "/services/Service",
  },
  {
    title: "Modernization",
    desc: "Let's replace what is REQUIRED!\n We also specialize in creating new car designs for existing lifts as part of modernization projects, ensuring top-notch workmanship throughout the process.",
    href: "/services/Modernization",
  },
  {
    title: "Cab Interior",
    desc: "We provide lift car standard designs and also manufacture bespoke designs and install assuring best workmanship using different materials to your selection for new elevators.",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-3">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-3 w-full max-w-10xl">
        {forms.map((form, index) => (
          <Flashcard
            key={index}
            title={form.title}
            desc={form.desc}
            href={form.href}
          />
        ))}
      </div>
    </div>
  );
}

// Flashcard component
interface FlashcardProps {
  title: string;
  desc: string;
  href: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ title, desc, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="block bg-gray-100 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 text-md mt-2">{desc}</p>
      <span
        className={`block mt-4 text-blue-500 font-medium ${
          hovered ? "underline" : ""
        }`}
      >
        Fill Out Form →
      </span>
    </a>
  );
};


