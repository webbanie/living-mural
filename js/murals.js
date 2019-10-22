var items = [
      { id: 0, title: 'natives beauties', city: 'toronto', country: 'Canada'},
      { id: 1, title: 'the view', city: 'toronto', country: 'Canada'},
      { id: 2, title: 'this is paradise', city: 'toronto', country: 'Canada'},
      { id: 3, title: 'in progress 01', city: 'toronto', country: 'Canada'},
      { id: 4, title: 'in progress 02', city: 'toronto', country: 'Canada'},
      { id: 5, title: 'the stair view', city: 'toronto', country: 'Canada'},
      { id: 6, title: 'abstract Horses', city: 'toronto', country: 'Canada'},
      { id: 7, title: 'rainbow thinker', city: 'toronto', country: 'Canada'},
      { id: 8, title: 'blue hair glam', city: 'toronto', country: 'Canada'},
      { id: 9, title: 'a memory', city: 'toronto', country: 'Canada'},
      { id: 10, title: 'look away from the ocean', city: 'toronto', country: 'Canada'},
      { id: 11, title: 'king fishy', city: 'tor', country: 'Canada'},
      { id: 12, title: 'a nature song', city: 'toronto', country: 'Canada'},
      { id: 13, title: 'es la vida', city: 'toronto', country: 'Canada'},
];

for (var i = 0; i <= 13; i++) {
		//console.log(items[i])
	};

$( "#canada" ).click(function() {
	$( ".tor" ).style.display = "none";
	$( ".toronto" ).css( "border", "13px solid red" );
});

//******************DATA

var murals = new Vue({
  el: '#murals',
  data: {
    items
  },
	methods: {	
		itemClicked: function(item) {
        	this.title = item.title;
        	this.id = item.id;
			//$("#myModal").modal('show');

			// Get the modal
			var modal = document.getElementById("myModal");

			// Get the image and insert it inside the modal - use its "alt" text as a caption
			var img = document.getElementById(this.id);
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");
			
			modal.style.display = "block";
			modalImg.src = './img/big/mural_to' + this.id + '.jpg';
			captionText.innerHTML = this.title;

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
        		modal.style.display = "none";
			}
    },
  }
});
