export const tableHeader = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 220,
    renderCell: params => {
      return <p className="id">{params.row.id}</p>;
    },
  },
  {
    field: 'title',
    headerName: 'Name',
    minWidth: 400,
    renderCell: params => {
      return (
        <>
          <img src={params.row.images[0]} alt="" className="image" />
          <p>{params.row.agencyName}</p>
        </>
      );
    },
  },
  {
    field: 'updatedAt',
    headerName: 'Date',
    minWidth: 280,
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
