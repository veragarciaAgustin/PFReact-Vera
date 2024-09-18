import {
  Box,
  Flex,
  Avatar,
  //Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  //useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks";


export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [contador, setContador] = useState(0);
  const { category } = useCategory();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-evenly"}>
          <Link style={{ fontWeight: "bold", fontSize: "2vw", marginRight: "2vw" }}to="/">ShopShop</Link>
          {/* Agregando routing a otras paginas */}
          <Link to="/" style={{ fontWeight: "bold", fontSize: "2vw" }}>Home</Link>

          <Menu>
            <MenuButton as={Link} cursor="pointer" style={{ marginLeft: 30 }}>
              Categorias
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"}>
              {category.map((category) => (
                <MenuItem key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        
        
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
