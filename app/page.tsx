"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  IconButton,
  Link as ChakraLink,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Show,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";
import { IBM_Plex_Mono } from "next/font/google";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const inter = IBM_Plex_Mono({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box
        backgroundImage={"url('/assets/image/body-bg.png')"}
        fontFamily={"'IBM Plex Mono', monospace"}
      >
        {/* Header */}
        <Box
          padding={"10px 0px"}
          position={"relative"}
          borderBottom={"2px solid #221F25"}
          zIndex={"1"}
          // _before={{
          //   content: "''",
          //   position: "absolute",
          //   top: "0px",
          //   left: "0px",
          //   width: "100%",
          //   height: "900%",
          //   backgroundImage: "url('/assets/image/header-gradient.png')",
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "top left",
          //   zIndex: "-1",
          // }}
        >
          <Container
            maxW={{
              base: "100%",
              sm: "440px",
              md: "720px",
              lg: "950px",
              xl: "1150px",
              "2xl": "1500px",
            }}
            padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
          >
            <Flex
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              position={"relative"}
            >
              <ChakraLink href="javascript:void(0);">
                <Image src="/assets/image/web-logo.svg" alt="Ghostify-logo" />
              </ChakraLink>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={["20px", "20px", "30px", "30px", "70px", "135px"]}
              >
                <Show below="md">
                  <IconButton
                    icon={
                      isOpen ? (
                        <AiOutlineClose fontSize={"22px"} />
                      ) : (
                        <FiMenu fontSize={"22px"} />
                      )
                    }
                    aria-label="open menubar"
                    transition={"all 0.5s ease-in-out"}
                    color="white"
                    onClick={() => onToggle()}
                    _hover={{ bg: "transparent", color: "#dbdbdb" }}
                  />
                </Show>

                {/**Humburger for a mobile screen */}
                {isOpen ? (
                  <Flex
                    position={"absolute"}
                    zIndex={2}
                    transition={"all 1s ease-in-out"}
                    top={16}
                    flexDirection={"column"}
                    padding="10px 20px"
                    maxWidth={"300px"}
                    bg="violet"
                    textAlign={"center"}
                    right="0px"
                    display={["flex", "flex", "flex", "none", "none", "none"]}
                  >
                    <ChakraLink
                      padding="5px"
                      color="#fff"
                      fontSize={"21px"}
                      transition={"all 0.5s ease-in-out"}
                      fontWeight={500}
                      lineHeight={"130%"}
                      _hover={{
                        color: "black",
                        textDecoration: "none",
                      }}
                      href="#"
                    >
                      Home
                    </ChakraLink>
                    <ChakraLink
                      padding="5px"
                      color="#fff"
                      fontSize={"21px"}
                      transition={"all 0.5s ease-in-out"}
                      fontWeight={500}
                      lineHeight={"130%"}
                      _hover={{
                        color: "black",
                        textDecoration: "none",
                      }}
                      href="#"
                    >
                      About
                    </ChakraLink>
                    <ChakraLink
                      padding="5px"
                      color="#fff"
                      fontSize={"21px"}
                      transition={"all 0.5s ease-in-out"}
                      fontWeight={500}
                      lineHeight={"130%"}
                      _hover={{
                        color: "black",
                        textDecoration: "none",
                      }}
                      href="#"
                    >
                      Community
                    </ChakraLink>
                  </Flex>
                ) : null}

                {/**Navbar For desktop size */}
                <Flex
                  display={["none", "none", "flex", "flex", "flex", "flex"]}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={["20px", "20px", "30px", "30px", "70px", "135px"]}
                >
                  <ChakraLink
                    padding="5px"
                    color="#fff"
                    fontSize={"18px"}
                    transition={"all 0.5s ease-in-out"}
                    fontWeight={500}
                    lineHeight={"130%"}
                    _hover={{
                      color: "#ebdada",
                      textDecoration: "none",
                    }}
                    href="#"
                  >
                    Home
                  </ChakraLink>
                  <ChakraLink
                    padding="5px"
                    color="#fff"
                    fontSize={"18px"}
                    transition={"all 0.5s ease-in-out"}
                    fontWeight={500}
                    lineHeight={"130%"}
                    _hover={{
                      color: "#ebdada",
                      textDecoration: "none",
                    }}
                    href="#"
                  >
                    About
                  </ChakraLink>
                  <ChakraLink
                    padding="5px"
                    color="#fff"
                    fontSize={"18px"}
                    transition={"all 0.5s ease-in-out"}
                    fontWeight={500}
                    lineHeight={"130%"}
                    _hover={{
                      color: "#ebdada",
                      textDecoration: "none",
                    }}
                    href="#"
                  >
                    Community
                  </ChakraLink>
                  <Flex gap={"14px"}>
                    <ChakraLink
                      padding="5px"
                      transition={"all 0.5s ease-in-out"}
                      _hover={{
                        color: "#ebdada",
                        textDecoration: "none",
                      }}
                      href="#"
                    >
                      <Image src="/assets/icons/icon-discord.svg" />
                    </ChakraLink>
                    <ChakraLink
                      padding="5px"
                      transition={"all 0.5s ease-in-out"}
                      _hover={{
                        color: "#ebdada",
                        textDecoration: "none",
                      }}
                      href="#"
                    >
                      <Image src="/assets/icons/icon-twitter.svg" />
                    </ChakraLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/* Banner */}
        <Box
          position={"relative"}
          zIndex={1}
          _before={{
            content: "''",
            position: "absolute",
            top: "50%",
            right: "0px",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            backgroundImage: "url('/assets/image/banner-backround.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            zIndex: "-1",
          }}
        >
          <Container
            maxW={{
              base: "100%",
              sm: "440px",
              md: "720px",
              lg: "950px",
              xl: "1150px",
              "2xl": "1500px",
            }}
            padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
          >
            <Flex
              display={"flex"}
              flexWrap={"wrap"}
              alignItems={"center"}
              justifyContent={[
                "space-between",
                "space-between",
                "space-between",
                "space-between",
                "space-between",
                "center",
              ]}
              gap={["30px", "30px", "0px", "0px", "0px", "95px"]}
              padding={[
                "70px 0px 70px",
                "70px 0px 70px",
                "70px 0px 100px",
                "70px 0px 100px",
                "70px 0px 150px",
                "100px 0px 200px",
              ]}
            >
              <Box maxW={["100%", "100%", "48%", "48%", "48%", "725px"]}>
                <Heading
                  as={"h1"}
                  fontFamily={"IBM Plex Mono"}
                  color={"#fff"}
                  fontSize={["30px", "30px", "30px", "46px", "46px", "60px"]}
                  lineHeight={"130%"}
                  fontWeight={"400"}
                >
                  The Future of Music at Your Fingertips
                </Heading>
                <Text
                  color={"#fff"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={["18px", "18px", "18px", "20px", "22px", "25px"]}
                  padding={"21px 0px 24px"}
                  fontWeight={"500"}
                  lineHeight={"130%"}
                >
                  Co-create playlists, songs, cover art, and more
                </Text>
                {/* <Flex alignItems={"center"} gap={"15px"}>
                  <ChakraLink href="javascript:void(0);">
                    <Image
                      src="/assets/image/appstore.svg"
                      maxW={[
                        "150px",
                        "150px",
                        "150px",
                        "180px",
                        "220px",
                        "100%",
                      ]}
                      alt="Ghostify-logo"
                    />
                  </ChakraLink>
                  <ChakraLink href="#">
                    <Image
                      maxW={[
                        "150px",
                        "150px",
                        "150px",
                        "180px",
                        "220px",
                        "100%",
                      ]}
                      src="/assets/image/googleplay.svg"
                      alt="Ghostify-logo"
                    />
                  </ChakraLink>
                </Flex> */}
                <Flex alignItems={"center"} flexDirection={{base: "column", xl: "row"} } gap={"12px"} width={"90%"}>
                  <Input 
                    placeholder="Email address" 
                    backgroundColor={"rgba(50, 50, 50, 0.40)"} 
                    height={"60px"} borderColor={"#2B2B2B"} 
                    borderWidth={"2px"} 
                    borderRadius={"10px"} 
                    fontWeight={600}
                    fontSize={19}
                  />
                  <Button height={"60px"} width={{base: "100%", xl: "400px"} } fontSize={19} color={"#E1E1E1"} borderRadius={"10px"} padding={"20px 29px"} style={{backgroundColor: "#36226E"}} >
                    Join Waiting List
                  </Button>
                </Flex>
              </Box>
              <Box
                maxW={["340px", "340px", "48%", "48%", "48%", "570px"]}
                mx={"auto"}
              >
                <Image
                  src="/assets/image/banner-image.png"
                  alt="Ghostify-logo"
                />
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* Ghostify */}
        <Box pos="relative" zIndex={1}>
          <Container
            maxW={"100%"}
            display={"flex"}
            justifyContent={"center"}
            // px={["0px", "20px", "40px", "60px", "80px", "260px"]}
            // maxW={{
            //   base: "100%",
            //   sm: "440px",
            //   md: "720px",
            //   lg: "950px",
            //   xl: "1150px",
            //   "2xl": "1500px",
            // }}
            // padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
          >
            <Flex
              gap={"14px"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              // maxW={"730px"}
              // margin={"0px auto"}
              // padding={[
              //   "70px 0px",
              //   "70px 0px",
              //   "100px 0px",
              //   "100px 0px",
              //   "150px 0px",
              //   "200px 0px",
              // ]}
            >
              {/* <Heading
                as={"h2"}
                color={"#DBD7E3"}
                textAlign={"center"}
                fontFamily={"IBM Plex Mono"}
                fontSize={["26px", "26px", "26px", "34px", "40px", "40px"]}
                fontWeight={"600"}
                lineHeight={"130%"}
              >
                What can&nbsp;
                <Box
                  as="span"
                  display={"inline-block"}
                  color={"#fff"}
                  fontWeight={600}
                >
                  Ghostify
                </Box>{" "}
                do?
              </Heading> */}
              {/* <Flex
                flexDirection={"column"}
                paddingTop={["20px", "20px", "20px", "30px", "30px", "30px"]}
                gap={["15px", "15px", "15px", "30px", "30px", "30px"]}
              >
                <Text
                  fontSize={["18px", "18px", "18px", "18px", "20px", "20px"]}
                  fontWeight={"500"}
                  lineHeight={"130%"}
                  textAlign={"center"}
                  color={"#E1E1E1"}
                  fontFamily={"IBM Plex Mono"}
                >
                  <Box
                    as="span"
                    fontWeight={600}
                    display={"inline-block"}
                    fontSize={["22px", "22px", "22px", "22px", "25px", "25px"]}
                    marginRight={[2]}
                    lineHeight={"130%"}
                    textAlign={"center"}
                    fontFamily={"IBM Plex Mono"}
                    color="#fff"
                  >
                    AI-Powered Playlists:
                  </Box>
                  Generate playlists tailored to your mood, event, or any text
                  prompt you provide.
                </Text>
                <Text
                  fontSize={["18px", "18px", "18px", "18px", "20px", "20px"]}
                  fontWeight={"600"}
                  lineHeight={"130%"}
                  textAlign={"center"}
                  color={"#E1E1E1"}
                  fontFamily={"IBM Plex Mono"}
                >
                  <Box
                    as="span"
                    display={"inline-block"}
                    fontSize={["22px", "22px", "22px", "22px", "25px", "25px"]}
                    fontWeight={"600"}
                    lineHeight={"130%"}
                    marginRight={[2]}
                    textAlign={"center"}
                    fontFamily={"IBM Plex Mono"}
                    color="#fff"
                  >
                    Unique AI Cover Art:
                  </Box>
                  Every playlist comes with it’s own AI-generated cover art,
                  making each one a masterpiece!
                </Text>
                <Text
                  fontSize={["18px", "18px", "18px", "18px", "20px", "20px"]}
                  fontWeight={"500"}
                  lineHeight={"130%"}
                  textAlign={"center"}
                  color={"#E1E1E1"}
                  fontFamily={"IBM Plex Mono"}
                >
                  <Box
                    as="span"
                    display={"inline-block"}
                    fontSize={["22px", "22px", "22px", "22px", "25px", "25px"]}
                    fontWeight={"500"}
                    marginRight={[2]}
                    lineHeight={"130%"}
                    textAlign={"center"}
                    fontFamily={"IBM Plex Mono"}
                    color="#fff"
                  >
                    Discover & Remix:
                  </Box>
                  Find AI Playlists created by others and remix them to suit
                  your taste.
                </Text>
              </Flex> */}
              <Box padding={"32px"} dropShadow={"lg"} pt={"48px"} width={"330px"} position={"relative"} background={"#151617"} borderRadius={"50px"} border={"1px solid #968282"}>
                <Image position={"absolute"} left={"20px"} src="/assets/icons/icon-ai.svg" />
                <Text pt={"58px"} width={200} fontSize={25} fontWeight={600} color={"#E1E1E1"}>AI-Powered Playlists</Text>
                <Text mt={"24px"} fontSize={"18px"} fontWeight={400} color={"#AEAEAE"} width={240}>Generate playlists tailored to your mood, event, or any text prompt you provide.</Text>
              </Box>
              <Box padding={"32px"} dropShadow={"lg"} pt={"48px"} width={"330px"} position={"relative"} background={"#151617"} borderRadius={"50px"} border={"1px solid #968282"}>
                <Image position={"absolute"} src="/assets/icons/icon-picture.svg" />
                <Text pt={"58px"} width={200} fontSize={25} fontWeight={600} color={"#E1E1E1"}>Unique AI Cover Art </Text>
                <Text mt={"24px"} fontSize={"18px"} fontWeight={400} color={"#AEAEAE"} width={240}>Every playlist comes with it’s own AI-generated cover art; making each one a masterpiece!</Text>
              </Box>
              <Box padding={"32px"} dropShadow={"lg"} pt={"48px"} width={"330px"} position={"relative"} background={"#151617"} borderRadius={"50px"} border={"1px solid #968282"}>
                <Image position={"absolute"} src="/assets/icons/icon-vibe.svg" />
                <Text pt={"58px"} width={160} fontSize={25} fontWeight={600} color={"#E1E1E1"}>Discover & Remix:</Text>
                <Text mt={"24px"} fontSize={"18px"} fontWeight={400} color={"#AEAEAE"} width={240}>Find AI-Playlists created by others and remix them to suit your taste.</Text>
              </Box>
              <Box padding={"32px"} dropShadow={"lg"} pt={"48px"} width={"330px"} position={"relative"} background={"#151617"} borderRadius={"50px"} border={"1px solid #968282"}>
                <Image position={"absolute"} src="/assets/icons/icon-sound.svg" />
                <Text pt={"58px"} width={200} fontSize={25} fontWeight={600} color={"#E1E1E1"}>Songs & Covers:</Text>
                <Text mt={"24px"} fontSize={"18px"} fontWeight={400} color={"#AEAEAE"} width={240}>Create one-of-a-kind songs and generate song covers with the voice of your favorite artist.</Text>
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* instantly */}
        <Box
          pt={"250px"}
          position={"relative"}
          maxW={"2500px"}
          margin={"0px auto"}
          zIndex={0}
          _before={{
            content: "''",
            position: "absolute",
            top: "50%",
            transition: "all 0.5s ease-in-out",
            transform: "translateY(-50%)",
            right: "0px",
            width: "150%",
            height: "400%",
            backgroundImage: "url('/assets/image/diamond-bg.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            zIndex: "-1",
          }}
        >
          <Container
            maxW={{
              base: "100%",
              sm: "440px",
              md: "720px",
              lg: "950px",
              xl: "1150px",
              "2xl": "1500px",
            }}
            padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
          >
            <Flex
              justifyContent={[
                "space-between",
                "space-between",
                "space-between",
                "space-between",
                "space-between",
                "center",
              ]}
              gap={["30px", "30px", "0px", "0px", "0px", "0px"]}
              padding={[
                "70px 0px",
                "70px 0px",
                "70px 0px",
                "70px 0px 150px",
                "70px 0px 150",
                "100px 0px 200px",
              ]}
            >
              <Box
                maxW={["100%", "100%", "48%", "48%", "48%", "660px"]}
                marginTop={["0px", "0px", "40px", "80px", "80px", "150px"]}
                marginRight={["0px", "0px", "-80px", "-80px", "-80px", "-80px"]}
              >
                <Heading
                  as={"h2"}
                  color={"#DBD7E3"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={["26px", "26px", "26px", "34px", "40px", "40px"]}
                  fontWeight={"600"}
                  lineHeight={"130%"}
                >
                  Create instantly.
                </Heading>
                <Text
                  color={"#E1E1E1"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={["18px", "18px", "18px", "20px", "22px", "25px"]}
                  padding={[
                    "20px 0px",
                    "20px 0px",
                    "20px 0px",
                    "30px 0px",
                    "40px 0px",
                    "40px 0px",
                  ]}
                  fontWeight={"600"}
                  lineHeight={"130%"}
                >
                  Use your creativity to cook up personalized playlists, songs,
                  and cover art.
                </Text>
                <ChakraLink
                  color={"#8571BC"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={["22px", "22px", "22px", "24px", "28px", "30px"]}
                  fontWeight={"600"}
                  lineHeight={"130%"}
                  transition={"all 0.5s ease-in-out"}
                  href="#"
                  _hover={{ color: "#FFF" }}
                >
                  Learn more.
                </ChakraLink>
              </Box>
              <Box
                margin={"0px auto"}
                maxW={["340px", "unset", "unset", "unset", "unset", "unset"]}
              >
                <Image
                  w={"100%"}
                  src="/assets/image/instantly-right-image.png"
                  alt=""
                />
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* Playlist */}
        <Box pt={"280px"}>
          <Container
            maxW={{
              base: "100%",
              sm: "440px",
              md: "720px",
              lg: "950px",
              xl: "1150px",
              "2xl": "1500px",
            }}
            padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
          >
            <Flex
              justifyContent={[
                "space-between",
                "space-between",
                "space-between",
                "space-between",
                "space-between",
                "center",
              ]}
              alignItems={"flex-start"}
              gap={["50px", "50px", "0px", "0px", "0px", "0px"]}
              padding={[
                "0px 0px 70px",
                "0px 0px 70px",
                "0px 0px 100px",
                "0px 0px 100px",
                "0px 0px 150px",
                "0px 0px 200px",
              ]}
              flexDirection={["column", "column", "row", "row", "row", "row"]}
            >
              <Box
                position={"relative"}
                zIndex={"1"}
                margin={"0px auto"}
                maxW={["340px", "100%", "43%", "43%", "43%", "700px"]}
                paddingTop={[
                  "100px",
                  "100px",
                  "100px",
                  "100px",
                  "100px",
                  "120px",
                ]}
                _before={{
                  content: "''",
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  width: "110%",
                  height: "130%",
                  backgroundImage:
                    "url('/assets/image/ghostify-left-background.svg')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  zIndex: "-1",
                }}
              >
                <Image w={"100%"} src="/assets/image/iphoen.svg" alt="" />
              </Box>
              <Flex
                flexDirection={"column"}
                gap={["20px", "20px", "20px", "20px", "30px", "50px"]}
                padding={[
                  "20px 15px 20px 45px",
                  "20px 20px 20px 50px",
                  "20px 20px 20px 50px",
                  "45px 50px 65px 0px",
                  "45px 50px 65px 0px",
                  "65px 50px 65px 0px",
                ]}
                maxW={["100%", "100%", "55%", "55%", "55%", "630px"]}
                position={"relative"}
                zIndex={"1"}
                marginLeft={["20px", "50px", "0px", "0px", "0px", "0px"]}
                // _before={{
                //   content: "''",
                //   position: "absolute",
                //   top: "0px",
                //   left: "0px",
                //   width: "100%",
                //   height: "100%",
                //   backgroundImage: "url('/assets/image/message-box.png')",
                //   backgroundSize: "100% 100%",
                //   backgroundRepeat: "no-repeat",
                //   backgroundPosition: "right",
                //   zIndex: "-1",
                // }}
              >
                <Box
                  position={"absolute"}
                  top={["0px", "0px", "0px", "-10px", "-30px", "-80px"]}
                  transform={"translateX(-100%)"}
                  left={["50px", "0px", "0px", "0px", "40", "40px"]}
                  maxW={["100px", "100px", "100px", "150px", "200px", "unset"]}
                >
                  <Image src="/assets/image/bot.svg" alt="" />
                </Box>
                <Heading
                  as={"h3"}
                  maxWidth={"600px"}
                  color={"#DBD7E3"}
                  textAlign={"right"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={["22px", "22px", "22px", "28px", "28px", "35px"]}
                  fontWeight={"600"}
                  lineHeight={"130%"}
                  mt={"150px"}
                >
                  Meet Ghosty: The Mastermind
                  {/* <Box as="span" display={"inline-block"} fontStyle={"italic"}>
                    &nbsp;another&nbsp;
                  </Box>
                  playlist generator; */}
                </Heading>
                <Text
                  color={"#DBD7E3"}
                  textAlign={"right"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={["18px", "18px", "18px", "18px", "20px", "20px"]}
                  fontWeight={"500"}
                  lineHeight={"130%"}
                >
                  Create your own Ghosty, who will chef up personalized playlists and songs for Spotify and Apple Music based on your unique text prompts.
                </Text>
                <Text
                  color={"#DBD7E3"}
                  textAlign={"right"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={["18px", "18px", "18px", "18px", "20px", "20px"]}
                  fontWeight={"500"}
                  lineHeight={"130%"}
                >
                  Dive into a world where AI meets artistry and discover new realms of music!
                </Text>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Music */}
        <Box
          padding={[
            "70px 0px",
            "70px 0px",
            "70px 0px",
            "100px 0px",
            "150px 0px",
            "150px 0px",
          ]}
        >
          <Container
            mt={"250px"}
            maxW={{
              base: "100%",
              sm: "440px",
              md: "720px",
              lg: "950px",
              xl: "1150px",
              "2xl": "1500px",
            }}
            padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
          >
            <Box>
              <Heading
                as={"h3"}
                textAlign={"center"}
                color={"#DBD7E3"}
                fontFamily={"IBM Plex Mono"}
                fontSize={["26px", "26px", "26px", "34px", "45px", "45px"]}
                fontWeight={"600"}
                lineHeight={"130%"}
              >
                The Decentralization of Music
              </Heading>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={["column", "row", "row", "row", "row", "row"]}
                paddingTop={["40px", "40px", "40px", "40px", "80px", "80px"]}
                gap={["40px", "70px", "70px", "120px", "170px", "230px"]}
              >
                <Flex
                  flexDirection={"column"}
                  gap={["10px", "10px", "20px", "20px", "20px", "20px"]}
                  alignItems={"center"}
                >
                  <Text
                    color={"#E1E1E1"}
                    fontFamily={"IBM Plex Mono"}
                    fontSize={["18px", "18px", "18px", "20px", "22px", "25px"]}
                    fontWeight={"500"}
                    lineHeight={"130%"}
                  >
                    For artists
                  </Text>
                  <Image src="/assets/image/Musicalnote1filled 1.svg" alt="" />
                </Flex>
                <Flex
                  flexDirection={"column"}
                  gap={["10px", "10px", "20px", "20px", "20px", "20px"]}
                  alignItems={"center"}
                >
                  <Text
                    color={"#E1E1E1"}
                    fontFamily={"IBM Plex Mono"}
                    fontSize={["18px", "18px", "18px", "20px", "22px", "25px"]}
                    fontWeight={"500"}
                    lineHeight={"130%"}
                  >
                    For Fans
                  </Text>
                  <Image src="/assets/image/Asset 2.svg" alt="" />
                </Flex>
                <Flex
                  flexDirection={"column"}
                  gap={["10px", "10px", "20px", "20px", "20px", "20px"]}
                  alignItems={"center"}
                >
                  <Text
                    color={"#E1E1E1"}
                    fontFamily={"IBM Plex Mono"}
                    fontSize={["18px", "18px", "18px", "20px", "22px", "25px"]}
                    fontWeight={"500"}
                    lineHeight={"130%"}
                  >
                    For Distributors
                  </Text>
                  <Image src="/assets/image/Vibes.svg" alt="" />
                </Flex>
              </Flex>
            </Box>
          </Container>
        </Box>
        {/* Magic */}
        <Box
          padding={[
            "0px 0px 70px",
            "0px 0px 70px",
            "0px 0px 70px",
            "0px 0px 100px",
            "0px 0px 150px",
            "30px 0px 150px",
          ]}
          position={"relative"}
          zIndex={"2"}
          >
          <Box
            mt={"250px"}
            textAlign={"center"}
            position={"relative"}
            paddingBottom={["88px", "88px", "40px", "40px", "40px", "40px"]}
            zIndex={"1"}
            // _before={{
            //   content: "''",
            //   position: "absolute",
            //   top: "58px",
            //   left: "0px",
            //   width: "100%",
            //   height: "100%",
            //   backgroundImage: "url('/assets/image/box-background.png')",
            //   backgroundSize: "contain",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "left",
            //   zIndex: "-1",
            // }}
          >
            <Image
              borderRadius={["40px", "40px", "40px", "60px", "60px", "60px"]}
              margin={"0px auto"}
              maxW={["200px", "250px", "250px", "300px", "350px", "100%"]}
              src="/assets/image/middle-logo.svg"
              alt=""
            />
          </Box>
          <Container
            maxW={{
              base: "100%",
              sm: "440px",
              md: "720px",
              lg: "950px",
              xl: "1150px",
              "2xl": "1500px",
            }}
            padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
          >
            <Box
              padding={[
                "70px 0px ",
                "70px 0px ",
                "70px 0px",
                "100px 0px",
                "100px 0px 120px",
                "100px 0px 120px",
              ]}
              textAlign={"center"}
            >
              <Heading
                as={"h3"}
                color={"#DBD7E3"}
                fontFamily={"IBM Plex Mono"}
                fontSize={["26px", "26px", "26px", "34px", "50px", "50px"]}
                fontWeight={"500"}
                lineHeight={"130%"}
                paddingBottom={"44px"}
              >
                It’s time to{" "}
                <Box as="span" display={"inline-block"} color={"#8571BC"}>
                  make magic.
                </Box>
                <Flex mt={"20px"} alignItems={"center"} flexDirection={{base: "column", lg: "row"} } gap={"12px"} width={"100%"} mx={"auto"}>
                  <Input 
                    placeholder="Email address" 
                    backgroundColor={"rgba(50, 50, 50, 0.40)"} 
                    height={"60px"} borderColor={"#2B2B2B"} 
                    borderWidth={"2px"} 
                    borderRadius={"10px"} 
                    fontWeight={600}
                    fontSize={19}
                  />
                  <Button height={"60px"} width={{base: "100%", lg: "400px"} } fontSize={19} color={"#E1E1E1"} borderRadius={"70px"} padding={"20px 29px"} style={{backgroundColor: "#36226E"}} >
                    Join Waiting List
                  </Button>
              </Flex>
              </Heading>
              {/* <ChakraLink
                href="#"
                color="#FFF"
                display="inline-block"
                fontFamily={"IBM Plex Mono"}
                padding={[
                  "10px 20px ",
                  "10px 20px",
                  "10px 20px",
                  "15px 30px",
                  "26px 44px",
                  "26px 44px",
                ]}
                fontSize={["20px ", "20px", "20px", "22px", "25px", "25px"]}
                fontWeight="700"
                lineHeight="130%"
                borderRadius="70px"
                position="relative"
                transition="all 0.5s ease-in-out"
                backgroundColor="#382274"
                _hover={{
                  backgroundColor: "#FFF",
                  color: "#8571BC",
                }}
              >
                Get Ghostify for Free
              </ChakraLink> */}
            </Box>
            <Box
              paddingTop={["70px", "70px", "70px", "100px", "120px", "120px"]}
              fontFamily={"'IBM Plex Mono', monospace"}
            >
              <Heading
                as={"h5"}
                color={"#DBD7E3"}
                fontSize={["22px", "22px", "22px", "22px", "25px", "25px"]}
                fontWeight={"500"}
                fontFamily="IBM Plex Mono"
                lineHeight={"130%"}
                paddingBottom={["40px", "40px", "40px", "40px", "83px", "83px"]}
                textAlign={"center"}
              >
                Frequently Asked Questions
              </Heading>
              <Accordion
                allowMultiple
                maxW={"800px"}
                margin={"0px auto"}
                fontFamily={"IBM Plex Mono"}
                display={"flex"}
                flexDirection={"column"}
                gap={["30px", "30px", "30px", "30px", "40px", "40px"]}
              >
                <AccordionItem
                  display={"flex"}
                  flexDirection={"column"}
                  borderTop={"0px"}
                  padding={[
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 18px 40px",
                    "0px 18px 40px",
                  ]}
                  borderBottom={"4px solid #1C1A22 !important"}
                >
                  <Heading as={"h6"}>
                    <AccordionButton
                      color={"#E1E1E1"}
                      fontFamily={"IBM Plex Mono"}
                      fontSize={[
                        "18px",
                        "18px",
                        "18px",
                        "18px",
                        "20px",
                        "20px",
                      ]}
                      fontWeight={"500"}
                      lineHeight={"130%"}
                      padding={"0px"}
                      border={"none"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        _hover={{ color: "white" }}
                        textAlign="left"
                        fontFamily={"IBM Plex Mono"}
                        display={"inline-block"}
                      >
                        What sets Ghostify apart from other playlist generators?{" "}
                      </Box>
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel
                    padding={"0px"}
                    paddingTop={[
                      "20px !important",
                      "20px",
                      "20px",
                      "40px",
                      "75px",
                      "75px",
                    ]}
                    color={"#E1E1E1"}
                    fontFamily={"IBM Plex Mono"}
                    fontSize={["16px", "16px", "16px", "16px", "19px", "19px"]}
                    fontWeight={"400"}
                    lineHeight={"130%"}
                  >
                    Absolutely! Share your unique playlists on Spotify, Apple
                    Music, or directly through Ghostify
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  display={"flex"}
                  flexDirection={"column"}
                  borderTop={"0px"}
                  padding={[
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 18px 40px",
                    "0px 18px 40px",
                  ]}
                  borderBottom={"4px solid #1C1A22 !important"}
                >
                  <Heading as={"h6"}>
                    <AccordionButton
                      color={"#E1E1E1"}
                      fontFamily={"IBM Plex Mono"}
                      fontSize={[
                        "18px",
                        "18px",
                        "18px",
                        "18px",
                        "20px",
                        "20px",
                      ]}
                      fontWeight={"500"}
                      lineHeight={"130%"}
                      padding={"0px"}
                      border={"none"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        _hover={{ color: "white" }}
                        display={"inline-block"}
                      >
                        Can I share my AI-generated playlists with friend?
                      </Box>
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel
                    padding={"0px"}
                    paddingTop={[
                      "20px !important",
                      "20px",
                      "20px",
                      "40px",
                      "75px",
                      "75px",
                    ]}
                    color={"#E1E1E1"}
                    fontFamily={"IBM Plex Mono"}
                    fontSize={["16px", "16px", "16px", "16px", "19px", "19px"]}
                    fontWeight={"400"}
                    lineHeight={"130%"}
                  >
                    Absolutely! Share your unique playlists on Spotify, Apple
                    Music, or directly through Ghostify
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  display={"flex"}
                  flexDirection={"column"}
                  borderTop={"0px"}
                  padding={[
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 15px 30px",
                    "0px 18px 40px",
                    "0px 18px 40px",
                  ]}
                  borderBottom={"4px solid #1C1A22 !important"}
                  borderBottomWidth={"4px"}
                >
                  <Heading as={"h6"}>
                    <AccordionButton
                      color={"#E1E1E1"}
                      fontFamily={"IBM Plex Mono"}
                      fontSize={[
                        "18px",
                        "18px",
                        "18px",
                        "18px",
                        "20px",
                        "20px",
                      ]}
                      fontWeight={"500"}
                      lineHeight={"130%"}
                      padding={"0px"}
                      border={"none"}
                      _hover={{ backgroundColor: "transparent" }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        _hover={{ color: "white" }}
                        display={"inline-block"}
                      >
                        Will I be able to choose specific artists for the AI
                        songs in the future?
                      </Box>
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel
                    padding={"0px"}
                    paddingTop={[
                      "20px !important",
                      "20px",
                      "20px",
                      "40px",
                      "75px",
                      "75px",
                    ]}
                    color={"#E1E1E1"}
                    fontFamily={"IBM Plex Mono"}
                    fontSize={["16px", "16px", "16px", "16px", "19px", "19px"]}
                    fontWeight={"400"}
                    lineHeight={"130%"}
                  >
                    Absolutely! Share your unique playlists on Spotify, Apple
                    Music, or directly through Ghostify
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Container>
        </Box>

        {/* footer */}
        <Box
          padding={"40px 0px"}
          position={"relative"}
          zIndex={"1"}
          _before={{
            content: "''",
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "100%",
            height: "240%",
            backgroundImage: "url('/assets/image/footer-gradient.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            zIndex: "-1",
          }}
        >
          <Box>
            <Box
              padding={"60px 0px 40px"}
              borderTop={"4px solid #17151A"}
              borderBottom={"4px solid #17151A"}
            >
              <Container
                maxW={{
                  base: "100%",
                  sm: "440px",
                  md: "720px",
                  lg: "950px",
                  xl: "1150px",
                  "2xl": "1500px",
                }}
                padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
              >
                <Flex
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                  rowGap={"40px"}
                >
                  <Box width={["100%", "48%", "auto", "auto", "auto", "auto"]}>
                    <Heading
                      as={"h6"}
                      color={"#E1E1E1"}
                      fontFamily={"IBM Plex Mono"}
                      fontSize={"17px"}
                      fontWeight={"600"}
                      lineHeight={"130%"}
                    >
                      Ghostify
                    </Heading>
                    <Box
                      paddingTop={"28px"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                    >
                      <ChakraLink
                        padding={"10px 0px"}
                        color={"#909091"}
                        fontFamily={"IBM Plex Mono"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                        lineHeight={"130%"}
                        _hover={{
                          color: "#FFF",
                        }}
                        href="#"
                      >
                        Home
                      </ChakraLink>
                    </Box>
                  </Box>
                  <Box width={["100%", "48%", "auto", "auto", "auto", "auto"]}>
                    <Heading
                      as={"h6"}
                      color={"#E1E1E1"}
                      fontFamily={"IBM Plex Mono"}
                      fontSize={"17px"}
                      fontWeight={"600"}
                      lineHeight={"130%"}
                    >
                      Support
                    </Heading>
                    <Box
                      paddingTop={"28px"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                    >
                      <ChakraLink
                        padding={"10px 0px"}
                        color={"#909091"}
                        fontFamily={"IBM Plex Mono"}
                        fontWeight={"500"}
                        fontSize={"17px"}
                        lineHeight={"130%"}
                        _hover={{
                          color: "#FFF",
                        }}
                        href="#"
                      >
                        Contact Us
                      </ChakraLink>
                      <ChakraLink
                        padding={"10px 0px"}
                        color={"#909091"}
                        fontFamily={"IBM Plex Mono"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                        lineHeight={"130%"}
                        _hover={{
                          color: "#FFF",
                        }}
                        href="#"
                      >
                        FAQ
                      </ChakraLink>
                    </Box>
                  </Box>
                  <Box width={["100%", "48%", "auto", "auto", "auto", "auto"]}>
                    <Heading
                      as={"h6"}
                      color={"#E1E1E1"}
                      fontFamily={"IBM Plex Mono"}
                      fontSize={"17px"}
                      fontWeight={"600"}
                      lineHeight={"130%"}
                    >
                      Legal
                    </Heading>
                    <Box
                      paddingTop={"28px"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                    >
                      <ChakraLink
                        padding={"10px 0px"}
                        color={"#909091"}
                        fontFamily={"IBM Plex Mono"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                        lineHeight={"130%"}
                        _hover={{
                          color: "#FFF",
                        }}
                        href="#"
                      >
                        Privacy Policy
                      </ChakraLink>
                      <ChakraLink
                        padding={"10px 0px"}
                        color={"#909091"}
                        fontFamily={"IBM Plex Mono"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                        lineHeight={"130%"}
                        _hover={{
                          color: "#FFF",
                        }}
                        href="#"
                      >
                        Terms of Service
                      </ChakraLink>
                    </Box>
                  </Box>
                  <Box width={["100%", "48%", "auto", "auto", "auto", "auto"]}>
                    <Heading
                      as={"h6"}
                      color={"#E1E1E1"}
                      fontFamily={"IBM Plex Mono"}
                      fontSize={"17px"}
                      fontWeight={"600"}
                      lineHeight={"130%"}
                    >
                      Install App
                    </Heading>
                    <Box
                      paddingTop={"28px"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                    >
                      <ChakraLink href="#">
                        <Image
                          w={"150px"}
                          src="/assets/image/appstore (1).svg"
                          alt=""
                        />
                      </ChakraLink>
                      <ChakraLink href="#">
                        <Image
                          w={"150px"}
                          src="/assets/image/googleplay (1).svg"
                          alt=""
                        />
                      </ChakraLink>
                    </Box>
                  </Box>
                </Flex>
              </Container>
            </Box>
            <Box padding={"35px 0px"}>
              <Container
                display="flex"
                maxW={{
                  base: "100%",
                  sm: "440px",
                  md: "720px",
                  lg: "950px",
                  xl: "1150px",
                  "2xl": "1500px",
                }}
                gap={[1]}
                padding={["0px 15px", "0px", "0px", "0px", "0px", "0px"]}
              >
                <Text
                  color={"#E1E1E1"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={"15px"}
                  fontWeight={"500"}
                  lineHeight={"130%"}
                >
                  @ {currentYear}
                </Text>
                <ChakraLink
                  color={"#E1E1E1"}
                  fontFamily={"IBM Plex Mono"}
                  fontSize={"15px"}
                  fontWeight={"500"}
                  _hover={{
                    color: "#fff",
                  }}
                  lineHeight={"130%"}
                  href="#"
                >
                  not a business LLC
                </ChakraLink>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
