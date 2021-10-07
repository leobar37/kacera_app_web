import type { NextPage } from "next";
import { useTheme } from "@chakra-ui/react";
const Home: NextPage = () => {
  const theme = useTheme();
  console.log(theme);

  return <div>hello</div>;
};

export default Home;
