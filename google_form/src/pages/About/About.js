import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CssBaseline,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/system";
import Footer from "../Landing Page/LandingFooter";
import LandingHeader from "../Landing Page/LandingHeader";

const developers = [
  {
    name: "Ayush Rastogi",
    role: "Full Stack Developer",
    description:
      "Ayush excels in both frontend and backend development, bridging the gap between design and functionality.",
    image:
      "https://media.licdn.com/dms/image/C5603AQHvPiwM9UNKTg/profile-displayphoto-shrink_800_800/0/1623474844418?e=1721865600&v=beta&t=eFloxmMTREXNh5ocx24r8YiWRRa955bM84vyRJWY3jQ", // Replace with actual image URL
  },
  {
    name: "Shreyash Bhagat",
    role: "Backend Developer",
    description:
      "Shreyash is an expert in backend development, ensuring robust and scalable server-side applications.",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFs390qjxqy0w/profile-displayphoto-shrink_800_800/0/1658416530744?e=1721865600&v=beta&t=Kmy7_Qb0CHHyF4TXNSXuU1GR7NjHpKcQi8RWtnjRsUs", // Replace with actual image URL
  },
  {
    name: "Sandesh Dukhande",
    role: "Frontend Developer",
    description:
      "Sandesh is a skilled frontend developer with a passion for creating stunning user interfaces.",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFO4naBp389nA/profile-displayphoto-shrink_800_800/0/1716293924039?e=1721865600&v=beta&t=Ojf6W9pJXecfPzfUWSbSYHztoSjxrKXegr152uceWhM", // Replace with actual image URL
  },
];

const AboutUs = () => {
  const theme = useTheme();

  return (
    <>
      <LandingHeader />
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#f3e5f5" } }} />
      <Container sx={{ py: 8 }}>
        {/* Banner Section */}
        <Grid container justifyContent="center" className="text-center mb-4">
          <Grid item xs={12}>
            <img
              src="https://cdac.in/index.aspx?id=img_Mumbai-cb"
              alt="CDAC Banner"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginBottom: theme.spacing(2),
              }}
              className="banner-image"
            />
            <Typography variant="body1" gutterBottom sx={{ fontSize: 18 }}>
              C-DAC Mumbai, earlier known as NCST, started operations in the
              Juhu campus in 1985. There are two campuses in Mumbai, at Juhu and
              at Kharghar. It has a rich history of cutting edge R&D in areas of
              Computer Graphics, Computer Networks, Language Translation,
              Educational Applications of AI, Resource Scheduling, etc. It was
              among the pioneers in bringing Internet to India through the ERNET
              project, and also in multi-lingual technologies.
            </Typography>
          </Grid>
        </Grid>

        {/* Developer Section */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#6200ea",
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
          }}
        >
          Meet our student Developers from CDAC Kharghar, Mumbai
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {developers.map((developer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 8,
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={developer.image}
                  alt={developer.name}
                />
                <CardContent sx={{ flexGrow: 1, backgroundColor: "#f9f9f9" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    mx={{ fontWeight: "bold", color: "#6200ea", fontSize: 25 }}
                  >
                    {developer.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    mx={{ mt: 1, fontSize: 20 }}
                  >
                    {developer.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mx={{ mt: 2, fontSize: 18 }}
                  >
                    {developer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
