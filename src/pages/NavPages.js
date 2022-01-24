import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function NavPages() {
  const [value, setValue] = React.useState('/');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="/"
          label="Home"
          
        />
        <Tab value="/network" label="Network" />
        <Tab value="/starWars" label="Star Wars" />
      </Tabs>
    </Box>
  );
}
