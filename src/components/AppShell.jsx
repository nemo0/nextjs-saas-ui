"use client";

import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import {
  AppShell,
  Sidebar,
  SidebarSection,
  NavItem,
  PersonaAvatar,
  SidebarToggleButton,
} from "@saas-ui/react";

import Image from "next/image";

import Logo from "public/logoipsum-288.svg";

export default function AppShellComponent({ children }) {
  return (
    <AppShell
      variant="static"
      sidebar={
        <Sidebar
          width="25%"
          background="linear-gradient(to bottom, #0f0c29, #302b63, #24243e)"
        >
          <SidebarToggleButton color="white" />
          <SidebarSection direction="row">
            <Image height="100" src={Logo} width="100" alt="Logo" />
            <Spacer />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  <PersonaAvatar presence="online" size="xs" name="John Doe" color="white" />
                }
                variant="ghost"
              />
              <MenuList>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </SidebarSection>
          <SidebarSection flex="1" overflowY="auto" minH="100vh">
            <NavItem color="white">Home</NavItem>
            <NavItem
              color="white"
              _active={{ backgroundColor: "white", color: "black" }}
              isActive={true}
            >
              Users
            </NavItem>
            <NavItem color="white">Analytics</NavItem>
            <NavItem color="white">Settings</NavItem>
          </SidebarSection>
        </Sidebar>
      }
    >
      <Box as="main" flex="1" py="2" px="4">
        {children}
      </Box>
    </AppShell>
  );
}
