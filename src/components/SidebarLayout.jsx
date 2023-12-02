"use client";

import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import {
  AppShell,
  Sidebar,
  SidebarSection,
  NavItem,
  PersonaAvatar,
  SidebarToggleButton,
} from "@saas-ui/react";

import {
  FiBarChart,
  FiHome,
  FiMoon,
  FiSettings,
  FiSun,
  FiUsers,
} from "react-icons/fi";

import Image from "next/image";

import Logo from "public/logoipsum-288.svg";

export function SidebarLayout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AppShell
      height="$100vh"
      fontSize="md"
      sidebar={
        <Sidebar width="25%" bg="gray.100">
          <SidebarToggleButton />
          <SidebarSection direction="row">
            <Image src={Logo} width="100" alt="Logo" />
            <Spacer />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  <PersonaAvatar presence="online" size="xs" name="John Doe" />
                }
                variant="ghost"
              />
              <MenuList>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </SidebarSection>
          <SidebarSection flex="1" overflowY="auto">
            <NavItem icon={<FiHome size="1.2em" />}>Home</NavItem>
            <NavItem icon={<FiUsers size="1.2em" />} isActive={true}>
              Users
            </NavItem>
            <NavItem icon={<FiBarChart size="1.2em" />}>Analytics</NavItem>
            <NavItem icon={<FiSettings size="1.2em" />}>Settings</NavItem>
          </SidebarSection>
          <SidebarSection alignItems="flex-start">
            <IconButton
              icon={colorMode === "dark" ? <FiMoon /> : <FiSun />}
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
            />
          </SidebarSection>
        </Sidebar>
      }
    >
      <Box as="main" overflow="auto" py="6" px="8" fontSize="md">
        {children}
      </Box>
    </AppShell>
  );
}
