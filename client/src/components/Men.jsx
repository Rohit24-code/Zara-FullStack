import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

function Men() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://thawing-falls-87331.herokuapp.com/men").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Box>
      <Helmet>
        <title>ZARA Mens</title>
        <meta
          name="description"
          content="Latest trends in clothing for mens at zara"
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

export default Men;
