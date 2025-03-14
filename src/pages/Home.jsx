import { Box, Button, Card, CardMedia, Grid2, TextField } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <>
      <Box padding={2}>
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {[...Array(12)].map((_, i) => (
            <Grid2 key={i} size={{ xs: 6, md: 3 }}>
              <Card>
                <CardMedia component="img" image="https://picsum.photos/200/300"></CardMedia>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box padding={4}>
        <TextField fullWidth></TextField>
      </Box>
    </>
  );
};

export default Home;
