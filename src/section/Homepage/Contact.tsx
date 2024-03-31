import { Grid, Stack, Typography, Button, Modal } from "@mui/material";
import React, { useEffect } from "react";
import bg1 from "../../assets/contact/left.png";
import bg2 from "../../assets/contact/right.png";
import LocationIcon from "../../assets/contact/LocationIcon";
import EmailIcon from "../../assets/contact/EmailIcon";
import ContactIcon from "../../assets/contact/ContactIcon";
import CustomInput from "../../components/hook-form/CustomInput";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Contact() {
  return (
    <Stack
      sx={{
        position: "relative",
        height: "fit-content",
        backgroundImage: `url('${bg1}'), url('${bg2}')`,
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "10%",
      }}
    >
      <Stack
        alignItems={"center"}
        sx={{ width: { xs: "95%", md: 800 }, margin: "auto" }}
        component={motion.div}
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.25,
            type: "spring",
            stiffness: 120,
          },
        }}
        viewport={{ once: false }}
      >
        <Typography variant={"body1"} fontSize={24} color={"primary"}>
          Contact Me
        </Typography>
        <Typography variant={"body1"} fontSize={26}>
          I Want To Hear From You
        </Typography>
        <Typography
          variant={"subtitle2"}
          sx={{ fontSize: 16 }}
          color={"text.secondary"}
          textAlign={"center"}
        >
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </Typography>
      </Stack>
      <Grid
        container
        spacing={3}
        sx={{ p: { xs: 2, md: 10 }, justifyContent: "space-around" }}
      >
        <Grid item xs={12} md={6}>
          <Stack
            mb={5}
            flexDirection={"row"}
            gap={{ xs: 2, md: 7 }}
            alignItems={"center"}
          >
            <motion.span
              style={{
                backgroundColor: "#fedfd7",
                padding: 30,
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              initial={{
                x: -50,
              }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120,
                },
              }}
              viewport={{ once: false }}
            >
              <LocationIcon color={"#f75023"} fontSize={40} />
            </motion.span>
            <Stack
              component={motion.div}
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120,
                },
              }}
              viewport={{ once: false }}
            >
              <Typography variant={"body2"} fontSize={26}>
                Address
              </Typography>
              <Typography variant={"subtitle1"}>
                Sector 52 Noida, India
              </Typography>
            </Stack>
          </Stack>
          <Stack
            mb={5}
            flexDirection={"row"}
            gap={{ xs: 2, md: 7 }}
            alignItems={"center"}
          >
            <motion.span
              style={{
                backgroundColor: "#ddf5e6",
                padding: 30,
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              initial={{
                x: -50,
              }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.25,
                  type: "spring",
                  stiffness: 120,
                },
              }}
              viewport={{ once: false }}
            >
              <EmailIcon color={"#1dbe59"} fontSize={40} />
            </motion.span>
            <Stack
              component={motion.div}
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 0.25,
                  type: "spring",
                  stiffness: 120,
                },
              }}
              viewport={{ once: false }}
            >
              <Typography variant={"body2"} fontSize={26}>
                Email
              </Typography>
              <Typography variant={"subtitle1"}>Srd7505@gmail.com</Typography>
            </Stack>
          </Stack>
          <Stack
            mb={5}
            flexDirection={"row"}
            gap={{ xs: 2, md: 7 }}
            alignItems={"center"}
          >
            <motion.span
              style={{
                backgroundColor: "#ebe8fd",
                padding: 30,
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              initial={{
                x: -50,
              }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120,
                },
              }}
              viewport={{ once: false }}
            >
              <ContactIcon color={"#8068f0"} fontSize={40} />
            </motion.span>
            <Stack
              component={motion.div}
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 120,
                },
              }}
              viewport={{ once: false }}
            >
              <Typography variant={"body2"} fontSize={26}>
                Phone
              </Typography>
              <Typography variant={"subtitle1"}>+91 7505660766</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.25,
              type: "spring",
              stiffness: 120,
            },
          }}
          viewport={{ once: false }}
        >
          <From />
        </Grid>
      </Grid>
    </Stack>
  );
}

type formProps = {
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const From = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [submitMsg, setSubmitMsg] = React.useState("");

  const defaultValues = {
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const txnSchema = Yup.object().shape({
    fullname: Yup.string().required("Full Name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const methods = useForm<formProps>({
    resolver: yupResolver<formProps | any>(txnSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", md: 400 },
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const onSubmit = async (data: formProps) => {
    try {
      let templateParams = {
        fullName: data.fullname,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      };

      await emailjs
        .send(
          "service_bqmin07",
          "template_82js50n",
          templateParams,
          "ATI9YU_V7FAkiyvnB"
        )
        .then((Response: any) => {
          console.log(Response);
          if (Response.status === 200) {
            setSubmitMsg("Email sent successfully!");
            reset(defaultValues);
          } else {
            setSubmitMsg("Oops! Something went wrong.");
          }
          handleOpen();
        });
    } catch (error) {
      console.log(error);
      setSubmitMsg("Technical Error Found. Please try after some time.");
      handleOpen();
      reset(defaultValues);
    }
  };

  return (
    <React.Fragment>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          <CustomInput name="fullname" label="Full Name" />
          <CustomInput name="email" type="email" label="Email" />
          <CustomInput name="phone" type="number" label="Phone" />
          <CustomInput name="subject" label="Subject" />
        </Grid>
        <CustomInput
          multiline
          name="message"
          label="Message"
          rows={10}
          sx={{ width: "100%", mt: 2 }}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
          loading={isSubmitting}
        >
          Submit
        </LoadingButton>
      </FormProvider>
      <Modal open={open} onClose={handleClose}>
        <Grid sx={style}>
          <Typography variant="h6">{submitMsg}</Typography>
          <Stack alignItems={"end"} mt={3}>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </Stack>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default Contact;
