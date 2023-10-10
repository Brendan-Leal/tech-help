import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const calendlyRef = useRef(null);

  const scrollToCalendly = () => {
    calendlyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <main className="flex flex-col bg-light-blue">
        <section className="bg-dark-blue text-light-blue overflow-hidden text-center sm:text-left sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center">
          <div className="p-10">
            <h1 className="font-spartan text-5xl font-bold sm:text-6xl">
              Brendan&apos;s Tech Help
            </h1>
            <p className="font-lato font-semibold text-xl">
              Local Tech Help Made Easy
            </p>
            <div className="mt-4 md:mt-6 font-lato text-lg">
              <button
                onClick={scrollToCalendly}
                className="inline-block rounded-md text-dark-blue text-xl p-4 transition duration-200 hover:ease-in bg-deep-orange hover:scale-110"
              >
                Schedule an Appointment
              </button>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="h-72 w-full relative sm:hidden">
            <Image
              src="/hero.jpeg"
              alt="Brendan"
              fill
              className="object-cover"
            />
          </div>

          {/* Tablet size and above, Image */}
          <Image
            src="/hero.jpeg"
            alt="Brendan"
            width={450}
            height={450}
            style={{ clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0 100%)" }}
            className="hidden sm:block object-cover ml-auto"
          />
        </section>

        {/* Tech Services */}
        <section className="text-dark-blue font-lato text-lg md:text-xl">
          <div className="p-10 max-w-screen-xl xl:mx-auto">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 font-spartan text-4xl tracking-tight font-extrabold">
                Personalizing Tech Help to Meet Your Needs
              </h2>
              <p className="sm:text-xl md:text-2xl">
                Phones, laptops, or any other smart device if you need it
                working again I got the knowledge and expertise to get it fixed!
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2  md:gap-12 md:space-y-0">
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">
                  The Cloud
                </h3>
                <p>
                  Navigating the cloud can be overwhelming. Whether it&apos;s
                  setting up your iCloud, syncing your data, or tackling any
                  cloud storage issues, I&apos;m here to lend a helping hand.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-bold font-spartan text-2xl">
                  Hardware
                </h3>
                <p>
                  Printers, smart home devices, computers, oh my! I&apos;m here to tackle all your
                  hardware issues. From it&apos;s fixing printers, installing
                  smart home devices, or building PCs, count on me to provide
                  the solutions you need.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">
                  New Devices
                </h3>
                <p>
                  Excited about your new device but feeling lost? I specialize in device setup
                  and preparing old devices for their next chapter. I&apos;ll
                  handle everything with precision while ensuring your old
                  device is primed for selling, giving away, or recycling.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">
                  Slow Computer?
                </h3>
                <p>
                  Is your computer feeling sluggish and in need of some TLC?
                  Let&apos;s give it a second chance to shine! I can breathing new life into old or slow
                  computers. From optimizing performance to banishing malware
                  and bloatware, I&apos;ll work my magic to revitalize your
                  computer and give it a new start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing*/}
        <section className="bg-dark-blue text-light-blue">
          <div className="p-10 mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-screen-md text-left md:text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-6xl tracking-tight font-extrabold font-spartan">
                Service Costs
              </h2>
              <p className="mb-5 font-lato text-lg ">
                I strive to make the complexities of technology simple and
                that&apos;s reflected in my simple and straight forward approach
                to pricing my services.
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 font-lato text-lg">
              {/* Pricing Card 1 */}
              <div className="flex flex-col p-6 mx-auto max-w-lg rounded-lg border xl:p-8">
                <h3 className="mb-4 text-2xl font-bold font-spartan self-center">
                  Standard Services
                </h3>
                <p className="sm:text-lg">
                  If there&apos;s a single issue you need taken care of look no
                  further.
                </p>
                <div className="flex justify-center items-baseline my-8 text-deep-orange">
                  <span className="mr-2 text-5xl font-extrabold">$75</span>
                  <span className="">flat rate</span>
                </div>
                <p className="">My solution to your specific problem:</p>
                {/* List  */}
                <ul
                  role="list"
                  className="mb-8 space-y-2 text-left list-disc list-inside "
                >
                  <li className="items-center space-x-3 ">
                    {/* TODO: add Icon?? */}
                    <span>Troubleshooting Devices</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Cloud Storage</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Device Setups</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Malware Removal</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Computer Optimizations</span>
                  </li>
                </ul>

                <button
                  onClick={scrollToCalendly}
                  className="inline-block mt-auto self-center rounded-md text-dark-blue text-xl p-4 transition duration-200 hover:ease-in bg-deep-orange hover:scale-110"
                >
                  Schedule an Appointment
                </button>
              </div>

              {/* Pricing Card 2 */}
              <div className="flex flex-col p-6 mx-auto max-w-lg rounded-lg border border-deep-orange xl:p-8">
                <h3 className="mb-4 text-2xl font-bold font-spartan text-deep-orange self-center">
                  Tech Bundle
                </h3>
                <p className="sm:text-lg">
                  Bundle your tech problems and save while getting all your tech
                  problems fixed all at once.
                </p>
                <div className="flex justify-center items-baseline mt-8 text-deep-orange">
                  <span className="mr-2 text-5xl font-extrabold">$60</span>
                  <span className="">Service Charge</span>
                </div>
                <div className="flex justify-center items-baseline my-2 text-deep-orange">
                  <span className="">+ $25 per additional task</span>
                </div>
                {/* List  */}
                <ul
                  role="list"
                  className="mb-8 space-y-2 text-left list-disc list-inside "
                >
                  <li className="items-center space-x-3 ">
                    {/* TODO: add Icon?? */}
                    <span>Troubleshooting Devices</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Cloud Storage</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Device Setups</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Malware Removal</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Computer Optimizations</span>
                  </li>
                </ul>

                <button
                  onClick={scrollToCalendly}
                  className="inline-block mt-auto self-center rounded-md text-dark-blue text-xl p-4 transition duration-200 hover:ease-in bg-deep-orange hover:scale-110"
                >
                  Schedule an Appointment
                </button>
              </div>

              {/* Pricing Card - Other Services */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border xl:p-8">
                <h3 className="mb-4 text-2xl font-bold font-spartan">
                  Other Services
                </h3>
                <p className="sm:text-lg mb-20">
                  I offer other technical services that vary in price or depend
                  on a budget. Get in contact with me and we can discuss the
                  details.
                </p>
                <ul
                  role="list"
                  className="mb-8 space-y-2 text-left list-disc list-inside"
                >
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>
                      Web Development - Please visit{" "}
                      <a
                        href="https://astrolabstudio.com"
                        target="_blank"
                        className="underline"
                      >
                        Astrolab Studio
                      </a>{" "}
                      to find more information.
                    </span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>Custom built PCs</span>
                  </li>
                  <li className="items-center space-x-3">
                    {/* TODO: add Icon?? */}
                    <span>
                      Have something else in mind? Find my email below.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Guarantee */}
        <section className="bg-dark-blue text-light-blue flex justify-center">
          {/* w- h-52 mt-4 mx-auto mb-0 position relative */}
          <div className="bg-deep-orange text-dark-blue rounded-md h-60 md:h-40 w-full max-w-screen-lg mx-10 my-10 relative flex justify-center items-center">
            <div className="ribbon font-lato text-lg md:text-2xl">
              My Personal Guarantee
            </div>
            <div className="p-10 max-w-screen-xl xl:mx-auto">
              <div className="max-w-screen-md">
                <h2 className="font-spartan text-3xl tracking-tight font-bold ">
                  If I cant fix it, you wont pay. It&apos;s as simple as that!
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          {/* Email Me */}
          <div className="px-10 py-5 max-w-screen-lg xl:mx-auto font-lato text-lg md:text-xl">
            <h3 className="text-4xl tracking-tight font-spartan font-extrabold text-dark-blue mb-3">
              Have A Questions? Email Me
            </h3>
            <p className="mb-6">
              Don&apos;t see what you&apos;re looking for? Or want to ask me
              something specific? Reach out to me in an email
            </p>
            <div className="flex justify-center">
              {/* */}
              <a
                href="mailto:leal.brendan@gmail.com"
                className="rounded-md text-dark-blue text-xl p-4 max-w-sm text-center bg-deep-orange transition duration-200 hover:ease-in hover:scale-110"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </section>

        {/* Calendly */}
        <section ref={calendlyRef}>
          <div className="px-10 py-5 sm:pb-0 max-w-screen-lg xl:mx-auto font-lato text-lg md:text-xl">
            <h3 className="text-4xl tracking-tight font-spartan font-extrabold text-dark-blue">
              Appointments
            </h3>
            <p className="">
              Schedule a date and time that works best for you and let&apos;s
              get you the help you need! I&apos;ll meet you wherever your tech
              problems live.
            </p>
            <br />
            <p>
              Or if you want more information you can select the{" "}
              <i>Phone Call</i> option and I&apos;ll give you a call. Simply
              fill out the form below:
            </p>
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/leal-brendan/tech-help-appt?hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "750px" }}
          ></div>
        </section>
      </main>
      <footer className="text-center bg-dark-blue text-light-blue font-lato text-sm">
        <p>&copy; Brendan Leal 2023</p>
      </footer>
    </>
  );
}
