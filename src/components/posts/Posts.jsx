import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

export const Posts = ({ posts }) => {
  // ROUTING
  let navigate = useNavigate();

  // Functions
  const navigateToPage = (page, id) => {
    navigate({
      pathname: page,
      search: `?id=${id}`,
    });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 50 }}>
      <Grid container gap={4} justifyContent="space-evenly">
        {posts?.map((post) => {
          return (
            <Grid
              key={post.id}
              container
              gap={3}
              direction="column"
              alignItems="center"
              item
              xs={3}
              style={{ boxShadow: "0 0 3px", padding: 20 }}
            >
              <Typography variant="h4">{post.Title}</Typography>
              <Avatar
                variant="rounded"
                src={post.Image}
                sx={{ width: 100, height: 100 }}
              />
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => {
                  navigateToPage("/Detail", post.id);
                }}
              >
                Read
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
