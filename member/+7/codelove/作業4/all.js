/*4-1 textarea*/

// from a single Node
autosize(document.querySelector("textarea"));

// Init
let ta = document.querySelector("textarea");
ta.style.display = "none";
autosize(ta);

// Change layout
ta.style.display = "block";
autosize.update(ta);

// Change value
ta.value = "Some new value";
autosize.update(ta);

/*4-2 img載入*/
let lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

/**/
