window.addEventListener('load', function () {
            var reveal = document.getElementById('start_title');
            reveal.classList.add('active');
            var map = document.getElementById('start_map');
            map.classList.add('active');
            var button = document.getElementById('start_button');
            button.classList.add('active');
        })

function init_style(){
    var map = document.getElementById('start_map');
    map.classList.add('fade');
    var button = document.getElementById('start_button');
    button.classList.add('fade');
    var reveal = document.getElementById('start_title');
    reveal.classList.add('top');

    setTimeout(function() {
        let game = document.getElementById("game");
        game.style.display = "block";
        let results = document.getElementById("results");
        results.style.display = "none";
        let sect = document.getElementById("sect");
        sect.classList.remove("sect-result");
        sect.classList.add("sect");
        let start_button = document.getElementById("start");
        start_button.style.display = "none";
        document.getElementById("input_nation").focus();

        init();
    }, 1500);

}