export const tableHeader = [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 200,
    renderCell: params => {
      return (
        <>
          <p>{params.row.name}</p>
        </>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 200,
    renderCell: params => {
      return (
        <>
          <p>{params.row.email}</p>
        </>
      );
    },
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    minWidth: 200,
    renderCell: params => {
      return (
        <>
          <p>{params.row.mobile}</p>
        </>
      );
    },
  },
  {
    field: 'propertyType',
    headerName: 'Property Type',
    minWidth: 200,
    renderCell: params => {
      return (
        <>
          <p>{params.row.propertyType}</p>
        </>
      );
    },
  },
  {
    field: 'location',
    headerName: 'Location',
    minWidth: 200,
    renderCell: params => {
      return (
        <>
          <p>{params.row.Location}</p>
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
