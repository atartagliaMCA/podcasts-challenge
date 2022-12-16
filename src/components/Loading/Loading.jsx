import { CircularProgress } from "@mui/material";
import "./Loading.scss";

export function Loading() {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}
