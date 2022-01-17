import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function CreateEmployeeDialog(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const currentCompany = useSelector((state) =>
    state.companyReducer.currentCompany
      ? state.companyReducer.currentCompany
      : null
  );
  const createEmployee = () => {
    const payload = {
      companyId: currentCompany,
      name,
      email,
      password,
    };
    dispatch({ type: "CREATE_EMPLOYEE_REQUEST", payload });
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.toggle}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Create New Employee</DialogTitle>
        <form onSubmit={handleSubmit(createEmployee)}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              autoComplete="off"
              name="name"
              fullWidth
              variant="standard"
              onChange={(event) => setName(event.target.value)}
              inputRef={register({
                required: {
                  value: true,
                  message: "Name is required.",
                },
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              autoComplete="off"
              name="email"
              fullWidth
              variant="standard"
              onChange={(event) => setEmail(event.target.value)}
              inputRef={register({
                required: {
                  value: true,
                  message: "E-mail Address is required.",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Invalid Email Address",
                },
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              autoComplete="off"
              name="password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(event) => setPassword(event.target.value)}
              inputRef={register({
                required: {
                  value: true,
                  message: "Password is required.",
                },
                min: {
                  value: 6,
                  message:
                    "Password must be greater than equal to 6 characters.",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Create</Button>
            <Button onClick={props.toggle}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default CreateEmployeeDialog;
