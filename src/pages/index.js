import Image from 'next/image'
import heroImg from "../../public/hero.jpeg"

export default function Home() {
  return (
    <main className=''>
      <section className='overflow-hidden sm:grid sm:grid-cols-2'>
        <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
          <div className='mx-auto max-w-lg '>
            <h1 className='text-2xl font-bold md:text-3xl'>Brendan's Tech Help</h1>
            <p className=''>Local Tech Help Made Easy</p>
            <div className='mt-4 md:mt-8'>
              <a href='#' className='inline-block bg-lightBlue rounded text-dark-blue px-8 py-3 '>Schedule an Appointment</a>
            </div>
          </div>
        </div>
        <div className='h-72 w-full relative sm:hidden'>
          <Image
            src="/hero.jpeg"
            alt="Brendan"
            fill
            className='object-cover'
          />
        </div>

        <Image
          src="/hero.jpeg"
          alt="Brendan"
          width={400}
          height={400}
          className='hidden sm:block object-cover ml-auto'
        />
      </section>
      <div>
      </div>
    </main >
  )
}
