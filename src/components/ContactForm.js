import { useState, useRef, useEffect } from "react";
import FormInput from "./FormInput";
import AutoCompleteFormInputAddress from "./AutoCompleteFormInputAddress";

export default function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobilephone, setMobilephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const messageRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      firstname,
      lastname,
      email,
      mobilephone,
      message,
      address,
    };
    console.log("Payload to send: ", payload);

    await fetch(process.env.NEXT_PUBLIC_FORM_SUBMISSION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => console.error(err));
  };

  return (
    <div className="p-10 mx-auto w-full max-w-screen-md  font-lato text-lg">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto_auto_12em] md:grid-rows-[auto_auto_auto_15em_auto] gap-3"
      >
        <FormInput
          label="First Name"
          type="text"
          inputName="firstname"
          setter={setFirstname}
        />
        <FormInput
          label="Last Name"
          type="text"
          inputName="lastname"
          setter={setLastname}
        />
        <FormInput
          label="Email"
          type="email"
          inputName="email"
          setter={setEmail}
        />
        <FormInput
          label="Phone Number"
          type="tel"
          inputName="mobilephone"
          setter={setMobilephone}
        />

        <AutoCompleteFormInputAddress
          setAddress={setAddress}
          address={address}
          messageRef={messageRef}
        />

        <label className="col-span-2">
          <span className="block">Message:</span>
          <textarea
            ref={messageRef}
            className={`rounded-md px-1 w-full h-52`}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please provide as much detail as possible regarding your technical issue."
          ></textarea>
        </label>

        {/* FIXME: button doesn't line up with Grid track after message */}
        <button
          type="submit"
          className="bg-deep-orange h-12 md:h-16 md:w-1/2 rounded-md text-dark-blue text-xl transition duration-200 hover:ease-in hover:scale-110"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
