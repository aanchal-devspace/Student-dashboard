let a = JSON.parse(localStorage.getItem("tt")) || [];
let b = JSON.parse(localStorage.getItem("as")) || [];

show();

function add() {
    let s = document.getElementById("sub").value;
    let d = document.getElementById("day").value;
    let t = document.getElementById("tm").value;

    if (s == "" || t == "") {
        alert("Fill all boxes");
        return;
    }

    a.push({
        sub: s,
        day: d,
        time: t
    });
    localStorage.setItem("tt", JSON.stringify(a));

    document.getElementById("sub").value = "";
    document.getElementById("tm").value = "";

    show();
}

function show() {
    let x = "";

    for (let i = 0; i < a.length; i++) {

        x += `
<div class="card">
<h3>${a[i].sub}</h3>
<p><b>Day :</b> ${a[i].day}</p>
<p><b>Time :</b> ${a[i].time}</p>
<button onclick="del(${i})">Delete</button>
</div>

`;

    }

    document.getElementById("list").innerHTML = x;

    clock();

}

function del(i) {
    a.splice(i, 1);
    localStorage.setItem("tt", JSON.stringify(a));
    show();
}

clock();
setInterval(clock, 1000);
function clock() {
    let d = new Date();
    document.getElementById("dt").innerHTML = d.toDateString();
    document.getElementById("tm2").innerHTML = d.toLocaleTimeString();
    document.getElementById("no").innerHTML = a.length;
}

function find() {
    let s = document.getElementById("sea").value.toLowerCase();
    let x = "";
    for (let i = 0; i < a.length; i++) {

        if (a[i].sub.toLowerCase().includes(s)) {

            x += `

<div class="card">
<h3>${a[i].sub}</h3>

<p><b>Day :</b> ${a[i].day}</p>
<p><b>Time :</b> ${a[i].time}</p>

<button onclick="del(${i})">Delete</button>
</div>

`;
        }
    }
    document.getElementById("list").innerHTML = x;
}

showAs();

function addAs() {
    let n = document.getElementById("as").value;
    let d = document.getElementById("dd").value;
    if (n == "" || d == "") {
        alert("Fill all boxes");
        return;
    }
    b.push({
        name: n,
        date: d,
        done: false
    });

    localStorage.setItem("as", JSON.stringify(b));
    document.getElementById("as").value = "";
    document.getElementById("dd").value = "";
    showAs();
}

function showAs() {
    console.log(b);
    let x = "";
    for (let i = 0; i < b.length; i++) {
        x += `
        <div class="card">
        <h3>${b[i].name}</h3>
        <p>Due : ${b[i].date}</p>

        <p>Status : ${b[i].done ? "Yeahh Completed " : "Pending "}</p>
        <button onclick="done(${i})">Done</button>
        <button onclick="delAs(${i})">Delete</button>
        </div>
        `;
    }
    document.getElementById("asList").innerHTML = x;
}

function done(i) {
    b[i].done = true;
    localStorage.setItem("as", JSON.stringify(b));
    showAs();
}

function delAs(i) {
    b.splice(i, 1);
    localStorage.setItem("as", JSON.stringify(b));
    showAs();
}

function cal() {
    let a = Number(document.getElementById("at").value);
    let t = Number(document.getElementById("tt").value);
    if (a == "" || t == "") {
        alert("Fill all boxes");
        return;
    }

    if (t == 0) {
        alert("0 classes ?? (Dimag ka use kro thoda)");
        return;
    }

    if (a > t) {
        alert("Sapne me ki thi kya itni classes");
        return;
    }

    let p = (a / t) * 100;
    p = p.toFixed(2);
    if (p >= 75) {

        document.getElementById("ans").innerHTML =
            "Attendance : " + p + "% Bach gye isbar 🎉";

    }
    else {

        document.getElementById("ans").innerHTML =
            "Attendance : " + p + "% Or maro bunk 😂☠️";

    }

}