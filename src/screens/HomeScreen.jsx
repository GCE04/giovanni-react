import { Box } from "@mui/system";
import PostCard from "../components/Home/PostCard";

const posts = [
  {
    id: 1,
    name: "Post 1",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    img: "selfie.jpg",
  },
  {
    id: 2,
    name: "Post 2",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    img: "selfie.jpg",
  },
  {
    id: 3,
    name: "Post 3",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    img: "selfie.jpg",
  },
];

export default function HomeScreen() {
  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Home Screen</h1>
      </div>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Box>
  );
}
