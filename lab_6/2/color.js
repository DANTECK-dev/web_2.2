function loaded_script() {
    let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    $('#btn').css('background-color', randomColor);
}

