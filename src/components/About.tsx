import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

interface AboutProps {
  title: string;
  description: string;
}

const aboutUs: AboutProps[] = [
  {
    title: "Commitment to Business Growth",
    description:
      "We are committed to helping your business grow and achieve success through innovative omnichannel solutions.",
  },
  {
    title: "Experience and Understanding",
    description:
      "With extensive industry experience and a deep understanding of modern business challenges, we are ready to provide the support you need.",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to empower your business to connect with customers through various sales and communication channels in a seamless and efficient manner.",
  },
  {
    title: "Omnichannel Approach",
    description:
      "We employ an omnichannel approach to create consistent and cohesive experiences for your customers, both online and offline.",
  },
  {
    title: "Customized Solutions",
    description:
      "We recognize that every business has unique needs, which is why we offer solutions that can be tailored to your specific requirements.",
  },
  {
    title: "Expert Team",
    description:
      "Our team consists of experts in their respective fields, ready to deliver the best knowledge and skills to you.",
  },
  {
    title: "High-Quality Service",
    description:
      "We are committed to providing high-quality services, the latest innovations, and timely support.",
  },
  {
    title: "Flexibility and Innovation",
    description:
      "We embrace flexibility and innovation as core values in navigating the ever-changing business landscape.",
  },
  {
    title: "Full Support",
    description:
      "We are ready to provide full support in facing challenges and seizing opportunities in the dynamic business world.",
  },
  {
    title: "Success Partners",
    description:
      "We aim to be your success partner and help you achieve success in your business journey.",
  },
];

const About = (): JSX.Element => {
  const theme = useTheme();
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible: boolean | ((prevState: boolean) => boolean)) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };

  return (
    <div id="about">
      <Box
        sx={{
          pt: 5,
          pb: 12,
          px: 2,
          backgroundColor: theme.palette.background.default,
        }}>
        <Box marginBottom={4}>
          <Typography
            variant="h5"
            align="center"
            color={theme.palette.text.primary}
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              textTransform: "uppercase",
              mb: 2,
            }}>
            About
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color={theme.palette.text.secondary}
            marginTop={theme.spacing(1)}
            gutterBottom>
            Transforming customer connections. Empowering businesses. Omnichannel Solutions.
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {aboutUs.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  component={Card}
                  height={1}
                  display="flex"
                  flexDirection="column"
                  boxShadow={0}>
                  <CardContent
                    sx={{
                      padding: { sm: 4 },
                    }}>
                    <Box marginBottom={4} display="flex" flexDirection="column" alignItems="center">
                      <Typography variant="h4" color="primary" gutterBottom>
                        <Box
                          fontWeight={600}
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? theme.palette.primary.main
                                : theme.palette.success.dark,
                          }}>
                          {item.title}
                        </Box>
                      </Typography>
                      <Typography component="p" color={theme.palette.text.secondary}>
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default About;
