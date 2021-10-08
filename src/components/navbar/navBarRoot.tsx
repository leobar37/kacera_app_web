import {
  Button,
  Center,
  chakra,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SystemStyleObject,
  Text,
} from "@chakra-ui/react";
import { BiMap as _BiMap } from "react-icons/bi";
import {
  FiSearch as _FiSearch,
  FiShoppingCart as _FiShoppingCart,
} from "react-icons/fi";

const gridNav: SystemStyleObject = {
  height: "100%",
  alignItems: "center",
  justifyItems: "center",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "1fr",
  columnGap: "12px",
};

const BiMap = chakra(_BiMap);
const FiSearch = chakra(_FiSearch);
const FiShoppingCart = chakra(_FiShoppingCart);
const Ubication = () => {
  return (
    <Center background="#EAFCE4" padding="10px 12px" borderRadius="18px">
      <HStack>
        <BiMap color="primary" fontSize="1.4rem" />
        <Text color="primary" fontSize="md" fontWeight="bold">
          Yoque Yupanqui 257
        </Text>
      </HStack>
    </Center>
  );
};

const SearchInput = () => {
  return (
    <FormControl width="650px">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<FiSearch></FiSearch>}
        />
        <Input
          background="gray.100"
          fontWeight="bold"
          placeholder="¿Qué quieres comer hoy?"
        />
      </InputGroup>
    </FormControl>
  );
};

const NavBar = () => {
  return (
    <Grid sx={gridNav}>
      {/* ubication */}
      <GridItem gridColumn="1 / 2">
        <Ubication />
      </GridItem>
      <GridItem gridColumn="2 / 5">
        <SearchInput />
      </GridItem>
      <GridItem>
        <HStack>
          <Button background="transparent">
            <FiShoppingCart fontSize="18px" />
          </Button>
          <Button>?</Button>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
