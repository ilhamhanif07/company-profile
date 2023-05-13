import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import StorageIcon from "@mui/icons-material/Storage";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
interface ServicesProps {
  title: string;
  description: string;
  icon: any;
}

const services: ServicesProps[] = [
  {
    title: "Implementation and Integration",
    description:
      "We provide efficient implementation and integration services to connect various sales and communication channels in your omnichannel strategy.",
    icon: <SettingsIcon />,
  },
  {
    title: "Strategy Consulting",
    description:
      "We offer strategy consulting services to help you plan and implement effective omnichannel strategies that align with your business needs.",
    icon: <TrendingUpIcon />,
  },
  {
    title: "Customer Data Analysis",
    description:
      "We assist you in analyzing customer data from various channels to understand customer behavior, preferences, and trends, empowering you to make smarter decisions.",
    icon: <ShowChartIcon />,
  },
  {
    title: "Personalized Experiences",
    description:
      "Our services help you personalize customer experiences through relevant content, customized product recommendations, and tailored communication based on customer preferences.",
    icon: <ShoppingBasketIcon />,
  },
  {
    title: "Inventory and Delivery Management",
    description:
      "We provide services to efficiently manage inventory and optimize delivery processes, ensuring consistent product availability across multiple sales channels.",
    icon: <StorageIcon />,
  },
  {
    title: "Integrated Customer Support",
    description:
      "Our team is ready to provide comprehensive customer support through various channels, including live chat, phone calls, and prompt responses on social media.",
    icon: <HeadsetMicIcon />,
  },
  {
    title: "Marketing Campaign Development",
    description:
      "We assist you in developing and implementing integrated marketing campaigns across multiple channels to reach a wider audience and optimize campaign outcomes.",
    icon: <DesktopMacIcon />,
  },
  {
    title: "Performance Measurement",
    description:
      "Our services encompass monitoring and measuring the performance of sales and communication channels, enabling you to identify areas for improvement and optimize your strategies.",
    icon: <StorefrontIcon />,
  },
  {
    title: "Maintenance and Updates",
    description:
      "We provide ongoing maintenance and updates to ensure your omnichannel systems and applications run smoothly and stay up-to-date with the latest technology advancements.",
    icon: <StorageOutlinedIcon />,
  },
];

const Services = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div id="services">
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
            Services
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}>
            We support your business in any industry to keep growing and evolving.
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {services.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box component={Card} padding={4} width={1} height={1}>
                  <Box display="flex" flexDirection="column">
                    <Box
                      component={Avatar}
                      width={50}
                      height={50}
                      marginBottom={2}
                      bgcolor={
                        theme.palette.mode === "dark"
                          ? theme.palette.primary.main
                          : theme.palette.success.dark
                      }
                      color={theme.palette.background.paper}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                    <Typography color={theme.palette.text.secondary}>{item.description}</Typography>
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

export default Services;
