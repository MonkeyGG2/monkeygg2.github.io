

function intToString (value) {
  if (value>=10000)
  {
    return toSuffix(value);
  }
  else {
    return parseFloat(value).toFixed(2);
  }
}

function intToStringRound(value, type=0) {
  if (value>=10000)
  {
    return toSuffix(value, type);
  }
  else {
    if(type == 0) return Math.floor(value);
    if(type == 1) return Math.ceil(value);
  }
}

function toSuffix(value, type) {
    if(type == 0 ? value=Math.floor(value) : value=Math.ceil(value));
    var suffixes = ["", "K", "M", "B","T","C","Q","S"];
    var suffixNum = Math.floor(((""+value).length-1)/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(3));
    if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
    return shortValue+suffixes[suffixNum];
}

//TODO: research on effectiveness and value
function addbyinteger(toAdd1, toAdd2, precision, isAdd) {
	precisionMult = Math.pow(10, precision)
	toAdd1 *= precisionMult;
	toAdd2 *= precisionMult * (isAdd==0?-1:1)
	//make toAdd2 negative when isAdd is false.
	toReturn = Math.floor(toAdd1 + toAdd2)
	return toReturn / precisionMult

}
