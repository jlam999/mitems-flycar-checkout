import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  theme,
  FormControl,
  FormLabel,
  Select,
  Input,
  useColorModeValue,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => {
  const names: string[] = [
    "Andrew Motz",
    "Andrew Tang",
    "Isabella Carlo",
    "Sundeep Chakladar",
    "Eli Mansbach",
    "Grace Sun"
  ]

  return (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Flex minH="100vh" p={3} flexDir="column" alignItems="center">
        <ColorModeSwitcher alignSelf="flex-end" />
        <form>
          <VStack p={4} spacing={8} borderWidth={4} borderRadius="lg" w="50vw">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Select>
                {names.map((val, idx) => {
                  return <option key={idx} value={val}>{val}</option>
                })}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Purpose</FormLabel>
              <Select>
                <option value="errand">Moving Stuff</option>
                <option value="detail">Detail</option>
                <option value="shift">Shift</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Time of Return</FormLabel>
              <Input type="time" />
            </FormControl>
            <Button type="submit" colorScheme="blue">Submit</Button>
          </VStack>
        </form>
      </Flex>
    </Box>
  </ChakraProvider>
)}
