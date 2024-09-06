import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/list', async(req, res)=>{
    try{
        res.render('clientes/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/add', (req,res)=>{
    res.render('clientes/add');
});

router.post('/add', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/edit', (req,res)=>{
    res.render('clientes/edit');
});

router.post('/edit', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//----------------------------------------------------//
router.get('/producto', async(req, res)=>{
    try{
        res.render('productos/producto');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/editproducto', (req,res)=>{
    res.render('productos/editproducto');
});

router.post('/editproducto', async(req, res)=>{
    try{
        res.redirect('/producto');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/categoria', async(req, res)=>{
    try{
        res.render('productos/categoria');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/editcategoria', (req,res)=>{
    res.render('productos/editcategoria');
});

router.post('/editcategoria', async(req, res)=>{
    try{
        res.redirect('/categoria');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
export default router;
