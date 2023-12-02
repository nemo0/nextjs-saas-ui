import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

export function Summary({ currentUsersCount, oldUsersCount }) {
  return (
    <Box mb="8" w="full">
      <Grid templateColumns="repeat(4, 1fr)" gap="4" width="full">
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel>Total Users</StatLabel>
              <StatNumber>{currentUsersCount}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                80%
              </StatHelpText>
            </Stat>
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel>New Users (Q3 23)</StatLabel>
              <StatNumber>{currentUsersCount - oldUsersCount}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                {((currentUsersCount - oldUsersCount) / oldUsersCount) * 100}%
              </StatHelpText>
            </Stat>
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel>Revenue</StatLabel>
              <StatNumber> $12,345</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                78%
              </StatHelpText>
            </Stat>
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel>Churn</StatLabel>
              <StatNumber>0</StatNumber>
              <StatHelpText>
                <StatArrow type="" />
                0%
              </StatHelpText>
            </Stat>
          </CardBody>
        </GridItem>
      </Grid>
    </Box>
  );
}
