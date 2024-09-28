import {
  Box,
  Image,
  ButtonGroup,
  CardFooter,
  Divider,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      {products.map((product) => (
        <Card key={product.id} maxW="sm" margin={"2rem"}>
          <CardBody>
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
              width="100%"
              height="auto"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md" fontWeight="bold">{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text color="grey.600" fontSize="2xl">
                ${product.price} USD
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={`/item/${product.id}`} style={{ textDecoration: "none", fontWeight: "bold", fontSize: "1vw", borderRadius: "5px", border: "5px solid #4A5899", padding: "5px" }}>
                {" "}
                Ir a detalle del producto{" "}
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
