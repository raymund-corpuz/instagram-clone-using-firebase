import { VStack, Box, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          {/* --------------------------- INSTAGRAM-LOGO------------------------ */}
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />

          {isLogIn ? <Login /> : <Signup />}

          {/* ------------------------OR--------------------------------- */}
          <Flex
            align={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={1} h={"1px"} bg={"gray.400"} />
            OR
            <Box flex={1} h={"1px"} bg={"gray.400"} />
          </Flex>
          <GoogleAuth prefix={isLogIn ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogIn ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogIn(!isLogIn)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogIn ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
