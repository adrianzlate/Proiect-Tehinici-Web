document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 ||     e.keyCode === 117 || e.keycode === 17 || e.keycode === 85)) {//Wiew Source , Copy/Paste Disabled
        alert('Sorry mate,but if you want to see the source code you can see it just here : https://github.com/adrianzlate/Proiect-Tehinici-Web');
    }
    return false;
};
