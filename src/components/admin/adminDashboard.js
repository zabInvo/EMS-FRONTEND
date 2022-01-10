import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function AdminDashboard() {
  const router = useNavigate();
  const dispatch = useDispatch();
  const setCurrentCompany = () => {
    const currentCompanyId = 18;
    dispatch({ type: "SET_CURRENT_COMPANIES_REQUEST", currentCompanyId });
  }
  useEffect(() => {
    setCurrentCompany();
  }, [])
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ maxWidth: 275, m: 2 }}>
            <Card elevation={5}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Companies
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Active
                </Typography>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: blue["A400"],
                  }}
                >
                  3
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => router("/admin/company")}>
                  More Details
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ maxWidth: 275, m: 2 }}>
            <Card elevation={5}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Employees
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Active
                </Typography>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: blue["A400"],
                  }}
                >
                  5
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => router("/admin/employees")}>
                  More Details
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ maxWidth: 275, m: 2 }}>
            <Card elevation={5}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Admins
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Active
                </Typography>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: blue["A400"],
                  }}
                >
                  2
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">More Details</Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminDashboard;
