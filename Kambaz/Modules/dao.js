import { v4 as uuidv4 } from "uuid";


export default function ModulesDao(db) {

  function findModulesForCourse(courseId) {
    return db.modules.filter((module) => module.course === courseId);
  }

  function createModule(module) {
    const newModule = { ...module, _id: uuidv4() };
    db.modules = [...db.modules, newModule];
    return newModule;
  }

  function deleteModule(moduleId) {
    db.modules = db.modules.filter((module) => module._id !== moduleId);
  }

  function updateModule(moduleId, moduleUpdates) {
    db.modules = db.modules.map((module) => (module._id === moduleId ? moduleUpdates : module))
  }


  return { findModulesForCourse, createModule, deleteModule, updateModule };
   
}    