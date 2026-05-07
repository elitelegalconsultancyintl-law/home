        /* MOBILE MENU */
        const menuBtn = document.getElementById("menuBtn");
        const drawer = document.getElementById("drawer");
        const overlay = document.getElementById("overlay");

        menuBtn.onclick = () => { drawer.classList.add("active"); overlay.classList.add("active"); }
        overlay.onclick = () => { drawer.classList.remove("active"); overlay.classList.remove("active"); }