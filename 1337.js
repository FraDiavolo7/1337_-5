/**
 *  Requires : jquery
 *  Usage : either call the convert21337 function in any event handler 
 *  or use it in the ready part of your page.
 *  Example :
 *

 $( document ).ready(function() {
	convert21337 ( );
});

 * a parameter could be used, which is the level of the conversion. 
 * 0 means basic leet convertion
 * anything else is hard leet convertion
 * if nothing is given, then it's considered 0
**/

/**
 * @fn leet
 * @brief convert a character into the leet one.
 * @param[in, out] carcou String the character to convert
 * @param[in] lvl int the hardness of the convertion
 * @return the converted character
 * @author Fra Diavolo
 * @date 27/10/2015
**/
function leet ( carcou, lvl ) {

	tmp = carcou;

	tmp = tmp.replace(/A/g,'4');
	tmp = tmp.replace(/a/g,'@');
	tmp = tmp.replace(/b/g,'8');
	tmp = tmp.replace(/B/g,'8');
	tmp = tmp.replace(/e/g,'3');
	tmp = tmp.replace(/E/g,'3');
	tmp = tmp.replace(/g/g,'9');
	tmp = tmp.replace(/G/g,'jay');
	tmp = tmp.replace(/l/g,'1');
	tmp = tmp.replace(/L/g,'1');
	tmp = tmp.replace(/o/g,'0');
	tmp = tmp.replace(/O/g,'0');
	tmp = tmp.replace(/t/g,'7');
	tmp = tmp.replace(/T/g,'7');
	tmp = tmp.replace(/z/g,'2');
	tmp = tmp.replace(/Z/g,'2');

	if ( lvl != 0 )
	{
		tmp = tmp.replace(/c/g,'(');
		tmp = tmp.replace(/C/g,'<');
		tmp = tmp.replace(/d/g,'[)');
		tmp = tmp.replace(/D/g,'[)');
		tmp = tmp.replace(/f/g,'|=');
		tmp = tmp.replace(/F/g,'|=');
		tmp = tmp.replace(/h/g,'|-|');
		tmp = tmp.replace(/H/g,'|-|');
		tmp = tmp.replace(/i/g,'|');
		tmp = tmp.replace(/I/g,'|');
		tmp = tmp.replace(/j/g,'_|');
		tmp = tmp.replace(/J/g,'_|');
		tmp = tmp.replace(/k/g,'|<');
		tmp = tmp.replace(/K/g,'|<');
		tmp = tmp.replace(/m/g,'/\\/\\');
		tmp = tmp.replace(/M/g,'/\\/\\');
		tmp = tmp.replace(/n/g,'/\\/');
		tmp = tmp.replace(/N/g,'/\\/');
		tmp = tmp.replace(/p/g,'|*');
		tmp = tmp.replace(/P/g,'|*');
		tmp = tmp.replace(/q/g,'(,)');
		tmp = tmp.replace(/Q/g,'(,)');
		tmp = tmp.replace(/r/g,'|2');
		tmp = tmp.replace(/R/g,'|2');
		tmp = tmp.replace(/s/g,'$');
		tmp = tmp.replace(/S/g,'$');
		tmp = tmp.replace(/u/g,'|_|');
		tmp = tmp.replace(/U/g,'|_|');
		tmp = tmp.replace(/v/g,'(\\/)');
		tmp = tmp.replace(/V/g,'(\\/)');
		tmp = tmp.replace(/w/g,'\\/\\/');
		tmp = tmp.replace(/W/g,'\\/\\/');
		tmp = tmp.replace(/x/g,'><');
		tmp = tmp.replace(/X/g,'><');
		tmp = tmp.replace(/y/g,'\'/');
		tmp = tmp.replace(/Y/g,'\'/');
		tmp = tmp.replace(/v/g,'\\/');
		tmp = tmp.replace(/V/g,'\\/');
	} // if ( lvl != 0 )

	return tmp;
} // leet

/**
 * @fn convert21337
 * @brief convert the current HTML page to leet.
 * @param[in] level int the hardness of the convertion (optionnal)
 * @return None
 * @author Fra Diavolo
 * @date 27/10/2015
**/
function convert21337 ( level ) {

	level = typeof level !== 'undefined' ? level : 0;

	text = $("body").html();
	convert = true;
	script = false;
	result = "";

	for ( i = 0 ; i < text.length ; i++)
	{
        	carcou = text[i];

		if ( carcou == "<" ) convert = false;
		if ( carcou == ">" ) 
		{
			convert = true;
		} // if ( carcou == ">" ) 

		if ( convert && !script) 
		{
			tmp = "";
			result = result.concat( leet ( carcou , level ) ) ;
		} // if ( convert && !script) 
		else 
		{
			tmp = tmp.concat (carcou);
			result = result.concat( carcou );

			if ( tmp == "script" )
			{
				script = !script;
			}
		} // else : if ( convert && !script) 

		console.log ("for " + result);
	} // for ( i = 0 ; i < text.length ; i++)

	$("body").html( result );
} // convert21337

// (o_
// //\
// V_/_
	
