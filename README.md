# Burc.JS

Burçlar hakkında bilgiler verir.

**Burçlar:**

1) Oğlak
2) Yengeç
3) Koç
4) Boğa
5) İkizler
6) Aslan
7) Başak
8) Terazi
9) Akrep
10) Yay
11) Kova
12) Balık

# Kullanım:

**1) Yükleme**

İlk olarak modülümüzü yüklememiz gerekiyor:

```
npm i burc.js@latest
```

**2) Tanımlama**

Elbette ikinci olarak modülümüzü tanımlamalıyız:

```
const burc = require("burc.js")
```

**3) Günlük Yorumu Alma**

Ve son olarak günlük yorumumuzu almalıyız:
(await önemli)

```
let yorum = await burc.gunluk("oğlak") 
console.log(yorum) // Oğlak burcunun günlük yorumu
```
