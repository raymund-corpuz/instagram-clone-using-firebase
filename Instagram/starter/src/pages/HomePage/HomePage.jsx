import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPost/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        {/* {--------------------Feed Post ---------------------------} */}
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>

        {/* {----------------------Suggested Post --------------------} */}
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", md: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
