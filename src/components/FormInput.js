import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export default function FormInput({ label, type, inputName }) {
  const form = useContext(FormContext);

  return (
    <label className="col-span-2 md:col-span-1">
      <span className="block">{label}:</span>
      <input
        className="w-full rounded-md px-1 h-7"
        type={type}
        name={inputName}
        onChange={form.updateParam}
      />
    </label>
  );
}

// <label className="col-span-2 md:col-span-1">
//   <span className="block">First Name</span>
//   <input
//     className="w-full"
//     type="text"
//     name="firstname"
//     onChange={updateParam}
//   />
// </label>

// <label className="block">
//   <span className="block">Last Name</span>
//   <input
//     className="w-full"
//     type="text"
//     name="lastname"
//     onChange={updateParam}
//   />
// </label>

// <label>
//   Phone Number
//   <input
//     type="tel"
//     name="mobilephone"
//     value={formData.mobilephone}
//     onChange={updateParam}
//     inputMode="numeric"
//     pattern="[0-9]+"
//   />
// </label>

// <label>
//   Email
//   <input type="email" name="email" onChange={updateParam} />
// </label>

// <label>
//   Message
//   <textarea name="message" onChange={updateParam}></textarea>
// </label>
// <label>
//   address
//   <input type="text" name="address" onChange={handleAutoComplete} />
// </label>
// <div>
//   <h2>Predictions</h2>
//   <ul>
//     {placePredictions.map((place) => {
//       return <li>{place.description}</li>;
//     })}
//   </ul>
// </div>
