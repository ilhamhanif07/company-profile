import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StormIcon from "@mui/icons-material/Storm";
import { useTheme } from "@mui/material/styles";

import CustomButton from "../components/CustomButton";

interface Props {
  onClose: () => void;
  open: boolean;
  isLoggedIn: boolean;
  users: any;
  logout: () => void;
}

const Sidebar = ({ open, onClose, users, isLoggedIn, logout }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        disableScrollLock={true}
        ModalProps={{ disableRestoreFocus: true }}
        disableRestoreFocus
        anchor="left"
        onClose={() => onClose()}
        open={open}
        variant="temporary"
        disablePortal
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256,
          },
        }}>
        <Box height="100%">
          <Box width={1}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton size="large" disabled>
                <StormIcon
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.primary.main
                        : theme.palette.success.dark,
                    height: 40,
                    width: 40,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    marginLeft: 1,
                  }}>
                  Omnichannel
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box padding={2}>
            <Box paddingY={2}>
              <CustomButton href="/#products" text="Products" />
              <Box paddingY={1}>
                <CustomButton href="/#services" text="Services" />
              </Box>
              <Box paddingY={1}>
                <CustomButton href="/#pricing" text="Pricing" />
              </Box>
              <Box paddingY={1}>
                <CustomButton href="/#about" text="About" />
              </Box>
              <Box paddingY={1}>
                <CustomButton href="/#contact" text="Contact" />
              </Box>
              {!isLoggedIn ? (
                <>
                  <Box paddingY={1}>
                    <CustomButton href="/login" text="Sign in" />
                  </Box>
                  <Box paddingY={1}>
                    <CustomButton href="/signup" text="Sign up" />
                  </Box>
                </>
              ) : (
                <Box
                  paddingY={1}
                  sx={{
                    color: theme.palette.text.primary,
                    mx: "22px",
                  }}>
                  <Typography component={"p"}>Hello, {users?.username}</Typography>
                  <Button onClick={logout}> Logout</Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;