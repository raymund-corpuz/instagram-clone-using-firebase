import { Avatar, Box, Flex, Text, Button } from "@chakra-ui/react";

import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <>
      <Flex
        alignItems={"center"}
        mt={8}
        mb={4}
        justifyContent={"space-between"}
      >
        {/* { -----------------Profile ---------------} */}
        <Box display={"flex"} alignItems={"center"}>
          {authUser && (
            <>
              <Avatar
                src={authUser.profilePicURL}
                alt="Profile pic icon"
                mr={4}
              />
              <Text fontWeight={"bold"} fontSize={14}>
                {authUser.username}
              </Text>
            </>
          )}
        </Box>
        <Box>
          <Button
            size={"xs"}
            background={"transparent"}
            _hover={{ background: "transparent" }}
            alignItems={"center"}
            color={"blue.500"}
            cursor={"pointer"}
            fontSize={14}
            onClick={handleLogout}
            isLoading={isLoggingOut}
          >
            Logout
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Text color={"whiteAlpha.500"} fontSize={"sm"} fontWeight={"medium"}>
            Suggested for you
          </Text>
        </Box>
        <Box>
          <Text color={"white"} fontWeight={"bold"} fontSize={"sm"}>
            See all
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default SuggestedHeader;
