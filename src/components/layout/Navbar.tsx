import { Box, Group, Button, Image,createTheme } from '@mantine/core';

interface NavbarProps {
  onCreateClick: () => void;
}
const theme = createTheme({
    breakpoints: {
      xs: '30em',
      sm: '48em',
      md: '64em',
      lg: '74em',
      xl: '90em',
    },
  });
export function Navbar({ onCreateClick }: NavbarProps) {
    

  return (
    <Box 
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        margin: '0 auto',
      }}
    >
      <Box
        style={{
          width: 'auto',
          maxWidth: '1200px',
          height: '70px',
          backgroundColor: '#FFFFFF',
          borderRadius: '40px',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Group justify="space-between" w="100%" gap={0}>
          <Group gap={20}>
            <Image
              src="/download.jpg"
              w={35}
              h={35}
              style={{
                borderRadius: '50%',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              alt="Logo"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <Group gap={16} className="navbar-buttons">
              {['Home', 'Find Jobs', 'Find Talents', 'About us', 'Testimonials'].map((item) => (
                <Button
                  key={item}
                  variant="subtle"
                  color="dark"
                  styles={{
                    root: {
                      padding: '0',
                      height: 'auto',
                      transition: 'color 0.2s, transform 0.2s',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#8B3DFF',
                        transform: 'translateY(-2px)', // Slight lift on hover
                      },
                    },
                    label: {
                      fontWeight: 500,
                      fontSize: '15px',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="filled"
                color="violet"
                radius="xl"
                onClick={onCreateClick}
                style={{
                  backgroundColor: '#8B3DFF',
                  padding: '8px 20px',
                  height: 'auto',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'background-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7A32FF'; // Darker shade on hover
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#8B3DFF';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Create Jobs
              </Button>
            </Group>
          </Group>
        </Group>
      </Box>
      {/* Shadow element */}
      <Box
        style={{
          position: 'absolute',
          top: '25px',
          width: '100%',
          maxWidth: '1180px',
          height: '70px',
          backgroundColor: '#F7F7F7',
          borderRadius: '40px',
          zIndex: 1,
        }}
      />
    </Box>
  );
}
