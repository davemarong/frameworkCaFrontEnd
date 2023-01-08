import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export const Post = ({ post }) => {
  return (
    <Container maxWidth="md">
      <Grid
        key={post?.id}
        container
        gap={3}
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <Typography variant="h4">{post?.Title}</Typography>
        <Avatar
          variant="rounded"
          src={post?.Image}
          sx={{ width: 300, height: 300 }}
        />
        <Typography variant="h5">{post?.Description}</Typography>
        <Typography variant="5">Wrote by: {post?.Author}</Typography>
        <Typography variant="b1">{post?.Content}</Typography>
      </Grid>
    </Container>
  );
};
