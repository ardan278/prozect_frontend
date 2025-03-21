import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <header className="w-full bg-blue-600 text-white py-4 text-center text-2xl font-bold fixed top-0 left-0 right-0 z-50">
        My E-Commerce Store
      </header>
      <nav className="w-full bg-white shadow-md py-3 flex justify-center space-x-6 fixed top-16 left-0 right-0 z-50">
        <button
          className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-800"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </button>
        <button
          className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-800"
          onClick={() =>
            setTimeout(
              () =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" }),
              100
            )
          }
        >
          Products
        </button>
        <button className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-800">
          Cart
        </button>
        <button className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-800">
          Contact
        </button>
      </nav>
      <main className="w-full max-w-6xl p-5 mt-32">
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold">
            Welcome to the Best Online Store
          </h1>
          <p className="text-gray-600 mt-2">
            Find the best products at unbeatable prices.
          </p>
          <button className="mt-5 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700">
            Shop Now
          </button>
        </section>
        <section
          id="products"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          <div className="bg-white p-5 rounded-xl shadow-lg text-center">
            <img
              src="https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp"
              alt="Product 1"
              className="mx-auto mb-3"
            />
            <h2 className="text-xl font-semibold">Product 1</h2>
            <p className="text-gray-600">$29.99</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 2"
              className="mx-auto mb-3"
            />
            <h2 className="text-xl font-semibold">Product 2</h2>
            <p className="text-gray-600">$39.99</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 3"
              className="mx-auto mb-3"
            />
            <h2 className="text-xl font-semibold">Product 3</h2>
            <p className="text-gray-600">$49.99</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
