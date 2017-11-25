(function(){
    function game(ship){
        function init() {

        }

        function render() {

        }

        return {
            init: init,
            render: render
        };
    }

    var ship = document.body.innerHtml = document.getElementsByTagName("img")[0];
    var tago = document.getElementById("tago");

    document.body.appendChild(ship);

    var StartAnmiation = setInterval(function(){
        var speed = 10;
        var shipBottom = (Number(ship.style.bottom.replace("px", "")) || 0);
        ship.style.bottom = (shipBottom - speed) + "px";
        tago.style.opacity = (shipBottom + 500) / 600;

        if(Number(ship.style.bottom.replace("px", "")) <= -600){
            clearInterval(StartAnmiation);
            tago.remove();

            var game  = new game(ship);
            game.init();
        }
    }, 50);

})();