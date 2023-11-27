const { createWorker } = require('tesseract.js');

const worker =  createWorker('eng+chi_tra');

(async () => {
  const { data: { text } } =  worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(text);
  await worker.terminate();
})();