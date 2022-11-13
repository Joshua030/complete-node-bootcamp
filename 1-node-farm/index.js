const fs = require('fs');
const PATH = './starter/txt';

//Blocking Synchronous way

// const textIn=fs.readFileSync(`${PATH}/input.txt`,'utf-8');
// console.log(textIn)

// const textOut = `this is  what we know about the avocado:${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync(`${PATH}/output.txt`, textOut);
// console.log('file written!');

//Non-Blocking, asynchronous way (CallBack Functions)
fs.readFile(`${PATH}/start.txt`,'utf-8',(err,data)=>{
    if(err) return console.log('ERROR! 💥')
    fs.readFile(`${PATH}/${data}.txt`,'utf-8',(err,data1)=>{
        console.log(data1);
        fs.readFile(`${PATH}/append.txt`,'utf-8',(err,data2)=>{
            console.log(data2);
            fs.writeFile(`${PATH}/final.txt`, `${data1}\n${data2}`,'utf-8',err=>{
                console.log('Your file have been written 👏')
            })
        });
    });
});

console.log('Will read file');