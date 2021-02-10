import React from "react";
import useQuery from "../../hooks/useQuery";

const SearchResults = () => {
  const query = useQuery();
  return <div>{query.get("search")}</div>;
};

export default SearchResults;
