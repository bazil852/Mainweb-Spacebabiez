import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function GuideCard({ number, heading, paragraph }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#f2f2f2",
          width: "80%",
          height: "auto",
          border: "none",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            margin: 2,
            width: 260,
            height: 55,
            backgroundColor: "white",
            borderRadius: 70,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: 35, fontWeight: "bolder" }}>
            {number}
          </Typography>
        </Box>
        <CardContent>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 700,
              lineHeight: "32px",
              letterSpacing: "0.5px",
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.4px",
              marginTop: "16px",
            }}
          >
            {paragraph}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
