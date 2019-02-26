# Drawing Surface

Tuval kullanarak 2 veya 3 boyutlu çizim yapan uygulamalar temel olarak üç bileşeni kullanmaktadır. Canvas, fırçalar ve kalemler.
* Canvas nesnelerin çizileceği alandır.HTML5 uygulamalarında canvas nesnesi Graphics nesnesiyle oluşturulur.
* Fırçalar çizilen nesnelerin arkaplanlarının boyanmasından sorumlu nesnelerdir. SolidBrush nesnenin arkaplanını seçilen renge göre boyar. Farklı fırça nesneleri ile nesnelerin arkaplaları farklı şekilde boyanabilir. Fırçalar konusunda bu nesneleri detaylandıracağız.
* Kalemler çizilen nesnelerin kenarlık biçimlerini , renlerini ve kalınlıklarını belirler. Bir nesnenin kenarlıgı düz veya kesikli bir çizgi olabileceği gibi farklı renk ve kalınlıkta da ayarlanabilir.

Grafik nesneleri tuval ile ekrana çizmek için nesnenin dokusunu, rengini ve gemişliğini tanımlayan bir kalem ve fırça nesnesine ihtiyaç duyarsınız.Örneğin bir çizgi veya üçgen çizecekseniz buna uygun bir kalem nesnesi oluşturmanız gerekmektedir.

````typescript
const tuval = Tuval.Graphics();
const pen = new Tuval.Pen(Tuval.Color.Blue,1);
tuval.drawLine(pen, 0, 0, 100, 100);
````

Yukarıdaki kod ekrana mavi renkte 1 pixel kalınlığında bir çizgi çizecektir.