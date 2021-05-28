var settings = {
  "url": "https://api.resumatorapi.com/v1/jobs?apikey=kwKu1pE8uSpbZFAFwrCnE4J8XMkBJUxv",
  "method": "GET",
  "timeout": 0,
};

jQuery.ajax(settings).done(function (jobs) {
    var jobListing = `<ul>`; 
    for (const position in jobs) {
        var link = "";
        var opening = jobs[position];
        var status = opening["status"];
        var title = opening["title"];
        var code = opening["board_code"];
        var dept = opening["department"];
        if (status == "Open") {
            link = `<li><a target="_blank" href="https://leostella.applytojob.com/apply/${code}"><span class="pre-title">${dept}</span><h3>${title}</h3></a><i class="fas fa-external-link-alt"></i></li>`;
            jobListing = `${jobListing}${link}`;
        }
    }
    jobListing = `${jobListing}</ul>`;
    jQuery('.jobs-list-ul').append(jobListing);
});

jQuery(document).ready(function(){

    // Cache the highest
    var highestBox = 0;
    
    // Select and loop the elements you want to equalise
    jQuery('.vc_grid-item', this).each(function(){
    
        // If this box is higher than the cached highest then store it
        if(jQuery(this).height() > highestBox) {
            highestBox = jQuery(this).height(); 
        }
    
    });  
        
    // Set the height of all those children to whichever was highest 
    jQuery('.vc_grid-item',this).height(highestBox);

});

/*var displayWidth = jQuery(window).width();
var containWidth = 1200;
//displayWidth = displayWidth / 2;
//containWidth = containWidth / 2;
var galleryOffset = displayWidth - containWidth;

jQuery('.slick-next').each( function() {
    console.log(galleryOffset);
    jQuery(this).css("right", galleryOffset);
});*/
