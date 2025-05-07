import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const dynamic = "force-static"; // Optional: explicitly marks for SSG
export default function HowItWorksPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        How It Works
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="1. Create Your Nest"
            secondary="Set up your organisation (a 'Nest') and invite admin users."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Add Items"
            secondary="Upload items to share — add photos, descriptions, categories, and status."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3. Manage Borrowing"
            secondary="Users reserve items, and admins approve, lend, or mark returns."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="4. Track & Notify"
            secondary="Admins monitor reservations, overdue items, and borrowing activity."
          />
        </ListItem>
      </List>
    </Container>
  );
}
