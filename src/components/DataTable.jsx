import '../css/Cards.css';

const DataTable = ({ title, Data }) => {
  return (
    <div className="w-full">
      {Data.map((personData, index) => {
        const { columns, rows } = personData;
        return (
          <div key={index} className="overflow-auto   scroll_bar" >
            <table className="table-fixed ta ">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="
                    text-[#9FA2B4] text-left font-bold text-[16px] *:
                    leading-[17px] capitalize  border-b-[1.5px] border-[#DFE0EB] p-2
                    "
                    scope="col" 
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(
                  ({ name, email, phone, Active, action }, rowIndex) => (
                    <tr key={rowIndex} className=" border-b-[1.5px] border-[#DFE0EB] 
 
                    "
                    >
                      <td  className="md:p-4 p-3 ">{name}</td>
                      <td  className="md:p-4 p-3  w-full
                      scroll_bar
                      ">{
                        <div className='whitespace-nowrap overflow-auto
                        scroll_bar
                        '>
                          {email}
                        </div>
                      }</td>
                      <td  className="md:p-4 p-3 ">{phone}</td>
                      <td className="md:p-4 p-3 ">
                        <img src={Active} alt="" />
                      </td>
                      <td className="p-4 border">{action}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default DataTable;
