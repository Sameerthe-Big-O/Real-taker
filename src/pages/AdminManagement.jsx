import MainData from "../components/DataTable";
import ActiceSvg from "../assets/svgs/Active.svg";
import Image from "../assets/images/Person-image.png";
import Setting from "../assets/svgs/Setting.svg";
import Arrow from "../assets/svgs/BekowArrow.svg";
import RingSvg from "../assets/svgs/Ring.svg";
import ProfileTaker from "../components/ProfileTaker";
import HighLightButton from "../components/HighLightButton";
import Search from "../assets/images/Search.png";
import ActionTake from "../components/ActionTaker";
export const data = [
  {
    columns: ["name", "email", "phone", "Active", "action"],
    rows: [
      {
        name: <ProfileTaker image={Image} text={"sameer"} />,
        email: "sameerr@gmail.com",
        phone: "1234567890",
        Active: ActiceSvg,
        action: (
           <ActionTake Setting={Setting} Arrow={Arrow}/>
        ),
      },
      {
        name: <ProfileTaker image={Image} text={"sameer"} />,
        email: "sameerr@gmail.com",
        phone: "1234567890",
        Active: ActiceSvg,
        action: (
          <ActionTake Setting={Setting} Arrow={Arrow}/>
        ),
      },
      {
        name: <ProfileTaker image={Image} text={"sameer"} />,
        email: "sameerr@gmail.com",
        phone: "1234567890",
        Active: ActiceSvg,
        action: (
          <ActionTake Setting={Setting} Arrow={Arrow}/>
        ),
      },
      {
        name: <ProfileTaker image={Image} text={"sameer"} />,
        email: "sameerr@gmail.com",
        phone: "1234567890",
        Active: ActiceSvg,
        action: (
          <ActionTake Setting={Setting} Arrow={Arrow}/>
        ),
      },
      {
        name: <ProfileTaker image={Image} text={"sameer"} />,
        email: "sameerr@gmail.com",
        phone: "1234567890",
        Active: ActiceSvg,
        action: (
          <ActionTake Setting={Setting} Arrow={Arrow}/>
        ),
      },
      {
        name: <ProfileTaker image={Image} text={"sameer"} />,
        email: "sameerr@gmail.com",
        phone: "1234567890",
        Active: ActiceSvg,
        action: (
          <ActionTake Setting={Setting} Arrow={Arrow}/>
        ),
      },
    ],
  },
];
const AdminManagement = () => {

  return (
    <div className="font-Mulish">
      <div className="flex justify-between items-center max-md:mt-12">
        <h3 className="text-[#252733] font-bold underline text-[24px]">
          AdminManagement
        </h3>
        <div className="flex mr-4">
          <img src={RingSvg} alt="" />
          <p className="ml-2">Admin</p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border-[2px] border-red p-4 mt-4 rounded-md">
        <div className="max-md:flex-col flex w-full max:gap-2 justify-between
         max-md:gap- 
       ">
          <div className="text-white">
            <button className="rounded-full bg-[#29CC97] py-1 px-6
            ">
              +Add Admin
            </button>
          </div>
          <div className="flex items-center gap-4
           max-md:justify-between max-sm:flex-col max-sm:items-start 
          ">
            <div className="flex gap-2">
              <HighLightButton
                textColor={"#F15B6D"}
                borderColor={"#F15B6D"}
                text={"Pdf"}
              />
              <HighLightButton
                textColor={"#29CC97"}
                borderColor={"#29CC97"}
                text={"Excel"}
              />
              <HighLightButton
                textColor={"#04C6F0"}
                borderColor={"#04C6F0"}
                text={"Print"}
              />
            </div>
            <div className="border-b border-[#363740]">
              <form action="">
                <input
                  type="text"
                  placeholder="Search"
                />
                <button>
                  <img src={Search} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <MainData Data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;
