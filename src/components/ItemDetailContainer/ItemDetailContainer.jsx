import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { SkeletonItem } from "../SkeletonItem/SkeletonItem";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ItemDetailContainer = ({ product, loading }) => {
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);

  const { addItem, removeItem } = useContext(CartContext);

  const handleShowCount = () => {
    setShowCount(!showCount);
  };

  const handleIncrement = () => {
    if (count < product.stock) {
      const newCount = count + 1;
      setCount(newCount);
      addItem(product, newCount);
      toast(`Se agrego ${product.title} al carrito`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      removeItem(product);
      toast.warning(`Se quito ${product.title} del carrito`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return loading ? (
    <SkeletonItem />
  ) : (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={600}
              fontSize={"2xl"}
              marginTop={"1rem"}
            >
              {product.brand}
            </Text>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              marginTop={"1rem"}
            >
              ${product.price} USD
            </Text>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {product.availabilityStatus}
            </Text>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              marginTop={"1rem"}
            >
              <h1>Dimensions</h1>
              {product.dimensions.width} x {product.dimensions.height} x{" "}
              {product.dimensions.depth}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description}
              </Text>
            </VStack>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={handleShowCount}
          >
            Agregar al carrito
          </Button>
          {showCount && (
            <Stack direction="row" spacing={4} align="center" mt={4}>
              <ToastContainer />
              <Button onClick={handleDecrement}>-</Button>
              <Text fontSize="lg">{count}</Text>
              <Button onClick={handleIncrement}>+</Button>
            </Stack>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
