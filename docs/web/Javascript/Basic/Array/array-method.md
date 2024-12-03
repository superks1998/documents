---
sidebar_position: 11
---

# Array Method

Dưới đây là mô tả chi tiết về các phương thức của mảng trong JavaScript, bao gồm tham số đầu vào, kết quả trả về, và ví dụ.

---

## Adding/removing elements

#### 1. **`push()`**

- **Mô tả**: Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
- **Cú pháp**: `array.push(element1, element2, ..., elementN)`
- **Tham số**: `element1, element2, ..., elementN` - Các phần tử sẽ được thêm vào cuối mảng.
- **Trả về**: Số nguyên, là độ dài mới của mảng sau khi thêm các phần tử.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana'];
    let newLength = fruits.push('Orange');
    console.log(fruits);      // Kết quả: ['Apple', 'Banana', 'Orange']
    console.log(newLength);    // Kết quả: 3
    ```

---

#### 2. **`pop()`**

- **Mô tả**: Xóa phần tử cuối cùng của mảng và trả về phần tử đã xóa.
- **Cú pháp**: `array.pop()`
- **Tham số**: Không có.
- **Trả về**: Phần tử đã bị xóa khỏi mảng. Nếu mảng rỗng, trả về `undefined`.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    let lastFruit = fruits.pop();
    console.log(lastFruit); // Kết quả: 'Orange'
    console.log(fruits);    // Kết quả: ['Apple', 'Banana']
    ```

---

#### 3. **`shift()`**

- **Mô tả**: Xóa phần tử đầu tiên của mảng và trả về phần tử đã xóa.
- **Cú pháp**: `array.shift()`
- **Tham số**: Không có.
- **Trả về**: Phần tử đầu tiên đã bị xóa khỏi mảng. Nếu mảng rỗng, trả về `undefined`.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    let firstFruit = fruits.shift();
    console.log(firstFruit); // Kết quả: 'Apple'
    console.log(fruits);     // Kết quả: ['Banana', 'Orange']
    ```

---

#### 4. **`unshift()`**

- **Mô tả**: Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng.
- **Cú pháp**: `array.unshift(element1, element2, ..., elementN)`
- **Tham số**: `element1, element2, ..., elementN` - Các phần tử sẽ được thêm vào đầu mảng.
- **Trả về**: Số nguyên, là độ dài mới của mảng sau khi thêm các phần tử.
- **Ví dụ**:

    ```javascript
    let fruits = ['Banana', 'Orange'];
    let newLength = fruits.unshift('Apple');
    console.log(fruits);      // Kết quả: ['Apple', 'Banana', 'Orange']
    console.log(newLength);   // Kết quả: 3
    ```

---

#### 5. **`splice()`**

- **Mô tả**: Thêm, xóa, hoặc thay thế các phần tử trong mảng.
- **Cú pháp**:
    - **Thêm**: `array.splice(start, 0, item1, item2, ...)`
    - **Xóa**: `array.splice(start, deleteCount)`
    - **Thay thế**: `array.splice(start, deleteCount, item1, item2, ...)`
- **Tham số**:
    - `start` - Chỉ mục bắt đầu thay đổi.
    - `deleteCount` - Số lượng phần tử muốn xóa bắt đầu từ `start`. Nếu `deleteCount` là 0, không xóa phần tử nào.
    - `item1, item2, ...` - Các phần tử muốn thêm vào mảng tại vị trí `start`.
- **Trả về**: Mảng chứa các phần tử đã xóa. Nếu không có phần tử nào bị xóa, trả về một mảng trống.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    let removed = fruits.splice(1, 1, 'Kiwi'); // Thay 'Banana' bằng 'Kiwi'
    console.log(fruits);   // Kết quả: ['Apple', 'Kiwi', 'Orange']
    console.log(removed);  // Kết quả: ['Banana']
    ```

---

#### 6. **`slice()`**

