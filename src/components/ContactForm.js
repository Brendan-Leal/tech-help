import { useState } from "react";
import validateFormInput from "@/utils/validateFormInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobilephone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = JSON.stringify(formData);
    console.log(payload);

    await fetch(process.env.NEXT_PUBLIC_FORM_SUBMISSION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).catch((err) => console.error(err));
  };

  const updateParam = (event) => {
    const validFormData = validateFormInput(event, formData);
    setFormData(() => ({ ...validFormData }));
  };

  return (
    <div className="w-full max-w-xl border m-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <label>
          First Name
          <input type="text" name="firstname" onChange={updateParam} />
        </label>

        <label>
          Last Name
          <input type="text" name="lastname" onChange={updateParam} />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="mobilephone"
            value={formData.mobilephone}
            onChange={updateParam}
            inputMode="numeric"
            pattern="[0-9]+"
          />
        </label>

        <label>
          Email
          <input type="email" name="email" onChange={updateParam} />
        </label>

        <label>
          Message
          <textarea name="message" onChange={updateParam}></textarea>
        </label>

        <button
          className="inline-block mt-auto self-center rounded-md text-dark-blue text-xl p-4 transition duration-200 hover:ease-in bg-deep-orange hover:scale-110"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
