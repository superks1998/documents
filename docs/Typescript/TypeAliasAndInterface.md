# So sánh Type Alias vs Interface

- **Type Alias**: "A type alias is exactly that - a name for any type"
- **Interface**: "A way to name an object type"

## Với Primitive Type

- TH này đơn giản là tạo một tên gọi khác cho kiểu primitive.

```js title='Ví dụ'
type StudentName = string;
type StudentAge = number;
type IsTopStudent = boolean;
```

## Với Object Type

- Thêm toán tử **?.** cho optional props.
- Thêm **readonly** nêu không có phép update giá trị của props.

```js title='Type Alias'
type Student = {
  readonly id: number; name: string;
  age?: number; // optional
}

const studentA: Student = {
  id: 1,
  name: 'Alice',
}

```

```js title='Interface'
interface Student {
  readonly id: number;
  name: string;
  age?: number; // optional
}

const studentB: Student = {
  id: 2,
  name: 'Bob',
  age: 18,
}

```

## Index Signatures

- **Index sigatures**(Chữ kí chỉ số) là một tính năng cho phép mô tả các Object có cặp key-value không cố định.

```js title='Ví dụ'
type GroceryList = { [groceryProduct: string]: number };

const groceryList: GroceryList = {
  carrots: 5,
  potatoes: 12,
  sweetPotatoes: 2,
  turnips: 1,
  parsnips: 1,
};
```

## Typeof

- **Typeof** là một toán tử được sử dụng để có kiểu dữ liệu của 1 biến, biểu thức hoặc đối tượng.
- Thường được sử dụng để tạo ra các kiểu dữ liệu tự động dựa trên các kiểu dữ liệu của biến hoặc đối tượng hiện tại.

```js title='Ví dụ'
let person = { name: "John", age: 30 };
let personType: typeof person;
// personType sẽ có kiểu dữ liệu là { name: string; age: number; }
```

## Indexed Access Types

- **Indexed Access Types** sử dụng cú pháp obj[key] để tạo ra kiểu dữ liệu dựa trên giá trị của chỉ số key.
- Áp dụng cho cả array và object.

```js title='Ví dụ'
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonKeyType = "name";
type PersonType = Person[PersonKeyType]; // string
```

## Keyof

- Keyof là một toán tử được sử dụng để tạo một kiểu union type của tất cả các khóa (chìa khóa) có thể được sử dụng trong một đối tượng.

```js title='Ví dụ'
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "address"
```

- Một ứng dụng phổ biến của keyof là khi bạn muốn viết các hàm chung (generic functions) có thể hoạt động trên bất kỳ đối tượng nào, không quan trọng đối tượng đó có những khóa gì.

```js title='Ví dụ'
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "John",
  age: 30,
  address: "123 Main St",
};

const personName: string = getProperty(person, "name"); // "John"
const personAge: number = getProperty(person, "age");   // 30
```

Trong hàm getProperty, K extends keyof T đảm bảo rằng chỉ có những khóa thuộc về T mới có thể được sử dụng làm tham số key, và T[K] là kiểu của giá trị trả về.

## Generic Type

- Generic Type cho phép tham số hoá kiểu dữ liệu, đặt tên kiểu dữ liệu thành một biến để sử dụng trong định nghĩa, sau đó trả về kiểu dữ liệu nhận vào từ đối số.
- Cú pháp cơ bản của generic type là T (hoặc bất kỳ tên nào bạn chọn)

```typescript title='Ví dụ'
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Sử dụng generic function với kiểu string
let resultString: string = identity("Hello");

// Sử dụng generic function với kiểu number
let resultNumber: number = identity(42);
```

- Nên sử dụng extends với generic type để kiểm soát kiểu dữ liệu đầu vào nhận từ tham số.

```typescript
// Generic class với extend
class Box<T extends string | number> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(42);

console.log(stringBox.getValue()); // "Hello"
console.log(numberBox.getValue()); // 42
```

## Mapped Object type

- Là tính năng mạnh mẽ giúp tạo các kiểu dữ liệu mới tuỳ chỉnh dựa trên kiểu dữ liệu hiện có.
- Sử dụng dấu **{}** và toán tử **in** để tạo ra các biến thể của kiểu dữ liệu.

```ts title='Ví dụ'
type MoviesByGenre = {
  action: "Die Hard";
  comedy: "Groundhog Day";
  sciFi: "Blade Runner";
  fantasy: "The Lord of the Rings: The Fellowship of the Ring";
  drama: "The Shawshank Redemption";
};

type MovieInfoByGenre<T> = {
  [K in keyof T]: T[K];
};

type Example = MovieInfoByGenre<MoviesByGenre>;
```

## Generic Function Arguments

```ts title='Ví dụ'
// Generic function với đối số kiểu T
function printArray<T>(arr: T[]): void {
  arr.forEach((element) => console.log(element));
}

// Sử dụng hàm với mảng kiểu number
const numbers: number[] = [1, 2, 3, 4, 5];
printArray(numbers);

// Sử dụng hàm với mảng kiểu string
const strings: string[] = ["apple", "banana", "orange"];
printArray(strings);
```

- Nếu bạn muốn giới hạn loại kiểu dữ liệu mà generic type T có thể nhận, bạn có thể sử dụng "constraints". Ví dụ, nếu bạn chỉ muốn chấp nhận các kiểu dữ liệu có phương thức length, bạn có thể viết hàm như sau:

```ts title='Ví dụ'
// Generic function với đối số kiểu T có phương thức length
function printLength<T extends { length: number }>(arr: T): void {
  console.log(arr.length);
}

// Sử dụng hàm với chuỗi có phương thức length
const str: string = "Hello, TypeScript!";
printLength(str);

// Sử dụng hàm với mảng có phương thức length
const arr: number[] = [1, 2, 3, 4, 5];
printLength(arr);

// Sử dụng hàm với đối tượng không có phương thức length (sẽ báo lỗi)
const obj = { key: "value" };
printLength(obj);
```

## Default Generic Argument

- Có thể cung cấp giá trị mặc định cho generic type thông qua default generic arguments.
- Điều này cho phép xác định giá trị mặc định cho generic type khi không có giá trị nào được truyền vào

```ts title='Ví dụ'
// Generic function với default generic argument
function identity<T = string>(value: T): T {
  return value;
}

// Sử dụng hàm mà không cung cấp giá trị cho generic type (sẽ sử dụng giá trị mặc định là string)
let resultString: string = identity("Hello");

// Sử dụng hàm với giá trị cụ thể cho generic type
let resultNumber: number = identity<number>(42);
```

- Giúp làm cho mã nguồn trở nên linh hoạt hơn và giảm sự phức tạp khi bạn không cần phải luôn luôn cung cấp giá trị cho generic types.
