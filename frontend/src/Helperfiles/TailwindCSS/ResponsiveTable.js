import React from "react";

const ResponsiveTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left border-b border-gray-300 bg-gray-100 font-bold uppercase text-sm text-gray-600">
              Title
            </th>
            <th className="py-3 px-6 text-left border-b border-gray-300 bg-gray-100 font-bold uppercase text-sm text-gray-600">
              Classes
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-6 border-b border-gray-300">{item.title}</td>
              <td className="py-4 px-6 border-b border-gray-300">
                {item.class.map((className, idx) => (
                  <span
                    key={idx}
                    className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
                  >
                    {className}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
