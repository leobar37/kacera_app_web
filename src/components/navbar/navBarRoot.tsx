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
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BiMap as _BiMap } from "react-icons/bi";
import { Badge } from "@app/components/ui";
import { useCartModal } from "@app/components/cart";
import {
  FiSearch as _FiSearch,
  FiShoppingCart as _FiShoppingCart,
} from "react-icons/fi";

const BiMap = chakra(_BiMap);
const FiSearch = chakra(_FiSearch);
const FiShoppingCart = chakra(_FiShoppingCart);

const gridNav: SystemStyleObject = {
  height: "100%",
  alignItems: "center",
  justifyItems: "center",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "1fr",
  // columnGap: "12px",
};

const Ubication = () => {
  return (
    <Center
      width="250px"
      background="#EAFCE4"
      padding="10px 12px"
      borderRadius="18px"
    >
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
  const size = useBreakpointValue({
    md: "20rem",
    lg: "30rem",
    xl: "45rem",
  });
  useEffect(() => {
    console.log(size);
  }, [size]);
  return (
    <FormControl width={size}>
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

const CartButton = () => {
  const { onToggle } = useCartModal();
  return (
    <HStack spacing={5}>
      <Badge count={8}>
        <Button onClick={onToggle} background="transparent">
          <FiShoppingCart fontSize="18px" />
        </Button>
      </Badge>
      <Button>?</Button>
    </HStack>
  );
};

const NavBar = () => {
  return (
    <Grid sx={gridNav}>
      {/* ubication */}
      <GridItem gridColumn="1 / 2">
        <Ubication />
      </GridItem>
      <GridItem gridColumn="3 / 5">
        <SearchInput />
      </GridItem>
      <GridItem gridColumn="6 / 6" width="100%">
        <CartButton />
      </GridItem>
    </Grid>
  );
};

export default NavBar;
