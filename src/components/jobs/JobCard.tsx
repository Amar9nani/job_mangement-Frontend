// import { Card, Group, Text, Button, Image, Badge, Stack, Box } from '@mantine/core';
// import { IconBriefcase, IconMapPin, IconCoin } from '@tabler/icons-react';

// interface JobCardProps {
//   company: string;
//   logo: string;
//   title: string;
//   experience: string;
//   locationType: string;
//   salary: string;
//   description: string;
//   postedTime: string;
// }

// export function JobCard({
//   company,
//   logo,
//   title,
//   experience,
//   locationType,
//   salary,
//   description,
//   postedTime
// }: JobCardProps) {
//   return (
//     <Card
//       padding="xl"
//       radius="md"
//       style={{
//         backgroundColor: 'white',
//         border: '1px solid #eee',
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%',
//       }}
//     >
//       <Group justify="space-between" mb={16}>
//         <Group gap={12} wrap="nowrap" align="center">
//           <Box
//             style={{
//               width: 40,
//               height: 45,
//               borderRadius: '50%',
//               overflow: 'hidden',
//               flexShrink: 0,
//               backgroundColor: company === 'Swiggy' ? '#FC8019' : 
//                              company === 'Tesla' ? '#ffffff' : '#000000',
//             }}
//           >
//             <Image
//               src={logo}
//               width={45}
//               height={45}
//               alt={company}
//               style={{ objectFit: 'cover' }}
//             />
//           </Box>
//           <Text size="lg" fw={600} lineClamp={1}>
//             {title}
//           </Text>
//         </Group>
//         <Badge
//           variant="light"
//           color="blue"
//           size="sm"
//           style={{
//             padding: '6px 12px',
//             backgroundColor: 'rgba(0, 163, 255, 0.1)',
//             color: '#00A3FF',
//           }}
//         >
//           {postedTime}
//         </Badge>
//       </Group>

//       <Group gap={24} mb={16}>
//         <Group gap={6} wrap="nowrap">
//           <IconBriefcase size={16} color="#666" />
//           <Text size="sm" c="dimmed">
//             {experience}
//           </Text>
//         </Group>
//         <Group gap={6} wrap="nowrap">
//           <IconMapPin size={16} color="#666" />
//           <Text size="sm" c="dimmed">
//             {locationType}
//           </Text>
//         </Group>
//         <Group gap={6} wrap="nowrap">
//           <IconCoin size={16} color="#666" />
//           <Text size="sm" c="dimmed">
//             {salary}
//           </Text>
//         </Group>
//       </Group>

//       <Stack gap={8} style={{ flex: 1 }}>
//         <Text size="sm" c="dimmed" lineClamp={2}>
//           • {description}
//         </Text>
//         <Text size="sm" c="dimmed" lineClamp={2}>
//           • Filter destinations based on interests and travel style, and create personalized
//         </Text>
//       </Stack>

//       <Button
//         fullWidth
//         radius="md"
//         style={{
//           backgroundColor: '#00A3FF',
//           height: '40px',
//           marginTop: 'auto',
//           fontSize: '14px',
//           fontWeight: 500,
//         }}
//       >
//         Apply Now
//       </Button>
//     </Card>
//   );
// }




// import { Card, Group, Text, Button, Image, Badge, Stack, Box, Avatar } from '@mantine/core';
// import { IconBriefcase, IconMapPin, IconCoin } from '@tabler/icons-react';

// interface JobCardProps {
//   company: string;
//   title: string;
//   experience: string;
//   locationType: string;
//   salary: string;
//   description: string;
//   postedTime: string;
// }

// // Function to get company initials (first letter of the company name)
// const getInitials = (name: string) => {
//   return name.charAt(0).toUpperCase(); // First letter of the company name
// };

// export function JobCard({
//   company,
//   title,
//   experience,
//   locationType,
//   salary,
//   description,
//   postedTime
// }: JobCardProps) {
//   return (
//     <Card
//       padding="xl"
//       radius="md"
//       style={{
//         backgroundColor: 'white',
//         border: '1px solid #eee',
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%',
//       }}
//     >
//       <Group justify="space-between" mb={16}>
//         <Group gap={12} wrap="nowrap" align="center">
//         <Box
//   style={{
//     width: 45, // Square box width
//     height: 45, // Square box height
//     borderRadius: '12px', // Rounded corners on all edges
//     overflow: 'hidden',
//     flexShrink: 0,
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle box shadow
//     backgroundColor:
//       company === 'Swiggy'
//         ? '#FC8019'
//         : company === 'Tesla'
//         ? '#FFFFFF'
//         : '#000000',
//     display: 'flex', // Center Avatar inside the Box
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}
// >
//   <Avatar
//     radius={0} // No radius needed as Box controls the border radius
//     size={40} // Adjust size to fit inside Box
//     color="blue"
//     alt={company}
//     styles={{
//       root: {
//         backgroundColor: 'transparent', // Let Box color show through
//         color: '#FFF', // Ensure text contrast
//         fontSize: '16px', // Font size for initials
//         fontWeight: 500, // Bold text for initials
//       },
//     }}
//   >
//     {getInitials(company)} {/* Displaying the first letter as logo */}
//   </Avatar>
// </Box>

