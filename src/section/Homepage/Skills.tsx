import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SkillImage from "../../assets/skills/skillsmain.jpg";

function Skills() {
  const skills = [
    { name: "HTML", learn: "90%", color: "#dd4b25" },
    { name: "CSS", learn: "80%", color: "#254bdf" },
    { name: "JavaScript", learn: "85%", color: "#cfb42f" },
    { name: "React", learn: "80%", color: "#00d0f2" },
  ];
  return (
    <Grid container spacing={3} sx={{ py: 10 }} alignItems={"center"}>
      <Grid item xs={12} md={6}>
        <Stack alignItems={"start"} sx={{ width: "70%", margin: "auto" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 500 }}
            color={"primary.main"}
          >
            Disign is life
          </Typography>
          <Typography variant="body1" fontSize={44}>
            I Develop Skills Regularly to Keep Me Update
          </Typography>
          <Typography color="text.secondary" variant="subtitle1">
            {" "}
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </Typography>
          <Stack sx={{ mt: 4, width: "100%" }}>
            {skills.map((item) => {
              return (
                <Stack mt={2}>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <span
                    style={{
                      height: 10,
                      width: item.learn,
                      backgroundColor: item.color,
                      borderRadius: 10,
                    }}
                  ></span>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={SkillImage}
          alt="Skill Demo Image"
          style={{ margin: "auto" }}
        />
      </Grid>
    </Grid>
  );
}

export default Skills;
