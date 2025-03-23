export default function Inst_form() {
  return (
    <div className="min-h-screen w-screen mt-12 mb-4">
      <h2 className="text-4xl font-bold mb-6">New Installation Form</h2>
      <form>
        {/* Section 1 */}
        <div className="mb-6">
          <label
            htmlFor="manufacturer"
            className="block text-sm font-medium text-gray-700"
          >
            Manufacturer
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="manufacturer"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="unitType"
            className="block text-sm font-medium text-gray-700"
          >
            Type of Unit
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="unitType"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="landingDoors"
            className="block text-sm font-medium text-gray-700"
          >
            No. of Landing Doors
          </label>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="landingDoors"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="cabinDoors"
            className="block text-sm font-medium text-gray-700"
          >
            No. of Cabin Doors
          </label>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="cabinDoors"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="contractType"
            className="block text-sm font-medium text-gray-700"
          >
            Type of Contract
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="contractType"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="floors"
            className="block text-sm font-medium text-gray-700"
          >
            No. of Floors
          </label>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="floors"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="drawings"
            accept=".pdf,.dwg"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="widthCabin"
            placeholder="e.g., 1500"
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="heightCabin"
            placeholder="e.g., 2200"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="depthCabin"
            className="block text-sm font-medium text-gray-700"
          >
            Depth Cabin (mm)
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="depthCabin"
            placeholder="e.g., 1200"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="widthShaft"
            className="block text-sm font-medium text-gray-700"
          >
            Width Shaft (mm)
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="widthShaft"
            placeholder="e.g., 2000"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="heightShaft"
            className="block text-sm font-medium text-gray-700"
          >
            Height Shaft (mm)
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="heightShaft"
            placeholder="e.g., 3000"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="depthShaft"
            className="block text-sm font-medium text-gray-700"
          >
            Depth Shaft (mm)
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="depthShaft"
            placeholder="e.g., 1500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="pit"
            className="block text-sm font-medium text-gray-700"
          >
            Pit (mm)
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="pit"
            placeholder="e.g 1000"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="addressInstall"
            className="block text-sm font-medium text-gray-700"
          >
            Address of Install
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="addressInstall"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip Code
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="zipCode"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="state"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="area"
            className="block text-sm font-medium text-gray-700"
          >
            Area
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="area"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="contactNumber"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="modeContact"
            className="block text-sm font-medium text-gray-700"
          >
            Mode of Contact
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="modeContact"
          />
        </div>

        <button
          type="submit"
          className="mt-8 py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-lg"
        >
          Create Installation Contractor Form
        </button>
      </form>
    </div>
  );
}
