import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

import HeroButtons from "./HeroButtons";
import Spacer from "./Spacer";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

interface HeroProps {
  title: number;
  description: string;
}

const bogliasco =
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const countyClare =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const craterRock =
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const giauPass =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const iugene =
  "https://media.istockphoto.com/id/655652514/id/foto/pengusaha-wanita-memeriksa-data-di-smartphone-dan-tablet.jpg?s=612x612&w=0&k=20&c=xT2j9MUd-TtpLpBvwOdXWXiT-ZzLhlxSMQVFGQu0B7g=";

const Hero = (): JSX.Element => {
  const theme = useTheme();

  const [hero, setHero] = useState<HeroProps[]>([]);

  const fetchHero = () => {
    axios
      .get<HeroProps[]>("http://127.0.0.1:8000/hero", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setHero(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return (
    <div id="home">
      <HeroSlider
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) => console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug("onBeforeSliding(previousSlide, nextSlide): ", previousSlide, nextSlide),
          onAfterSliding: (nextSlide) => console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}>
        <Overlay>
          <Box
            sx={{
              py: 10,
              px: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexFlow: "column",
              width: "100%",
              height: "100%",
            }}>
            <Container
              maxWidth="md"
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}>
              <Box marginBottom={2}>
                <Typography
                  align="center"
                  color={"white"}
                  variant="h3"
                  sx={{ fontWeight: 900 }}
                  gutterBottom>
                  Connected. Delivering. Experience.
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color={"white"} sx={{ fontWeight: 700 }}>
                  We are connected to deliver captivating experiences to our customers through an
                  omnichannel strategy that integrates various communication channels and
                  interactions, ensuring consistency and customer satisfaction in every touchpoint.
                </Typography>
              </Box>
              <HeroButtons />
            </Container>
          </Box>
        </Overlay>

        <Slide
          shouldRenderMask
          label="Giau Pass - Italy"
          background={{
            backgroundImageSrc: giauPass,
          }}
        />

        <Slide
          shouldRenderMask
          label="Bogliasco - Italy"
          background={{
            backgroundImageSrc: bogliasco,
          }}
          style={{ filter: "brightness(0.5)" }}
        />

        <Slide
          shouldRenderMask
          label="County Clare - Ireland"
          background={{
            backgroundImageSrc: countyClare,
          }}
          style={{ filter: "brightness(0.5)" }}
        />

        <Slide
          shouldRenderMask
          label="Crater Rock, OR - United States"
          background={{
            backgroundImageSrc: craterRock,
          }}
          style={{ filter: "brightness(0.5)" }}
        />

        <Slide
          shouldRenderMask
          label="People"
          background={{
            backgroundImageSrc: iugene,
          }}
          style={{ filter: "brightness(0.5)" }}
        />
      </HeroSlider>
      <Spacer sx={{ pt: 6 }} />
    </div>
  );
};

export default Hero;
