import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default function Home({ cellDimensions }) {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <main className="flex flex-col max-w-screen-lg mx-auto text-white gap-16">
        <Hero scrollToForm={scrollToForm} />

        {/* Tech Services */}
        <section className="font-lato text-lg md:text-xl">
          <div className="">
            <div className="mb-8 lg:mb-16">
              <h2 className="mb-4 font-spartan text-4xl font-extrabold">
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
                  Printers, smart home devices, computers, oh my! I&apos;m here
                  to tackle all your hardware issues. From it&apos;s fixing
                  printers, installing smart home devices, or building PCs,
                  count on me to provide the solutions you need.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">
                  New Devices
                </h3>
                <p>
                  Excited about your new device but feeling lost? I specialize
                  in device setup and preparing old devices for their next
                  chapter. I&apos;ll handle everything with precision while
                  ensuring your old device is primed for selling, giving away,
                  or recycling.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-spartan text-2xl font-bold">
                  Slow Computer?
                </h3>
                <p>
                  Is your computer feeling sluggish and in need of some TLC?
                  Let&apos;s give it a second chance to shine! I can breathing
                  new life into old or slow computers. From optimizing
                  performance to banishing malware and bloatware, I&apos;ll work
                  my magic to revitalize your computer and give it a new start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing*/}
        <section className="">
          <div className="text-left">
            <h2 className="text-5xl font-extrabold font-spartan">
              Service Costs
            </h2>
            <p className="mb-5 font-lato text-lg ">
              I strive to make the complexities of technology simple and
              that&apos;s reflected in my simple and straight forward approach
              to pricing my services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 font-lato text-lg justify-center">

            {/* Pricing Cards */}
            <ServiceCard
              scrollToForm={scrollToForm}
              serviceTitle="Tech Bundle"
              description="Have more than one device or issue that needs to be fixed? I'll take care of everything in one convenient appointment."
              price="150"
              listTitle="Covers up to 4 of you devices:"
              className="[border-image:linear-gradient(to_top_left,#A3D0FC,#BF8D30)_30] border-transparent]"
            />

            <ServiceCard
              scrollToForm={scrollToForm}
              serviceTitle="Standard Services"
              description="If there&apos;s a single issue you need taken care of look no
                further."
              price="80"
              listTitle="My solution to your specific problem:"
            />

          </div>
        </section>

        {/* Personal Guarantee */}
        <section className="">
          <div className="bg-deep-orange text-dark-blue h-60 md:h-40 w-full relative flex justify-center items-center">
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

        <ContactForm ref={formRef} />
      </main>
      <footer className="text-center text-light-blue font-lato text-sm">
        <p>&copy; Brendan Leal 2023 - {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
