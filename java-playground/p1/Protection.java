package p1;

public class Protection {
  int n = 1;
  private int n_pri = 2;
  protected int n_pro = 3;
  public int n_pub = 4;

  public Protection() {
    System.out.println("base constructor");
    System.out.println("n = " + n); // 1
    System.out.println("n_pri = " + n_pri); // 2
    System.out.println("n_pro = " + n_pro); // 3
    System.out.println("n_pub = " + n_pub); // 4
  }
}