- **Mô tả**: Tạo một mảng mới chứa một phần các phần tử của mảng gốc, bắt đầu từ `start` và kết thúc trước `end`.
- **Cú pháp**: `array.slice(start, end)`
- **Tham số**:
    - `start` - Chỉ mục bắt đầu (bao gồm). Nếu không có, mặc định là 0.
    - `end` - Chỉ mục kết thúc (không bao gồm). Nếu không có, mặc định là độ dài mảng.
- **Trả về**: Một mảng mới chứa các phần tử từ `start` đến `end - 1`.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
    let citrus = fruits.slice(1, 3);
    console.log(citrus); // Kết quả: ['Banana', 'Orange']
    ```

---

## Manipulating Arrays

#### 7. **`concat()`**

- **Mô tả**: Gộp hai hoặc nhiều mảng, trả về mảng mới.
- **Cú pháp**: `array.concat(array2, array3, ..., arrayN)`
- **Tham số**: `array2, array3, ..., arrayN` - Các mảng hoặc phần tử muốn gộp vào mảng ban đầu.
- **Trả về**: Mảng mới chứa các phần tử từ mảng ban đầu và các mảng hoặc phần tử được gộp vào.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana'];
    let moreFruits = ['Orange', 'Mango'];
    let combined = fruits.concat(moreFruits);
    console.log(combined); // Kết quả: ['Apple', 'Banana', 'Orange', 'Mango']
    ```

---

## Finding elements

#### 8. **`indexOf()`**

- **Mô tả**: Trả về vị trí của phần tử đầu tiên tìm thấy trong mảng, hoặc `-1` nếu không tìm thấy.
- **Cú pháp**: `array.indexOf(searchElement, fromIndex)`
- **Tham số**:
    - `searchElement` - Phần tử cần tìm trong mảng.
    - `fromIndex` (tùy chọn) - Vị trí bắt đầu tìm kiếm, mặc định là 0.
- **Trả về**: Chỉ mục đầu tiên tìm thấy của `searchElement`, hoặc `-1` nếu không tìm thấy.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    console.log(fruits.indexOf('Banana')); // Kết quả: 1
    console.log(fruits.indexOf('Grapes')); // Kết quả: -1
    ```

---

### 9. **`includes()`**

- **Mô tả**: Kiểm tra xem mảng có chứa phần tử cụ thể không, trả về `true` hoặc `false`.
- **Cú pháp**: `array.includes(searchElement, fromIndex)`
- **Tham số**:
    - `searchElement` - Phần tử cần kiểm tra trong mảng.
    - `fromIndex` (tùy chọn) - Vị trí bắt đầu tìm kiếm, mặc định là 0.
- **Trả về**: `true` nếu phần tử có trong mảng, `false` nếu không có.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    console.log(fruits.includes('Banana')); // Kết quả: true
    console.log(fruits.includes('Grapes')); // Kết quả: false
    ```

---

### 10. **`find()`**

- **Mô tả**: Trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện của hàm kiểm tra.
- **Cú pháp**: `array.find(callback(element, index, array), thisArg)`
- **Tham số**:
    - `callback` - Hàm thực thi với mỗi phần tử trong mảng, nhận ba tham số:
        - `element` - Phần tử hiện tại trong mảng.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `thisArg` (tùy chọn) - Giá trị được sử dụng làm `this` khi thực thi `callback`.
- **Trả về**: Phần tử đầu tiên thỏa mãn điều kiện, hoặc `undefined` nếu không có phần tử nào thỏa mãn.
- **Ví dụ**:

    ```javascript
    let numbers = [5, 12, 8, 130, 44];
    let found = numbers.find(element => element > 10);
    console.log(found); // Kết quả: 12
    ```

---

## **`findIndex()`**

- **Mô tả**: Tìm chỉ mục (index) của phần tử đầu tiên thỏa mãn điều kiện của hàm kiểm tra.

