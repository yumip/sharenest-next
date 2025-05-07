import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Metric({
  value,
  href,
}: {
  value: number;
  href: string;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      sx={{
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          backgroundColor: "action.hover",
          mb: 4,
        },
      }}
      disabled={!value || value === 0}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="body1">{value}</Typography>
        </Box>
        {!(!value || value === 0) && <ArrowForwardIcon color="action" />}
      </Box>
    </Button>
  );
}
