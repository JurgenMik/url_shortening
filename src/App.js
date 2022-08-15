import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

    const [url, setUrl] = useState('');
    const [shortUrl, setShort] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(response => {
                setShort(shortUrl.concat(response.data.result.short_link));
            });
        console.log(shortUrl);
        }

  return (
    <div className="w-full h-screen">
        <div className="h-28 flex justify-center mt-20">
            <form className="grid grid-cols-3 w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" onSubmit={handleSubmit}>
                <div className="col-span-2 mt-6 ml-6">
                    <input className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                           placeholder="Shorten a link here.."
                           name="url"
                           onChange={e => setUrl(e.target.value)}
                    />
                </div>
                <div className="col-span-1 mt-8 ml-6">
                    <button className="bg-indigo-600 p-2 rounded-lg text-white font-bold w-1/2 overflow-hidden" type="submit">
                        Shorten
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default App;
