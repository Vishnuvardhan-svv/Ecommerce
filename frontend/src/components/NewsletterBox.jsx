import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        
    }
  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off.</p>
        <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti quos quam dolore reprehenderit repellat nostrum impedit pariatur, beatae officiis doloribus harum enim architecto, consequuntur explicabo atque facere, id optio!</p>
        <form className="m-10" onSubmit={onSubmitHandler}>
            <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-full px-4 py-2 mt-4 w-3/4 sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <button type="submit" className="bg-black text-white rounded-full px-4 py-2 mt-4 ml-2 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox