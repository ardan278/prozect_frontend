export default function Forms() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16">
      <div className="text-center mt-8 mb-5">
        <h1 className="text-4xl font-extrabold text-black">Forms</h1>
      </div>
      <div className="text-center mt-20 space-y-4">
        <a
          href="/forms/registration"
          className="block text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300"
        >
          Registration Form
        </a>
        <a
          href="/forms/installation"
          className="block text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300"
        >
          Installation Form
        </a>
        <a
          href="/forms/service"
          className="block text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300"
        >
          Service Form
        </a>
        <a
          href="/forms/parts"
          className="block text-3xl font-bold text-gray-700 hover:text-red-500 cursor-pointer transition-colors duration-300"
        >
          Part Request Form
        </a>
      </div>
    </div>
  );
}
