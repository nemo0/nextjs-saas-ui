import AppShellComponent from '@/components/AppShell';
import DatatableComponent from '@/components/Datatable';
import StepFormComponent from '@/components/StepForm';
import StructuredListComponent from '@/components/StructuredList';

export default async function Home() {
  const COLUMNS = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'username',
      header: 'Username',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
    },
    {
      accessorKey: 'website',
      header: 'Website',
    },
  ];

  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );

  return (
    <AppShellComponent>
      <div
        style={{
          display: 'flex',
          marginTop: '2rem',
        }}
      >
        <div
          style={{
            border: '1px solid #ccc',
            width: '60%',
            padding: '1rem',
            borderRadius: '0.5rem',
          }}
        >
          <DatatableComponent columns={COLUMNS} data={users} />
        </div>
        <div
          style={{
            marginLeft: '2rem',
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            padding: '1rem',
            width: '40%',
          }}
        >
          <StructuredListComponent />
          <StepFormComponent />
        </div>
      </div>
    </AppShellComponent>
  );
}
