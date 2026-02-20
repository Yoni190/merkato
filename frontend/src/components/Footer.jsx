import React from 'react'
import Telebirr from '../assets/telebirr.png'
import { 
    TwitterShareButton,
    XIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon
 } from 'react-share'

const Footer = () => {
  return (
    <footer className='bg-linear-to-r from-green-500 to-green-800'>
        <div
            className='grid grid-rows-3 gap-5 text-white px-12 pt-4 max-w-7xl mx-auto px-6 md:px-14'>
            
            <div className='grid grid-cols-6'>
                <div>
                    <h2 className='text-2xl'>Shop at Merkato</h2>
                    <ul>
                        <li>All Categories</li>
                        <li>Featured Products</li>
                        <li>New Arivals</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl'>Sell with us</h2>
                    <ul>
                        <li>Become a Vendor</li>
                        <li>Vendor Rules</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl'>Support</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>Shippings</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl'>Company</h2>
                    <ul>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Sustainability</li>
                    </ul>
                </div>
                <div className='col-span-2 flex flex-col justify-end'>
                    <h2 className="text-2xl">Newsletter Signup</h2>
                    <h3>Don't miss out on our deals</h3>
                    <form action="" className='flex gap-2'>
                        <input
                            type="text"
                            name="newsletter"
                            id="newsletter"
                            placeholder='Enter your email address'
                            className='border outline-none py-2 px-3 w-3/4' />
                        <button
                        className='border rounded py-2 px-3 bg-white text-black hover:cursor-pointer hover:bg-gray-200'
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            <div className='flex justify-between'>
                <img src={Telebirr} alt="telebirr_logo" className="w-24 h-auto object-contain grayscale-0 opacity-100 hover:opacity-80 transition-all duration-300 hover:cursor-pointer" />

                {/* Social Media */}
                <div className='flex gap-3'>
                    {/* X (Formerly known as Twitter) */}
                    <TwitterShareButton
                        className="Demo__some-network__share-button"
                        >
                        <XIcon size={32} round />
                    </TwitterShareButton>

                    <LinkedinShareButton
                        className="Demo__some-network__share-button"
                        >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>

                    <TelegramShareButton
                        className="Demo__some-network__share-button"
                        >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>


                </div>
            </div>

            <div>
                <hr className='my-8'/>
                <p className='text-center'>© {new Date().getFullYear()} Merkato, inc</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer