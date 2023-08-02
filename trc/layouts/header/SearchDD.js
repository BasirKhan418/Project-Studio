import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { IconButton, Input, Box, Drawer } from "@mui/material";

const SearchDD = () => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };
  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <FeatherIcon icon="search" width="20" height="20" />
      </IconButton>
    </>
  );
};

export default SearchDD;
