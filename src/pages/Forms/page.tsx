import { useState } from "react";

// Define form type
type FormType = {
  title: string;
  desc: string;
  href: string;
};

// Array of forms with URLs
const forms: FormType[] = [
  {
    title: "Registration Form",
    desc: "Sign up and create your account.",
    href: "/forms/registration",
  },
  {
    title: "Installation Form",
    desc: "Request an installation service.",
    href: "/forms/installation",
  },
  {
    title: "Service Form",
    desc: "Schedule maintenance and repairs.",
    href: "/forms/service",
  },
  {
    title: "Request Form",
    desc: "Submit custom requests.",
    href: "/forms/parts",
  },
];

export default function Forms() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-2">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Choose a Form
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
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
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
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
