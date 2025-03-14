import { Modal, TextInput, Select, Textarea, Stack, Group, Button } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  companyName: z.string().min(1, 'Company name is required'),
  location: z.string().min(1, 'Location is required'),
  jobType: z.string().min(1, 'Job type is required'),
  salaryMin: z.string().min(1, 'Minimum salary is required'),
  salaryMax: z.string().min(1, 'Maximum salary is required'),
  jobDescription: z.string().min(1, 'Job description is required'),
  applicationDeadline: z.date().min(new Date(), 'Deadline must be in the future'),
});

interface CreateJobModalProps {
  opened: boolean;
  onClose: () => void;
}

export function CreateJobModal({ opened, onClose }: CreateJobModalProps) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      jobTitle: '',
      companyName: '',
      location: '',
      jobType: '',
      salaryMin: '',
      salaryMax: '',
      jobDescription: '',
      applicationDeadline: new Date(),
    },
  });

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const response = await fetch('https://cybermindwork.onrender.com/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job_title: data.jobTitle,
          company_name: data.companyName,
          job_type: data.jobType,
          salary_range: `${data.salaryMin} - ${data.salaryMax}`,
          job_desc: data.jobDescription,
          application_deadline: data.applicationDeadline.toISOString(),
          location: data.location,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create job');
      }

      onClose();
      alert('Job created successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error creating job:', error);
      alert('Error creating job');
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Create Job Opening"
      size="lg"
      padding="lg"
      styles={{
        title: {
          fontSize: '24px',
          fontWeight: 600,
          textAlign: 'center', // Center the title
        },
        body: {
          paddingTop: '20px',
        },
      }}
    >
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Stack style={{ flexGrow: 1 }}>
          <Group grow>
            <TextInput
              label="Job Title"
              placeholder="Full Stack Developer"
              {...form.register('jobTitle')}
              error={form.formState.errors.jobTitle?.message}
              styles={{
                input: {
                  height: '45px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
                label: {
                  marginBottom: '4px',
                },
              }}
            />

            <TextInput
              label="Company Name"
              placeholder="Amazon, Microsoft, Swiggy"
              {...form.register('companyName')}
              error={form.formState.errors.companyName?.message}
              styles={{
                input: {
                  height: '45px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
                label: {
                  marginBottom: '4px',
                },
              }}
            />
          </Group>

          <Group grow>
            <TextInput
              label="Location"
              placeholder="Choose Preferred Location"
              {...form.register('location')}
              error={form.formState.errors.location?.message}
              styles={{
                input: {
                  height: '45px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
                label: {
                  marginBottom: '4px',
                },
              }}
            />

            <Controller
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <Select
                  label="Job Type"
                  placeholder="FullTime"
                  data={[
                    { value: 'full-time', label: 'Full Time' },
                    { value: 'part-time', label: 'Part Time' },
                    { value: 'contract', label: 'Contract' },
                    { value: 'internship', label: 'Internship' },
                  ]}
                  {...field}
                  error={form.formState.errors.jobType?.message}
                  styles={{
                    input: {
                      height: '45px',
                      '&:focus': {
                        borderColor: '#8B3DFF',
                      },
                    },
                    label: {
                      marginBottom: '4px',
                    },
                  }}
                />
              )}
            />
          </Group>

          <Group grow>
            <TextInput
              label="Salary Range"
              placeholder="₹0"
              {...form.register('salaryMin')}
              error={form.formState.errors.salaryMin?.message}
              styles={{
                input: {
                  height: '45px',
                  marginTop: '5px',
                  width: '150px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
                label: {
                  marginBottom: '4px',
                },
              }}
            />
            <TextInput
              placeholder="₹12,00,000"
              {...form.register('salaryMax')}
              error={form.formState.errors.salaryMax?.message}
              styles={{
                input: {
                  height: '45px',
                  width: '150px',
                  marginTop: '28px',
                  '&:focus': {
                    borderColor: '#8B3DFF',
                  },
                },
              }}
            />

            <Controller
              control={form.control}
              name="applicationDeadline"
              render={({ field }) => (
                <DateInput
                  label="Application Deadline"
                  placeholder="Select deadline date"
                  value={field.value || new Date()}
                  onChange={(date) => field.onChange(date)}
                  error={form.formState.errors.applicationDeadline?.message}
                  minDate={new Date()}
                  styles={{
                    input: {
                      height: '45px',
                      '&:focus': {
                        borderColor: '#8B3DFF',
                      },
                    },
                    label: {
                      marginBottom: '4px',
                    },
                  }}
                />
              )}
            />
          </Group>

          <Textarea
            label="Job Description"
            placeholder="Please share a description to let the candidate know more about the job role"
            minRows={3}
            {...form.register('jobDescription')}
            error={form.formState.errors.jobDescription?.message}
            styles={{
              input: {
                '&:focus': {
                  borderColor: '#8B3DFF',
                },
                height:"100px"
              },
              label: {
                marginBottom: '4px',
              },
            }}
          />
        </Stack>

        <Group  mt="17px" style={{ justifyContent: 'flex-end' }}>
        <Button
  variant="outline"
  styles={{
    root: {
      borderColor: '#8B3DFF',
      color: '#8B3DFF',
      marginRight: '340px', // Add margin from the right
      '&:hover': {
        backgroundColor: '#8B3DFF10',
      },
    },
  }}
>
  Save Draft
</Button>

          <Button
            type="submit"
            styles={{
              root: {
                backgroundColor: '#00A3FF',
                '&:hover': {
                  backgroundColor: '#008CFF',
                },
              },
            }}
          >
            Publish
          </Button>
        </Group>
      </form>
    </Modal>
  );
}
