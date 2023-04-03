const mongoose = require('mongoose');
const taskModel = require('../Models/TaskModel');


// TO CREATE A TASK - POST
const createTask = async (req, res)=>{

    const {title, description} = req.body;

    try{
        const task = await taskModel.create({ title, description });
        res.status(200).json(task)
    } catch(e){
        res.status(400).json({error: e.message});
    };

};

// TO GET ALL TASKS - GET
const getTasks = async (req, res)=>{
    
    try{
        const tasks = await taskModel.find({});
        res.status(200).json(tasks);
    }catch(e){
        res.status(400).json({error: e.message});
    };

};

// TOGET A SINGLE TASK - GET
const getOneTask = async (req, res)=>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Task not found'});
    };

    try{
        const singleTask = await taskModel.findById(id);
        res.status(200).json(singleTask);
    }catch(e){
        res.status(400).json({error: e.message});        
    };

};

// TO UPDATE TASK - PATCH
const updateTask = async (req, res)=>{
    
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){        
        return res.status(400).json({error: "Task not found"});
    };

    try{
        const task = await taskModel.findByIdAndUpdate(
        { _id:id },
        { ...req.body } 
        );
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error: e.message});
    };

};

const deleteTask = async (req, res)=>{

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Task not found"});
    };

    try{
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task);
    }catch(e){
        res.status(400).json({error: e.message});
    };

};



module.exports = {createTask, getTasks, getOneTask, updateTask, deleteTask};