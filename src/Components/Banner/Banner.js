import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useHistory } from "react-router-dom";

export default function Banner({ image, heading, paragraph, buttonValue }) {
  const history = useHistory();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#ede135",
            fontSize: "70px",
            fontWeight: 750,
            marginBottom: "0px",
            marginLeft: "28%",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "28px",
            fontWeight: 750,
            marginLeft: "37%",
            marginBottom: "10px",
          }}
        >
          {paragraph}
        </Typography>
        <Button
          onClick={() => history.push("OurStory")}
          sx={{
            width: "125px",
            height: "50px",
            marginBottom: "400px",
            marginLeft: "44%",
            borderRadius: "30px",
            backgroundColor: "#6905a5",
            color: "white",
            border: "1px solid white",
            fontWeight: "bolder",
            fontSize: "16px",
            letterSpacing: "-.5px",
            textAlign: "center",
            textTransform: "none",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "black",
              color: "white",
              border: "none",
            },
          }}
        >
          {buttonValue}
        </Button>
      <Box>
        {/*<img src="https://i.ibb.co/9tNTmGD/bg2.png" style={{width:'15%',height:'auto', position:'relative', left:'50%',top:'0%'}}></img>*/}
      </Box>
       
      </Box>
      
     
    </Box>
  );
}
