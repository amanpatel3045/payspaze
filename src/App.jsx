import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Button, Box, Typography } from '@mui/material';
import PaymentDialog from './components/PaymentDialog';

function App() {
  const [open, setOpen] = useState(false);
 return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // bgcolor: '#ffffff',
        px: 2,
      }}
    >
    
      <Button
        variant="contained"
        size="large"
        sx={{ px: 5, py: 1.5, borderRadius: 3 }}
        onClick={() => setOpen(true)}
      >
        Make Payment
      </Button>
      <PaymentDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}


export default App
