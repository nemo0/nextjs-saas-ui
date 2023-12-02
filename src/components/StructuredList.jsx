import { Avatar, Box, Tag, Text } from "@chakra-ui/react";
import {
  StructuredList,
  StructuredListCell,
  StructuredListHeader,
  StructuredListItem,
} from "@saas-ui/react";

const ACTIVE_USERS = [
  {
    name: "John Doe",
    role: "admin",
  },
  {
    name: "Jane Doe",
    role: "owner",
  },
  {
    name: "Willy Wonka",
    role: "member",
  },
];

export default function StructuredListComponent() {
  return (
    <Box width={"320px"}>
      <StructuredList>
        <StructuredListHeader>Active Users</StructuredListHeader>
        {ACTIVE_USERS.map((user, index) => (
          <StructuredListItem key={index}>
            <StructuredListCell>
              <Avatar name={user.name} size="sm" />
            </StructuredListCell>
            <StructuredListCell>
              <Text fontSize="sm" fontWeight="bold">
                {user.name}
              </Text>
            </StructuredListCell>
            <StructuredListCell>
              <Tag
                size="sm"
                variant="solid"
                colorScheme={
                  user.role === "admin"
                    ? "red"
                    : user.role === "owner"
                    ? "green"
                    : "blue"
                }
              >
                {user.role}
              </Tag>
            </StructuredListCell>
          </StructuredListItem>
        ))}
      </StructuredList>
    </Box>
  );
}
