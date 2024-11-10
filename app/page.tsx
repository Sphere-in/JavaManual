"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Search, Copy, Check } from "lucide-react"

// export default function JavaPrograms() 
const programs = [
  {
    id: 1,
    title: "Calculate Discounted Price",
    description: "A shopkeeper offers 10% discount on the printed price of a mobile phone. However, a customer has to pay 9% GST on the remaining amount. Write a program in Java to calculate the amount to be paid by the customer taking printed price as an input.",
    code: `
  import java.util.*;
  public class CameraPrice {
    public static void main(String args[]) {
      Scanner in = new Scanner(System.in);
      System.out.println("Enter printed price of Digital Camera:");
      double mrp = in.nextDouble();
      double dis = mrp * 10 / 100.0;
      double price = mrp - dis;
      double gst = price * 9 / 100.0;
      price = price + gst;
      System.out.println("Amount to be paid= " + price);
    }
  }
      `
  },
  {
    id: 2,
    title: "Calculate Correct Answers",
    description: "In a competitive examination, there were 150 questions. One candidate got 80% correct and the other candidate 72% correct. Write a program to calculate and display the correct answers each candidate got.",
    code: `
  public class KboatCompetitiveExam {
    public static void main(String args[]) {
      int totalQuestions = 150;
      int c1 = (int)(80 / 100.0 * totalQuestions);
      int c2 = (int)(72 / 100.0 * totalQuestions);
      System.out.println("Correct Answers of Candidate 1 = " + c1);
      System.out.println("Correct Answers of Candidate 2 = " + c2);
    }
  }
      `
  },
  {
    id: 3,
    title: "Convert Days to Years, Months, and Days",
    description: "Write a program in Java to accept the number of days and display it after converting it into number of years, months, and days.",
    code: `
  import java.util.Scanner;
  public class DaysToYear {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Convert Days to Number of Years");
      int balance, years, months, days;
      System.out.print("Enter total days: ");
      int numberOfDays = sc.nextInt();
      years = numberOfDays / 365;
      balance = numberOfDays % 365;
      months = balance / 30;
      days = balance % 30;
      System.out.println("Number of years: " + years);
      System.out.println("Number of months: " + months);
      System.out.println("Number of days: " + days);
    }
  }
      `
  },
  {
    id: 4,
    title: "Square and Cube of Numbers",
    description: "Write a program to input 2 numbers. If the first number is greater, display the square of the smaller number and cube of the greater number; otherwise vice-versa. If the numbers are equal, display 'BOTH NUMBERS ARE EQUAL'.",
    code: `
  import java.util.Scanner;
  public class CompareNumbers {
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print("Enter the first number: ");
      double number1 = scanner.nextDouble();
      System.out.print("Enter the second number: ");
      double number2 = scanner.nextDouble();
      if (number1 > number2) {
        System.out.println("Square of the smaller number: " + (number2 * number2));
        System.out.println("Cube of the greater number: " + Math.pow(number1, 3));
      } else if (number2 > number1) {
        System.out.println("Square of the smaller number: " + (number1 * number1));
        System.out.println("Cube of the greater number: " + Math.pow(number2, 3));
      } else {
        System.out.println("BOTH NUMBERS ARE EQUAL");
      }
    }
  }
      `
  },
  {
    id: 5,
    title: "Calculate Electricity Bill",
    description: "An Electricity Board charges for electricity per month from consumers according to units consumed. Write a program to calculate the bill by taking the consumer's name and units consumed as inputs.",
    code: `
  import java.io.*;
  public class Electricity {
    public static void main(String args[])throws IOException {
      BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
      System.out.println("Enter consumer name:");
      String name = in.readLine();
      System.out.println("Enter consumer number:");
      int cn = Integer.parseInt(in.readLine());
      System.out.println("Enter the units consumed:");
      int u = Integer.parseInt(in.readLine());
      double p = 0.0;
      if (u <= 100) p = u * 1.80;
      else if (u <= 300) p = u * 2.30;
      else if (u <= 500) p = u * 2.80;
      else p = u * 3.50;
      System.out.println("Consumer name: " + name);
      System.out.println("Units consumed: " + u);
      System.out.println("Amount to be paid: " + p);
    }
  }
      `
  },
  {
    id: 6,
    title: "Identify Digit Count and Calculate",
    description: "Write a program to check if an input integer is a 1-digit, 2-digit, or 3-digit number. For one digit, display its square; for two digits, display square root; and for three digits, display cube root.",
    code: `
  import java.util.*;
  public class Digits {
    public static void main(String args[]) {
      Scanner in = new Scanner(System.in);
      System.out.print("Enter a number: ");
      int n = in.nextInt();
      if (n >= 0 && n < 10) {
        System.out.println("One digit number. Square: " + (n * n));
      } else if (n >= 10 && n < 100) {
        System.out.println("Two digits number. Square root: " + Math.sqrt(n));
      } else if (n >= 100 && n < 1000) {
        System.out.println("Three digits number. Cube root: " + Math.cbrt(n));
      } else {
        System.out.println("The number contains four or more digits.");
      }
    }
  }
      `
  },
  {
    id: 7,
    title: "Sum of Negative Numbers",
    description: "Write a program to accept any 10 numbers and display the sum of only the negative numbers.",
    code: `
  import java.util.Scanner;
  public class SumNegNumbers {
    public static void main(String[] args) {
      int sum = 0, num;
      Scanner input = new Scanner(System.in);
      System.out.println("Enter 10 numbers:");
      for (int i = 0; i < 10; i++) {
        num = input.nextInt();
        if (num < 0) {
          sum += num;
        }
      }
      System.out.println("Sum of negative numbers: " + sum);
    }
  }
      `
  },
  {
    id: 8,
    title: "Identify Even and Odd Digits",
    description: "Write a program to input a number and display all its digits, stating whether each digit is even or odd using a do-while loop.",
    code: `
  import java.util.Scanner;
  public class EvenOdd {
    public static void main(String[] args) {
      Scanner reader = new Scanner(System.in);
      System.out.print("Enter a number: ");
      int num = reader.nextInt();
      int rem;
      do {
        rem = num % 10;
        if (rem % 2 == 0) {
          System.out.println(rem + " is even");
        } else {
          System.out.println(rem + " is odd");
        }
        num /= 10;
      } while (num != 0);
    }
  }
      `
  },
  {
    id: 9,
    title: "Palindrome Check",
    description: "Write a program to check if the entered number is a palindrome.",
    code: `
  import java.util.Scanner;
  public class Palindrome {
    public static void main(String args[]) {
      Scanner in = new Scanner(System.in);
      System.out.print("Input a number: ");
      int n = in.nextInt();
      int sum = 0, r;
      int temp = n;
      while (n > 0) {
        r = n % 10;
        sum = (sum * 10) + r;
        n = n / 10;
      }
      if (temp == sum) {
        System.out.println("It is a Palindrome number.");
      } else {
        System.out.println("Not a palindrome.");
      }
    }
  }
      `
  },
  {
    id: 10,
    title: "Generate Fibonacci Series",
    description: "Write a program to generate the Fibonacci series up to the nth term.",
    code: `
  import java.util.Scanner;
  public class Fibonacci {
    public static void main(String[] args) {
      int n, a = 0, b = 1, c;
      Scanner s = new Scanner(System.in);
      System.out.print("Enter value of n: ");
      n = s.nextInt();
      System.out.print("Fibonacci Series: ");
      for (int i = 1; i <= n; i++) {
        System.out.print(a + " ");
        c = a + b;
        a = b;
        b = c;
      }
    }
  }
      `
  },
  {
    id: 11,
    title: "Find the Largest Among Three Numbers",
    description: "Write a program to find the largest among three numbers entered by the user.",
    code: `
  import java.util.Scanner;
  public class LargestNumberExample {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Enter the first number: ");
      int n1 = sc.nextInt();
      System.out.print("Enter the second number: ");
      int n2 = sc.nextInt();
      System.out.print("Enter the third number: ");
      int n3 = sc.nextInt();
      if (n1 >= n2 && n1 >= n3) {
        System.out.println(n1 + " is the largest number.");
      } else if (n2 >= n1 && n2 >= n3) {
        System.out.println(n2 + " is the largest number.");
      } else {
        System.out.println(n3 + " is the largest number.");
      }
    }
  }
      `
  },
  {
    id: 12,
    title: "Sum of Digits of a Number",
    description: "Write a program to enter a number and display the sum of its digits.",
    code: `
  import java.util.Scanner;
  public class DigitSum {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      System.out.print("Enter the number: ");
      int m = s.nextInt();
      int sum = 0;
      while (m > 0) {
        int n = m % 10;
        sum += n;
        m /= 10;
      }
      System.out.println("Sum of Digits: " + sum);
    }
  }
      `
  },
  {
    id: 13,
    title: "Generate Number Pattern",
    description: "Write a program to generate a pattern: 1, 1 2, 1 2 3, 1 2 3 4, 1 2 3 4 5.",
    code: `
  public class Pattern {
    public static void main(String args[]) {
      int n = 5;
      for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
          System.out.print(j + " ");
        }
        System.out.println();
      }
    }
  }
      `
  },
  {
    id: 14,
    title: "Find Smallest and Largest in Array",
    description: "Write a program to display the smallest and greatest numbers in a given 1D array.",
    code: `
  public class FindLargestSmallest {
    public static void main(String[] args) {
      int[] numbers = {55, 32, 45, 98, 82, 11, 9, 39, 50};
      int smallest = numbers[0];
      int largest = numbers[0];
      for (int i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) largest = numbers[i];
        else if (numbers[i] < smallest) smallest = numbers[i];
      }
      System.out.println("Largest Number is : " + largest);
      System.out.println("Smallest Number is : " + smallest);
    }
  }
      `
  },
  {
    id: 15,
    title: "Multilevel Inheritance Example",
    description: "Write a program to perform multilevel inheritance, demonstrating inheritance of methods.",
    code: `
  class Car {
    public Car() {
      System.out.println("Class Car");
    }
    public void vehicleType() {
      System.out.println("Vehicle Type: Car");
    }
  }
  class Maruti extends Car {
    public Maruti() {
      System.out.println("Class Maruti");
    }
    public void brand() {
      System.out.println("Brand: Maruti");
    }
    public void speed() {
      System.out.println("Max: 90Kmph");
    }
  }
  public class Maruti800 extends Maruti {
    public Maruti800() {
      System.out.println("Maruti Model: 800");
    }
    public void speed() {
      System.out.println("Max: 80Kmph");
    }
    public static void main(String args[]) {
      Maruti800 obj = new Maruti800();
      obj.vehicleType();
      obj.brand();
      obj.speed();
    }
  }
      `
  },
  {
    id: 16,
    title: "String Functions Example",
    description: "Write a program to demonstrate five string functions in Java.",
    code: `
  class StringFunctions {
    public static void main(String[] args) {
      String s1 = "Adithya";
      String s2 = "Adithya";
      String s3 = "Adi";
      System.out.println("Compare s1 and s2: " + s1.equals(s2));
      System.out.println("Character at position 5: " + s1.charAt(5));
      System.out.println(s1.concat(" the author"));
      System.out.println("Length of s1: " + s1.length());
      System.out.println("Lowercase s1: " + s1.toLowerCase());
      System.out.println("Uppercase s1: " + s1.toUpperCase());
      System.out.println("Index of 'a': " + s1.indexOf('a'));
      System.out.println("Substring (0,4): " + s1.substring(0, 4));
    }
  }
      `
  },
  {
    id: 17,
    title: "Student Class with Parameterized Constructor",
    description: "Write a program to create a 'Student' class that stores information for 2 students using a parameterized constructor, then displays the data using a member method.",
    code: `
  import java.util.Scanner;
  class StudentDetail {
    int Roll, hindi, eng;
    String NameID;
    StudentDetail(int p, String q, int r, int s) {
      Roll = p;
      NameID = q;
      hindi = r;
      eng = s;
    }
    void ShowData() {
      System.out.println("Roll Number: " + Roll);
      System.out.println("Student's Name: " + NameID);
      System.out.println("Hindi Marks: " + hindi);
      System.out.println("English Marks: " + eng);
    }
  }
  public class StudentParameterizedConstructor {
    public static void main(String args[]) {
      Scanner s = new Scanner(System.in);
      System.out.print("Enter Name of the Student: ");
      String Name = s.nextLine();
      System.out.print("Enter Class Roll Number: ");
      int RollNumber = s.nextInt();
      System.out.print("Enter Hindi Marks: ");
      int Hindi = s.nextInt();
      System.out.print("Enter English Marks: ");
      int English = s.nextInt();
      StudentDetail std = new StudentDetail(RollNumber, Name, Hindi, English);
      System.out.println("Details of the Student Entered are:");
      std.ShowData();
    }
  }
      `
  },
  {
    id: 18,
    title: "Method Overloading",
    description: "Write a program to demonstrate method overloading.",
    code: `
  class Multiply {
    void mul(int a, int b) {
      System.out.println("Product of two: " + (a * b));
    }
    void mul(int a, int b, int c) {
      System.out.println("Product of three: " + (a * b * c));
    }
  }
  public class Polymorphism {
    public static void main(String args[]) {
      Multiply m = new Multiply();
      m.mul(6, 10);
      m.mul(10, 6, 5);
    }
  }
      `
  },
  // More entries can be added here as needed
];


