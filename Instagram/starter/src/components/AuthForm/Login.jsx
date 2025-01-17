import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });

  const { loading, error, login } = useLogin();

  return (
    <>
      <Input
        placeholder="Email"
        size={"sm"}
        type="email"
        value={inputs.email}
        onChange={(e) => setInput({ ...inputs, email: e.target.value })}
      />

      <Input
        placeholder="Password"
        size={"sm"}
        type="password"
        value={inputs.password}
        onChange={(e) => setInput({ ...inputs, password: e.target.value })}
      />

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
