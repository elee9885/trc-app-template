'use client'

export default function ExampleCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md border">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example Card
      </h2>
      <p className="text-gray-600 mb-4">
        This is a reusable component styled with Tailwind CSS. You can customize it however you like.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Click Me
      </button>
    </div>
  )
}
