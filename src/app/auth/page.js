import React from 'react'
import AdminListingForm from '../components/AdminListingForm'
import Link from 'next/link'
import SignIn from '../components/SignIn'

const page = () => {
  return (
    <>
      {/* <div className='max-w-xl  mx-auto my-4 py-4 flex items-center justify-center h-[50vh] w-full relative'>
        <div className="flex space-x-4 ">
          <Link href="/AdminListingForm">
            <span className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[50%]">
              Create
            </span>
          </Link>
          <Link href="/listing">
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Listing
            </span>
          </Link>
        </div>
      </div> */}
      <AdminListingForm />
      {/* <SignIn /> */}
    </>
  )
}

export default page