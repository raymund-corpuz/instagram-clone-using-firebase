import {
  Flex,
  AvatarGroup,
  Avatar,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";

import useAuthStore from "../../store/authStore";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;

  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      {/* {---------Header Left ----------------} */}

      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="As a Programmer"
          src={userProfile.profilePicURL}
          alt={"As a programmer logo"}
        />
      </AvatarGroup>
      {/* {-------------Header Right-----------------} */}

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile.username}
          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
              >
                Edit Profile
              </Button>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
              >
                Follow
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, md: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.posts.length}
            </Text>
            Post
          </Text>

          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>

          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text fontWeight={"bold"}>{userProfile.fullName}</Text>
          </Text>
        </Flex>
        <Text fontSize={{ base: "xs", md: "sm" }}>
          <Text>{userProfile.bio}</Text>
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
