import React from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput({ handleChange, query, disabled }) {
  return (
    <TextField
      disabled={disabled}
      type="text"
      placeholder="Cari"
      value={query}
      name="query"
      onChange={handleChange}
      variant="outlined"
      size="small" 
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchInput;
