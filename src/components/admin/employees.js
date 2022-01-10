import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import dummyUser from "../../dummyUser.png";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CreateEmployeeDialog from "./createEmployeeDialog";
import DeleteEmployeeDialog from "./deleteEmployeeDialog";

export default function Employees() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const dispatch = useDispatch();
  const employees = useSelector((state) =>
    state.employeesReducers.employees ? state.employeesReducers.employees : []
  );
  useEffect(() => {
    dispatch({ type: "FETCH_ALL_EMPLOYEES_REQUEST" });
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!showDeleteModal);
  };

  const setEmployee = (item) => {
    setSelectedEmployee(item);
  };

  const renderList = employees.map((item, index) => {
    return (
      <Grid item key={index} xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 260, m: 2 }} elevation={3}>
          <CardMedia
            component="img"
            alt="green iguana"
            image={dummyUser}
            sx={{ maxWidth: 350, maxHeight: 350 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.email}
            </Typography>
          </CardContent>
          <CardActions sx={{ mt: -1 }}>
            <Button
              color="error"
              size="small"
              onClick={() => {
                toggleDeleteModal();
                setEmployee(item);
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 5 }}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" onClick={toggleModal}>
            Create Employee
          </Button>
        </div>
      </Grid>
      {renderList}
      <CreateEmployeeDialog isOpen={showModal} toggle={toggleModal} />
      <DeleteEmployeeDialog
        isOpen={showDeleteModal}
        toggle={toggleDeleteModal}
        data={selectedEmployee}
      />
    </Grid>
  );
}
