//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n']
let seconds = 100

for (const elements of spinner) {
//console.log(spinner[i])
setTimeout(() => {
  process.stdout.write(elements);
}, seconds);
seconds += 300;
}
