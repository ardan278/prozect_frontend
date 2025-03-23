export default function Reg_form() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">New Registration Form</h2>
      <form>
        {/* Section 1 */}
        <div className="mb-4">
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Manufacturer</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
          <label htmlFor="companyType" className="block text-sm font-medium text-gray-700">Company Type</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="companyType" />
        </div>
        <div className="mb-4">
          <label htmlFor="expertiseType" className="block text-sm font-medium text-gray-700">Expertise Type</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="expertiseType" />
        </div>
        <div className="mb-4">
          <label htmlFor="numTechs" className="block text-sm font-medium text-gray-700">Number of Techs</label><br />
          <input type="number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="numTechs" />
        </div>
        <div className="mb-4">
          <label htmlFor="numVehicles" className="block text-sm font-medium text-gray-700">Number of Vehicles</label><br />
          <input type="number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="numVehicles" />
        </div>

        {/* Section 2 */}
        <div className="mb-4">
          <label htmlFor="servicePeriods" className="block text-sm font-medium text-gray-700">Service Periods</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="servicePeriods" />
        </div>
        <div className="mb-4">
          <label htmlFor="typeOfContract" className="block text-sm font-medium text-gray-700">Type of Contract</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="typeOfContract" />
        </div>
        <div className="mb-4">
          <label htmlFor="certifiedTechs" className="block text-sm font-medium text-gray-700">Certified Techs</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="certifiedTechs" />
        </div>

        {/* File Uploads */}
        <div className="mb-4">
          <label htmlFor="organizationChart" className="block text-sm font-medium text-gray-700">Attach Organization Chart</label><br />
          <input type="file" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="organizationChart" />
        </div>
        <div className="mb-4">
          <label htmlFor="references" className="block text-sm font-medium text-gray-700">Attach References</label><br />
          <input type="file" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="references" />
        </div>
        <div className="mb-4">
          <label htmlFor="sampleContracts" className="block text-sm font-medium text-gray-700">Sample Contracts</label><br />
          <input type="file" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="sampleContracts" />
        </div>
        <div className="mb-4">
          <label htmlFor="accreditation" className="block text-sm font-medium text-gray-700">Accreditation</label><br />
          <input type="file" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="accreditation" />
        </div>

        {/* Checkboxes */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" id="accidents" /><br />
          <label htmlFor="accidents" className="text-sm text-gray-700">Accidents</label>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" id="incidents" /><br />
          <label htmlFor="incidents" className="text-sm text-gray-700">Incidents</label>
        </div>
        <div className="mb-4">
          <label htmlFor="claims" className="block text-sm font-medium text-gray-700">Claims</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="claims" />
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" id="legalCases" /><br />
          <label htmlFor="legalCases" className="text-sm text-gray-700">Legal Cases</label>
        </div>

        {/* Additional Information */}
        <div className="mb-4">
          <label htmlFor="turnover" className="block text-sm font-medium text-gray-700">Turnover</label><br />
          <input type="number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="turnover" />
        </div>
        <div className="mb-4">
          <label htmlFor="yearEstablished" className="block text-sm font-medium text-gray-700">Year Established</label><br />
          <input type="number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="yearEstablished" />
        </div>
        <div className="mb-4">
          <label htmlFor="headOfOperations" className="block text-sm font-medium text-gray-700">Head of Operations</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="headOfOperations" />
        </div>
        <div className="mb-4">
          <label htmlFor="constructManager" className="block text-sm font-medium text-gray-700">Construct Manager</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="constructManager" />
        </div>
        <div className="mb-4">
          <label htmlFor="projManager" className="block text-sm font-medium text-gray-700">Proj Manager</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="projManager" />
        </div>
        <div className="mb-4">
          <label htmlFor="serviceManager" className="block text-sm font-medium text-gray-700">Service Manager</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="serviceManager" />
        </div>
        <div className="mb-4">
          <label htmlFor="enggManager" className="block text-sm font-medium text-gray-700">Engg Manager</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="enggManager" />
        </div>
        <div className="mb-4">
          <label htmlFor="salesManager" className="block text-sm font-medium text-gray-700">Sales Manager</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="salesManager" />
        </div>
        <div className="mb-4">
          <label htmlFor="officeAddress" className="block text-sm font-medium text-gray-700">Address of Office</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="officeAddress" />
        </div>
        <div className="mb-4">
          <label htmlFor="pin" className="block text-sm font-medium text-gray-700">Pin</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="pin" />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="state" />
        </div>
        <div className="mb-4">
          <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="area" />
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="contactNumber" />
        </div>
        <div className="mb-4">
          <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700">Preferred Mode of Contact</label><br />
          <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="preferredContact" />
        </div>

        <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Create Contractor Registration</button>
      </form>
      <br />
    </div>
  );
}