- **Cú pháp**: `array.findIndex(callback(element, index, array), thisArg)`

- **Tham số**:
    - `callback` - Hàm kiểm tra với mỗi phần tử, nhận ba tham số:
        - `element` - Phần tử hiện tại trong mảng.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `thisArg` (tùy chọn) - Giá trị sử dụng làm this khi thực thi callback.
- **Trả về**: Chỉ mục của phần tử đầu tiên thỏa mãn điều kiện, hoặc -1 nếu không tìm thấy.
- **Ví dụ**:

    ```javascript
    const array = [5, 12, 8, 130, 44];
    const index = array.findIndex(element => element > 10);
    console.log(index); // Kết quả: 1
    ```
---

## High-order methods

## **`forEach()`**
- **Mô tả**:  Thực thi một hàm cho mỗi phần tử của mảng.

- **Cú pháp**:  `array.forEach(callback(element, index, array), thisArg)`

- **Tham số**:
    - `callback` - Hàm thực thi với mỗi phần tử, nhận ba tham số:
        - `element` - Phần tử hiện tại trong mảng.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `thisArg` (tùy chọn) - Giá trị sử dụng làm this khi thực thi callback.

- **Trả về**: `undefined`

- **Ví dụ**:

    ```javascript
    const array = ['a', 'b', 'c'];
    array.forEach(element => console.log(element));
    // Kết quả: 'a', 'b', 'c'
    ```

---

### 11. **`filter()`**

- **Mô tả**: Tạo một mảng mới chứa các phần tử thỏa mãn điều kiện của hàm kiểm tra.
- **Cú pháp**: `array.filter(callback(element, index, array), thisArg)`
- **Tham số**:
    - `callback` - Hàm thực thi với mỗi phần tử, nhận ba tham số:
        - `element` - Phần tử hiện tại trong mảng.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `thisArg` (tùy chọn) - Giá trị sử dụng làm `this` khi thực thi `callback`.
- **Trả về**: Một mảng mới chứa các phần tử thỏa mãn điều kiện, hoặc mảng trống nếu không có phần tử nào thỏa mãn.
- **Ví dụ**:

    ```javascript
    let numbers = [5, 12, 8, 130, 44];
    let filtered = numbers.filter(element => element > 10);
    console.log(filtered); // Kết quả: [12, 130, 44]
    ```

---

### 12. **`map()`**

- **Mô tả**: Tạo một mảng mới chứa các giá trị sau khi áp dụng hàm chuyển đổi lên từng phần tử của mảng.
- **Cú pháp**: `array.map(callback(currentValue, index, array), thisArg)`
- **Tham số**:
    - `callback` - Hàm được áp dụng lên mỗi phần tử, nhận ba tham số:
        - `currentValue` - Phần tử hiện tại trong mảng.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `thisArg` (tùy chọn) - Giá trị làm `this` khi thực thi `callback`.
- **Trả về**: Một mảng mới chứa các giá trị sau khi áp dụng `callback`.
- **Ví dụ**:

    ```javascript
    let numbers = [1, 4, 9, 16];
    let mapped = numbers.map(x => x * 2);
    console.log(mapped); // Kết quả: [2, 8, 18, 32]
    ```

---

### 13. **`reduce()`**

- **Mô tả**: Thực hiện hàm giảm trên mảng để nhận về một giá trị duy nhất (tích lũy).
- **Cú pháp**: `array.reduce(callback(accumulator, currentValue, index, array), initialValue)`
- **Tham số**:
    - `callback` - Hàm thực thi với từng phần tử, nhận bốn tham số:
        - `accumulator` - Giá trị tích lũy.
        - `currentValue` - Phần tử hiện tại.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `initialValue` (tùy chọn) - Giá trị khởi tạo cho `accumulator`.
- **Trả về**: Giá trị tích lũy cuối cùng.
- **Ví dụ**:

    ```javascript
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // Kết quả: 10
    ```