export default function JavaProgramsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("program1")
  const [copiedStates, setCopiedStates] = useState<Record<number, boolean>>({})

  const filteredPrograms = programs.filter(
    (program) =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `Program ${program.id}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCopy = (id: number, code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedStates((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => setCopiedStates((prev) => ({ ...prev, [id]: false })), 2000)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Core Java Lab Manual Programs</h1>
      <div className="mb-4 relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        <Input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col md:flex-row">
        <ScrollArea className="h-[300px] md:h-[500px] md:w-[200px] md:flex-shrink-0 ">
          <TabsList className="flex flex-col w-full border-none mt-100 ">
            {filteredPrograms.map((program) => (
              <TabsTrigger
                key={program.id}
                value={`program${program.id}`}
                className="justify-start px-6 py-4 text-left text-base hover:bg-accent data-[state=active]:bg-accent min-h-[3rem] border-b border-border/40 last:border-b-0"
              >
                Program {program.id}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>
        <div className="flex-grow mt-4 md:mt-0 md:ml-4">
          {filteredPrograms.map((program) => (
            <TabsContent key={program.id} value={`program${program.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{program.description}</p>
                  <div className="relative">
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                      <code>{program.code}</code>
                    </pre>
                    <Button
                      variant="outline"
                      size="default"
                      className="absolute top-2 right-2"
                      onClick={() => handleCopy(program.id, program.code)}
                    >
                      {copiedStates[program.id] ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}