'use client';

import { Box } from '@chakra-ui/react';
import { DataTable, SearchInput } from '@saas-ui/react';

export default function DatatableComponent({ columns, data }) {
  return (
    <Box overflowX='auto'>
      <Box width={'40%'} mb={3}>
        <SearchInput placeholder='Search' />
      </Box>
      <DataTable columns={columns} data={data} />
    </Box>
  );
}