//           {/* <Text size="lg" fw={600} lineClamp={1}>
//             {title}
//           </Text> */}
//         </Group>
//         <Badge
//           variant="light"
//           color="blue"
//           size="sm"
//           style={{
//             padding: '6px 12px',
//             backgroundColor: 'rgba(0, 163, 255, 0.1)',
//             color: '#00A3FF',
//           }}
//         >
//           {postedTime}
//         </Badge>

//       </Group>
//       <Text size="lg" fw={600} lineClamp={1}>
//             {title}
//           </Text>

//       <Group gap={24} mb={16}>
//         <Group gap={6} wrap="nowrap">
//           <IconBriefcase size={16} color="#666" />
//           <Text size="sm" c="dimmed">
//             {experience}
//           </Text>
//         </Group>
//         <Group gap={6} wrap="nowrap">
//           <IconMapPin size={16} color="#666" />
//           <Text size="sm" c="dimmed">
//             {locationType}
//           </Text>
//         </Group>
//         <Group gap={6} wrap="nowrap">
//           <IconCoin size={16} color="#666" />
//           <Text size="sm" c="dimmed">
//             {salary}
//           </Text>
//         </Group>
//       </Group>

//       <Stack gap={8} style={{ flex: 1 }}>
//         <Text size="sm" c="dimmed" lineClamp={2}>
//           • {description}
//         </Text>
//         <Text size="sm" c="dimmed" lineClamp={2}>
//         </Text>
//       </Stack>

//       <Button
//         fullWidth
//         radius="md"
//         style={{
//           backgroundColor: '#00A3FF',
//           height: '40px',
//           marginTop: 'auto',
//           fontSize: '14px',
//           fontWeight: 500,
//         }}
//       >
//         Apply Now
//       </Button>
//     </Card>
//   );
// }



import { Card, Group, Text, Button, Badge, Stack, Box, Avatar } from '@mantine/core';
import { IconBriefcase, IconMapPin, IconCoin,IconStack2  } from '@tabler/icons-react';
import { IconUserPlus } from '@tabler/icons-react';
// import { IconBuilding } from '@tabler/icons-react';

interface JobCardProps {
  company: string;
  title: string;
  experience: string;
  locationType: string;
  salary: string;
  description: string;
  postedTime: string;
}

// Function to get company initials (first letter of the company name)
const getInitials = (name: string) => {
  return name.charAt(0).toUpperCase(); // First letter of the company name
};

export function JobCard({
  company,
  title,
  experience,
  locationType,
  salary,
  description,
  postedTime,
}: JobCardProps) {
    

    function calculateLPA(salaryRange: string) {
        // Split the salary range into two numbers
        const [minSalary, maxSalary] = salaryRange.split('-').map(Number);
       console.log(salaryRange)
        // Calculate the average
        const avgSalary = (minSalary + maxSalary) / 2;
      
        // Convert to LPA and round to the nearest integer
        const avgLPA = Math.round(avgSalary / 100000);
      
        return avgLPA;
      }
      
      // Example usage
     // const salaryRange = "1000000-2000000";
      const averageLPA = calculateLPA(salary);
  return (
    <Card
      padding="xl"
      radius="md"
      style={{
        backgroundColor: 'white',
        border: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      }}
    >
      <Group justify="space-between" mb={16}>
        <Group gap={12} wrap="nowrap" align="center">
          <Box
            style={{
              width: 45,
              height: 45,
              borderRadius: '12px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor:
                company === 'Swiggy'
                  ? '#FC8019'
                  : company === 'Tesla'
                  ? '#FFFFFF'
                  : '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              radius={0}
              size={40}
              color="blue"
              alt={company}
              styles={{
                root: {
                  backgroundColor: 'transparent',
                  color: '#FFF',
                  fontSize: '16px',
                  fontWeight: 500,
                },
              }}
            >
              {getInitials(company)}
            </Avatar>
          </Box>
        </Group>
        <Badge
          variant="light"
          color="blue"
          size="sm"
          style={{
            padding: '6px 12px',
            backgroundColor: 'rgba(0, 163, 255, 0.1)',
            color: '#00A3FF',
          }}
        >
          {postedTime}
        </Badge>
      </Group>
      <Text size="lg" fw={600} lineClamp={1}>
        {title}
      </Text>
      <Group gap={18} mb={16}>
        <Group gap={6} wrap="nowrap">
          {/* <IconBriefcase size={16} color="#666" /> */}
          <IconUserPlus stroke={2} style={{height:"25px",width:"17px"}} />
          <Text size="sm" c="dimmed">
            {experience}
          </Text>
        </Group>
        <Group gap={6} wrap="nowrap">
          <IconMapPin size={16} color="#666"  stroke={2}/>
          {/* <IconBuilding stroke={2} /> */}
          <Text size="sm" c="dimmed">
            {locationType}
          </Text>
        </Group>
        <Group gap={6} wrap="nowrap">
          {/* <IconCoin size={16} color="#666" /> */}
          <IconStack2 stroke={2}  style={{height:"25px",width:"17px"}}/>
          <Text size="sm" c="dimmed">
            {`${averageLPA}LPA` }
          </Text>
        </Group>
      </Group>
      <Stack gap={8} style={{ flex: 1 }}>
        <Text size="sm" c="dimmed" lineClamp={2}>
          • {description}
        </Text>
      </Stack>
      <Button
        fullWidth
        radius="md"
        style={{
          backgroundColor: '#00A3FF',
          height: '40px',
          marginTop: '15px',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        Apply Now
      </Button>
    </Card>
  );
}


