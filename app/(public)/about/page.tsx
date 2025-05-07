import { Container, Typography } from "@mui/material";

export const dynamic = "force-static"; // Optional: explicitly marks for SSG
export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        About ShareNest
      </Typography>
      <Typography variant="body1">
        ShareNest is a simple, community-driven platform for managing shared
        resources like toys, tools, books, and more.
      </Typography>
      <Typography variant="body1">
        Designed for parent-led groups, schools, and local communities, it helps
        coordinate borrowing, returns, and organisation of shared items with
        ease.
      </Typography>
      <Typography variant="body1">
        Whether you're running a preschool toy library or a neighbourhood tool
        shed, ShareNest supports your mission to reduce waste and build stronger
        communities.
      </Typography>
    </Container>
  );
}
