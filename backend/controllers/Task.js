const express = require('express');
const { Task } = require('../models/TaskScheme');

const crearTask = async (req, res = express.response ) => {
  const task = new Task( req.body );
  
  try {
    task.user = req.uid;
    const saved = await task.save();
    res.json({
      ok: true,
      task: saved
    })
  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      task: 'Internal error'
    })
  }
}

const listarTasks = async (req, res = express.request) => {
  const tasks = await Task.find().populate('user', 'name');
  try{
    res.status(200).json({
      ok: true,
      tasks
    })
  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      task: 'Error Interno'
    })
  }
}

const actualizarTask = async (req, res = express.response) => {
  const id = req.params.id;
  const updateTask = await Task.findById(id);

  if(!updateTask){
    return res.status(404).json({
      ok: false,
      task: 'No existe la tarea'
    })
  }

  const newTask = {
    ...req.body,
    user: req.uid
  }

  const tasks = await Task.findByIdAndUpdate(id, newTask, {new: true});

  try{
    res.status(200).json({
      ok: true,
      tasks
    })
  }catch(error){ 
    console.log(error);
    res.status(500).json({
      ok: false,
      task: 'Error Interno'
    })
  }
}

const eliminarTask = async (req, res = express.response) => {
  const id = req.params.id;
  const deleteTask = await Task.findById(id);

  if(!deleteTask){
    return res.status(404).json({
      ok: false,
      task: 'No existe la tarea'
    })
  }

  const tasks = await Task.findByIdAndDelete(id); 

  try{
    res.status(200).json({
      ok: true,
      tasks
    })
  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      task: 'Error Interno'
    })
  }
}

module.exports = { crearTask, listarTasks, actualizarTask, eliminarTask }