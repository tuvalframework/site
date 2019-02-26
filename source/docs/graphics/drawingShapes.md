title: Grafiksel şekillerin çizilmesi
---

Bir **Tuval** yüzeyine, kalemlere ve / veya fırçalara sahip olduğunuzda, çizgiler, şekiller, eğriler veya görüntüler çizebilirsiniz. **Tuval.Graphics** nesnesi, grafik şekillerini, eğrileri veya görüntüleri çizmek ve doldurmak için çizim ve doldurma yöntemleri sağlar. Örneğin, [fillRectangle](api/graphics/methods/fillRectangle.md) yordamı dolgulu renkte bir dikdörtgen çizer ve [drawRectangle](api/graphics/methods/drawRectangle.md) yordamı dikdörtgenin sınırlarını belirtilen kalemle çizer. Çizim fonksiyonları genellikle parametre olarak bir kalem(pen) alır ve dolgu fonksiyonları da bir fırça(brush) alır.

Ondan sonra bir dikdörtgen([RectangleF](api/RectangleF/rectangleF.md)) nesnesi, iki kalem(Pen) nesnesi ve düz bir fırça(SolidBrush) nesnesi  oluşturuyoruz.. Bir sonraki kod parçasında, [drawRectangle](api/graphics/methods/drawRectangle.md), fillEllipse ve drawLine yordamlarını çağırıyoruz. drawRectangle yordamı bir dikdörtgenin sınırlarını çizer, fillEllipse yordamı bir elipsi belirtilen fırçayla doldurur ve drawLine yordamı belirtilen kalemi kullanarak bir çizgi çizer.

*Typescript*
````typescript
const view = new Tuval.Graphics();
const rect: Tuval.RectangleF = new Tuval.Rectangle(20, 20, 100, 100);
const redPen: Tuval.Pen = new Tuval.Pen(Tuval.Color.Red, 3);
const blackPen: Tuval.Pen = Tuval.Pens.Black;

// fırça nesnesini oluşturuyoruz.
const greenBrush: Tuval.SolidBrush = new Tuval.SolidBrush(Tuval.Color.Green);
// şekilleri ve çizgileri oluşturuyoruz.
view.drawRectangle(redPen, rect);
view.fillEllipse(greenBrush, rect);
view.drawLine(blackPen, 0, 250, this.Width, 250);
view.fillEllipse(Brushes.Blue, 70, 220, 30, 30);
view.fillEllipse(Brushes.SkyBlue, 100, 210, 40, 40);
view.fillEllipse(Brushes.Green, 140, 200, 50, 50);
view.fillEllipse(Brushes.Yellow, 190, 190, 60, 60);
view.fillEllipse(Brushes.Violet, 250, 180, 70, 70);
view.fillEllipse(Brushes.Red, 320, 170, 80, 80);
````
{% iframe https://tuvalframework.github.io/Tuval/samples/graphics/SimpleDrawing.html %}

{% include_code Tuvalframework Rect Demo shapes/tuval.html %}
