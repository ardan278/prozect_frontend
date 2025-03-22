import '@tailwindcss/vite';

export default function Inst_form(){
    return(
        <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">New Installation Form</h2>
        <form>
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Manufacturer</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Type of Unit</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">No. of Landing doors</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">No. of Cabin Doors</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Type of Contract</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">No. of Floors</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="organizationChart" className="block text-sm font-medium text-gray-700">Drawings/GAD</label>
          <input type="file" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="organizationChart" />
        </div>    
        <div className="mb-4">
        <label htmlFor="widthCabin" className="block text-sm font-medium text-gray-700">Width Cabin</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="widthCabin" />
        </div>

        <div className="mb-4">
        <label htmlFor="heightCabin" className="block text-sm font-medium text-gray-700">Height Cabin</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="heightCabin" />
        </div>

        <div className="mb-4">
        <label htmlFor="depthCabin" className="block text-sm font-medium text-gray-700">Depth Cabin</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="depthCabin" />
        </div>

        <div className="mb-4">
        <label htmlFor="widthShaft" className="block text-sm font-medium text-gray-700">Width Shaft</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="widthShaft" />
        </div>

        <div className="mb-4">
        <label htmlFor="heightShaft" className="block text-sm font-medium text-gray-700">Height Shaft</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="heightShaft" />
        </div>

        <div className="mb-4">
        <label htmlFor="depthShaft" className="block text-sm font-medium text-gray-700">Depth Shaft</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="depthShaft" />
        </div>

        <div className="mb-4">
        <label htmlFor="pit" className="block text-sm font-medium text-gray-700">Pit</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="pit" />
        </div>

        <div className="mb-4">
        <label htmlFor="addressInstall" className="block text-sm font-medium text-gray-700">Address of Install</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="addressInstall" />
        </div>

        <div className="mb-4">
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="zipCode" />
        </div>

        <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="state" />
        </div>

        <div className="mb-4">
        <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="area" />
        </div>

        <div className="mb-4">
        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="contactNumber" />
        </div>

        <div className="mb-4">
        <label htmlFor="modeContact" className="block text-sm font-medium text-gray-700">Mode of Contact</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="modeContact" />
        </div>

        <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Create Installation Contractor Form</button>

        </form>
    </div>


)
}