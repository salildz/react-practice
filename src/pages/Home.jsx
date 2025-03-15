import { Box, Button, Card, CardContent, CardMedia, Divider, Grid2, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const titleRef = useRef(null);
  const [dividerWidth, setDividerWidth] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    expandedId === id ? setExpandedId(null) : setExpandedId(id);
  };

  useEffect(() => {
    if (titleRef.current) {
      const fontSize = window.getComputedStyle(titleRef.current).fontSize;
      const fontSizeValue = parseFloat(fontSize);
      const textLength = titleRef.current.textContent.length;
      const width = textLength * fontSizeValue * 0.6; // Ortalama bir karakter genişliği çarpanı
      setDividerWidth(width);
    }
  }, []);

  return (
    <>
      <Box padding={2} bgcolor="primary.main" color="primary.contrastText">
        <Grid2 container spacing={{ xs: 4 }}>
          <Grid2 key="title" size={{ xs: 12 }}>
            <Typography ref={titleRef} variant="h3" fontWeight="bold" align="center" color="info" sx={{ height: "85%", stroke: "black", strokeWidth: 1, WebkitTextStroke: "1px black" }}>
              Home
            </Typography>
            <Divider sx={{ height: 3, bgcolor: "secondary.main", width: dividerWidth, margin: "0 auto" }}></Divider>
          </Grid2>
          {[...Array(12)].map((_, i) => (
            <Grid2 key={i} size={{ xs: expandedId === i ? 12 : 6 }} onClick={() => handleExpand(i)}>
              <Card sx={{ borderRadius: 50, height: "15%", bgcolor: "secondary.main" }}>
                <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                  <Typography variant="h4" fontWeight="bold" color="info">
                    Title {i}
                  </Typography>
                </CardContent>
              </Card>
              {expandedId !== i && (
                <Card sx={{ mt: 2, borderRadius: 4 }}>
                  <CardMedia component="img" image="https://picsum.photos/200/150"></CardMedia>
                </Card>
              )}
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default Home;
