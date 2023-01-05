import './table.scss';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({
  rows,
  onEdit,
  onClickDelete,
  count,
  onChangePage,
  columns,
  addAction = true,
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
          disableColumnMenu
          disableSelectionOnClick={true}
          disableVirtualization
          onPageChange={onPageChange}
          rowHeight={70}
          autoHeight={true}
          columns={addAction ? columns.concat(actionColumn) : columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  );
};

export default Table;
