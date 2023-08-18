'use client'
import Link from "next/link"
const error = ({
  error,reset
}) => {
  return (
    <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] bg-gray-100">
    <h1 className="text-4xl font-semibold text-gray-800">Oops! Page not found</h1>
    <p className="mt-2 text-gray-600">
      The page you are looking for might have been removed or is temporarily unavailable.
    </p>
    <Link href="/" className="mt-4 text-blue-500 hover:underline">Go back to home
    </Link>
  </div>
  )
}

export default error