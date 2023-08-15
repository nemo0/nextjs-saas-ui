import AppShellComponent from '@/components/AppShell';
import DatatableComponent from '@/components/Datatable';
import Recent from '@/components/Recent';
import StepFormComponent from '@/components/StepForm';
import StructuredListComponent from '@/components/StructuredList';
import Summary from '@/components/Summary';

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
          flexDirection: 'column',
          marginTop: '1rem',
        }}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <Summary currentUsersCount={users.length} oldUsersCount={2} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              border: '1px solid #ccc',
              width: '70%',
              padding: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            <DatatableComponent columns={COLUMNS} data={users} />
          </div>
          <div
            style={{

              borderRadius: '0.5rem',
              padding: '1rem',
              width: '30%',
            }}
          >
            {/* <StructuredListComponent />
            <StepFormComponent /> */}
            <Recent />
          </div>

        </div>


      </div>
    </AppShellComponent>
  );
}
