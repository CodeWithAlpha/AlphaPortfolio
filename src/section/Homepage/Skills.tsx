import { Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SkillImage from "../../assets/skills/skillsmain.jpg";

function Skills() {
  const skills = [
    { name: "HTML", learn: "90%", color: "#dd4b25" },
    { name: "CSS", learn: "80%", color: "#254bdf" },
    { name: "JavaScript", learn: "85%", color: "#cfb42f" },
    { name: "React", learn: "80%", color: "#00d0f2" },
  ];
  return (
    <Grid
      container
      spacing={3}
      sx={{ py: { xs: 1, md: 10 } }}
      alignItems={"center"}
    >
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: false }}
      >
        <Stack
          alignItems={"start"}
          sx={{ width: { xs: "95%", md: "70%" }, margin: "auto" }}
          component={motion.div}
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: false }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 500 }}
            color={"primary.main"}
          >
            Coding is life
          </Typography>
          <Typography variant="body1" fontSize={{ xs: 30, md: 50 }}>
            I Develop Skills Regularly to Keep Me Update
          </Typography>
          <Typography color="text.secondary" variant="subtitle1">
            {" "}
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </Typography>
          <Stack sx={{ mt: 4, width: "100%" }}>
            {skills.map((item, index) => {
              return (
                <Stack mt={2}>
                  <Typography
                    variant="subtitle1"
                    component={motion.div}
                    initial={{
                      opacity: 0,
                      width: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      width: item.learn,
                      transition: {
                        duration: 1,
                        delay: index / 5,
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <motion.span
                      style={{
                        height: 10,
                        width: item.learn,
                        backgroundColor: item.color,
                        borderRadius: 10,
                      }}
                      initial={{
                        opacity: 0,
                        width: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        width: item.learn,
                        transition: {
                          duration: 1,
                          delay: index / 5,
                          type: "keyframes",
                        },
                      }}
                      viewport={{ once: false }}
                    ></motion.span>
                    <motion.span
                      style={{
                        border: `1px solid ${item.color}`,
                        borderRadius: 50,
                        fontSize: 12,
                        padding: "4px 2px",
                      }}
                      initial={{
                        opacity: 0,
                        x: -15,
                        rotate: 180,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        rotate: 360,
                        transition: {
                          duration: 1,
                          delay: index / 5,
                          type: "spring",
                          stiffness: 120,
                        },
                      }}
                      viewport={{ once: false }}
                    >
                      {item.learn}
                    </motion.span>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: false }}
      >
        <img
          src={SkillImage}
          alt="Skill Demo Image"
          style={{ margin: "auto", width: "70%" }}
        />
      </Grid>
    </Grid>
  );
}

export default Skills;
