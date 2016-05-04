function doStuff(){
  alert('Hello');
}
$(document).ready(function(){
  // alert('Hello');
  //query the Flickr API
  // getImageWithName("cat", document.getElementWithId(""))
});
function getImageWithName(name, imageContainer){
  $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
      tags: name,
      format: "json"
  },
  function(data) {
      $.each(data.items, function(i,item){
          imageContainer.src = data.items[0].media.m
          //append image to the grid, wrap with a link tag so it's clickable
          console.log(data.items[0].media.m)
          // $("<img/>").attr("src", item.media.m).appendTo("#pics").wrap("<a href=" + item.link + "></a>");
          if ( i >= 1 ) return false;
      });
  });
}
