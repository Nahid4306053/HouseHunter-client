/* eslint-disable react/prop-types */

import moment from "moment";


export default function TableRow({ data,children }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="w-16 h-14">
              <img className="h-full w-full" src={data?.HouseData?.gallery[0]} alt={data?.HouseData?.name} />
            </div>
          </div>
          <div>
            <div className="font-bold max-w-[150px]">{data?.HouseData?.name}</div>
          </div>
        </div>
      </td>
      <td>
        {moment(data?.start).format('MMM Do')} to  <br />         
        {moment(data?.end).format(' MMM Do')}
        {moment(data?.end).format(' YYYY')}
      </td>
       <td>{parseInt(data.totalPrice)}TK.</td>
       <td><div className="badge">{data?.HouseData.availabilityStatus}</div></td>
       <td><div className="badge badge-secondary">{data?.status}</div></td>
      
        {children}
    
    </tr>
  );
}
