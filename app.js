const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

let data = []
let silAr = []

var gunluk = "Günlük Burç Yorumları"

async function gunluk.oglak() {
	let oglak = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/oglak-burcu/')
	let oglak1 = await oglak.text()
	  let dom = new JSDOM(oglak1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Oğlak burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.yengec() {
    let yengec = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/yengec-burcu/')
	let yengec1 = await yengec.text()
	  let dom = new JSDOM(yengec1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Yengeç burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.koc() {
let koc = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/koc-burcu/')
	let koc1 = await koc.text()
	  let dom = new JSDOM(koc1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Koç burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.boga() {
let boga = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/boga-burcu/')
	let boga1 = await boga.text()
	  let dom = new JSDOM(boga1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Boğa burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.ikizler() {
let ikizler = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/ikizler-burcu/')
	let ikizler1 = await ikizler.text()
	  let dom = new JSDOM(ikizler1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`İkizler burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.aslan() {
let aslan = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/aslan-burcu/')
	let aslan1 = await aslan.text()
	  let dom = new JSDOM(aslan1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Aslan burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.basak() {
let basak = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/basak-burcu/')
	let basak1 = await basak.text()
	  let dom = new JSDOM(basak1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Başak burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.terazi() {
let terazi = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/terazi-burcu/')
	let terazi1 = await terazi.text()
	  let dom = new JSDOM(oglak1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Terazi burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.akrep() {
let akrep = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/akrep-burcu/')
	let akrep1 = await akrep.text()
	  let dom = new JSDOM(akrep1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Akrep burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.yay() {
let yay = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/yay-burcu/')
	let yay1 = await yay.text()
	  let dom = new JSDOM(yay1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Yay burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.kova() {
let kova = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/kova-burcu/')
	let kova1 = await kova.text()
	  let dom = new JSDOM(kova1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Kova burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}
async function gunluk.balik() {
let balik = await fetch('https://www.hurriyet.com.tr/mahmure/astroloji/balik-burcu/')
	let balik1 = await balik.text()
	  let dom = new JSDOM(balik1)
 let news = dom.window.document.querySelectorAll('p');
news.forEach(a=>silAr.push(a.textContent))
       data.push(`Balık burcu bugün`);
       data.push(`${silAr[5]}`);
	   
    return data.join(",\n")
}