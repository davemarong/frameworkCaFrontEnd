// IMPORT

// React

// Material UI
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

// Components

// Utils

// External
import { useNavigate } from "react-router-dom";

// Data
import { nav_items } from "./NavItems";
import { Avatar } from "@mui/material";

// Functional component
export const Nav = () => {
  // State

  // ROUTING
  let navigate = useNavigate();

  // Functions
  const navigateToPage = (page) => {
    navigate(page);
  };
  // Return
  return (
    // <Paper style={{ padding: "10px 0", marginBottom: 10 }}>
    <Grid
      container
      justifyContent="space-evenly"
      flexWrap="nowrap"
      alignItems="center"
      gap={10}
    >
      {nav_items.map((item) => {
        return (
          <Grid item key={item.id}>
            <Button
              onClick={() => {
                navigateToPage(item.href);
              }}
              variant="outlined"
              startIcon={item.icon}
            >
              {item.label}
            </Button>
          </Grid>
        );
      })}
    </Grid>
    // </Paper>
  );
};
