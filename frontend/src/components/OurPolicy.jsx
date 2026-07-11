import React from 'react'
import {assets} from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-2 gap-12 py-20 text-xs sm:text-sm md: text-base text-gray-600">
        <div>
            <img src={assets.exchange_icon} alt="exchange" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">We offer hassle free exchange Policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="exchange" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">We Provide 7 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt="exchange" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Best Customer Support</p>
            <p className="text-gray-400">We Provide 24/7 Customer Support</p>
        </div>
    </div>
  )
}

export default OurPolicy