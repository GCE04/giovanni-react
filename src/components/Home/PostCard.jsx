import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function PostCard({ post }) {
  return (
    <div key={post.id}>
      <Link
        to={{ pathname: "Post " + post.id }}
        state={{ content: post.body, post: post }}
        style={{ textDecoration: "none" }}
      >
        <Box textAlign="center" padding="8px">
          <Button variant="contained"> {"Post " + post.id} </Button>
        </Box>
      </Link>
    </div>
  );
}
