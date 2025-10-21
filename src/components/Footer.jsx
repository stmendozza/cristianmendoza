import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        color: "white",
        py: 3,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary">
          © 2024 Cristian Mendoza. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Desarrollado con React y Material-UI
        </Typography>
      </Container>
    </Box>
  );
}
