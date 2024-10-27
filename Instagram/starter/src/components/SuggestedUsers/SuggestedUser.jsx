import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({ username, avatar, followers }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} mt={4}>
        {/* {--------------Avatar----------------} */}
        <Box mb={2}>
          <Flex justifyContent={"space-between"}>
            <Box mr={2}>
              <Avatar src={avatar} size={"md"} />
            </Box>
            <Box>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                {username}
              </Text>
              <Text fontSize={14} color={"gray.500"}>
                {followers} followers
              </Text>
            </Box>
          </Flex>

          {/* {-------------Follow----------} */}
        </Box>
        <Box cursor={"pointer"}>
          <Link
            color={"blue.500"}
            _hover={{ color: "white" }}
            fontSize={14}
            onClick={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default SuggestedUser;
