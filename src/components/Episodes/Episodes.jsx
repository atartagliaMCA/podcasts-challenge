import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import moment from "moment";
import { NavLink, useParams } from "react-router-dom";
import { getEpisodes } from "../../services";

export function Episodes() {
  const [rows, setRows] = useState([]);
  const { podcastId } = useParams();

  const columns = [
    {
      field: "trackName",
      headerName: "Title",
      sortable: false,
      flex: 2,
      renderCell: (params) => (
        <NavLink
          to={`/podcast/${podcastId}/episode/${params.row.trackId}`}
          style={{
            textDecoration: "none",
            color: "var(--darkBlue)",
            width: "100%",
          }}
        >
          {params.row.trackName}
        </NavLink>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      sortable: false,
      align: "center",
      headerAlign: "center",
      flex: 1,
      valueGetter: (params) =>
        `${moment(params.row.releaseDate).format("DD/MM/YYYY")}`,
    },
    {
      field: "duration",
      headerName: "Duration",
      sortable: false,
      align: "center",
      headerAlign: "center",
      flex: 1,
      valueGetter: (params) =>
        `${moment.utc(params.row.trackTimeMillis).format("MM:ss")}`,
    },
  ];

  useEffect(() => {
    getEpisodes(podcastId).then((data) => {
      setRows(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        loading={rows.length === 0}
        getRowId={(item) => item.trackId}
        rows={rows}
        columns={columns}
        hideFooter
      />
    </div>
  );
}
