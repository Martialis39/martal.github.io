function setupInputEvent() {
    $('#text-input').on("input", function(b) {
        $('#text-input').val(function(_, c) {
            var d = ""
              , d = c.replace(/(^0+)|[.,]|[^0-9\.]+/g, "");
            console.log("numberFormat", d);
            d.length < 3 && (d = d.padStart(3, "0"));
            d = d.slice(0, -2) + "." + d.slice(-2);
            console.log("result", d);
            b.target.selectionStart = d.length;
            b.target.selectionEnd = d.length;
            return d
        })
    })
}

window.addEventListener('DOMContentLoaded', setupInputEvent)


