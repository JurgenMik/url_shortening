import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

    const [url, setUrl] = useState('');
    const [shortUrl, setShort] = useState([]);
    const [validate, setValidate] = useState(false);

    const copyUrl = (urls, key) => {
        const id = key.key;
        navigator.clipboard.writeText(urls.urls);
        document.getElementById(id).innerText = 'Copied';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        url === '' ? setValidate(true) : setValidate(false);
        axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(response => {
                setShort(shortUrl.concat(response.data.result.short_link));
            });
        document.getElementById("url").value = '';
        }

  return (
    <div className="w-full h-screen">
        <div className="h-28 flex justify-center mt-20">
            <form className="grid grid-cols-3 w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" onSubmit={handleSubmit}>
                <div className="col-span-2 mt-6 ml-6">
                    <input className={`block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 ${validate === true ? "border-red-600" : null}`}
                           placeholder="Shorten a link here.."
                           id="url"
                           onChange={e => setUrl(e.target.value)}
                    />
                    {validate === true ?
                        <p className="text-red-600 text-sm mt-1">
                            Please add a link
                        </p> : null}
                </div>
                <div className="col-span-1 mt-8 ml-6">
                    <button className="hover:bg-indigo-500 bg-indigo-600 p-2 rounded-lg text-white font-bold w-1/2 overflow-hidden" type="submit">
                        Shorten
                    </button>
                </div>
            </form>
        </div>
        <div className="flex justify-center">
            <div className="w-1/2 mt-4 float-right">
                {shortUrl.map((urls, key) => {
                    return (
                        <div className="mb-6 font-bold" key={key}>
                            <p className="inline-block" id="copyUrl">
                                {urls}
                            </p>
                            <button onClick={(event) =>
                                copyUrl({urls}, {key})} id={key} className="hover:bg-indigo-400 bg-indigo-500 p-1 rounded-lg text-white text-sm font-bold w-20 overflow-hidden ml-8">
                                Copy
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default App;
