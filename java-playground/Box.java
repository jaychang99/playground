class Box {
  double width;
  double height;
  double depth;

  Box(Box ob) {
    width = ob.width;
    height = ob.height;
    depth = ob.depth;
  }

  Box() {
    // use -1 to indicate an uninitiailized box.
    width = -1;
    height = -1;
    depth = -1;
  }

  Box(double length) {
    width = height = depth = length;
  }

  Box(double w, double h, double d) {
    width = w;
    height = h;
    depth = d;
  }

  double volume() {
    return width * height * depth;
  }

  void setDim(double w, double h, double d) {
    width = w;
    height = h;
    depth = d;
  }
}

class BoxWeight extends Box {
  double weight;

  BoxWeight(double w, double h, double d, double m) {
    super(w, h, d);
    weight = m;
  }

  BoxWeight(BoxWeight ob) {
    super(ob);
    weight = ob.weight;
  }

  BoxWeight(double len, double m) {
    super(len);
    weight = m;
  }

  BoxWeight() {
    super();
    weight = -1;
  }

}

class ColorBox extends Box {
  int color;

  ColorBox(double w, double h, double d, int c) {
    width = w;
    height = h;
    depth = d;
    color = c;
  }
}

class Shipment extends BoxWeight {

  double cost;

  // for cloning
  Shipment(Shipment ob) {
    super(ob);
    cost = ob.cost;
  }

  Shipment(double w, double h, double d, double m, double c) {
    super(w, h, d, m);
    cost = c;
  }

  Shipment() {
    super();
    cost = -1;
  }

  Shipment(double len, double m, double c) {
    super(len, m);
    cost = c;
  }

}