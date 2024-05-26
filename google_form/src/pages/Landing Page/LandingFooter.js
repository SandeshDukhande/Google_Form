// import React from "react";
// import { Box, Typography, Button, Paper } from "@mui/material";
// import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// const LandingFooter = () => {
//   return (
//     <Paper
//       component="footer"
//       sx={{
//         py: 2, // Reduced padding on the top and bottom
//         px: 2,
//         mt: "auto",
//         backgroundColor: "#f1f3f4",
//         textAlign: "center",
//         boxShadow: "0px -1px 3px rgba(0,0,0,0.2)",
//       }}
//       elevation={0}
//     >
//       <Typography variant="h6" sx={{ fontWeight: "bold", color: "#202124" }}>
//         Formify
//       </Typography>
//       <Typography
//         variant="body2"
//         color="textSecondary"
//         sx={{ mt: 1, color: "#5f6368" }}
//       >
//         Your go-to platform for creating and managing forms.
//       </Typography>
//       <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 2 }}>
//         <Button
//           variant="outlined"
//           color="primary"
//           startIcon={<PrivacyTipIcon sx={{ color: "#5f6368" }} />}
//           href="#privacy"
//         >
//           Privacy
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           startIcon={<HelpOutlineIcon sx={{ color: "#5f6368" }} />}
//           href="#help"
//         >
//           Help
//         </Button>
//       </Box>
//     </Paper>
//   );
// };

// export default LandingFooter;

import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const LandingFooter = () => {
  return (
    <Paper
      component="footer"
      sx={{
        py: 2, // Reduced padding on the top and bottom
        px: 2,
        mt: "auto",
        backgroundColor: "#f1f3f4",
        textAlign: "center",
        boxShadow: "0px -1px 3px rgba(0,0,0,0.2)",
      }}
      elevation={0}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#202124" }}>
        Formify
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mt: 1, color: "#5f6368" }}
      >
        Your go-to platform for creating and managing forms.
      </Typography>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<PrivacyTipIcon sx={{ color: "#5f6368" }} />}
          href="#privacy"
        >
          Privacy
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<HelpOutlineIcon sx={{ color: "#5f6368" }} />}
          href="#help"
        >
          Help
        </Button>
      </Box>
    </Paper>
  );
};

export default LandingFooter;
