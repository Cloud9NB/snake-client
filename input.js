let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if(key === 'w'){
    connection.write("Move: up")
   }
   if(key === 'a'){
     connection.write("Move: left")
   }
 
   if(key === 's'){
     connection.write("Move: down")
   }
 
   if(key === 'd'){
     connection.write("Move: right")
   }
   if(key === 'e'){
     connection.write("Say: close one!")
   }
   if(key === 'q'){
    connection.write("Say: how's it going?")
  }
  if(key === '1'){
    connection.write("Say: c u on da other side")
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {setupInput};