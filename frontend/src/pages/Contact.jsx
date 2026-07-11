import React from 'react'
import { assets } from "../assets/assets";
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title  text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-600">Financial District,Hyderabad</p>
          <p className="text-gray-600">Tel: (+91) 900 900 9900</p>
          <p className="text-gray-600">Email:Forever@gmail.com</p>
          <p className="text-gray-600">Learn more about our teams and job Openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore More.</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact