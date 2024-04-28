import '../css/Cards.css';

const DataTable = ({ title, Data }) => {
  return (
    <div className="w-full">
      {Data.map((personData, index) => {
        const { columns, rows } = personData;
        return (
          <div key={index} className="overflow-auto" >
            <table className="table-fixed ta">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="w-100 text-[#9FA2B4] text-left font-bold text-[16px] *:
                    leading-[17px] capitalize  border-b-[1.5px] border-[#DFE0EB] p-4
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
                    <tr key={rowIndex} className=" border-b-[1.5px] border-[#DFE0EB] "
                    >
                      <td  className="md:p-4 p-3">{name}</td>
                      <td  className="md:p-4 p-3">{email}</td>
                      <td  className="md:p-4 p-3">{phone}</td>
                      <td className="md:p-4 p-3">
                        <img src={Active} alt="" />
                      </td>
                      <td className="p-4">{action}</td>
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
