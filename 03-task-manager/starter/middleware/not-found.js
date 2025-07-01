const notFound = (req,res) =>  res
.status(404).send('Route doest not exits')

module.exports = notFound;