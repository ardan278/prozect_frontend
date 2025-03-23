import {JSX} from "react";


export default function Inst_form(): JSX.Element {
  return (
      <div className="h-screen w-screen mt-10 flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold mb-10">New Installation Form</h2>
        <form className="w-full max-w-lg">
          {/* Section 1 */}
          <div className="mb-6">
            <label
                htmlFor="manufacturer"
                className="block text-2xl mr-60 font-semibold text-gray-700"
            >
              <b>Manufacturer</b>
            </label>
            <input
                type="text"
                id="manufacturer"
                className="block w-full h-[34px] py-6 leading-6 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="unitType"
                className="block text-2xl mr-60 font-semibold text-gray-700"
            >
              <b>Type of Unit</b>
            </label>
            <input
                type="text"
                id="unitType"
                className="mt-0 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="landingDoors"
                className="block text-lg font-semibold text-gray-700 mb-0"
            >
              No. of Landing Doors
            </label>
            <input
                type="number"
                id="landingDoors"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="cabinDoors"
                className="block text-lg font-semibold text-gray-700 mb-0"
            >
              No. of Cabin Doors
            </label>
            <input
                type="number"
                id="cabinDoors"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="contractType"
                className="block text-lg font-semibold text-gray-700 mb-0"
            >
              Type of Contract
            </label>
            <input
                type="text"
                id="contractType"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="floors"
                className="block text-lg font-semibold text-gray-700 mb-0"
            >
              No. of Floors
            </label>
            <input
                type="number"
                id="floors"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="drawings"
                className="block text-sm font-medium text-gray-700"
            >
              Drawings/GAD
            </label>
            <input
                type="file"
                id="drawings"
                accept=".pdf,.dwg"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="widthCabin"
                className="block text-sm font-medium text-gray-700"
            >
              Width Cabin (mm)
            </label>
            <input
                type="text"
                id="widthCabin"
                placeholder="e.g., 1500"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
                htmlFor="heightCabin"
                className="block text-sm font-medium text-gray-700"
            >
              Height Cabin (mm)
            </label>
            <input
                type="text"
                id="heightCabin"
                placeholder="e.g., 2000"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  );
}