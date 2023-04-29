function loaded_script() {
    let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    $('#btn').wrap('<div style="background-color:' + randomColor + ';padding:10px"></div>');
}