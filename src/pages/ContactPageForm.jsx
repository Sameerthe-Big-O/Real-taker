import RingSvg from "../assets/svgs/Ring.svg";
import InputField from "../components/InputField";
import FileInput from "../components/FileInput";
import { useRef } from "react";

const ContactPage = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(formData.get("FirstName")); 
  };

  const handleReset = () => {
    formRef.current.reset();
  };

  return (
    <div className="bg-light-blue">
      <div className="flex justify-between items-center">
        <h3 className="text-[#252733] font-bold underline text=[24px]">
          Admin Management
        </h3>
       
      </div>

      <div className="p-6  shadow-lg border mt-3 rounded-md">
        <form  ref={formRef} onSubmit={handleSubmit} onReset={handleReset}>
          <fieldset>
            <legend className="text-[#252733] text-[26px] font-semibold">
              Add Contact:
            </legend>
            <div className="md:grid grid-cols-2 gap-4">
              <InputField
                id={"FirstName"}
                label={"FirstName"}
                type={"text"}
                placeholder={"Enter your name here"}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                placeholder="Your Email"
              />

              <InputField
                id="lastName"
                label="Last Name"
                type="text"
                placeholder="Your Last Name"
              />
              <InputField
                id="number"
                label="Phone Number"
                type="text"
                placeholder="Enter your number here"
              />

              <div
                className="w-100 bg-[#FCFDFE]  rounded-lg  p-2 items-centter text-left mt-2
                 border border-[#F0F1F7] shadow"
              >
                <label
                  className="text-[#9FA2B4]   font-bold text[12px "
                  id="gender"
                >
                  Gender
                </label>
                <div className="radios buttons container flex w-full justify">
                  <div className="male_class">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="text-[#9FA2B4] font-bold text[12px]"
                    />
                    <label htmlFor="male" className="text-[#4B506D] ml-2">
                      Male
                    </label>
                  </div>
                  <div className="female_class ml-2">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <label htmlFor="female" className="text-[#4B506D] ml-2">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <FileInput />

              <InputField
                id="dob"
                label="Date of Birth"
                type="date"
                placeholder="Select date"
              />
            </div>

            <div className="w-full flex justify-end mt-2">
              <div>
                <button
                  type="submit"
                  value="Submit"
                  className="bg-[#29CC97] 
                     max-md:px4
                  px-8 py-2   mr-2  
                  
                  text-white rounded-full shadow-sm"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  value="reset"
                  className="bg-[#CC2929] p-4 text-white  
                  max-md:px4
                  px-8 py-2 rounded-full shadow-sm "
                >
                  Reset
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
