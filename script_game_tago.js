(function(){
    var ship = document.body.innerHtml = document.getElementsByTagName("img")[0];
    var tago = document.getElementById("tago");

    var game = (function(ship){
        function init() {
            console.log("Game.init");
        }

        function render() {
            console.log("Game.render");
        }

        return {
            init: init,
            render: render
        };
    })();

    document.body.appendChild(ship);

    var StartAnmiation = setInterval(function(){
        var speed = 10;
        var shipBottom = (Number(ship.style.bottom.replace("px", "")) || 0);
        ship.style.bottom = (Number(ship.style.bottom.replace("px", "")) - speed)+"px";
        tago.style.opacity = (window.outerHeight/(ship.offsetTop)) - 1.5;

        if(ship.offsetTop >= window.outerHeight){
            clearInterval(StartAnmiation);
            tago.remove();

            game.init();
        }
    }, 50);

})();