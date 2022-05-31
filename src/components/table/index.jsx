import './table.scss';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   {
//     field: 'id',
//     headerName: 'ID',
//     minWidth: 120,
//     renderCell: params => {
//       return <p className="id">{params.row.id}</p>;
//     },
//   },
//   {
//     field: 'title',
//     headerName: 'Title',
//     minWidth: 200,
//     renderCell: params => {
//       return (
//         <>
//           <img src={params.row.image} alt="" className="image" />
//           <p>{params.row.title}</p>
//         </>
//       );
//     },
//   },
//   { field: 'description', headerName: 'Description', minWidth: 450 },
//   {
//     field: 'updatedAt',
//     headerName: 'Date',
//     minWidth: 180,
//     renderCell: params => {
//       var date = new Date(params.row.updatedAt);
//       // .toLocaleString(undefined, {
//       //   timeZone: 'Asia/Kolkata',
//       // });
//       const options = {
//         weekday: 'short',
//         year: 'numeric',
//         month: 'short',
//         hour: 'numeric',
//         minute: 'numeric',
//       };
//       return (
//         <p className="date">{date.toLocaleDateString('en-us', options)}</p>
//       );
//     },
//   },
// ];

const Table = ({
  rows,
  onEdit,
  onClickDelete,
  count,
  onChangePage,
  columns,
}) => {
  const onPageChange = val => {
    onChangePage(val);
  };
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 170,
      renderCell: params => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => onEdit(params.row.id)}>
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => onClickDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="datatable">
        <DataGrid
          rows={rows}
          getRowId={r => r.id}
          density="compact"
          rowCount={count}
          disableColumnFilter={true}
          disableSelectionOnClick={true}
          disableVirtualization
          onPageChange={onPageChange}
          pagination={false}
          rowHeight={70}
          autoHeight={true}
          columns={columns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  );
};

export default Table;
