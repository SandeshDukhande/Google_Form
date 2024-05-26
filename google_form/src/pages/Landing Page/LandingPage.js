// import React from "react";
// import { Container, Typography, Button, Grid, Box, Paper } from "@mui/material";
// import LandingHeader from "./LandingHeader";
// import LandingFooter from "./LandingFooter";
// import FormImage from "../../assets/images/FormImage.png";
// import Feature1Image from "../../assets/images/image 1.png";
// import Feature2Image from "../../assets/images/image 2.png";
// import Feature3Image from "../../assets/images/image 3.png";
// import Signup from "./../Signup/Signup";

// const LandingPage = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//         backgroundColor: "#f3e5f5",
//       }}
//     >
//       <LandingHeader />
//       <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
//         <Box sx={{ textAlign: "center", mt: 8 }}>
//           <img
//             src={FormImage}
//             alt="Form Illustration"
//             style={{ width: "100%", maxWidth: "600px" }}
//           />
//           <Typography
//             variant="h2"
//             component="h1"
//             gutterBottom
//             sx={{ fontWeight: "bold", color: "#6200ea", mt: 4 }}
//           >
//             {" "}
//             {/* Dark purple text color */}
//             Get insights quickly, with Formify Forms
//           </Typography>
//           <Typography
//             variant="h5"
//             component="h2"
//             gutterBottom
//             sx={{ color: "#7e57c2" }}
//           >
//             {" "}
//             {/* Lighter purple text color */}
//             Easily create and share online forms and surveys, and analyze
//             responses in real-time.
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             href="Signup"
//             sx={{ mt: 4, bgcolor: "#7b1fa2" }}
//           >
//             {" "}
//             {/* Purple button color */}
//             Get Started
//           </Button>
//         </Box>
//         <Box sx={{ mt: 8 }}>
//           <Grid container spacing={4} justifyContent="center">
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 3,
//                   borderRadius: "12px",
//                   textAlign: "center",
//                   backgroundColor: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 <img
//                   src={Feature1Image}
//                   alt="Feature 1"
//                   style={{
//                     maxWidth: "100%",
//                     height: "auto",
//                     borderRadius: "12px",
//                   }}
//                 />
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   sx={{ fontWeight: "bold", mt: 2, color: "#6200ea" }}
//                 >
//                   Create an online form as easily as creating a document
//                 </Typography>

//                 <Typography variant="body1" color="textSecondary">
//                   Select from multiple question types, drag-and-drop to reorder
//                   questions, and customize values as easily as pasting a list.
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 3,
//                   borderRadius: "12px",
//                   textAlign: "center",
//                   backgroundColor: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 {" "}
//                 {/* White background color for cards */}
//                 <img
//                   src={Feature2Image}
//                   alt="Feature 2"
//                   style={{
//                     maxWidth: "100%",
//                     height: "auto",
//                     borderRadius: "12px",
//                   }}
//                 />
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   sx={{ fontWeight: "bold", mt: 2, color: "#6200ea" }}
//                 >
//                   Analyze responses with automatic summaries
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary">
//                   See charts with response data update in real-time. Or open the
//                   raw data with Google Sheets for deeper analysis or automation.
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 3,
//                   borderRadius: "12px",
//                   textAlign: "center",
//                   backgroundColor: "#fff",
//                   height: "100%",
//                 }}
//               >
//                 {" "}
//                 {/* White background color for cards */}
//                 <img
//                   src={Feature3Image}
//                   alt="Feature 3"
//                   style={{
//                     maxWidth: "100%",
//                     height: "auto",
//                     borderRadius: "12px",
//                   }}
//                 />
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   sx={{ fontWeight: "bold", mt: 2, color: "#6200ea" }}
//                 >
//                   Send polished surveys and forms
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary">
//                   Customize colors, images, and fonts to adjust the look and
//                   feel or reflect your organization’s branding. And add custom
//                   logic that shows questions based on answers, for a more
//                   seamless experience.
//                 </Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//       <LandingFooter />
//     </Box>
//   );
// };

// export default LandingPage;

import React from "react";
import { Container, Typography, Button, Grid, Box, Paper } from "@mui/material";
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";
import FormImage from "../../assets/images/FormImage.png";
import Feature1Image from "../../assets/images/image 1.png";
import Feature2Image from "../../assets/images/image 2.png";
import Feature3Image from "../../assets/images/image 3.png";
import Signup from "../Signup/Signup";

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f3e5f5",
      }}
    >
      <LandingHeader />
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <img
            src={FormImage}
            alt="Form Illustration"
            style={{ width: "100%", maxWidth: "600px" }}
          />
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#6200ea", mt: 4 }}
          >
            Get insights quickly, with Formify Forms
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: "#7e57c2" }}
          >
            Easily create and share online forms and surveys, and analyze
            responses in real-time.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="Signup"
            sx={{ mt: 4, bgcolor: "#7b1fa2" }}
          >
            Get Started
          </Button>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  height: "100%",
                }}
              >
                <img
                  src={Feature1Image}
                  alt="Feature 1"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", mt: 2, color: "#6200ea" }}
                >
                  Create an online form as easily as creating a document
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Select from multiple question types, drag-and-drop to reorder
                  questions, and customize values as easily as pasting a list.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  height: "100%",
                }}
              >
                <img
                  src={Feature2Image}
                  alt="Feature 2"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", mt: 2, color: "#6200ea" }}
                >
                  Analyze responses with automatic summaries
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  See charts with response data update in real-time. Or open the
                  raw data with Google Sheets for deeper analysis or automation.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  height: "100%",
                }}
              >
                <img
                  src={Feature3Image}
                  alt="Feature 3"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", mt: 2, color: "#6200ea" }}
                >
                  Send polished surveys and forms
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Customize colors, images, and fonts to adjust the look and
                  feel or reflect your organization’s branding. And add custom
                  logic that shows questions based on answers, for a more
                  seamless experience.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <LandingFooter />
    </Box>
  );
};

export default LandingPage;
