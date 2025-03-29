package p2;

class OtherPackage {
  OtherPackage() {
    p1.Protection p = new p1.Protection();
    System.out.println("other package constructor");

    // same package or same class only
    // System.out.println("n = " + p.n); // 1

    // same class only
    // System.out.println("n_pri = " + p.n_pri);

    // same package, same class, or subclass of another package only.
    // System.out.println("n_pro = " + p.n_pro); // 3

    System.out.println("n_pub = " + p.n_pub); // 4
  }

}
