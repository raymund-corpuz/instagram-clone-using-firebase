import { Box, Flex, Spinner } from "@chakra-ui/react";

import SideBar from "../../components/SideBar/SideBar";

import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/firebase";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;
  return (
    <>
      <Flex flexDir={canRenderNavbar ? "column" : "row"}>
        {/* {sidebar on the left} */}
        {canRenderSidebar ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <SideBar />
          </Box>
        ) : null}

        {canRenderNavbar ? <Navbar /> : null}
        {/* {the page  content on the right} */}

        <Box flex={1} mx={"auto"}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size={"xl"} />
    </Flex>
  );
};
