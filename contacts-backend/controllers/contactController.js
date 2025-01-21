const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//contains all the logic for the req,res

//get all comtacts
//routes GET /api/contacts
//api private access
const getContacts = asyncHandler(async(req,res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
  });

//create new  comtacts,status 201 for create
//routes POST /api/contacts
//api private access
const createContact = asyncHandler(async(req,res) => {
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error(`All fields are mandatory`);
    } //else create the contact
    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });
    res.status(201).json(contact);
  });

  //get a specific comtact
//routes GET /api/contacts/:id
//api private access
const getContact = asyncHandler(async(req,res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact){
    res.status(404).json({message: `Contact not found`});
    throw new Error(`Contact not found`);
  }
  res.status(200).json(contact);
  });

//update specific contacts
//routes PUT /api/contacts/:id
//api private access
const updateContact = asyncHandler(async(req,res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact){
    res.status(404);
    throw new Error(`Contact not found`);
  }
 // user only gets to update a contact if they actually created the contact
  if(contact.user_id.toString() !== req.user.id){
    res.status(403).json({message: `User don't have permission to update other user contact`});
    throw new Error(`User don't have permission to update other user contact`);
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new : true}
  );
    res.status(200).json(updatedContact);
  });

//delete specific contacts
//routes DElETE /api/contacts/:id
//api private access
const deleteContact = asyncHandler(async(req,res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact){
    res.status(404).json({message: `Contact not found`});
    throw new Error(`Contact not found`);
  }

  // user only gets to update a contact if they actually created the contact
  if(contact.user_id.toString() !== req.user.id){
    res.status(403).json({message: `User don't have permission to update other user contact`});
    throw new Error(`User don't have permission to update other user contact`);
  }
    await Contact.deleteOne({_id: req.param.id});
    res.status(200).json(contact);
  });

  //export the module
  module.exports = { getContact, createContact, updateContact, deleteContact, getContacts}
