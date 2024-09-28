import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useItemsCollection } from "../../hooks";
// import {createProductsFirestore} from "../../helpers/index";


export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { items } = useItemsCollection('categories');
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-evenly"}>
          <Link style={{ fontWeight: "bolder", fontSize: "2vw", marginRight: "2vw" }}to="/">ShopShop</Link>

          <Menu>
            <MenuButton as={Link} cursor="pointer" style={{ marginLeft: 30, 
              fontWeight:"bolder", 
              fontSize:"1.5vw",
              borderRadius: "5px", 
              border: "5px solid #2D3748",
              backgroundColor: useColorModeValue("gray.100", "gray.900"),
              padding: "5px",
              marginRight: "2vw" }}>
              Categorias
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"}>
              {items.map((category) => (
                <MenuItem key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* <Button onClick={() => createProductsFirestore("products")}>Agregar productos a firebase</Button> */}
        
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
            <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://api.dicebear.com/9.x/pixel-art/svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://api.dicebear.com/9.x/pixel-art/svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Usuario</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Tus compras</MenuItem>
                  <MenuItem>Configuracion</MenuItem>
                  <MenuItem>Cerrar sesion</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
