import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import Footer from "./Footer";
import Filter from "./Filter";

function Women() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://thawing-falls-87331.herokuapp.com/women").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Box>
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
      <Filter />
    </Box>
  );
}
export default Women;
