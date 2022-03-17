const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log('Hello!! Welcome to the Snake game!');
    conn.write('Name: Dog');
    conn.write('Say: Sup?!')
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };