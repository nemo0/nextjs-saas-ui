"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { DataTable as DataTableRoot, SearchInput } from "@saas-ui/react";
import { getFilteredRowModel } from "@tanstack/react-table";

export function DataTable({ columns, data }) {
  const [globalFilter, setGlobalFilter] = React.useState("");

  return (
    <Card>
      <CardHeader>
        <SearchInput
          width="40%"
          placeholder="Search"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          onReset={() => setGlobalFilter("")}
        />
      </CardHeader>
      <CardBody overflowX="auto" px="0">
        <DataTableRoot
          columns={columns}
          data={data}
          getFilteredRowModel={getFilteredRowModel()}
          state={{ globalFilter }}
          onGlobalFilterChange={setGlobalFilter}
        />
      </CardBody>
    </Card>
  );
}
