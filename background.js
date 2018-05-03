function background(element) {
    var url = browser.extension.getURL("images/jw2.jpg")
    var style = element.style
    style.backgroundImage = "url(" + url + ")"
    style.backgroundOrigin = "center"
    style.backgroundPosition = "center"
    style.backgroundRepeat = "no-repeat"
    style.backgroundSize = "cover"
    // style.backgroundAttachment = "fixed"
    return element
}

function query(selector) {
    return document.querySelector(selector)
}


function loaded() {
    var elements = [
        ".blob-wrapper",
        ".file"
    ].map(x => query(x))
    for (var item of elements) {
        if (item != null) {
            background(item)
        }
    }
}

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {

    } else if (state == 'complete') {
        loaded()
    }
}