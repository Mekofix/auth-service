const CarOwner = require('../models/carOwner');
exports.getAll = async (req, res) =>
{
    try {
        const carOwners = await CarOwner.findAll();
        console.log(res.headersSent);  
        return res.status(200).json({carOwners})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

exports.getOne = async (req, res) =>
{
    try {
        const user = await CarOwner.findOne({ where: { id: req.params.id } })
        if (user) {
            return res.status(200).json({user})
        }
        return res.status(404).json({message: "User not found"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
exports.signUp = async (req, res) =>
{ 
    try {
        const { fullname, email, password, phone } = req.body;
        const user = await CarOwner.create({ fullname, email, password, phone })
        return res.status(201).json({ user })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

exports.signIn = async (req, res) =>
{
    try {
        const { email, password } = req.body;
        const user = await CarOwner.findOne({ where: { email } })
        if (user)
        { 
            return res.status(200).json({user})
        }
        return res.status(404).json({message: "User not found"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


exports.signOut = async (req, res) =>
{
    try {
        const user = await CarOwner.findOne({ where: { id: req.params.id } })
        if (user)
        { 
            return res.status(200).json({user})
        }
        return res.status(404).json({message: "User not found"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

exports.update = async (req, res) =>
{
    try {
        
        const user = await CarOwner.findByPk(req.params.id)
        if (!user)
        {
            return res.status(404).json({message: "User not found"})
        }
        const USER_MODEL = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        }
        await user.update(USER_MODEL)
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


exports.forgotPassword = async (req, res) =>
{
    try {
        const user = await CarOwner.findOne({ where: { email: req.params.email } })
        if (!user)
        {
            return res.status(404).json({message: "User not found"})
        }

        const { password } = req.body;
        user.password = password;
        await user.save();
        return res.status(200).json({ user })
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    }