module.exports.getByCategoryId = function(req, res) {
	res.status(200).json({
		getByCategoryId: 'from controller getByCategoryId'
	})
}
module.exports.create = function(req, res) {
	res.status(200).json({
		create: 'from controller create'
	})
}
module.exports.remove = function(req, res) {
	res.status(200).json({
		remove: 'from controller remove'
	})
}
module.exports.update = function(req, res) {
	res.status(200).json({
		update: 'from controller update'
	})
}
