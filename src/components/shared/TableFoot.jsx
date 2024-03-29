/* eslint-disable react/prop-types */

export default function TableFoot({ page, setpage, totalData, colSpan }) {
  const totalpage = Math.ceil(totalData / 8);

  return (
    <tfoot>
      <tr>
        <th colSpan={colSpan || 4}>
          <div className="flex justify-center">
            <div className="join ">
              <button
                onClick={() => setpage((old) => old - 1)}
                disabled={page < 2}
                className="join-item btn btn-sm text-white hover:bg-sky-500   bg-sky-500  "
              >
                «
              </button>
              {[...Array(totalpage).keys()].map((ele) => {
                return (
                  <button
                    key={ele * 3}
                    onClick={() => setpage(ele + 1)}
                    className={`join-item hover:bg-sky-500   ${
                      page === ele + 1 ? "bg-sky-500" : "bg-sky-500  "
                    } text-white btn btn-sm`}
                  >
                    {ele + 1}
                  </button>
                );
              })}
              <button
                onClick={() => setpage((old) => old + 1)}
                disabled={page === totalpage}
                className="join-item btn btn-sm text-white hover:bg-sky-500   bg-sky-500  "
              >
                »
              </button>
            </div>
          </div>
        </th>
      </tr>
    </tfoot>
  );
}
