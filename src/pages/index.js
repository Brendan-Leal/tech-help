import Image from 'next/image'

export default function Home() {
  return (
    <main >
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

      {/* Tech Services */}
      <section className="bg-lightBlue text-dark-blue">
        {/* py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 */}
        <div className="p-10 max-w-screen-xl xl:mx-auto">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Personalizing Tech Help to Meet Your Needs</h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">Phones, laptops, or any other smart device if you need it working again I got the knowledge and expertise to get it fixed!</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2  md:gap-12 md:space-y-0">
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">The Cloud</h3>
              <p className="text-gray-500 dark:text-gray-400">Navigating the cloud can be overwhelming. Whether it&apos;s setting up your iCloud, Google Drive, or OneDrive accounts, syncing your data seamlessly, or tackling any cloud storage issues, I&apos;m here to lend a helping hand.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Hardware</h3>
              <p className="text-gray-500 dark:text-gray-400">Printers, smart home devices, TVs, oh my! As your dedicated tech expert, I&apos;m here to tackle all your hardware issues. Whether it&apos;s fixing printers, troubleshooting smart home devices, TVs, or anything else, count on me to provide the solutions you need.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">New Devices</h3>
              <p className="text-gray-500 dark:text-gray-400">Excited about your new device but feeling lost? As your friendly neighborhood tech guy, I specialize in device setup and preparing old devices for their next chapter. I&apos;ll handle everything with precision and care.</p>
              <br />
              <p>
                Let&apos;s get your new gadget ready to rock, while ensuring your old device is primed for selling, giving away, or recycling.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Slow Computer?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Is your computer feeling sluggish and in need of some TLC? Let&apos;s give it a second chance to shine! As your go-to tech problem-solver, I can breathing new life into old or slow computers. From optimizing performance to banishing malware and bloatware, I&apos;ll work my magic to revitalize your computer and give it a new start.
              </p>
            </div>
            {/* <div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Enterprise Design</h3>
              <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section>
        <h3 className='text-5xl border-4'>Calendly appointment section</h3>
      </section>
    </main >
  )
}
