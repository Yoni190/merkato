import React from 'react'

const Settings = () => {
  return (
    <div className='p-5'>
        <div className='w-full max-w-xl border p-5 rounded-xl shadow-xl'>
            <h2 className='text-2xl font-semibold'>Payment Settings API</h2>
            <form action="" className='flex flex-col gap-5'>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <input
                        type="text"
                        name="payment_provider"
                        id="payment_provider"
                        placeholder='Payment Provider'
                        className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition" />
                    <input
                        type="text"
                        name="api_key"
                        id="api_key"
                        placeholder='API Key'
                        className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition" />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition duration-200 shadow-md"
                >
                    Save
                    </button>
            </form>
        </div>
    </div>
  )
}

export default Settings