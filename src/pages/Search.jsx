import { Grid, GridItem, useBoolean } from "@chakra-ui/react";
import React from "react";
import SearchBox from "../components/searchBox/SearchBox";
import BookMark from "../components/Bookmark/Bookmarks";
import SuggestionTools from "../components/searchBox/SuggestionTools";
import BackDrop from "../Layout/BackDrop";

const Search = () => {
  const [show, setShow] = useBoolean();
  const showHandler = () => {
    setShow.on();
  };
  const toggleHandler = () => {
    setShow.toggle();
  };
  return (
    <GridItem colSpan={6} rowSpan={show ? 8 : 6} w={"100%"} h={"100%"}>
      <Grid templateRows="repeat(3, 1fr)" gap={2} w={"100%"} h={"100%"}>
        <SearchBox setShow={showHandler} />
        {show ? <SuggestionTools /> : <BookMark />}
        <BackDrop show={show} toggle={toggleHandler} />
      </Grid>
    </GridItem>
  );
};

export default Search;
