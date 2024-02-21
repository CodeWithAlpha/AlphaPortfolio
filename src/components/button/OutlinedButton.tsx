import { Button, useTheme } from "@mui/material";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export default function OutlinedButton({ children, ...other }: props) {
  const theme = useTheme();
  return (
    <button
      style={{
        color: "black",
        padding: "8px 25px",
        outline: "none",
        borderRadius: 20,
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: "transparent",
        fontSize: 20,
        fontWeight: 500,
      }}
      {...other}
    >
      {children}
    </button>
  );
}
