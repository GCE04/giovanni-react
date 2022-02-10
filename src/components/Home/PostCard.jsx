import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function PostCard({ post }) {
  return (
    <div key={post.id}>
      <Link
        to={{ pathname: post.name }}
        state={{ content: post.content, post: post }}
        style={{ textDecoration: "none" }}
      >
        <Box textAlign="center" padding="8px">
          <Button variant="contained"> {post.name} </Button>
        </Box>
      </Link>
    </div>
  );
}
