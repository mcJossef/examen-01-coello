import { Router } from 'express';

const router = Router();

router.get('/pago', async (req, res) => {
    try {
        res.render('pagos/pago');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/metodopago', (req, res) => {
    res.render('pagos/metodopago');
});

router.post('/metodopago', async (req, res) => {
    try {
        res.redirect('/pago');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
export default router;
