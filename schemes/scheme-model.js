const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({id}).first();
}

function findSteps(id){
    return  db('schemes as sc')
            .join('steps as st', 'sc.id', '=', 'st.scheme_id')
            .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
            .orderBy("st.step_number")
            .where({'sc.id': id})

}

function add(scheme) {
    return db("schemes")
      .insert(scheme)
      .then((ids) => {
        return findById(ids[0]);
      });
  }

  //stretch
  function addStep(step, scheme_id){
    const newStep = {
        ...step,
        scheme_id
    }
    return db('steps')
    .insert(newStep).then(id => db('steps').where({id: id[0]}));
}

function update(changes, id){
    return db('schemes')
    .where({id})
    .update(changes)
    .then(count => findById(id));
}

function remove(id){
    return db('schemes')
    .where({id})
    .del();
}