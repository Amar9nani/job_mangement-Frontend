// src/components/layout/Layout.tsx
import { Box } from '@mantine/core';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  onCreateJob: () => void;
}

export function Layout({ children, onCreateJob }: LayoutProps) {
  return (
    <Box>
      <Navbar onCreateClick={onCreateJob} />
      <Box 
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#FAFAFA',
          paddingTop: '0px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}