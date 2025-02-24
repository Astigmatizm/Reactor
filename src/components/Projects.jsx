import { motion } from "framer-motion";
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";

const projects = [
  { title: "Проект 1", link: "https://yourproject1.vercel.app" },
  { title: "Проект 2", link: "https://yourproject2.vercel.app" },
  { title: "Проект 3", link: "https://yourproject3.vercel.app" },
  { title: "Проект 4", link: "https://yourproject3.vercel.app" },
  { title: "Проект 5", link: "https://yourproject3.vercel.app" },
  { title: "Проект 6", link: "https://yourproject3.vercel.app" },
];

const NeonCard = styled(Card)({
  backgroundColor: "#1e1e1e",
  border: "1px solid rgba(156, 43, 43, 0.8)",
  boxShadow: "0px 0px 10px rgba(156, 43, 43, 0.8)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 0px 20px rgba(156, 43, 43, 1)",
  },
});

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#121212",
        }}
      >
        <Box id="projects" sx={{ minHeight: "1vh", padding: "50px", textAlign: "center", backgroundColor: "#121212" }}>
        <Typography variant="h2" color="#ffffff" fontWeight='6w00' gutterBottom>
          Мои проекты
        </Typography>
      </Box>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <CardActionArea component="a" href={project.link} target="_blank" rel="noopener noreferrer">
                  <NeonCard>
                    <CardContent>
                      <Typography variant="h5" color="white">
                        {project.title}
                      </Typography>
                    </CardContent>
                  </NeonCard>
                </CardActionArea>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Projects;
