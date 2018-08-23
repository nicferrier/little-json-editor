
function createChecker(domElement) {
    let idle = 0;
    let lastJson = "";
    let timer = window.setInterval(timeEvt => {
        idle = idle + 1;
        if (idle > 100) {
            let json = area.textContent.trim();
            if (json != lastJson && json != "") {
                lastJson = json;
                try {
                    let object = JSON.parse(json);
                    let str = JSON.stringify(object, null, 2);
                    domElement.classList.remove("error");
                }
                catch (e) {
                    document.querySelector("#msg").textContent = e.message;
                    domElement.classList.add("error");
                }
            }
            idle = 0;
        }
    }, 10);

    domElement.addEventListener("keyup", evt => { idle = 0; });
}

window.addEventListener("load", evt => {
    let area = document.querySelector("#area");
    area.focus();
    createChecker(area);
});

// End
