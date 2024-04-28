import { Link } from "react-router-dom";

const MenuOptions = ({ MenuItems }) => {
  return (
    <div className="h-full">
      {MenuItems.map((menuItem,index) => {
        return (
          <div key={index} className="w-full h-[54px] flex mt-1 items-center text-[#FFFFFF] font-normal text-[16px]">
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
    </div>
  );
};

export default MenuOptions;
