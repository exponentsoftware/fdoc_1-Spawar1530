function triangle(length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
      line+="#".repeat(i)+"\n";
    }
    return line;
  }
  console.log(triangle(7));