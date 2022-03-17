import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function Guide() {
  return (
    <Timeline position="alternate">
       <div style={{
        width:'100%',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography variant="h5" color="white" align='centre'>
          Phase 1
        </Typography>
      </div>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="white"
      >
        <img src="https://i.ibb.co/9tNTmGD/bg2.png" style={{width:'30%'}}></img>
      </TimelineOppositeContent>
      <TimelineSeparator>
      
        <TimelineConnector sx={{ bgcolor: '#b8c22f',width:"5px" }}/>
        <TimelineConnector sx={{ bgcolor: '#643cae',width:"5px" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '80px', px: 2 }}>
        <Typography variant="h5" component="span" color="#ede135">
          Welcome to Etherland
        </Typography>
        <Typography color='white' width='60%'>The collection is full of unique hand-drawn illustrations. It
                  is composed of 2 species, separated into families with varying
                  levels of rarity and a few special 1 of 1s. There are over 120
                  traits that make up this quirky collection and we look forward
                  to telling their stories and introducing new characters to the
                  Space Babiez Univerze through collaborations with our members.</Typography>
      </TimelineContent>
    </TimelineItem>
    <div style={{
        width:'100%',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography variant="h5" color="white" align='centre'>
          Phase 2
        </Typography>
      </div>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="white"
      >
        <img src="https://i.ibb.co/HzxHBdM/bg1.png" style={{width:'30%'}}></img>
      </TimelineOppositeContent>
      <TimelineSeparator>
      
        <TimelineConnector sx={{ bgcolor: '#de4583',width:"5px" }}/>
        <TimelineConnector sx={{ bgcolor: '#4a9fee',width:"5px" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '80px', px: 2 }}>
        <Typography variant="h5" component="span" color="#ede135">
          Explore the Metroverse
        </Typography>
        <Typography color='white' width='60%'  textAlign='right' marginLeft='auto' marginRight='0'> Earth 4122. Dark, eerie, and empty. A society of misfit kids,
                  however we like to call them misunderstood. Strange children
                  living with undiscovered abilities and unlimited potential
                  have been abandoned by those sworn to create a life full of
                  attainable possibilities.</Typography>
      </TimelineContent>
    </TimelineItem>
    <div style={{
        width:'100%',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography variant="h5" color="white" align='centre'>
          Phase 3
        </Typography>
      </div>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="white"
      >
        <img src="https://i.ibb.co/q5D6Yk1/d3beeefa-cf73-45d7-8928-219478eaf019-removebg-preview.png" style={{width:'30%'}}></img>
      </TimelineOppositeContent>
      <TimelineSeparator>
      
        <TimelineConnector sx={{ bgcolor: '#36c2cd',width:"5px" }}/>
        <TimelineConnector sx={{ bgcolor: '#f89a13',width:"5px" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '80px', px: 2 }}>
        <Typography variant="h5" component="span" color="#ede135">
        Dive into Astroverse
        </Typography>
        <Typography color='white' width='60%'> Space Baby Univerzity is a virtual campus that will exist in
                  the metaverse and will also house our community space called
                  Guardianz Landing. We will start to foster and envision
                  Guardianz Landing in our Discord. SBU intends to provide a
                  unique experience that will focus on the gamification of
                  learning. Collaborations with educators, artists, developers,
                  and other creative experts will be fostered to create a
                  curriculum of everything crypto. From art to tech and
                  everything in between!</Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  );
}
