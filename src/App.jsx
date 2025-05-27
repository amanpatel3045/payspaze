import { useState } from 'react'
import './App.css'
import { Button, Box } from '@mui/material';


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
    </Box>
  );
}


export default App
