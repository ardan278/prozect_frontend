

export default function Serv_form(){
  return(
    <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">New Service Form</h2>
        <b>Elevator/Escalator Details</b>
            <form>
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Manufacturer</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="TypeOfUnit" className="block text-sm font-medium text-gray-700">Type of unit</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="TypeOfUnit" />
        </div>
        <div className="mb-4">
          <label htmlFor="LandingDoors" className="block text-sm font-medium text-gray-700">No. of Landing doors</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="LandingDoors" />
        </div>
        <div className="mb-4">
          <label htmlFor="CabinDoors" className="block text-sm font-medium text-gray-700">No. of Cabin doors</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="CabinDoors" />
        </div>
        <div className="mb-4">
          <label htmlFor="ServicePeriods" className="block text-sm font-medium text-gray-700">Service periods</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="ServicePeriods" />
        </div>
        <div className="mb-4">
          <label htmlFor="ContractType" className="block text-sm font-medium text-gray-700">Type of Contract</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="ContractType" />
        </div>
        <div className="mb-4">
          <label htmlFor="Floors" className="block text-sm font-medium text-gray-700">No. of Floors</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="Floors" />
        </div>
        <div className="mb-4">
          <label htmlFor="Drawings" className="block text-sm font-medium text-gray-700">Drawings/GAD's</label>
          <input type="file" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="Drawings" />
        </div>
        {/*Dimensions*/}
        <b>Dimensions</b>
        <div className="mb-4">
          <label htmlFor="WidthCabin" className="block text-sm font-medium text-gray-700">Width Cabin</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="WidthCabin" />
        </div>
        <div className="mb-4">
          <label htmlFor="HeightCabin" className="block text-sm font-medium text-gray-700">Height Cabin</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="HeightCabin" />
        </div>
        <div className="mb-4">
          <label htmlFor="DepthCabin" className="block text-sm font-medium text-gray-700">Depth Cabin</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="DepthCabin" />
        </div>
        <div className="mb-4">
          <label htmlFor="WidthShaft" className="block text-sm font-medium text-gray-700">Width Shaft</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="WidthShaft" />
        </div>
        <div className="mb-4">
          <label htmlFor="HeightShaft" className="block text-sm font-medium text-gray-700">Height Shaft</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="HeightShaft" />
        </div>
        <div className="mb-4">
          <label htmlFor="DepthShaft" className="block text-sm font-medium text-gray-700">Depth Shaft</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="DepthShaft" />
        </div>
        <div className="mb-4">
          <label htmlFor="pit" className="block text-sm font-medium text-gray-700">Pit</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="pit" />
        </div>    
        {/* Location */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address of Install</label>
          <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="address" />
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="zipCode" />
        </div>      
        <div className="mb-4">
          <label htmlFor="State" className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="State" />
        </div>       
        <div className="mb-4">
          <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="area" />
        </div>
        <div className="mb-4">
          <label htmlFor="Contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="Contact" />
        </div>       
        <div className="mb-4">
          <label htmlFor="Mode" className="block text-sm font-medium text-gray-700">Mode of Contact</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="Mode" />
        </div>       
        <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Create Service Contractor</button>
      
    </form>
    </div>
  )
}