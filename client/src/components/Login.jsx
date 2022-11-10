import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Login() {
  const toast = useToast();
  const { loggedin, setLoggedin } = useContext(AuthContext);

  const [login, setlogin] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  };
  const handleSubmit = async () => {
    await axios
      .post("https://thawing-falls-87331.herokuapp.com/auth/login", login)
      .then((res) => {
        setLoggedin(res.data);
        res.data.token === undefined
          ? toast({
              position: "top",
              title: res.data.msg,
              status: "error",
              isClosable: true,
            })
          : toast({
              position: "top",
              title: "Account created.",
              description: "Logged in Successfully",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
      });
    setlogin({ email: "", password: "" });
  };

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box mt={200} ml="16%">
        <Flex gap={20}>
          <Box>
            <Text fontSize="md" fontWeight="600">
              LOG IN
            </Text>
            <Box>
              <Text fontSize="xs" fontWeight="600" mt="10%">
                E-MAIL
              </Text>
              <Input
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                onChange={handleChange}
                value={login.email}
                name="email"
                type="text"
                placeholder="enter email...."
              />
            </Box>
            <Box>
              <Text fontSize="xs" fontWeight="600" mt="10%">
                PASSWORD
              </Text>
              <Input
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                onChange={handleChange}
                value={login.password}
                name="password"
                type="password"
                placeholder="enter password...."
              />
              <Text fontSize="xs" fontWeight="600" mt="10%">
                HAVE YOU FORGOTTEN YOUR PASSWORD?
              </Text>
            </Box>
            <Box mt="15%">
              <Button
                type="submit"
                bgColor="black"
                color="white"
                onClick={() => {
                  handleSubmit();
                }}
              >
                LOG IN
              </Button>
            </Box>
          </Box>

          {loggedin.token === undefined ? (
            <Box>
              <Text fontSize="md" fontWeight="600">
                REGISTER
              </Text>

              <Box>
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE <br />
                  THIS OPTION TO ACCESS THE REGISTRATION FORM.
                </Text>
              </Box>

              <Box>
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  BY GIVING US YOUR DETAILS, PURCHASING IN
                  <br /> ZARA.COM WILL BE FASTER AND AN ENJOYABLE
                  <br /> EXPERIENCE.
                </Text>
              </Box>

              <Box>
                <Link to="/signin">
                  <Button mt="30%" bgColor="black" color="white">
                    Create Account
                  </Button>
                </Link>
              </Box>
            </Box>
          ) : (
            <Box>
              <Text>NOT YOU?</Text>
              <Text>
                PLEASE,
                <strong
                  onClick={() => setLoggedin({})}
                  style={{
                    borderBottom: "1px solid black",
                    cursor: "pointer",
                  }}
                >
                  SIGN OUT
                </strong>
                TO BEGIN BROWSING AS
              </Text>
              <Text>AN ANONYMOUS USER.</Text>
            </Box>
          )}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}

export default Login;
