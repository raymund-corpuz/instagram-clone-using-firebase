import { Box, Container, Flex, Img, VStack } from "@chakra-ui/react";
import { base } from "framer-motion/client";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        {/* {left hand-side} */}
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Img src="/auth.png" h={650} alt="Phone img" />
          </Box>
          {/* { right hand-side} */}

          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}> Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Img src="/playstore.png" h={10} alt={"Playstore Logo"} />
              <Img src="/microsoft.png" h={10} alt={"Playstore Logo"} />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
