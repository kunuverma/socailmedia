// src/components/Followers.js
import React from 'react';
import khan from "../assest/img/khan.webp";
import tom from "../assest/img/tom.webp"
import robert from "../assest/img/robert.webp"
import eliza from "../assest/img/eliza.webp"
import kate from "../assest/img/kate.webp"
import profile from "../assest/img/profile.webp"
const Followers = () => {
  const followers = [
    { name: 'Shah Rukh Khan', username: '@srk', img: khan},
    { name: 'Robert Downey Jr.', username: '@rdj', following: true, img:robert},
    { name: 'Tom Cruise', username: '@tomcruise', img:tom},
    { name: 'Elizabeth', username: '@elezabeth', img:eliza},
    { name: 'Kate Winslet', username: '@KateWinslet', img:kate},
    { name: 'Saoirse Hopper', username: '@saoirsehop', following: true, img:profile},
    { name: 'Melina Charlton', username: '@melinacharlton', following: true, img:profile},
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className='flex flex-row  items-center text-center gap-20'>
        <button className="mb-4 text-2xl text-white w-11 h-10 rounded-md bg-green-500">&larr;</button>
        <h1 className="text-2xl font-bold mb-4"><p>Followers (4K)</p></h1>
        </div>
        
        <ul>
          {followers.map((follower, index) => (
            <li key={index} className="flex items-center justify-between py-5 border-b">
              
              <div className='flex flex-row text-md gap-5'>
              <img src={follower.img} alt="" className='w-14 h-14 rounded-full'/>
                <div>
                <p className="font-bold">{follower.name}</p>
                <p className="text-gray-500">{follower.username}</p>
                </div>
              </div>
              <button
                className={`py-1 px-4 rounded-2xl ${
                  follower.following ? 'bg-white border border-grey-500' : 'bg-green-500 text-white'
                }`}
              >
                {follower.following ? 'Following' : 'Follow'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Followers;