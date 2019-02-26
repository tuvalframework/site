title: Tuval Graphic Interface (TGI) Dokümantasyonu
---
**Tuval Graphic Interface (TGI)**,  masaüstü ve mobil grafik uygulamaları geliştirirken ihtiyacınız olan tüm altyapıyı sağlar.
TGI çizim yüzeyi olarak üç seçenek sunar.
- HTML5 2d Context
- WebGL
- SVG yapısı

TGI'in sağladığı nesneler sayesinde daha esnek uygulamalar geliştirebilirsiniz. TGI ile çok kolay bir şekilde çizim yüzeyi elde eder, bu yüzeye oluşturacağınız kalem ve fırça nesneleri ile çok kolay bir şekilde birşeyler çizmeye başlayabilirsiniz.

### Hızlı Bakış
```javascript
var tg = new Tuval.Graphics(200,200);
tg.drawLine(Tuval.Pens.Green,20,20,200,200);
```
{% iframe https://jsfiddle.net/tuvalframework/quezn719/show %}
