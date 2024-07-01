import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assest/img/setting.jpeg'; // Correct the path if necessary

const ConnectCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt="Connect" className="w-full h-64 object-cover" />
        <div className="p-6 flex flex-col items-center justify-center text-center ">
          <h2 className="text-2xl font-bold mb-2">Let's connect <br/> with each other</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod
          </p>
          <div className="flex justify-center mb-4">
            <div className="bg-gray-300 rounded-full h-2 w-8 mx-1"></div>
            <div className="bg-gray-300 rounded-full h-2 w-8 mx-1"></div>
            <div className="bg-gray-300 rounded-full h-2 w-8 mx-1"></div>
          </div>
          <a href="/signin">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-200">
              Get started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