---

### 14. **`some()`**

- **Mô tả**: Kiểm tra xem ít nhất một phần tử trong mảng có thỏa mãn điều kiện hay không.
- **Cú pháp**: `array.some(callback(element, index, array), thisArg)`
- **Tham số**:
    - `callback` - Hàm kiểm tra, nhận ba tham số:
        - `element` - Phần tử hiện tại trong mảng.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `thisArg` (tùy chọn) - Giá trị làm `this` khi thực thi `callback`.
- **Trả về**: `true` nếu ít nhất một phần tử thỏa mãn điều kiện, `false` nếu không.
- **Ví dụ**:

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    let hasEven = numbers.some(element => element % 2 === 0);
    console.log(hasEven); // Kết quả: true
    ```

---

### 15. **`every()`**

- **Mô tả**: Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện hay không.
- **Cú pháp**: `array.every(callback(element, index, array), thisArg)`
- **Tham số**:
    - `callback` - Hàm kiểm tra, nhận ba tham số:
        - `element` - Phần tử hiện tại trong mảng.
        - `index` - Vị trí của phần tử hiện tại.
        - `array` - Mảng đang được duyệt.
    - `thisArg` (tùy chọn) - Giá trị làm `this` khi thực thi `callback`.
- **Trả về**: `true` nếu tất cả các phần tử thỏa mãn điều kiện, `false` nếu không.
- **Ví dụ**:

    ```javascript
    let numbers = [2, 4, 6, 8];
    let allEven = numbers.every(element => element % 2 === 0);
    console.log(allEven); // Kết quả: true
    ```

---

### 16. **`sort()`**

- **Mô tả**: Sắp xếp các phần tử trong mảng theo thứ tự tăng dần hoặc dựa trên hàm so sánh.
- **Cú pháp**: `array.sort([compareFunction])`
- **Tham số**:
    - `compareFunction` (tùy chọn) - Hàm so sánh, nhận hai tham số:
        - `a` - Phần tử đầu tiên để so sánh.
        - `b` - Phần tử thứ hai để so sánh.
        - Kết quả dương nếu `a > b`, âm nếu `a < b`, và 0 nếu `a === b`.
- **Trả về**: Mảng đã được sắp xếp.
- **Ví dụ**:

    ```javascript
    let fruits = ['Banana', 'Apple', 'Orange'];
    fruits.sort();
    console.log(fruits); // Kết quả: ['Apple', 'Banana', 'Orange']

    let numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort((a, b) => a - b); // Sắp xếp số theo thứ tự tăng dần
    console.log(numbers); // Kết quả: [1, 5, 10, 25, 40, 100]
    ```

---

### 17. **`reverse()`**

- **Mô tả**: Đảo ngược thứ tự các phần tử trong mảng.
- **Cú pháp**: `array.reverse()`
- **Tham số**: Không có.
- **Trả về**: Mảng sau khi đã được đảo ngược thứ tự.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    fruits.reverse();
    console.log(fruits); // Kết quả: ['Orange', 'Banana', 'Apple']
    ```

---

## Arrays to Strings

#### 18. **`join()`**

- **Mô tả**: Nối tất cả các phần tử trong mảng thành một chuỗi, ngăn cách bằng một chuỗi được chỉ định.
- **Cú pháp**: `array.join(separator)`
- **Tham số**:
    - `separator` (tùy chọn) - Chuỗi dùng để ngăn cách các phần tử. Nếu không chỉ định, `separator` mặc định là dấu phẩy `,`.
- **Trả về**: Một chuỗi kết hợp từ các phần tử của mảng.
- **Ví dụ**:

    ```javascript
    let fruits = ['Apple', 'Banana', 'Orange'];
    let fruitString = fruits.join(', ');
    console.log(fruitString); // Kết quả: 'Apple, Banana, Orange'
    ```