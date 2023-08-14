"use client";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const Summary = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      marginBottom="1.5rem"
      borderRadius="0.375rem"
      backgroundColor="white"
      padding="1.5rem"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <Heading marginBottom="1rem" fontSize="1.5rem" fontWeight="600">
        Summary
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
        <GridItem
          borderRadius="0.375rem"
          backgroundColor="#F3F4F6"
          padding="1rem"
        >
          <Heading marginBottom="0.5rem" fontSize="1.25rem" fontWeight="600">
            Total Users
          </Heading>
          <Text fontSize="2.25rem" fontWeight="700">
            10
          </Text>
        </GridItem>
        <GridItem
          borderRadius="0.375rem"
          backgroundColor="#F3F4F6"
          padding="1rem"
        >
          <Box display="flex" flexDirection="row">
            <Heading marginBottom="0.5rem" fontSize="1.25rem" fontWeight="600">
              New Users (Month)
            </Heading>
          </Box>
          <div>
            <Text fontSize="2.25rem" fontWeight="700">
              8
            </Text>
            <Text color="green" fontFamily="monospace" fontSize="1.5rem">
              +300%
            </Text>
          </div>
        </GridItem>
        <GridItem
          borderRadius="0.375rem"
          backgroundColor="#F3F4F6"
          padding="1rem"
        >
          <Heading marginBottom="0.5rem" fontSize="1.25rem" fontWeight="600">
            Revenue
          </Heading>
          <div>
            <Text fontSize="2.25rem" fontWeight="700">
              $12,345
            </Text>
            <Text color="green" fontFamily="monospace" fontSize="1.5rem">
              +78%
            </Text>
          </div>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Summary;
