import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

const PostHeader = ({ img, username }) => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
      >
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={img} alt="user profile icon" size={"sm"} />
          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {username}
            <Box color={"gray.500"}>. 1wk</Box>
          </Flex>
        </Flex>
        <Box cursor={"pointer"}>
          <Text
            fontSize={12}
            color={"blue.500"}
            _hover={{ color: "white" }}
            transition={"0.2s ease-in-out"}
          >
            Unfollow
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default PostHeader;
