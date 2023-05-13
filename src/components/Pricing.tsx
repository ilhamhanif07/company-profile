import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

interface PricingProps {
  package: string;
  price: string;
  features: string[];
}

const pricing: PricingProps[] = [
  {
    package: "Basic",
    price: "IDR 999,000/month",
    features: [
      "Integration with up to 3 sales channels",
      "Order management system",
      "Basic customer data analysis",
      "Email support",
    ],
  },
  {
    package: "Pro",
    price: "IDR 1.999,000/month",
    features: [
      "Integration with up to 5 sales channels",
      "Order management system",
      "Warehouse management system",
      "Real-time update of orders",
      "Basic customer data analysis",
      "Email and phone support",
    ],
  },
  {
    package: "Enterprise",
    price: "Custom",
    features: [
      "Customized integration with unlimited sales channels",
      "Order management system",
      "Warehouse management system",
      "Real-time update of orders",
      "Ultimate customer data analysis and reporting",
      "Automatic generation of shipping",
      "Dedicated 24/7 support",
      "etc.",
    ],
  },
];

const Pricing = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div id="pricing">
      <Box
        sx={{
          pt: 5,
          pb: 10,
          px: 2,
          backgroundColor: theme.palette.background.default,
        }}>
        <Box marginBottom={4}>
          <Typography
            variant="h5"
            align="center"
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              textTransform: "uppercase",
            }}>
            Pricing
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}>
            We offer a range of pricing plans to suit everyone
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {pricing.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  component={Card}
                  height={1}
                  display="flex"
                  flexDirection="column"
                  boxShadow={0}
                  border={`1px solid ${theme.palette.divider}`}>
                  <CardContent
                    sx={{
                      padding: { sm: 4 },
                    }}>
                    <Box marginBottom={4} display="flex" flexDirection="column" alignItems="center">
                      <Typography variant="h6" gutterBottom>
                        <Box component="span" fontWeight={600}>
                          {item.package}
                        </Box>
                      </Typography>
                      <Box display="flex" alignItems="flex-start">
                        <Typography variant="h5" color="primary" gutterBottom>
                          <Box
                            component="span"
                            fontWeight={600}
                            sx={{
                              color:
                                theme.palette.mode === "dark"
                                  ? theme.palette.primary.main
                                  : theme.palette.success.dark,
                            }}>
                            {item.price}
                          </Box>
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2" color={theme.palette.text.secondary}>
                        Per company, per month
                      </Typography>
                    </Box>
                    <Grid container spacing={1}>
                      {item.features?.map((feature, j) => (
                        <Grid item xs={12} key={j}>
                          <Typography
                            component="p"
                            align="center"
                            sx={{
                              textDecoration: "none",
                            }}>
                            {feature}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: "center", padding: 4 }}>
                    <Button
                      size="large"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        textTransform: "uppercase",
                        color:
                          theme.palette.mode === "dark"
                            ? theme.palette.common.black
                            : theme.palette.common.white,
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? theme.palette.primary.main
                            : theme.palette.success.dark,
                        border: "2px solid",
                        borderColor:
                          theme.palette.mode === "dark"
                            ? theme.palette.primary.main
                            : theme.palette.success.dark,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color:
                            theme.palette.mode === "dark"
                              ? theme.palette.primary.main
                              : theme.palette.success.dark,
                          border: "2px solid",
                          borderColor:
                            theme.palette.mode === "dark"
                              ? theme.palette.primary.main
                              : theme.palette.success.dark,
                        },
                      }}>
                      Get started
                    </Button>
                  </CardActions>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Pricing;
