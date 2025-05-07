import { Container, Typography, Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

export default function HomePage() {
  return (
    <Container maxWidth="xs" sx={{ py: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome to ShareNest
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Share what you love with your community.
        </Typography>
      </Box>
      <LoginForm />
    </Container>
  );
}
