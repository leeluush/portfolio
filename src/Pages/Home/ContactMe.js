import React, { useRef, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { useTheme } from '../Home/ThemeContext'; 

export default function ContactMe() {
  const { theme } = useTheme();
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageLength, setMessageLength] = useState(0);
  const maxLength = 300;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });

    e.target.reset(); // Reset form fields
  };

  const handleMessageChange = (e) => { 
    const { value } = e.target;
    setMessage(value);
    setMessageLength(value.length);
  };

  return (
    <section className="contact--section" id="contactSection" style={{ backgroundColor: theme.palette.background.default }} >
      <Box
        component="section"
        sx={{
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          component="div"
          sx={{
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, fontFamily: 'Caveat, cursive' }}>
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ color: theme.palette.text.primary, fontFamily: 'Caveat, cursive' }}>
            Contact Me
          </Typography>
        </Box>
        <Box
          component="form"
          className="contact--form--container"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <TextField
            variant="outlined"
            label="First Name"
            name="first-name"
            id="first-name"
            required
            sx={{
              marginBottom: '20px',
              width: '100%',
              backgroundColor: theme.palette.background.paper,
              '& .MuiInputBase-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Last Name"
            name="last-name"
            id="last-name"
            required
            sx={{
              marginBottom: '20px',
              width: '100%',
              backgroundColor: theme.palette.background.paper,
              '& .MuiInputBase-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            id="email"
            required
            sx={{
              marginBottom: '20px',
              width: '100%',
              backgroundColor: theme.palette.background.paper,
              '& .MuiInputBase-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Phone Number"
            type="number"
            name="phone-number"
            id="phone-number"
            required
            sx={{
              marginBottom: '20px',
              width: '100%',
              backgroundColor: theme.palette.background.paper,
              '& .MuiInputBase-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          <TextField
            variant="outlined"
            label={`Inquiry (${messageLength}/${maxLength})`}
            name="inquiry"
            id="inquiry"
            value={message}
            onChange={handleMessageChange}
            multiline
            rows={4}
            inputProps={{ maxLength: maxLength }}
            required
            sx={{
              marginBottom: '20px',
              width: '100%',
              backgroundColor: theme.palette.background.paper,
              '& .MuiInputBase-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.text.primary,
                fontFamily: 'Caveat, cursive',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.primary,
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontFamily: 'Caveat, cursive',
              backgroundColor: 'var(--highlight-color)', // Use the same green color
              color: 'var(--button-color)',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '10px 20px',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#7BBAFF', // Hover effect
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </section>
  );
}
