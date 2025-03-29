// superclass
class A1 {
  int i, j;

  void showij() {
    System.out.println("i and j: " + i + " " + j);
  }
}

// subclass
class B1 extends A1 {
  int k;

  void showk() {
    System.out.println("k: " + k);
  }

  void sum() {
    System.out.println("i + j + k: " + (i + j + k));
  }
}
