module.exports.getAll = function(req, res) {
	res.status(200).json({
		getAll: 'from controller getAll'
	})
}
module.exports.getById = function(req, res) {
	res.status(200).json({
		getById: 'from controller getById'
	})
}
module.exports.remove = function(req, res) {
	res.status(200).json({
		remove: 'from controller remove'
	})
}
module.exports.create = function(req, res) {
	res.status(200).json({
		create: 'from controller create'
	})
}
module.exports.update = function(req, res) {
	res.status(200).json({
		update: 'from controller update'
	})
}