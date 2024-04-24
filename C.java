package keyword;
//this is about this keyword in java

//this is calling by current object inside a method and constructor
/*class C {

    void show() {
        System.out.println(this);
    }

    public static void main(String[] args) {
        C r = new C();
        System.out.println(r);
        r.show();
    }
}*/

//this is doing with the help of instance and local variable....
class A {
    int a;

    A(int a) {
        this.a = a;
        // System.out.println(a);
    }

    void show() {
        System.out.println(a);
    }

    public static void main(String[] args) {
        A r = new A(100);
        r.show();
    }
}
