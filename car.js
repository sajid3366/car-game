
document.getElementById("start").addEventListener("click", () => {
    document.getElementById("start").style.display = 'none'
    document.getElementById("road").style.animation = 'roadanimation 20s linear infinite'

    setInterval(() => {
        num = Math.floor(Math.random()*(370-240+1)+240)
        document.getElementById("ecar1").style.left=`${num}px`

    }, 3000);
    setInterval(() => {
        num = Math.floor(Math.random()*(239-60+1)+60)
        document.getElementById("ecar2").style.left=`${num}px`

    }, 5000);
    setInterval(() => {
        num = Math.floor(Math.random()*(59-(-160)+1)+(-160))
        document.getElementById("ecar3").style.left=`${num}px`

    }, 4000);
    setInterval(() => {
        num = Math.floor(Math.random()*((-159)-(-345)+1)+(-345))
        document.getElementById("ecar4").style.left=`${num}px`

    }, 6000);
    document.getElementById("ecar1").style.animation = 'ecar1 3s linear infinite'
    document.getElementById("ecar2").style.animation = 'ecar2 5s linear infinite'
    document.getElementById("ecar3").style.animation = 'ecar3 4s linear infinite'
    document.getElementById("ecar4").style.animation = 'ecar4 6s linear infinite'

    let t = 20;
    let l = 0;

    window.addEventListener("keydown", function (x) {
        if (x.keyCode == 87) {
            t = t - 3
            // alert("W")
        }
        if (x.keyCode == 65) {
            l = l - 1;
            // alert("A")
        }
        if (x.keyCode == 83) {
            t = t + 3
            // alert("s")
        }
        if (x.keyCode == 68) {
            l = l + 1;
            // alert("W")
        }
        document.getElementById("mycar").style.top = `${t}vh`
        document.getElementById("mycar").style.left = `${l}vw`
    })
    let n= 0;
    setInterval(() => {
        document.getElementById("score").innerText=`Score: ${n}`
        n= n+1;


        var ecar1_left = Math.abs(document.getElementById("ecar1img").getBoundingClientRect().left)
        var ecar1_right = Math.abs(document.getElementById("ecar1img").getBoundingClientRect().right)
        var ecar1_top = Math.abs(document.getElementById("ecar1img").getBoundingClientRect().top)
        var ecar1_bottom = Math.abs(document.getElementById("ecar1img").getBoundingClientRect().bottom)

        var ecar2_left = Math.abs(document.getElementById("ecar2img").getBoundingClientRect().left)
        var ecar2_right = Math.abs(document.getElementById("ecar2img").getBoundingClientRect().right)
        var ecar2_top = Math.abs(document.getElementById("ecar2img").getBoundingClientRect().top)
        var ecar2_bottom = Math.abs(document.getElementById("ecar2img").getBoundingClientRect().bottom)

        var ecar3_left = Math.abs(document.getElementById("ecar3img").getBoundingClientRect().left)
        var ecar3_right = Math.abs(document.getElementById("ecar3img").getBoundingClientRect().right)
        var ecar3_top = Math.abs(document.getElementById("ecar3img").getBoundingClientRect().top)
        var ecar3_bottom = Math.abs(document.getElementById("ecar3img").getBoundingClientRect().bottom)

        var ecar4_left = Math.abs(document.getElementById("ecar4img").getBoundingClientRect().left)
        var ecar4_right = Math.abs(document.getElementById("ecar4img").getBoundingClientRect().right)
        var ecar4_top = Math.abs(document.getElementById("ecar4img").getBoundingClientRect().top)
        var ecar4_bottom = Math.abs(document.getElementById("ecar4img").getBoundingClientRect().bottom)

        var mycar_left = Math.abs(document.getElementById("mycarimg").getBoundingClientRect().left)
        var mycar_right = Math.abs(document.getElementById("mycarimg").getBoundingClientRect().right)
        var mycar_top = Math.abs(document.getElementById("mycarimg").getBoundingClientRect().top)
        var mycar_bottom = Math.abs(document.getElementById("mycarimg").getBoundingClientRect().bottom)

        // car 1
        if(((ecar1_left < mycar_left && mycar_left < ecar1_right) || (ecar1_left < mycar_right && mycar_right < ecar1_right)) && ((ecar1_top < mycar_top && mycar_top < ecar1_bottom) || (ecar1_top < mycar_bottom && mycar_bottom < ecar1_bottom))){
            setTimeout(() =>{
                alert("Game over")

            })
            location.reload()
        }

        // car 2
        if(((ecar2_left < mycar_left && mycar_left < ecar2_right) || (ecar2_left < mycar_right && mycar_right < ecar2_right)) && ((ecar2_top < mycar_top && mycar_top < ecar2_bottom) || (ecar2_top < mycar_bottom && mycar_bottom < ecar2_bottom))){
            setTimeout(() =>{
                alert("Game over")

            })
            location.reload()
        }

        // car 3
        if(((ecar3_left < mycar_left && mycar_left < ecar3_right) || (ecar3_left < mycar_right && mycar_right < ecar3_right)) && ((ecar3_top < mycar_top && mycar_top < ecar3_bottom) || (ecar3_top < mycar_bottom && mycar_bottom < ecar3_bottom))){
            setTimeout(() =>{
                alert("Game over")

            })
            location.reload()
        }

        // car 4
        if(((ecar4_left < mycar_left && mycar_left < ecar4_right) || (ecar4_left < mycar_right && mycar_right < ecar4_right)) && ((ecar4_top < mycar_top && mycar_top < ecar4_bottom) || (ecar4_top < mycar_bottom && mycar_bottom < ecar4_bottom))){
            setTimeout(() =>{
                alert("Game over")

            })
            location.reload()
        }



        if(mycar_left <360 || mycar_right>1160 || mycar_top<10 || mycar_bottom>690){
            setTimeout(() => {
                alert("Game over");
            });
            location.reload();
        }


    }, 100);
})