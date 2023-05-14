import { Box, Card, CardMedia, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Catalog from "../assets/logo/catalog.png";
import Customer from "../assets/logo/customer.png";
import OmniChannel from "../assets/logo/omnichannel.png";
import Order from "../assets/logo/order.jpg";
import Pos from "../assets/logo/pos.png";
import Report from "../assets/logo/reports.png";
import Social from "../assets/logo/social.jpg";
import Wms from "../assets/logo/wms.png";

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

const Article = (): JSX.Element => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const onClickArticle = (id: string | number) => {
    navigate(`/article/${id}`);
  };

  return (
    <div id="article">
      <Container sx={{ mt: "3rem" }}>
        <Grid container spacing={4}>
          {omnichannelProducts.map((item, i) => (
            <Grid item xs={12} sm={12} md={12} key={i}>
              <Box
                onClick={() => onClickArticle(i)}
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
                  cursor: "pointer",
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
                      }}
                    />
                  </Card>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Article;
