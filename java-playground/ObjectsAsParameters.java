class ObjectsAsParameters {
  int a, b;

  ObjectsAsParameters(int i, int j) {
    a = i;
    b = j;
  }

  boolean equalTo(ObjectsAsParameters o) {
    if (o.a == a && o.b == b)
      return true;
    else
      return false;
  }
}
