window.addEventListener("load", updateAll);
window.addEventListener("resize", updateAll);
window.addEventListener("orientationchange", updateAll);

function updateAll() {
    document.getElementById("DspRes").innerHTML = window.screen.width + " x " + window.screen.height;
    document.getElementById("BrVi").innerHTML = window.innerWidth + " x " + window.innerHeight;
    document.getElementById("DPR").innerHTML = window.devicePixelRatio.toFixed("2");
    document.getElementById("UAStr").innerHTML = navigator.userAgent;
    updateDisOrien();
    updateUATyp();
}

function updateDisOrien() {
    if (window.innerHeight > window.innerWidth)
        document.getElementById("DisOrien").innerHTML = "Vertical";
    else if (window.innerHeight < window.innerWidth)
        document.getElementById("DisOrien").innerHTML = "Horizontal";
    else
        document.getElementById("DisOrien").innerHTML = "Square";
}

function updateUATyp() {
    let UATyp = "Desktop";
    if (isMobile())
        UATyp = "Mobile";
    if (isTouch())
        UATyp += " (touch)";
    else
        UATyp += " (no touch)";
    document.getElementById("UATyp").innerHTML = UATyp;
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTouch() {
    return (window.hasOwnProperty("ontouchstart") || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}
