import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBlog } from "../redux/blogSlice";

export function RemoveDialog({ index }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(!open);

  return (
    <>

      <IconButton onClick={handleOpen} size="sm" color="pink">
        <i className="fas fa-trash" />
      </IconButton>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure</DialogHeader>
        <DialogBody>
          You want to remove this blog
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => {
            dispatch(removeBlog(index));
            handleOpen();
          }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}