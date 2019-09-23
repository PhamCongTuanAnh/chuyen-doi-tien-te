function convert() {
    let a = +document.getElementById("input-amount").value;
    let f = +document.getElementById("from1").value;
    let t = +document.getElementById("from2").value;
    let r = (a*f)/t;
    document.getElementById("result").value = r;
}