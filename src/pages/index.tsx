import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Group, TextInput, Select, RangeSlider, Text, Box, Stack ,createTheme, MantineProvider } from '@mantine/core';
import { IconSearch, IconMapPin, IconUser } from '@tabler/icons-react';
import { JobList } from '../components/jobs/JobList';
import { CreateJobModal } from '@/components/jobs/createJobModal';
// import { CreateJobModal } from '../components/jobs/CreateJobModal';
const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});
export default function Home() {
  const [createJobOpened, setCreateJobOpened] = useState(false);

  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 80]); // Ensure tuple type

  const handleCreateJob = (data: any) => {
    console.log('New job data:', data);
    setCreateJobOpened(false);
  };

  return (
    <MantineProvider theme={theme}>
    <Layout onCreateJob={() => setCreateJobOpened(true)}>
      <Box>
        {/* Search filters */}
        <Box
          style={{
            maxWidth: '99%',
            margin: '0 auto',
            padding: '10px 64px 0',
          }}
        >
          <Group grow align="flex-start" gap={8}>
            <TextInput
              size="md"
              placeholder="Search By Job Title, Role"
              leftSection={<IconSearch size={20} color="#999" />}
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              styles={{
                input: {
                  height: '50px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
                section: {
                  width: '50px',
                },
              }}
            />

            <TextInput
              size="md"
              placeholder="Preferred Location"
              leftSection={<IconMapPin size={20} color="#999" />}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              styles={{
                input: {
                  height: '50px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
                section: {
                  width: '50px',
                },
              }}
            />

            <Select
              size="md"
              placeholder="Job type"
              leftSection={<IconUser size={20} color="#999" />}
              value={jobType}
              onChange={(value) => setJobType(value || '')}
              data={[
                { value: 'full-time', label: 'Full Time' },
                { value: 'part-time', label: 'Part Time' },
                { value: 'contract', label: 'Contract' },
                { value: 'internship', label: 'Internship' },
              ]}
              styles={{
                input: {
                  height: '50px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
                section: {
                  width: '50px',
                },
              }}
            />

            <Stack gap="xs">
              <Text size="sm" fw={500} c="dimmed" style={{paddingBottom:'0px'}}>
                Salary Per Month 
                <span style={{marginLeft:"140px"}}>
                   {
                  
                  `₹50k - ₹80k`
                  }
                  </span>

              </Text>
              <RangeSlider
                min={50}
                max={80}
                step={5}
                value={salaryRange}
                onChange={setSalaryRange}
                // marks={[
                //   { value: 50, label: '₹50k' },
                //   { value: 80, label: '₹80k' },
                // ]}
                label={(value) => `₹${value}k`}
                styles={{
                  thumb: {
                    borderColor: 'black',
                    backgroundColor: 'black',
                    width: '16px',
                    height: '16px',
                    // marginBottom:'5px'
                  },
                  track: {
                    height: '2px',
                    backgroundColor: 'black',
                  },
                  bar: {
                    backgroundColor: 'black',
                  },
                  mark: {
                    width: '0px',
                  },
                  markLabel: {
                    fontSize: '14px',
                    color: '#000',
                  },
                }}
              />
            </Stack>
          </Group>
        </Box>

        {/* Job listings */}
        <Box
          style={{
            width: '1360px',
            margin: '0 auto',
            marginTop: '40px',
            position: 'relative',
          }}
        >
          <JobList
          //  job_title={jobTitle}
          //   location={location}
          //   jobType={jobType}
          //   salaryRange={salaryRange}
          />
        </Box>

        {/* Create Job Modal */}
        <CreateJobModal
          opened={createJobOpened}
          onClose={() => setCreateJobOpened(false)}
         // onSubmit={handleCreateJob}
        />
      </Box>
    </Layout>
    </MantineProvider>
  );
}
