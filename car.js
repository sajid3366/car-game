
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

    }, 3000);
    setInterval(() => {
        num = Math.floor(Math.random()*(59-(-160)+1)+(-160))
        document.getElementById("ecar3").style.left=`${num}px`

    }, 3000);
    // setInterval(() => {
    //     num = Math.floor(Math.random()*(370-240+1)+240)
    //     document.getElementById("ecar4").style.left=`${num}px`

    // }, 3000);
    document.getElementById("ecar1").style.animation = 'ecar1 3s linear infinite'
    document.getElementById("ecar2").style.animation = 'ecar2 5s linear infinite'
    document.getElementById("ecar3").style.animation = 'ecar3 4s linear infinite'
    document.getElementById("ecar4").style.animation = 'ecar4 6s linear infinite'

    let t = 26;
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
})