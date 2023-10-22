import Navbar from '@/components/appbar/NavBar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full container p-4 mx-auto">
        <div className="flex justify-center items-center"></div>
        <div className="py-20 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-gray-800 dark:text-gray-100 font-bold">
            Next 13 Themes + Tailwind Dark Mode + Material
          </h1>
        </div>
      </div>
    </>
  )
}
