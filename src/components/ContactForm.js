import { useState, useRef, useEffect, forwardRef } from "react";
import FormInput from "./FormInput";
import ReCAPTCHA from "react-google-recaptcha";


const ContactForm = forwardRef(
  function ContactForm(props, ref) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mobilephone, setMobilephone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState("");
    const messageRef = useRef(null);
    const [showForm, setShowForm] = useState(true)
    const [showFormError, setShowFormError] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [formErrorMsg, setFormErrorMsg] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const captchaRef = useRef()
    const [captcha, setCaptcha] = useState(null)

    useEffect(() => {
      if (captcha && captcha.length > 0) {
        setBtnDisabled(false)
      } else {
        setBtnDisabled(true)
      }
    }, [captcha])

    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true)

      const isValidToken = await verifyCaptcha()

      const payload = {
        firstname,
        lastname,
        email,
        mobilephone,
        message,
        address,
      };

      if (isValidToken) {
        await fetch("api/form/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then(res => {
            if (res.ok) {
              setIsLoading(false)
              setShowForm(false)
            } else {
              setShowFormError(true)
              setIsLoading(false)
              setFormErrorMsg("⛔ Sorry something went wrong please try again later.")
            }
          })
          .catch((err) => console.error(err));
      }
    };

    const verifyCaptcha = async () => {
      const res = await fetch("/api/form/validate", {
        method: "POST",
        body: JSON.stringify({ token: captcha }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
      console.log("RES: ", res);

      return res.success;
    };

    return (
      <div className="mb-8 flex flex-col gap-8">
        <h2 className="text-center font-spartan text-4xl md:text-5xl font-extrabold">Schedule you&apos;re Appointment By Filling out the From Below</h2>
        {/* Default of this component is to show the form */}
        {showForm &&
          <div ref={ref} className="mx-auto w-full font-lato text-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
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

              <label className="col-span-2">
                <span className="block">Address:</span>
                <input
                  className="w-full  px-1 h-10 text-dark-blue"
                  type="text"
                  name="address"
                  onChange={e => setAddress(e.target.value)}
                  required
                />
              </label>

              <label className="col-span-2">
                <span className="block">Message:</span>
                <textarea
                  ref={messageRef}
                  className="text-dark-blue px-1 w-full h-52"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please provide as much detail as possible regarding your technical issue."
                  required
                ></textarea>
              </label>


              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={token => setCaptcha(token)}
                ref={captchaRef}
              />

              <button
                type="submit"
                className="md:justify-self-end row-start-[8] md:row-start-5 md:col-start-2 bg-deep-orange h-12 md:h-16 md:w-1/2 text-dark-blue text-xl transition duration-200 hover:ease-in hover:scale-110 disabled:hover:scale-100 disabled:cursor-not-allowed"
                disabled={btnDisabled || isLoading}
              >
                Submit
              </button>
              {showFormError &&
                <div className="text-red-700 font-medium">{formErrorMsg}</div>
              }

            </form>
          </div>
        }

        {/* Form submission successful? Show this  */}
        {!showForm &&
          <div className="my-20 text-center">
            <h2>Success! Expect a phone call from me soon.</h2>
          </div>}
      </div>
    );
  }
)
export default ContactForm