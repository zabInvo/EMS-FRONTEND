import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function CreateCompanyDialog(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const createCompany = () => {
    const payload = {
      name,
      address,
      type,
    };
    dispatch({ type: "CREATE_COMPANIES_REQUEST", payload });
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.toggle}
        fullWidth
        maxWidth="sm"
      >
        <form onSubmit={handleSubmit(createCompany)}>
          <DialogTitle>Create New Company</DialogTitle>
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
              id="address"
              label="Address"
              name="address"
              autoComplete="off"
              fullWidth
              variant="standard"
              onChange={(event) => setAddress(event.target.value)}
              inputRef={register({
                required: {
                  value: true,
                  message: "Address is required.",
                },
              })}
              error={Boolean(errors.address)}
              helperText={errors.address?.message}
            />
            <TextField
              autoFocus
              margin="dense"
              id="type"
              label="Type"
              name="type"
              fullWidth
              variant="standard"
              autoComplete="off"
              onChange={(event) => setType(event.target.value)}
              inputRef={register({
                required: {
                  value: true,
                  message: "Type is required.",
                },
              })}
              error={Boolean(errors.type)}
              helperText={errors.type?.message}
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

export default CreateCompanyDialog;
