title: Bazı Temel Tuval.Graphics Nesneleri
---

Önceki bölümlerdeki kod örneklerinde basit bir grafik uygulaması yazmak için gereken nesnelerden bazıları ile tanıştık. Bir sonraki bölüme geçmeden önce, **Tuval Framework** tarafından sağlanan Color, PointF ve RectangleF nesneleri  gibi bazı temel Tuval nesnelerini konuşmakta fayda var. Bu nesnelerin anlaşılması çok önemlidir tüm uygulamalarımızda karşımıza çıkacak olan çok temel nesnelerdir.

## Color nesnesi

Önceki örneklerimizde Renk (Color) nesnesini kullandığımızı fark etmiş olabilirsiniz. Renk(Color) nesnesi bir RGBA (Red, Green, Blue, Alpha) dizisini temsil eder (kırmızı-yeşil-mavi, alfa) renk. Bu nesne hemen hemen her renk için statik bir özellik içerir. Örneğin, Color.Black ve Color.Red sırasıyla siyah ve kırmızıyı temsil eder. Bu statik özelliklerin yanı sıra, bu yapı aşağıdaki tabloda tanımlanan ek özelliklere sahiptir. IsKnownColor, IsNamedColor ve IsSystemColor, hemen hemen her rengi bir üye olarak yeniden tanımlayan KnownColor numaralandırma üyelerini temsil eder.

| Property                                 | Description                                                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Red, Blue, Green, Aqua, Azure, and so on | A specified color static property for almost every color.                                                             |
| R                                        | Returns the red component value in a Color structure.                                                                 |
| G                                        | Returns the green component value in a Color structure.                                                               |
| B                                        | Returns the blue component value in a Color structure.                                                                |
| A                                        | Returns the alpha component value in a Color structure. We discuss alpha in color-related sections in later chapters. |
| IsEmpty                                  | Returns the red component value in a Color structure.                                                                 |
| IsKnownColor                             | Returns the green component value in a Color structure.                                                               |
| IsNamedColor                             | Returns the blue component value in a Color structure.                                                                |
| Name                                     | Returns the red component value in a Color structure.                                                                 |
| FromRgba                                 | Returns the green component value in a Color structure.                                                               |
| FromKnownColor                           | Returns the blue component value in a Color structure.                                                                |
| FromName                                 | Returns the red component value in a Color structure.                                                                 |
| getBrightness                            | Returns the green component value in a Color structure.                                                               |
| getHue                                   | Returns the blue component value in a Color structure.                                                                |
| getSaturation                            | Returns the blue component value in a Color structure.                                                                |
| toArgb                                   | Returns the blue component value in a Color structure.                                                                |
| toKnownColor                             | Returns the blue component value in a Color structure.                                                                |

## PointF Nesnesi

**Tuval.Graphics** içerisinde bir nokta(PointF) nesnesi iki boyutlu bir düzlemde bir nokta tanımlayan x ve y koordinat çiftini temsil eder. PointF nesnesinin yapılandırıcısı(constructor) x ve y koordinatlarını parametre olarak alır.

```Typescript
const point = new Tuval.PointF(10,10);
```

 PointF nesnesi üç özellik tanımlar: IsEmpty, X ve Y. Bir nokta boşsa IsEmpty özelliği true değerini döndürür; bu, hem X hem de Y değerlerinin sıfır olduğu anlamına gelir; Aksi takdirde false döndürür. X ve Y özellikleri, sırasıyla bir noktanın x ve y koordinatlarını döndürür. Nokta yapısının **Empty** statik özelliği, X ve Y değerleri sıfıra ayarlanmış yeni bir nokta oluşturur.

PointF.Empty özelliğini kullanarak sıfır X ve Y değerlerine sahip bir nokta oluşturur ve X ve Y özelliklerini kullanarak yeni koordinat değerleri atar. Bu örnek, bir Graphics nesnesi oluşturur ve drawLine yordamı, tanımlanan kalemi kullanarak birinci noktadan ikinci noktaya başlayan bir çizgi çizer.

```Typescript
// Yeni bir PointF nesnesi oluşturuyoruz.
const pt:Tuval.PointF = new Tuval.PointF(50, 50);
// PointF.Empty  özelliğini kullanarak yeni bir PointF örneği oluşturuyoruz.
const newPoint: Tuval.PointF = Tuval.PointF.Empty;
// X ve Y koordinatlarını ayarlıyoruz.
newPoint.X = 100;
newPoint.Y = 200;
// Graphics nesnesi örneği oluşturuyoruz.
const view: Tuval.Graphics =new Tuval.Graphics();
// Pen nesnesinin oluşturuyoruz mavi ve 4 pixel kalınlığında
const pn: Tuval.Pen = new Tuval.Pen(Tuval.Color.Blue, 4);
view.drawLine(pn, pt, newPoint);
```

