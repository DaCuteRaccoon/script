imageSRC = 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024'
// Change imageSRC to the URL of the image you want.

Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
  el.src = imageSRC;
});
