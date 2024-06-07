import React from "react";

const Table = ({ data, refresh }) => {
  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <table>
        <tr>
         
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        {data.map((post) => (
          <tr key={post?.id}>
            <td>{post?.id}</td>
            <td>{post?.title}</td>
            <td>{post?.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
