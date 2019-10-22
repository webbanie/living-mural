var portraits = [
	{ 	no: "1", img: "308x560_1", title: "Streets beauties", text1: "Across many cities, Street Murals and Graffitis live and make us travel to other countries, other landscapes. ", text2: "Sometimes conveying messages or giving way to the abstract, the beauty of this art follows us at every street corner.", style: "background-color: #198f75;", href: "murals.html", view: "MURALS"},
	{ 	no: "2", img: "308x560_2", title: "Art in Motion", text1: "Static and full of meaning, the paintings as varied as they are, live and from the mind of the viewers, emanate a melody and let us imagine movements thus giving life to the masterpiece. ", text2: "Let yourself be guided by some personal animated interpretations of these works.", style: "background-color: #478c40;", href: "animations.html", view: "VIDEOS"},
	{ 	no: "3", img: "308x560_3", title: "Framed Creativity", text1: "Across many cities, Street Murals and Graffitis live and make us travel to other countries, other landscapes. ", text2: "Sometimes conveying messages or giving way to the abstract, the beauty of this art follows us at every street corner.", style: "background-color: #b6b10d;", href: "paintings.html", view: "PAINTINGS"},
];

//***********PORTRAITS
var portraits = new Vue({
  el: '#portraits',
  data: {
    portraits
  },
});

$('.portrait').on('click', function () {
    $('.portrait').not(this).toggle("drop");
    $('.content').toggle("drop");

    var $parentDiv = $(this).parent('div');

    if ($parentDiv.is('#player2-col')) {
        $parentDiv.toggleClass("move-player2");
    } else if ($parentDiv.is('#player3-col')) {
        $parentDiv.toggleClass("move-player3");

    } else if ($parentDiv.is('#player4-col')) {
        $parentDiv.toggleClass("move-player4");

    } else if ($parentDiv.is('#player5-col')) {
        $parentDiv.toggleClass("move-player5");
    }
    
    $('.content').html($parentDiv.find('[id^="content"]').html());
});
