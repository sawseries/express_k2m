var path = require('path')
var fs = require('fs')

let autoRoutes = function (app, routesDir, routesPassed = '/') {

	if (!fs.existsSync(routesDir)) {
		console.error(routesDir + ' not exists')
		return
	}

	if (!fs.statSync(routesDir).isDirectory()) {
		console.error(routesDir + ' is not a Directory')
		return
	}

	let items = fs.readdirSync(routesDir)
	items.forEach(function (data, index) {
		let itemPath = path.join(routesDir, data)
		if (fs.statSync(itemPath).isDirectory()) {
			if (/^.*\/$/.test(routesPassed)) {
				autoRoutes(app, itemPath, routesPassed + data)
			} else {
				autoRoutes(app, itemPath, routesPassed + '/' + data)
			}
		} else {
			let fileRouteName = data.substr(0, data.length - 3)
			if (/^.*\/$/.test(routesPassed)) {
				useRouteFile(app, itemPath, routesPassed + fileRouteName)
			} else {
				useRouteFile(app, itemPath, routesPassed + '/' + fileRouteName)
			}
		}
	})
}

function useRouteFile(app, file, url) {
	if (/^.*index$/.test(url)) {
		let urlDefault = url.substr(0, url.length - 5)
		app.use(urlDefault, require(file))
		app.use(url, require(file))
	} else {
		app.use(url, require(file))
	}
}

module.exports = autoRoutes
