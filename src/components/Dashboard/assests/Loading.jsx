import React from "react";
import { CircularProgress } from '@mui/material';
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height : '100%',
      }}
    >
      <CircularProgress size={24} color="primary" />
    </div>
  );
};

export default Loading;
