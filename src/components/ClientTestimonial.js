export default function ClientTestimonial({ quote, name, neighborhood, className }) {
    return (
        <div className={`bg-accent-blue drop-shadow-subtle relative flex flex-col justify-between ${className}`}>
            <div>
                <p className="p-4" >{quote}</p>
            </div>
            <p className="bg-deep-orange text-dark-blue py-2 px-4 ">- <span className="font-bold">{name}</span> <br /> 🏠 {neighborhood}</p>
        </div>
    )

}