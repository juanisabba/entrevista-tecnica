import React, { useState } from "react";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
  Fade,
  Modal,
  Backdrop,
} from "@mui/material";
import {Link} from 'react-router-dom'
import "./form.css"

const Form = () => {
    //Estilos del botón
          const theme = createTheme({
            palette: {
              primary: {
                light: "rgba(107, 38, 115, .2)",
                main: "rgb(107, 38, 115)",
                dark: "rgb(78, 22, 85)",
                contrastText: "#fff",
              },
            },
            typography: {
              button: {
                textTransform: "none",
                fontSize: 16,
              },
            },
          });
        
          //Estilos del modal
          const style = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          };
        
          const [open, setOpenModal] = useState(false);
          const [contactInfo, setContactInfo] = useState({
            name: "",
            email: "",
            password: "",
            textArea: "",
          });
        
          const handleCloseModal = () => {
              //Al cerrar el modal se reinicia la información
            setContactInfo({
              name: "",
              email: "",
              password: "",
              textArea: "",
            });
            setOpenModal(false);
          };
        
        
          const handleSubmit = async (e) => {
              e.preventDefault();
              setOpenModal(true)
          };
        
          return (
            <div className="form">
                <Link to="/">
                    <button>Ir al Bingo</button>
                </Link>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box
                    sx={style}
                  >
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      {
                        JSON.stringify(contactInfo, null, 2)
                      }
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
              <h1>Form</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    className="form-input"
                    type="text"
                    required
                    placeholder="Name *"
                    value={contactInfo.name}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    className="form-input"
                    type="email"
                    required
                    placeholder="Email *"
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    className="form-input"
                    type="password"
                    required
                    placeholder="Password *"
                    value={contactInfo.password}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, password: e.target.value })
                    }
                  />
                </div>
                <div>
                  <textarea
                    className="form-input"
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="TextArea"
                    value={contactInfo.textArea}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, textArea: e.target.value })
                    }
                  />
                </div>
                <div className="button">
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </ThemeProvider>
                </div>
              </form>
            </div>
          );}

export default Form
