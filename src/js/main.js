var timeout = false

function getDimensions() {
    var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        x=w.innerWidth||e.clientWidth||g.clientWidth,
        y=w.innerHeight||e.clientHeight||g.clientHeight

    document.getElementById('home').style.height = (y - 5) + "px"
}

window.addEventListener("resize", function() {
    // clear the timeout
    clearTimeout(timeout)
    // start timing for event "completion"
    timeout = setTimeout(getDimensions, 300)
})

getDimensions()
