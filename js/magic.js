function makeMagic() {
  var magic = $(".magic");

  for(var i=0; i < magic.length; ++i) {
    el = $(magic[i]).find('span');

    el.each(function() {
      var e = $( this );
      var c = 500 / e.width() ;

      console.log(e.text(), c);
      //e.css('font-size', c.toFixed(3) + 'em');
    });
  }

};

$(makeMagic);
