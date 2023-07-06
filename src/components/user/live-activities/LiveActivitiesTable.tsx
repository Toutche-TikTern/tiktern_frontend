import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

type Props = {};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'dateOfActivity', headerName: 'Submit Before', width: 130 },
  { field: 'activityName', headerName: 'Activity', width: 200 },
  {
    field: 'ternsEarned',
    headerName: 'Terns to Earn',
    type: 'number',
    width: 120,
  },
  {
    field: 'activityDesc',
    headerName: 'Upload Proof',
    // type: 'number',
    width: 250,
  },

];

const rows = [
  {
    id: 1,
    dateOfActivity: '24-07-23',
    activityName: 'Follow TikTern on Instagram​',
    ternsEarned: 35,
    activityDesc: 'abc',
  },
  {
    id: 2,
    dateOfActivity: '30-08-23',
    activityName: 'Follow @TikTern twitter handle',
    ternsEarned: 42,
    activityDesc: 'asdads asdasd',
  },
];

const LiveActivitiesTable = (props: Props) => {
  return (
    <div style={{ height: 400, width: '100%', color: '#fff' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default LiveActivitiesTable;
