import React from 'react';
import kate from "../assest/img/kate.webp"
import { SlArrowRight } from "react-icons/sl";
const Profile = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
        <div className='flex items-center justify-center'>
        <div className="flex items-center p-4 border-b border-gray-100 mb-4">
            <div className="w-18 h-18 bg-red-500 rounded-full border border-green-500">
            <img className="w-14 h-14 rounded-full" src={kate} alt="Profile" />
            </div>
          <div className="ml-4 ">
            <h2 className="font-bold text-xl">Kate Winslet</h2>
            <p className="text-gray-600">@KateWinslet</p>
            
          </div>
            <div className='mx-8 border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[9px]'>
            <SlArrowRight />
            </div>
        </div>
       
        </div>
        <div className="grid grid-cols-3 text-center">
          <div className="py-2 mx-3 gap-2 border border-gray-200 rounded-md">
            <p className="font-bold text-lg">572</p>
            <p className="text-gray-500">Post</p>
          </div>
          <div className="py-2 mx-3 rounded-md border border-gray-200">
            <p className="font-bold text-lg">6.3k</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="py-2 mx-3 rounded-md border border-gray-200">
            <p className="font-bold text-lg">2.5k</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between py-2 border-b cursor-pointer">
           <div>
           <p className="text-gray-700">Notification</p>
           <span className='text-[14px] text-gray-400'>See your recent activity</span>
           </div>
            
            
            <div className='flex flex-row items-center justify-end'>
            <div className=" bg-green-500 text-white text-sm font-bold px-2   py-1  rounded-full">35</div>
            <div className='mx-2 border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[9px]'>
            <SlArrowRight />
            </div>

            </div>
            
          </div>
          <div className="flex items-center justify-between py-2 border-b cursor-pointer">
          <div>
          <p className="text-gray-700">Friends</p>
           <span className='text-[14px] text-gray-400'>Friendlist totals</span>
           </div>

           <div className='flex flex-row items-center justify-end'>
            <div className='mx-2 border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[9px]'>
            <SlArrowRight />
            </div>
            </div>

          </div>
          <div className="flex items-center justify-between py-2 border-b cursor-pointer">
          <div>
          <p className="text-gray-700">Messages</p>
           <span className='text-[14px] text-gray-400'>Message your friends</span>
           </div>
            
           <div className='flex flex-row items-center justify-end'>
            <div className=" bg-green-500 text-white text-sm font-bold px-2   py-1  rounded-full">2</div>
            <div className='mx-2 border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[9px]'>
            <SlArrowRight />
            </div>

            </div>
            
            
          </div>
          <div className="flex items-center justify-between py-2 border-b cursor-pointer">
          <div>
          <p className="text-gray-700">Albums</p>
           <span className='text-[14px] text-gray-400'>Save or post your albums</span>
           </div>
           
           <div className='flex flex-row items-center justify-end'>
            <div className='mx-2 border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[9px]'>
            <SlArrowRight />
            </div>
            </div>

          </div>
          <div className="flex items-center justify-between py-2 border-b cursor-pointer">
          <div>
          <p className="text-gray-700">Favorites</p>
           <span className='text-[14px] text-gray-400'>Friends you love</span>
           </div>

           <div className='flex flex-row items-center justify-end'>
            <div className='mx-2 border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[9px]'>
            <SlArrowRight />
            </div>
            </div>

          </div>
          <div className="py-2 cursor-pointer flex flex-row justify-between">
          <div>
          <p className="text-gray-700">Privacy Policy</p>
           <span className='text-[14px] text-gray-400'>Protect your privacy</span>
           </div>
           <div className='flex flex-row items-center justify-end'>
            <div className='mx-2 border border-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-[9px]'>
            <SlArrowRight />
            </div>
            </div>

          </div>
        </div>
        <div className="p-4 ">
          <button className="w-full text-green-500    py-2 border border-green-500 rounded-lg">Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
