const connection = require('../database/connection');

const index = async (request, response) => {
    const data = await connection('category').select('*');

    response.send(data);
}

const find = () => {

}

const create = () => {

}

const update = () => {

}

const destroy = () => {

}

module.exports = {
  index,
  find,
  create,
  update,
  destroy
}