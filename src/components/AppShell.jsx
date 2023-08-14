'use client';

import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import {
  AppShell,
  Sidebar,
  SidebarSection,
  NavItem,
  PersonaAvatar,
  SidebarToggleButton,
} from '@saas-ui/react';
import Image from 'next/image';

import Logo from 'public/logoipsum-288.svg';

export default function AppShellComponent({ children }) {
  return (
    <AppShell
      variant='static'
      sidebar={
        <Sidebar width='25%'>
          <SidebarToggleButton />
          <SidebarSection direction='row'>
            <Image height='100' src={Logo} width='100' alt='Logo' />
            <Spacer />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  <PersonaAvatar presence='online' size='xs' name='John Doe' />
                }
                variant='ghost'
              />
              <MenuList>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </SidebarSection>
          <SidebarSection flex='1' overflowY='auto' minH='100vh'>
            <NavItem>Home</NavItem>
            <NavItem isActive={true}>Users</NavItem>
            <NavItem>Analytics</NavItem>
            <NavItem>Settings</NavItem>
          </SidebarSection>
        </Sidebar>
      }
    >
      <Box as='main' flex='1' py='2' px='4'>
        {children}
      </Box>
    </AppShell>
  );
}
