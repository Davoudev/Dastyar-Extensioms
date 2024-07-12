import React from "react";

const SearchContext = React.createContext({
  ToolsSuggestionPage: false,
  showTools: () => {},
  ToggleTools: () => {},
});

export default SearchContext;
