// 1 require express
const express=require('express');
const contact = require('../models/contact');

// 2 express router
const router = express.Router()

// 3 export
module.exports = router;

// add contact
router.post('/add',async(req,res) => {
    try {
        const { name, email ,phone} = req.body;
        const newContact = new contact({name, email, phone})
        await newContact.save();
        res.status(200).send({msg: 'contact add successfully ..',newContact})
    } catch (error) {
        res.status(400).send({msg: 'can not add contact',error})
    }
})

// get all contact
router.get('/getall',async(req,res) => {
    try {
        const listContacts = await contact.find();
        res
        .status(200)
        .send({msg:'this is the list of all contacts', listContacts});
    }
    catch (error){
        res.status(400).send({msg:'can not get all contacts',error});
    }

})

// get one contact
router.get('/:id',async(req,res) => {
    try {
        const contactToGet = await contact.findOne({_id: req.params.id});
        res.status(200).send({msg:'this is the contact', contactToGet});
    }
    catch (error){
        res.status(400).send({msg:'can not get the contact',error});
    }

})

// delete contact
router.delete('/:id',async(req,res) => {
    try {
        const {_id}= req.params;
        await Contact.findOneAndDelete ({_id});
        res.status(200).send({msg:'contact deleted'});
    }
    catch (error){
        res.status(400).send({msg:'can not delete',error});
    }

})
// edit contact
router.put('/:id',async(req,res) => {
    try {
        const {_id}= req.params;
        const result=await Contact.updateOne ({_id}, {$set: {...req.body}});
        res.status(200).send({msg:'contact updated'});
    }
    catch (error){
        res.status(400).send({msg:'can not edit the contact',error});
    }

})
// test route
router.get('/test',(req,res) => {
    res.send('Hello World')
});