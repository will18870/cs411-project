import { Link } from 'react-router-dom';
import Home from './Homepage';

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
      <Link
        to="/"
        className="mt-4 text-gray-500 hover:text-gray-700"
      >
        Back to Home
      </Link>
    </div>
  )
}

