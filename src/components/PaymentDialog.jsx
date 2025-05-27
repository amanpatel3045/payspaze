import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, MenuItem, Box, Typography
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PaymentDialog = ({ open, onClose }) => {

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                fullWidth
                maxWidth="sm"

            >
                <DialogTitle sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Enter Payment Details
                </DialogTitle>

                <DialogContent sx={{ bgcolor: '#fff' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                        <TextField
                            label="To (Email)"
                            name="to"
                            type="email"
                            required
                            fullWidth
                        />
                        <TextField
                            select
                            label="From (Currency)"
                            name="from"
                            required
                            fullWidth
                        >
                            <MenuItem value="BTC">BTC</MenuItem>
                            <MenuItem value="ETH">ETH</MenuItem>
                        </TextField>
                        <TextField
                            label="Amount"
                            name="amount"
                            type="number"
                            required
                            fullWidth
                        />
                        <TextField
                            label="Description (Optional)"
                            name="description"
                            multiline
                            rows={3}
                            fullWidth
                        />
                    </Box>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button variant="outlined">
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>


            <Dialog
                open={successOpen}
                onClose={() => setSuccessOpen(false)}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        color: 'green',
                        fontWeight: 'bold',
                    }}
                >
                    <CheckCircleOutlineIcon color="success" fontSize="large" />
                    Payment Successful
                </DialogTitle>

                <DialogContent>
                    <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                        Your payment was processed successfully!
                    </Typography>
                </DialogContent>

                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ borderRadius: 2, px: 4 }}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
};

export default PaymentDialog;
