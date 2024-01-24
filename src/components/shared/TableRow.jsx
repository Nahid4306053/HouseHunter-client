/* eslint-disable react/prop-types */


export default function TableRow({ data,children }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="w-16 h-14">
              <img className="h-full object-cover" src={data?.gallery[0]} alt={data.name} />
            </div>
          </div>
          <div>
            <div className="font-bold max-w-[150px]">{data.name}</div>
          </div>
        </div>
      </td>
      <td>
        {data.city}
        <br />
        <div className="flex mt-2 "> </div>
      </td>
      <td>{data.rent_per_month} TK.<span className="text-xs"></span></td>
      <td><div className="badge">{data.availabilityStatus}</div></td>
        {children}
    
    </tr>
  );
}
