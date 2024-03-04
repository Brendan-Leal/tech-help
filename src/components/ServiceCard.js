export default function ServiceCard({
    scrollToForm,
    serviceTitle,
    description,
    price,
    listTitle,
    className
}) {
    return (
        // FIXME: align pricing on large screen sizes 
        <div className={`flex flex-col p-6 max-w-lg border-2 xl:p-8 ${className}`}>
            <h3 className="text-2xl font-bold font-spartan">
                {serviceTitle}
            </h3>
            <p>
                {description}
            </p>
            <div className="flex justify-center items-baseline my-8 text-deep-orange font-spartan">
                <span className="mr-2 text-5xl font-extrabold">${price}</span>
                <span className="text-xl">flat rate</span>
            </div>

            <p className="">{listTitle}</p>
            <ul
                role="list"
                className="mb-8 space-y-2 text-left list-disc list-inside "
            >
                <li className="items-center space-x-3 ">
                    <span>Troubleshooting Devices</span>
                </li>
                <li className="items-center space-x-3">
                    <span>Cloud Storage</span>
                </li>
                <li className="items-center space-x-3">
                    <span>Device Setups</span>
                </li>
                <li className="items-center space-x-3">
                    <span>Malware Removal</span>
                </li>
                <li className="items-center space-x-3">
                    <span>Computer Optimizations</span>
                </li>
                <li className="items-center space-x-3">
                    <span>And more!</span>
                </li>
            </ul>

            <button
                onClick={scrollToForm}
                className="inline-block mt-auto self-center text-dark-blue text-xl p-4 transition duration-200 hover:ease-in bg-deep-orange hover:scale-110"
            >
                Schedule an Appointment
            </button>
        </div>

    )
}