Will NOT make this a one-page website.

Key sections that most photography websites have: 
1. A navbar containing Logo
2. Hero section => Show theie best work
3. About Section (the bio)
4. Services/Pracing of their service
5. Testimonials
6. Contact Section
7. Footer section

THE NAVBAR COMPONENTS
1. Logo
2. About
3. Our Services
4. Contact Us
ADD a button for light/dark mode (will have to check online on how to manipulate it to work well)

COLORS TO BE USED OVER THE PAGE(Dominantly)
1.Green
2.Grey black
3.White


SERVICES THEY OFFER
1.Corporate team photography
2. Event photography
3.Wedding Shoots
4.Photo Editing, Color correction and retouching
5. Lifestyle Photography
6. Location and Architectural photography
7. Indoor & Outdoor Photography

import React from 'react'
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const ContactUs = () => {
  return (
   <section className='bg-purple-300 py-16 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl mt-10'>Contact Us</h2>
            <p>If you are in need of any assistance feel free to get in touch with our team.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* // Contact Information */}
            <div className='space-y-8'>
                <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-blue-100 rounded-md p-3'>
                        <MapIcon className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg font-medium text-gray-900'>Our Office</h3>
                        <p className='mt-2 text-base text-gray-500'>
                            Anfield Road <br />
                            Liverpool, L4 0TH <br />
                            United Kingdom
                        </p>
                    </div>
                </div>

                <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-blue-100 rounded-md p-3'>
                        <EnvelopeIcon className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg font-medium text-gray-900'>Email Us</h3>
                        <p className='mt-1 text-gray-600'>
                            <a
                            href='mailto:liverpool@example.com' className='text-blue-600 hover:text-blue-500'
                            >liverpool@example.com
                            </a>
                            <br />
                            <a
                            href='mailto:support@example.com' className='text-blue-600 hover:text-blue-500'
                            >
                                support@example.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-blue-100 rounded-md p-3'>
                        <PhoneIcon className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg font-medium text-gray-900'>
                            Call Us
                        </h3>
                        <p className='mt-1 text-gray-600'>
                            <a
                            href='tel:+441234567890' className='text-blue-600 hover:text-blue-500'
                            >
                                +44 123 456 7890
                            </a>
                            <br />
                            Mon-Fri, 9am-5pm
                            <br />
                            Weekends - Closed
                        </p>
                    </div>
                </div>
            </div>

            {/* // Contact Form */}
            <div className='bg-gray-100 rounded-lg p-8'>
                <form>
                    <div className='grid grid-cols-1 gap-6'>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                            <input type='text' id='name' name='name' required className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'/>
                        </div>

                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                            <input type='email' id='email' name='email' required className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'/>
                        </div>

                        <div>
                            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                            <textarea id='message' name='message' rows={4} required className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'></textarea>
                        </div>

                        <button type='submit' className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>    
   </section>
  )
}

export default ContactUs