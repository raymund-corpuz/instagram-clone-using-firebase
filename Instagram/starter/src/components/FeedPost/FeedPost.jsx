import { Box, Image } from "@chakra-ui/react";

import PostHeader from "./PostHeader";
import PostFooter from "./Postfooter";

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader img={img} username={username} avatar={avatar} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt="user profile pic" />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
