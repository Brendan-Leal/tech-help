import Image from 'next/image'
import heroImg from "../../public/hero.jpeg"

export default function Home() {
  return (
    <main>
      <section className='bg-dark-blue text-lightBlue overflow-hidden text-center sm:text-left sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center' >
        <div className='p-10' >
          <h1 className='font-spartan text-5xl font-bold sm:text-6xl'>Brendan&apos;s Tech Help</h1>
          <p className='font-lato font-semibold text-xl'>Local Tech Help Made Easy</p>
          <div className='mt-4 md:mt-6 font-lato text-lg'>
            <a href='#' className='inline-block rounded text-dark-blue text-xl px-5 py-3 transition duration-200 hover:ease-in bg-deepOrange hover:scale-110'>Schedule an Appointment</a>
          </div>
        </div>

        {/* Mobile Image */}
        <div className='h-72 w-full relative sm:hidden'>
          <Image
            src="/hero.jpeg"
            alt="Brendan"
            fill
            className='object-cover'
          />
        </div>

        {/* Tablet size and above Image */}
        <Image
          src="/hero.jpeg"
          alt="Brendan"
          width={450}
          height={450}
          style={{ clipPath: 'polygon(20% 0, 100% 0%, 100% 100%, 0 100%)' }}
          className='hidden sm:block object-cover ml-auto'
        />
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Personalizing Tech Help to Meet Your Needs</h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">Phones, laptops, or any other smart device if you need it working again I got the knowledge and expertise to get it fixed!</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2  md:gap-12 md:space-y-0">
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">The Cloud</h3>
              <p className="text-gray-500 dark:text-gray-400">Does your phone have pictures that your laptop doesn&apos;t? Can&apos;t get your devices to sync their data? Chances are the fix is in the cloud.  </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Hardware</h3>
              <p className="text-gray-500 dark:text-gray-400">Fix printers etc...</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">New Devices</h3>
              <p className="text-gray-500 dark:text-gray-400">Setting up new phones...</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Slow Computer?</h3>
              <p className="text-gray-500 dark:text-gray-400">Your computer slow?</p>
            </div>
            {/* <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
              <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <h3 className='text-9xl border-4'>Calendly appointment section</h3>
      </section>
    </main >
  )
}
