
class AbstractDemo {
  static void run() {
    B2 b = new B2();

    b.callme();
    b.callmetoo();
  }
}

abstract class A2 {
  abstract void callme();

  void callmetoo() {
    System.out.println("This is a concrete method");
  }
}

class B2 extends A2 {
  void callme() {
    System.out.println("B's implementation of callme. ");
  }
}
