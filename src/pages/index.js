import Image from 'next/image'
import heroImg from "../../public/hero.jpeg"

export default function Home() {
  return (
    <main className='bg-dark-blue text-lightBlue'>
      <section className='overflow-hidden text-center sm:text-left sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center' >
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
    </main >
  )
}
