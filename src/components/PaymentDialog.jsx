import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, MenuItem, Box, Typography
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PaymentDialog = ({ open, onClose }) => {

    const [form, setForm] = useState({
        to: '',
        from: '',
        amount: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'amount') {
            if (value === '') {
                setForm({ ...form, amount: '' });
                return;
            }
            const numberValue = Number(value);
            if (numberValue < 0) {
                return;
            }
        }

        setForm({ ...form, [name]: value });
    };

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
                            value={form.to}
                            onChange={handleChange}
                            type="email"
                            required
                            fullWidth
                        />
                        <TextField
                            select
                            label="From (Currency)"
                            name="from"
                            value={form.from}
                            onChange={handleChange}
                            required
                            fullWidth
                        >
                            <MenuItem value="BTC">BTC</MenuItem>
                            <MenuItem value="ETH">ETH</MenuItem>
                        </TextField>
                        <TextField
                            label="Amount"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                            type="number"
                            required
                            fullWidth
                        />
                        <TextField
                            label="Description (Optional)"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
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
