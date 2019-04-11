
// This function generates the inner HTML for a toolbar with content like this:
//  talks[] = { [0] [1] [2] [3] [4] [5] [6]  ... }    Posters Facebook About
// In this example, lastTalk=6, and thisTalk indicates which should be highlighted.

function genToolbar(lastTalk, thisTalk) {

    var retval = ''
    retval += '<ul>';
    retval += '<li class="border-right">&nbsp;talks[] = {&nbsp;</li>';

    for (var i=0; i<=lastTalk; i++) {
	    retval += '<li><a href="#toolbar' + i + '" class="scroll';  
	    retval += (i==thisTalk) ? ' active-array' : '';
	    retval += '">[' + i + ']</a></li>';
    }

    retval += '<li>&nbsp;...&nbsp;}</li>';
    retval += '<li class="about-link"><a href="#about" class="scroll">About</a></li>';
    //retval += '<li class="posters-link"><a href="posters">Posters</a></li>';
    retval += '<li class="facebook"><a href="http://www.facebook.com/arrayoftalks" ><img src="img/f_logo.png" /></a></li>';
    retval += '</ul>'
    return retval;
}

$(document).ready(function(){

 // Get the talk number of the active talk

 var activeTalkNum = $(".active-talk-toolbar").data('talknum');

 // Find all the toolbars

 $(".toolbar").each(function() {
     $(this).html(genToolbar(activeTalkNum,$(this).data('talknum')));
 });

});

