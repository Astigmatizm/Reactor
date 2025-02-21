import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const NeonHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#00e5ff",
          textShadow: "0px 0px 10px #00e5ff, 0px 0px 20px #00e5ff",
        }}
      >
      </Typography>
    </motion.div>
  );
};

export default NeonHeader;
