import Image from "next/image";
// bg-gradient-to-b from-light-blue to-deep-orange

export default function Hero() {
    return (
        <section >
            <div className="flex flex-col gap-4 md:gap-5">
                <h1 className="font-spartan text-6xl font-black sm:text-6xl ">
                    Brendan&apos;s Tech Help
                </h1>
                <p className="font-lato font-medium text-2xl">
                    Wickenburg&apos;s Local Tech Help Made Simple
                </p>

                <div className="font-lato text-lg text-dark-blue">
                    <button
                        // TODO: rework button scroll
                        // onClick={scrollToCalendly}
                        className="bg-deep-orange rounded-md text-xl p-4 transition duration-200 hover:ease-in hover:scale-110"
                    >
                        Schedule an Appointment
                    </button>
                </div>
            </div>
        </section>
    )
}