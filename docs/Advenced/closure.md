---
sidebar_position: 2
---

# Closure (Hàm bao đóng)

```
- Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó.
- Mỗi hàm được tạo ra đều có tính chất của closure.
```

## Ứng dụng

```
-   Viết code ngắn gọn hơn.
-   Biểu diễn, ứng dụng tính Private trong OOP(Lập trình hướng đối tượng).
```

## Lưu ý

```
- Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha được thực thi xong.

```

VD:

```js title='createStorage.js'
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => localStorage.setItem(key, JSON.stringify(store));

    const storage = {
        getStore() {
            return store;
        },

        getValue(key) {
            return store[key];
        },

        setValue(key, value) {
            store[key] = value;
            save();
        },
        removeValue(key) {
            delete store[key];
            save();
        },
    };

    return storage;
}

const profileSetting = createStorage("profile_setting");

const store = profileSetting.getStore();

profileSetting.setValue("fullName", "Dat Trinh");
profileSetting.setValue("age", 20);

profileSetting.removeValue("age");

profileSetting.setValue("age", 20);
profileSetting.setValue("a", 20);

console.log(store);
console.log(profileSetting.getValue("age"));
```
