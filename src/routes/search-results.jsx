import React from "react";
import { withRouter } from "react-router-dom";

import SearchResultsContainer from "../components/SearchResults/SearchResults.Container";
import useQuery from "../hooks/useQuery";

const SearchResultsRoute = (props) => {
  const query = useQuery();

  return <SearchResultsContainer search={query.get("search") || ""} />;
};

export default withRouter(SearchResultsRoute);
