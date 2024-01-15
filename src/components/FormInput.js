export default function FormInput({ label, type, inputName, setter }) {

  const handleChange = (e) => {
    // Prevent non-numeric chars in tel input types
    if (type === "tel") {
      e.target.value = e.target.value.replace(/\D/g, "");
    }
    setter(e.target.value);
  };

  return (
    <label className="col-span-2 md:col-span-1">
      <span className="block">{label}:</span>
      <input
        className="w-full  px-1 h-10 text-dark-blue"
        type={type}
        name={inputName}
        onChange={handleChange}
        required
      />
    </label>
  );
}
