export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16">
      <div className="text-center mt-8 mb-5">
        <h1 className="text-4xl font-extrabold text-black">Services</h1>
      </div>
      <div className="text-center mt-20 space-y-4">
        <a
          href="/services/spareParts"
          className="block text-3xl font-bold text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Spare Parts
        </a>
        <p className="block text-2xl text-gray-700 cursor-pointer transition-colors duration-300">
          Order complete spares of any elevator brand here. If you have your own
          service company maintaining / servicing other brand elevators, we can
          be your reliable partners.
        </p>
        <a
          href="/services/newSales"
          className="block text-3xl font-bold text-gray-700 cursor-pointer transition-colors duration-300"
        >
          New Sales
        </a>
        <p className="block text-2xl text-gray-700 cursor-pointer transition-colors duration-300">
          We offer both standard and custom lift car designs, utilizing a
          variety of materials chosen by you for new elevator installations.
        </p>
        <a
          href="/services/Service"
          className="block text-3xl font-bold text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Service
        </a>
        <p className="block text-2xl text-gray-700 cursor-pointer transition-colors duration-300">
          We can help find great after sales comprehensive service package that
          suits YOUR budget.
        </p>
        <a
          href="/services/Modernization"
          className="block text-3xl font-bold text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Modernization
        </a>
        <p className="block text-2xl text-gray-700 cursor-pointer transition-colors duration-300">
          Let's replace what is REQUIRED!
          <br />
          We also specialize in creating new car designs for existing lifts as
          part of modernization projects, ensuring top-notch workmanship
          throughout the process.
        </p>
        <a
          href="/contact"
          className="block text-3xl font-bold text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Cab Interior
        </a>
        <p className="block text-2xl text-gray-700 cursor-pointer transition-colors duration-300">
          We provide lift car standard designs and also manufacture bespoke
          designs and install assuring best workmanship using different
          materials to your selection for new elevators.
        </p>
      </div>
    </div>
  );
}