## RectangleF Nesnesi

RectangleF nesnesi **Tuval.Graphics** 'te bir dikdörtgeni temsil eder. Bir RectangleF nesnesi, sol üst köşeyi ve dikdörtgen bir bölgenin yüksekliğini ve genişliğini saklar. PointF ve SizeF nesnelerinden veya dikdörtgenin başlangıç ve bitiş koordinatları olarak dört tam sayı değerini kullanarak bir RectangleF nesnesi oluşturabilirsiniz.

```Typescript
const pt: Tuval.PointF = new Tuval.PointF(10, 10);
const sz: Tuval.SizeF = new Tuval.SizeF(60, 40);
const rect1:Tuval.RectangleF = Tuval.RectangleF.Empty;
const rect2: Tuval.RectangleF = new Tuval.RectangleF(20, 30, 30, 10);

if (rect1.IsEmpty){
    rect1.Location = pt;
    rect1.Width = sz.Width;
    rect1.Height = sz.Height;
}

string str = "Location:"+ rect1.Location.toString();
str += ", X:" +rect1.X.toString();
str += ", Y:"+ rect1.Y.toString();
str += ", Left:"+ rect1.Left.toString();
str += ", Right:"+ rect1.Right.toString();
str += ", Top:"+ rect1.Top.toString();
str += ", Bottom:"+ rect1.Bottom.toString();
```
RectangleF nesnesi, dikdörtgenin yüksekliğini, genişliğini ve konumunu elde etmek için kullanılabilecek özellikler sağlar. Aşağıdaki tablo RectangleF nesnesinin özelliklerini açıklar.

| Property | Description                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| Bottom   | Returns the y-coordinate of the bottom edge.                                                                         |
| Height   | Represents the rectangle's height.                                                                                   |
| IsEmpty  | Returns true if all of the rectangle's values (starting point, height, and width) are zero; otherwise returns false. |
| Left     | Returns the x-coordinate of the left edge.                                                                           |
| Location | Represents the coordinates of the upper left corner.                                                                 |
| Right    | Returns the x-coordinate of the right edge.                                                                          |
| Size     | Represents the size of a rectangle.                                                                                  |
| Top      | Returns the y-coordinate of the top edge.                                                                            |
| Width    | Represents the width of a rectangle.                                                                                 |
| X        | Represents the x-coordinate of the upper left corner.                                                                |
| Y        | Represents the y-coordinate of the upper left corner.                                                                |

Aşağıdaki örnekte, üç RectangleF nesnesi oluşturmak için üç farklı yöntem kullanır. İlk yöntem, bir Nokta(PointF) ve Boyut(SizeF) kullanarak bir Rectangle nesnesi oluşturur. İkinci ve üçüncü yöntemler, başlangıç x ve y koordinatları olarak dört tam sayı değeri ve dikdörtgenin genişliğini ve yüksekliğini kullanarak bir RectangleF örneği oluşturur. RectangleF oluşturduktan sonra, program Pen ve SolidBrush sınıflarını kullanarak kalem ve fırça nesneleri oluşturur ve dikdörtgenleri çizip doldurmak için **Tuval.Graphics** doldurma ve çizme yordamlarını çağırır.

*Typescript*
```Typescript
// Create a Graphics object
const view: Tuval.Graphics = new Tuval.Graphics();
const x: number = 40;
const y: number = 40;
const height: number = 120;
const width: number = 120;

const pt: Tuval.PointF = new Tuval.PointF(80, 80);

const sz: Tuval.SizeF = new Tuval.SizeF(100, 100);
const rect1: Tuval.RectangleF = new Tuval.RectangleF(pt, sz);
const rect2: Tuval.RectangleF = new Tuval.RectangleF(x, y, width, height);
const rect3:Tuval.RectangleF = new Tuval.RectangleF(10, 10, 180, 180);

const redPen:Tuval.Pen = new Tuval.Pen(Tuval.Color.Red, 2);
const greenBrush:Tuval.SolidBrush =new Tuval.SolidBrush(Tuval.Color.Blue);
const blueBrush:Tuval.SolidBrush = new Tuval.SolidBrush(Tuval.Color.Green);
view.drawRectangle(redPen, rect3);
view.fillRectangle(blueBrush, rect2);
view.fillRectangle(greenBrush, rect1);
```

