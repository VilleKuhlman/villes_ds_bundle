var PageComponent = require("ds.base/PageComponent");

var VillesAngularExampleServer = PageComponent.create({
	"/": function(attributes, vars) {
                return new StatusResponse('good', {
                        my_data: "This is my data"
                });
	},
	
	type: "VillesAngularExampleServer"
});

module.exports = VillesAngularExampleServer;
