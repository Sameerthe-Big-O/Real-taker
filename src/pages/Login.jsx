import BgImage from "../assets/images/bg-image.png";
import EyeIcon from "../assets/images/image.png";
import logo from '../assets/images/Logo.svg';

const Login = () => {
  console.log('im sameer here ')
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[100vh] flex items-center justify-center  max-sm:p-8"
      >
        <div className="bg-[#FFFFFF] p-3 text-center w-[380px] h-[500px] px-[20px] rounded-lg  flex-col justify-between
        ">

     <div className="text-center flex items-center justify-center w-full mt-10">
        <img src={logo} alt="logo" />
        </div>

          <div className="w-full">
            <form action="" className="w-full flex-col">
              <div className=" w-full h-[64px] mt-4 ">
                <div className="text-left
                ">
                <label htmlFor="username" className="text-[#9FA2B4] text-left text-[12px] font-bold">
                  USERNAME
                </label>
                </div>
                <div className="w-100 bg-[#F0F1F7] h-[45px] rounded-lg flex p-2 items-centter text-left mt-2">
                  <input type="text" placeholder="Your Username" id="username"  className="bg-[#F0F1F7] text-[#35062] text-[14px] font-normal leading-5 w-full"/>
                </div>
              </div>

              <div className="w-full h-[64px] mt-8  ">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="text-[#9FA2B4] text-left font text-[12px] font-bold"
                  >
                    PASSWORD
                  </label>
                  <a href="#" className="text-[#9FA2B4] text-[10px]" alt="forgot password Link">
                    Forgot Password?
                  </a>
                </div>

                <div className="w-100 bg-[#F0F1F7] h-[45px] items-center p-2 rounded-lg mt-2">
                <div className="flex justify-between">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="bg-[#F0F1F7] text-[#35062] text-[14px] font-normal leading-5 w-full"
                />
                 <img src={EyeIcon} alt="showPasswordIcon" className="w-[30px] cursor-pointer" />
                </div>
                </div>

              </div>
              <button
                type="submit"
                className="text=[#337B6C] bg-[#337B6C] w-full
                rounded-lg text-white h-[48px] mt-6 "
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
