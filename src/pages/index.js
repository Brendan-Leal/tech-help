import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
  const calendlyRef = useRef(null);

  const scrollToCalendly = () => {
    calendlyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      <main className='flex flex-col bg-light-blue' >
        <section className='bg-dark-blue text-light-blue overflow-hidden text-center sm:text-left sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center' >
          <div className='p-10' >
            <h1 className='font-spartan text-5xl font-bold sm:text-6xl'>Brendan&apos;s Tech Help</h1>
            <p className='font-lato font-semibold text-xl'>Local Tech Help Made Easy</p>
            <div className='mt-4 md:mt-6 font-lato text-lg'>
              <button onClick={scrollToCalendly} className='inline-block rounded text-dark-blue text-xl px-5 py-3 transition duration-200 hover:ease-in bg-deep-orange hover:scale-110'>Schedule an Appointment</button>
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

          {/* Tablet size and above, Image */}
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
        <section className="text-dark-blue font-lato text-lg md:text-xl">
          <div className="p-10 max-w-screen-xl xl:mx-auto">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 font-spartan text-4xl tracking-tight font-extrabold">Personalizing Tech Help to Meet Your Needs</h2>
              <p className="sm:text-xl md:text-2xl">Phones, laptops, or any other smart device if you need it working again I got the knowledge and expertise to get it fixed!</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2  md:gap-12 md:space-y-0">
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">The Cloud</h3>
                <p>
                  Navigating the cloud can be overwhelming. Whether it&apos;s setting up your iCloud, Google Drive, or OneDrive accounts, syncing your data seamlessly, or tackling any cloud storage issues, I&apos;m here to lend a helping hand.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-bold font-spartan text-2xl">Hardware</h3>
                <p>
                  Printers, smart home devices, TVs, oh my! As your dedicated tech expert, I&apos;m here to tackle all your hardware issues. Whether it&apos;s fixing printers, troubleshooting smart home devices, TVs, or anything else, count on me to provide the solutions you need.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">New Devices</h3>
                <p>
                  Excited about your new device but feeling lost? As your friendly neighborhood tech guy, I specialize in device setup and preparing old devices for their next chapter. I&apos;ll handle everything with precision and care.
                </p>
                <br />
                <p>
                  Let&apos;s get your new gadget ready to rock, while ensuring your old device is primed for selling, giving away, or recycling.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">Slow Computer?</h3>
                <p>
                  Is your computer feeling sluggish and in need of some TLC? Let&apos;s give it a second chance to shine! As your go-to tech problem-solver, I can breathing new life into old or slow computers. From optimizing performance to banishing malware and bloatware, I&apos;ll work my magic to revitalize your computer and give it a new start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className='border-t-2 w-11/12 self-center my-5'></div>

        {/* Calendly */}
        <section ref={calendlyRef} >
          <div className='p-10 max-w-screen-xl xl:mx-auto font-lato text-lg md:text-xl'>
            <h3 className='text-4xl tracking-tight font-spartan font-extrabold text-dark-blue'>Get In Touch</h3>
            <p className='sm:text-xl md:text-2xl' >Schedule a phone call and let&apos;s get you squared away!</p>
          </div>
          <div className="calendly-inline-widget" data-url="https://calendly.com/leal-brendan/tech-help-appt?hide_gdpr_banner=1" style={{ minWidth: "320px", height: "750px" }}></div>
        </section>
      </main >
      <footer className='text-center bg-dark-blue text-light-blue font-lato text-sm'>
        <p>Copyright &copy; Brendan Leal 2023</p>
      </footer>
    </>
  )
}
