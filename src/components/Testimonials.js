import ClientTestimonial from "./ClientTestimonial";

export default function Testimonials() {
    return (
        <div className="flex flex-col gap-2 font-lato text-lg" >
            <h2 className="text-5xl font-extrabold font-spartan text-center col-span-2">Reviews From Your Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-auto gap-4 md:gap-8">
                <ClientTestimonial
                    className="md:col-span-2"
                    quote='Brendan was helpful in two recent events here at Wickenburg Ranch.   His expertise and attention to what we wanted (even when we didn&apos;t know what we wanted) was so helpful.  He put us at ease immediately.   Our event was a success and having Brendan there was "key"!!!'
                    name="Cathy Agler"
                    neighborhood="Lariat" />

                <ClientTestimonial
                    className="md:col-span-2"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sem sit amet tellus molestie pharetra. Pellentesque eget sapien consequat, laoreet nunc non, semper leo. Sed id ornare massa. Etiam a pretium nisi. Sed suscipit nulla tellus, ac volutpat eros volutpat sed. Nam in nisl sed eros molestie aliquet eget eu massa. asd;fkj asd;fkj askfsd;lfkj fkj fjf;laksjdf ;kj kj;lkj dsafkj adkfj s;fj fj s;fj skdjf;lkjf;lskdjf skj f"
                    name="Foo Bar"
                    neighborhood="Baz" />

                <ClientTestimonial
                    className="md:col-span-2 md:col-start-2"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sem sit amet tellus molestie pharetra. Pellentesque eget sapien consequat, laoreet nunc non, semper leo. Sed id ornare massa. Etiam a pretium nisi. Sed suscipit nulla tellus, ac volutpat eros volutpat sed. Nam in nisl sed eros molestie aliquet eget eu massa."
                    name="Foo Bar"
                    neighborhood="Baz" />
            </div>
        </div>
    )
}