import React from "react";

export default function DataTable(props) {
  const { data } = props;

  return (
    <table className="inner-table">
      {data.map(({ id, date, distance }) => (
        <tr key={id} className="row-wrapper">
          <td className="data-group">
            <td className="date">{date}</td>
            <td className="distance">{distance}</td>
          </td>
          <td className="button-group">
            <button onClick={() => props.edit(id)}>edit</button>
            <button onClick={() => props.delete(id)}>delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
