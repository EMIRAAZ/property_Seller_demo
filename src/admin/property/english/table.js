export const tableHeader = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 120,
    renderCell: params => {
      return <p className="id">{params.row.id}</p>;
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    minWidth: 200,
    renderCell: params => {
      return (
        <>
          <img src={params.row.images[0]} alt="" className="image" />
          <p>{params.row.title}</p>
        </>
      );
    },
  },
  { field: 'description', headerName: 'Description', minWidth: 450 },
  { field: 'price', headerName: 'Price' },
  {
    field: 'updatedAt',
    headerName: 'Date',
    minWidth: 180,
    renderCell: params => {
      var date = new Date(params.row.updatedAt);
      // .toLocaleString(undefined, {
      //   timeZone: 'Asia/Kolkata',
      // });
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
      };
      return (
        <p className="date">{date.toLocaleDateString('en-us', options)}</p>
      );
    },
  },
];
