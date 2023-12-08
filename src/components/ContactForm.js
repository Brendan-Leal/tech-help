import { useState } from "react";
import validateFormInput from "@/utils/validateFormInput";
// import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { placePredictions } from "@/data/samplePlacesData";
import FormInput from "./FormInput";
import { FormContext } from "@/context/FormContext";

export default function ContactForm() {
  // const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
  //   useGoogle({
  //     apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
  //     debounce: 1000,
  //   });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobilephone: "",
    email: "",
    address: "",
    message: "",
  });

  const updateParam = (event) => {
    const validFormData = validateFormInput(event, formData);
    setFormData(() => ({ ...validFormData }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = JSON.stringify(formData);
    console.log("Payload to send: ", payload);

    // await fetch(process.env.NEXT_PUBLIC_FORM_SUBMISSION_ENDPOINT, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: payload,
    // }).catch((err) => console.error(err));
  };

  const handleAutoComplete = async (event) => {
    // getPlacePredictions({ input: event.target.value });
  };

  return (
    <div className="p-10 mx-auto max-w-screen-lg font-lato text-lg">
      <FormContext.Provider
        value={{
          updateParam,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 auto-rows-auto  gap-3"
        >
          <FormInput label="First Name" type="text" inputName="firstname" />
          <FormInput label="Last Name" type="text" inputName="lastname" />
          <FormInput label="Email" type="email" inputName="email" />
          <FormInput label="Phone Number" type="tel" inputName="mobilephone" />

          <FormInput label="Address" type="text" inputName="address" />

          <label>
            <textarea name="message" onChange={updateParam}></textarea>
          </label>
          <button
            className="row-start-5 mt-auto self-center rounded-md text-dark-blue text-xl transition duration-200 hover:ease-in bg-deep-orange hover:scale-110"
            type="submit"
          >
            Submit
          </button>
        </form>
      </FormContext.Provider>
    </div>
  );
}
