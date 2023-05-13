import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import React from "react";
import HopyLovy from "../assets/logo/HopyLovy-1.svg";
import Ventela from "../assets/logo/ventela-cimahi-1.svg";
import Jiniso from "../assets/logo/Jiniso-1.svg";
import Miniso from "../assets/logo/Miniso_logo.svg.png";
import TriSecond from "../assets/logo/3Secondpng.png";
import Diana from "../assets/logo/Diana-Bakery.png";
import HealtyGroc from "../assets/logo/HealthyGrocery.png";
import Numi from "../assets/logo/Numi.png";
import Freshbox from "../assets/logo/80161b88f72aad5226bf469a78e64ad0.jpeg";
import Charmy from "../assets/logo/Charme.png";
import Loreal from "../assets/logo/Loreal.png";
import Proper from "../assets/logo/ProperBeauty.png";
import PnG from "../assets/logo/PnG.png";
import Atmos from "../assets/logo/Atmos.png";
import GudangSayur from "../assets/logo/294312d4ba.png";
import Gadzila from "../assets/logo/Gadzila.png";
import Smile from "../assets/logo/Smile-Acc.png";
import Jakarta from "../assets/logo/JakartaVapers.png";
import Asus from "../assets/logo/Asus.png";
import HP from "../assets/logo/HP.jpg";
import Kimiafarma from "../assets/logo/Farma.jpg";
import Kalbe from "../assets/logo/Kalbe.png";
import TolakAngin from "../assets/logo/Tolak-Angin.png";
import Natureplus from "../assets/logo/NaturePlus.png";
import Xtramart from "../assets/logo/XtraMart.png";

type Client = "fashion" | "FnB" | "beauty" | "electronic" | "healty";

const client = {
  fashion: [
    { name: "Hopylovy", image: HopyLovy },
    { name: "Ventela", image: Ventela },
    { name: "Jiniso", image: Jiniso },
    { name: "Miniso", image: Miniso },
    { name: "3Second", image: TriSecond },
  ],
  FnB: [
    { name: "Diana Bakery", image: Diana },
    { name: "Healty Grocery", image: HealtyGroc },
    { name: "Numi", image: Numi },
    { name: "GudangSayur", image: GudangSayur },
    { name: "FreshBox", image: Freshbox },
  ],
  beauty: [
    { name: "Charmy", image: Charmy },
    { name: "Loreal", image: Loreal },
    { name: "Proper Beauty", image: Proper },
    { name: "P&G", image: PnG },
    { name: "Atmos Official", image: Atmos },
  ],
  electronic: [
    { name: "Gadzila", image: Gadzila },
    { name: "Smile", image: Smile },
    { name: "Jakarta Vapers", image: Jakarta },
    { name: "Asus", image: Asus },
    { name: "HP", image: HP },
  ],
  healty: [
    { name: "Kimiafarma", image: Kimiafarma },
    { name: "Kalbe", image: Kalbe },
    { name: "Tolak angin", image: TolakAngin },
    { name: "Xtramart", image: Xtramart },
    { name: "Natureplus", image: Natureplus },
  ],
};

const Client = (): JSX.Element => {
  const theme = useTheme();

  const [value, setValue] = React.useState<Client>("fashion");

  const handleChange = (event: React.SyntheticEvent, newValue: Client) => {
    setValue(newValue);
  };
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
            Client
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            sx={{ display: "grid", justifyContent: "center" }}
            aria-label="scrollable prevent tabs example">
            <Tab label="Fashion" value={"fashion"} />
            <Tab label="F&B" value={"FnB"} />
            <Tab label="Cosmetic" value={"beauty"} />
            <Tab label="Electronic" value={"electronic"} />
            <Tab label="Healty" value={"healty"} />
          </Tabs>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {client[value].map((x, i) => (
              <Grid item xs={6} md={2} key={i}>
                <img
                  src={x.image}
                  alt={x.name}
                  style={{ aspectRatio: 8 / 2, objectFit: "contain", width: "25vw" }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Client;
