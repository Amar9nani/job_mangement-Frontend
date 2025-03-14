import { useState, useEffect } from 'react';
import { SimpleGrid, Loader, Alert, Center } from '@mantine/core';
import { JobCard } from './JobCard';

interface Job {
  id: number;
  company_name: string;
  job_title: string;
  job_type: string;
  salary_range: string;
  job_desc: string;
  application_deadline: string; // Assuming this is a valid date string
  location: string;
}

export function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://cybermindwork.onrender.com/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();

        // Sort jobs by application_deadline (newest to oldest)
        const sortedJobs = data.sort((a: Job, b: Job) =>
          new Date(b.application_deadline).getTime() - new Date(a.application_deadline).getTime()
        );

        setJobs(sortedJobs); // Set sorted jobs in the state
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader size="xl" />
      </Center>
    );
  }

  if (error) {
    return <Alert color="red">{error}</Alert>;
  }

  return (
    <SimpleGrid cols={4} spacing={16} verticalSpacing={12}>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          company={job.company_name}
          // logo={`/${job.company_name.toLowerCase()}.png`} // Assuming logos are stored based on company name
          title={job.job_title}
          experience="1-3 yr Exp" // Mock experience (replace with real data if available)
          locationType={job.job_type}
          salary={job.salary_range}
          description={job.job_desc}
          postedTime="24h Ago" // Mock time (replace with real data if available)
        />
      ))}
    </SimpleGrid>
  );
}
