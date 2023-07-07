import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  theme,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  chakra,
  Center,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => {
  const names: string[] = [
    "Andrew Motz",
    "Andrew Tang",
    "Isabella Carlo",
    "Sundeep Chakladar",
    "Eli Mansbach",
    "Grace Sun",
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher position="absolute" top={4} right={4} />
        <Center minH="100vh" p={3}>
          <chakra.form justifySelf="center">
            <VStack
              p={4}
              spacing={8}
              borderWidth={4}
              borderRadius="lg"
              w="50vw"
            >
              <Heading>Flycar Checkout</Heading>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Select>
                  {names.map((val, idx) => {
                    return (
                      <option key={idx} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Purpose</FormLabel>
                <Select>
                  <option value="errand">Errand</option>
                  <option value="detail">Detail</option>
                  <option value="shift">Call</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Time of Return</FormLabel>
                <Input type="time" />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </VStack>
          </chakra.form>
        </Center>
      </Box>
    </ChakraProvider>
  );
};
