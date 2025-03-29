class Stack {
  int[] stck = new int[10];
  int tos; // top-of-stack

  Stack() {
    tos = -1;
  }

  void push(int number) {

    if (tos == 9) {
      System.out.println("Stack is full. ");
      return;
    }

    stck[++tos] = number;
  }

  int pop() {

    if (tos < 0) {
      System.out.println("Stack underflow");
      return 0;
    }

    return stck[tos--];
  }
}
