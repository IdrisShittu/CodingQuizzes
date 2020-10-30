function convert(deg) {
	return deg.match(/[0-9]+°C/) ?
		Math.round((Number(deg.slice(0,deg.indexOf("°")))*1.8 +32))+"°F": 
		deg.match(/[0-9]+°F/) ?
		Math.round((Number(deg.slice(0,deg.indexOf("°")))-32)/1.8) +"°C":
	"Error"
}