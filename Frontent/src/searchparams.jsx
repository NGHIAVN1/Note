import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform the search operation here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearchSubmit}
      sx={{
        width: "30%",
      }}
    >
      <TextField
        variant="outlined"
        value={searchTerm}
        autoComplete="s"
        focused
        fullWidth
        onChange={handleSearchChange}
        label="Search"
      />
      {/* <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
        Search
      </Button> */}
    </Box>
  );
};

export default SearchForm;
