import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, MenuItem, Box, Typography
} from '@mui/material';
import { mockSendPayment } from '../utils/mockApi';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PaymentDialog = ({ open, onClose }) => {
    const [form, setForm] = useState({
        to: '',
        from: '',
        amount: '',
        description: '',
    });
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successOpen, setSuccessOpen] = useState(false);

    useEffect(() => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.to);
        const amountValid = parseFloat(form.amount) > 0;
        setIsValid(emailValid && amountValid && form.from);
    }, [form]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'amount') {
            if (value === '') {
                setForm({ ...form, amount: '' });
                return;
            }
            const numberValue = Number(value);
            if (numberValue < 0) {
                return; // block negative
            }
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);
        setErrorMsg('');
        mockSendPayment(form)
            .then((res) => {
                setLoading(false);
                setSuccessOpen(true);
            })
            .catch((err) => {
                setLoading(false);
                if (err.status === 400) {
                    setErrorMsg(err.message || 'Bad request');
                } else if (err.status === 401) {
                    setErrorMsg(err.message || 'Unauthorized Access');
                } else {
                    setErrorMsg(err.message || 'Server error. Please try later.');
                }
            });
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
                            error={!!errorMsg && form.to === ''}
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
                            inputProps={{ min: 0.01, step: 'any' }}
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
                        {errorMsg && (
                            <Typography color="error" variant="body2" mt={1}>
                                {errorMsg}
                            </Typography>
                        )}
                    </Box>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={onClose} variant="outlined" disabled={loading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        disabled={!isValid || loading}
                    >
                        {loading ? 'Processing...' : 'Submit'}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Success Dialog */}
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
                        onClick={() => setSuccessOpen(false)}
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
