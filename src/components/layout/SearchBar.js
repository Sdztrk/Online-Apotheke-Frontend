import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";



const SearchBar = ({setSearchQuery}) => (
    <>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Nach medikamente suchen"
        variant="outlined"
        placeholder="Suchen"
        sx={{
          width:{xs:"95%", sm:"95%", md:"60%", lg:"40%"},
          display:{xs:"none", sm:"none", md:"flex"}

        }}
        
      />
    </>
  );
  export default SearchBar;