import React from "react";
import useFetch from "../../hooks/useFetch";
import Table from "./table/Table";

const Task1 = () => {
  const { data, loading, error, refresh } = useFetch(
    "https://jsonplaceholder.typicode.com/postsed"
  );
  return (
    <div>
      {loading ? (
        <>Loading..</>
      ) : (
        <>
          <Table data={data} refresh={refresh} />
        </>
      )}

      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Task1;
