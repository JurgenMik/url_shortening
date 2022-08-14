import React from 'react';

function App() {

  return (
    <div className="w-full h-screen">
        <div className="flex justify-center mt-20">
            <div className="grid grid-cols-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg h-28 w-1/2">
                <div className="col-span-2">
                    <form className="w-full mt-6 ml-6">
                        <input className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                               placeholder="Shorten a link here.."
                               name="url"
                        />
                    </form>
                </div>
                <div className="w-full ml-16 mt-8">
                    <button type="submit" className="bg-indigo-600 w-1/3 text-white font-bold p-2 rounded-lg">
                        Shorten
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
