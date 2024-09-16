const { writeFile } = require('fs');
const http = require('http');
const os = require('os');

const hostname = '127.0.0.1';
const port = 3000;

const logCompleteTask = () => {
  console.log('Complete Task!');
};


var information = {
  OSTYPE: os.type(),
  Platform: os.platform(),
  RAM: os.totalmem(),
  USEDRAM: os.totalmem() - os.freemem(),
  CPU: os.cpus()
};


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(information, null, 2));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


const filePath = 'D:\Nam3\lapTrinhMoNguon\B2\MaNguonMo1B2BT_Buoi2.txt'; 

// Ghi thông tin vào file
writeFile(filePath, JSON.stringify(information, null, 2), (err) => {
  if (err) {
    console.log('Error writing to file:', err);
    return;
  }
  logCompleteTask();
});