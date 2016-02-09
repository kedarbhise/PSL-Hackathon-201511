cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.lampa.startapp/www/startApp.js",
        "id": "com.lampa.startapp.startapp",
        "merges": [
            "navigator.startApp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.lampa.startapp": "0.0.4"
}
// BOTTOM OF METADATA
});