import { DataTable } from "@/components/DataTable";
import { Recent } from "@/components/Recent";
import { Summary } from "@/components/Summary";
import { Box, Card, CardBody, Flex } from "@chakra-ui/react";

export default async function Home() {
  const COLUMNS = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "website",
      header: "Website",
    },
  ];

  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return (
    <Box>
      <Flex>
        <Summary currentUsersCount={users.length} oldUsersCount={2} />
      </Flex>
      <Flex gap="8">
        <Box flex="1" overflowX="auto">
          <DataTable columns={COLUMNS} data={users} />
        </Box>
        <Box width="30%" maxW="300px" flexShrink="0">
          <Recent />
        </Box>
      </Flex>
    </Box>
  );
}
