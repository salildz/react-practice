import { Box, Button, Card, CardContent, CardMedia, Collapse, Divider, Grid2, TextField, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React, { useEffect, useRef, useState } from "react";
import { Category, Pets } from "@mui/icons-material";

const items = [
  { name: "Americano", price: 120 },
  { name: "Latte", price: 156 },
  { name: "Cappuccino", price: 140 },
  { name: "Espresso", price: 100 },
  { name: "Mocha", price: 150 },
  { name: "Macchiato", price: 130 },
  { name: "Flat White", price: 145 },
];

const Home = () => {
  const CATEGORY_COUNT = 26;
  const rows = Array.from({ length: Math.ceil(CATEGORY_COUNT / 2) }, (_, rowIndex) => {
    const first = rowIndex * 2;
    const second = first + 1;
    return [first, second];
  });
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

  useEffect(() => {
    if (expandedId !== null) {
      const rowIndex = Math.floor(expandedId / 2);
      const rowElement = document.getElementById(`row-${rowIndex}`);
      setTimeout(() => {
        if (rowElement) rowElement.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [expandedId]);

  return (
    <>
      <Box padding={2} bgcolor="primary.main" color="primary.contrastText">
        <Grid2 container spacing={1}>
          <Grid2 id="title" key="title" size={12}>
            <Typography ref={titleRef} variant="h3" fontWeight="bold" align="center" color="info" sx={{ height: "85%", stroke: "black", strokeWidth: 1, WebkitTextStroke: "1px black" }}>
              Home
            </Typography>
            <Divider sx={{ height: 3, bgcolor: "secondary.main", width: dividerWidth, margin: "0 auto" }}></Divider>
          </Grid2>
          {rows.map((row, rowIndex) => (
            <Grid2 container id={`row-${rowIndex}`} key={`row-${rowIndex}`} size={12}>
              <Grid2 container id={`row-introduction-${rowIndex}`} key={`category-${rowIndex}`} size={12} sx={{ paddingRight: 4 }}>
                {row.map((categoryIndex) => (
                  <Grid2 id={`category-${categoryIndex}`} key={`category-${categoryIndex}`} size={{ xs: 6 }} onClick={() => handleExpand(categoryIndex)}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <PetsIcon color="info" sx={{ mt: 0.5, mr: 0.5 }}></PetsIcon>
                      <Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", bgcolor: "secondary.main", borderRadius: 50 }}>
                          <Typography variant="h6" fontWeight="bold" color="info" padding={0.1}>
                            Title {categoryIndex}
                          </Typography>
                        </Box>
                        <Card sx={{ mt: 2, borderRadius: 4 }}>
                          <CardMedia component="img" image="https://picsum.photos/200/150"></CardMedia>
                        </Card>
                      </Box>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
              <Grid2 id={`content-${rowIndex}`} key={`content-${rowIndex}`} size={12} sx={{ paddingRight: 4, paddingLeft: 4 }}>
                <Collapse in={expandedId === rowIndex * 2 || expandedId === rowIndex * 2 + 1} timeout="auto" unmountOnExit>
                  <Card sx={{ borderRadius: 3, bgcolor: "secondary.main" }}>
                    <CardContent>
                      <Box key={`content-title-${rowIndex}`} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="body1" fontWeight="bold" color="info">
                          Title {expandedId}
                        </Typography>
                      </Box>
                      {items.map((item, i) => (
                        <Box key={`content-item-${i}`} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography variant="body1" fontWeight="bold" color="info">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="info">
                            {item.price} TL
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </Collapse>
              </Grid2>
            </Grid2>
            /*                <Grid2 key={`button-${i}`} size={{ xs: 12 }}>
                  <Button variant="contained" color="secondary" fullWidth>
                    Load More
                  </Button>
                </Grid2> */
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default Home;
