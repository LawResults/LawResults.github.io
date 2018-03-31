function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1Y5mGn_Gd05M6x1WN9l-1UchrBWQEJNmZoS7LDuFI8J/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
