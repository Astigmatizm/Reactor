import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ minHeight: "100vh", textAlign: "center", paddingTop: "100px" }}>
      <Typography variant="h2" color="primary">Связатся со мной</Typography>
      <Typography variant="body1" color="text.primary">
        Почта: Dexter.side@bk.ru
      </Typography>
      <Typography variant="body1" color="text.primary">
        Номер: +77079247746
      </Typography>
    </Box>
  );
};

export default Contact;