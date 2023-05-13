import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import OmniChannel from "../assets/logo/omnichannel.png";
import Customer from "../assets/logo/customer.png";
import Pos from "../assets/logo/pos.png";
import Wms from "../assets/logo/wms.png";
import Order from "../assets/logo/order.jpg";
import Social from "../assets/logo/social.jpg";
import Report from "../assets/logo/reports.png";
import Catalog from "../assets/logo/catalog.png";

interface ProductsProps {
  title: string;
  image: string;
  description: string;
}

const omnichannelProducts: ProductsProps[] = [
  {
    title: "Omnichannel retail software",
    description:
      "Comprehensive software solutions for integrating and synchronizing sales channels.",
    image: OmniChannel,
  },
  {
    title: "Customer engagement platforms",
    description: "Tools and platforms for personalized and interactive customer experiences.",
    image: Customer,
  },
  {
    title: "Point-of-sale (POS) systems",
    description: "Advanced systems connecting physical and online stores for real-time management.",
    image: Pos,
  },
  {
    title: "Warehouse management system (WMS)",
    description: "Systems for efficient management of warehouse operations and inventory.",
    image: Wms,
  },
  {
    title: "Order management systems",
    description: "Efficient systems for processing and tracking orders across channels.",
    image: Order,
  },
  {
    title: "Social media integration tools",
    description: "Tools for seamless management and engagement across social media channels.",
    image: Social,
  },
  {
    title: "Product catalog management",
    description:
      "Tools for organizing and managing product catalogs, including product information and pricing.",
    image: Catalog,
  },
  {
    title: "Analytics and reporting platforms",
    description:
      "Tools for analyzing customer behavior, sales performance, and channel effectiveness.",
    image: Report,
  },
];
const Products = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div id="products">
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
            Products
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}>
            We offer a range of products to support your business
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {omnichannelProducts.map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box
                  component={Card}
                  padding={4}
                  width={1}
                  height={1}
                  bgcolor={theme.palette.background.paper}
                  sx={{
                    "&:hover": {
                      bgcolor: theme.palette.background.default,
                      color:
                        theme.palette.mode === "dark"
                          ? theme.palette.common.white
                          : theme.palette.common.black,
                    },
                  }}>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                      }}>
                      {item.title}
                    </Typography>
                    <Typography color="inherit">{item.description}</Typography>
                  </Box>
                  <Box display="block" width={1} height={1}>
                    <Card
                      sx={{
                        width: 1,
                        height: 1,
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "none",
                        bgcolor: "transparent",
                        backgroundImage: "none",
                      }}>
                      <CardMedia
                        title=""
                        image={item.image}
                        sx={{
                          position: "relative",
                          height: 400,
                          overflow: "hidden",
                          borderRadius: 2,
                          filter:
                            theme.palette.mode === "dark" ? "brightness(0.7)" : "brightness(0.9)",
                          mt: 4,
                        }}></CardMedia>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Products;
