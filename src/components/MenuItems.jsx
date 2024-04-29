import { Link } from "react-router-dom";

const MenuOptions = ({ MenuItems }) => {
  return (
  <>
      {MenuItems.map((menuItem,index) => {
        return (
          <div key={index} className="w-full h-[54px] flex mt-1 items-center text-[#FFFFFF] font-normal text-[16px] hover:bg-slate-500 transition-all duration-500 p-4
          ">
            <Link to={menuItem.url}>
              <div key={menuItem.id} className="flex ">
                <img src={menuItem.icon} /> 
                <h3 className="ml-6 text=[#DDE2FF] text-[16px] font-normal leading-4">
                  {menuItem.title}
                </h3>
              </div>
            </Link>
          </div>
        );
      })}
      </>
  );
};

export default MenuOptions;
