import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import SearchBox from "../components/searchBox/SearchBox";
import BookMark from "../components/Bookmark/Bookmarks";

const Search = ({ gridNumber }) => {
  return (
    <GridItem colSpan={6} rowSpan={5} w={"100%"} h={"100%"}>
      {/*  */}
      <Grid templateRows="repeat(3, 1fr)" gap={4} w={"100%"} h={"100%"}>
        <SearchBox />
        <BookMark />
      </Grid>
    </GridItem>
  );
};

export default Search;
