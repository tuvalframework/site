title: Tuval Graphic Interface (TGI) Documentation
language: en
---
**Tuval Graphic Interface (TGI)**,  provides all the infrastructure you need when developing desktop and mobile graphics applications. TGI offers three options as a drawing surface.
- HTML5 2d Context
- WebGL
- SVG

The objects provided by TGI, you can develop more flexible applications. With TGI, you get a drawing surface very easily, you can start drawing something very quicly with the pencil and brush objects you create on this surface.

### Quick View
```javascript
var tg = new Tuval.Graphics(200,200);
tg.drawLine(Tuval.Pens.Green,20,20,200,200);
```
{% iframe https://jsfiddle.net/tuvalframework/quezn719/show %}
