import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import Footer from "./Footer";
import axios from "axios";
import { Helmet } from "react-helmet";

function Kids() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://thawing-falls-87331.herokuapp.com/kids").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Box>
      <Helmet>
        <title>ZARA kids</title>
        <meta
          name="description"
          content="Latest trends in clothing for kids at zara"
        />
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <Flex wrap="wrap">
          {data.map((el, i) => {
            return <Singledata key={i} el={el} {...el} />;
          })}
        </Flex>
      )}
    
      <Footer />
    </Box>
  );
}

export default Kids;
