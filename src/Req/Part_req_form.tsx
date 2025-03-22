import '@tailwindcss/vite';

const getTodayDate = (): string => {
    return new Date().toISOString().split('T')[0];
  };
  
  // Define prop types
  interface DateInputProps {
    label: string;
    id: string;
    max: string;
  }

  const DateInput: React.FC<DateInputProps> = ({ label, id, max }) => {
    return (
      <div>
        <label htmlFor={id} style={{ fontWeight: 'bold' }}>{label}</label>
        <input 
          type="date" 
          id={id} 
          name={id} 
          min={getTodayDate()} 
          max={max}
        />
      </div>
    );
  };
  

export default function Reg_form() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Part Request Form</h2>
      <form>
      <div className="mb-4">
        <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Manufacturer</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="manufacturer" />
        </div>
        <div className="mb-4">
        <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="Description" />
        </div>
        <div>
        <label htmlFor="manufactureDate" style={{ fontWeight: 'bold' }}>Year of Manufacture</label>
        <input 
            type="date" 
            id="manufactureDate" 
            name="manufactureDate" 
            min="2020-01-01" 
            max="2030-12-31"
        />
        </div>
        <div>
        <label htmlFor="PartNumber" className="block text-sm font-medium text-gray-700">Part Number</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="PartNumber" />
        </div>
        <div>
        <label htmlFor="SerialNumber" className="block text-sm font-medium text-gray-700">Serial Number</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="SerialNumber" />
        </div>
        <div>
        <label htmlFor="Quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="Quantity" />
        </div>
        <div>
        <label htmlFor="ExpectedDate" className="block text-sm font-medium text-gray-700">Expected Date</label>
        <DateInput label="Expected Date" id="ExpectedDate" max="2030-12-31" />
        </div>
        {/*<div className="mb-4">
          <label htmlFor="***" className="block text-sm font-medium text-gray-700">***</label>
          <input type="file" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="***" />
        </div>*/}
        <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Create Part Request Form</button>
      </form>
      </div>
  )
}