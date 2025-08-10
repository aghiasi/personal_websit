import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
export default function Loginbtn({
  show,
  error,
}: {
  show: boolean;
  error: string;
}) {
  return (
    <>
      {error && (
        <Alert severity="error" className=" ">
          {error}
        </Alert>
      )}
      <Button type="submit" variant="contained" className="w-full">
        {show ? <CircularProgress color="inherit" /> : "Login"}
      </Button>
    </>
  );
}
