import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { RemoveDialog } from "./RemoveDialog";
import { useNavigate } from "react-router";

export function BlogCard({ blog, i }) {
  const nav = useNavigate();
  return (
    <Card className="mt-6 ">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {blog.title}
        </Typography>
        <Typography>
          {blog.detail}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex gap-4 items-center justify-between">
        <div className="flex gap-5">
          {
            blog?.genres.map((gen, i) => <p key={i}>{gen}</p>)
          }
          <p>{blog.country}</p>
        </div>

        <div className="flex gap-3">

          <IconButton onClick={() => nav(`/edit-form/${blog.id}`)} size="sm" color="green">
            <i className="fas fa-edit" />
          </IconButton>
          <RemoveDialog index={i} />

        </div>

      </CardFooter>
    </Card>
  );
}