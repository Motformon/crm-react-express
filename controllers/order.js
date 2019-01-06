module.exports.getAll = function(req, res) {
	res.status(200).json({
		getAll: 'from controller getAll'
	})
}
module.exports.create = function(req, res) {
	res.status(200).json({
		create: 'from controller create'
	})
}
