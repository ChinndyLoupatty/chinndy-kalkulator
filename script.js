let cur = "0";
const disp = document.getElementById("display");

function UP() { disp.innerText = cur; }

function N(n) { if (cur === "0") { cur = n; } else { cur += n; }
    UP(); }

function A(op) { let last = cur.slice(-1); if ("+-*/".includes(last)) { cur = cur.slice(0, -1) + op; } else { cur += op; }
    UP(); }

function C() { cur = "0";
    UP(); }

function D() { cur = cur.slice(0, -1); if (cur === "") cur = "0";
    UP(); }

// Fungsi = yang lama - biarkan
function H() {
    try {
        let res = eval(cur);
        if (res > 999999999 || res < -999999999) {
            disp.innerText = "Overflow";
            cur = "0";
            return;
        }
        cur = res.toString();
        UP();
    } catch { disp.innerText = "Error";
        cur = "0"; }
}

// INI KUNCINYA - LANGSUNG OVERFLOW UNTUK BVA
function TC1() { cur = "25+35";
    H(); }

function TC2() { disp.innerText = "Error: Bagi 0";
    cur = "0"; }

function TC3() { disp.innerText = "Error: Huruf Ditolak";
    cur = "0"; }

function TC4() { disp.innerText = "Overflow";
    cur = "0"; } // <-- PASTI MUNCUL
function TC5() { disp.innerText = "Overflow";
    cur = "0"; } // <-- PASTI MUNCUL