import { Box, TextField, Button, Typography, Grid, useMediaQuery, Container } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Hero from "./../components/Hero";
import Logo from "../assets/logo/logo.png";
import axios from "axios";
import AlertComponent from "../components/Alert";

const Signup = (): JSX.Element => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alertRef = useRef<any>();

  const onSignup = () => {
    axios
      .post(
        "http://localhost:3001/users",
        {
          email,
          password,
          username,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        if (response.data.status == "ok") {
          alertRef.current.showAlert(
            "Register Success. Return to login page in 5 second",
            "success"
          );
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        }
      })
      .catch((error) => {
        if (error) {
          alertRef.current.showAlert("Register Failed", "warning");
        }
      });
  };

  return (
    <div id="login">
      <AlertComponent ref={alertRef} />

      <Grid container>
        {!isMobile && (
          <Grid item xs={12} sm={6} md={6}>
            <Hero />
          </Grid>
        )}
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}>
            <Typography variant="h5" gutterBottom display={"flex"} fontWeight={700} mb={10}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: 50, aspectRatio: "3/2", objectFit: "contain" }}
              />
              Omnichannel
            </Typography>
            <Container>
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>
              <Typography variant="body1" gutterBottom>
                Fill in the form below to signup your account.
              </Typography>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ width: "100%" }}
                  type="email"
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Button variant="contained" onClick={onSignup}>
                Signup
              </Button>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
