# Git

## Các khái niệm

## Git config

```
$ git config --g user.name "Dev name"
$ git config --g user.email "Dev email"
$ git config --list

```

- Định cấu hình các biến cấu hình chung – Nếu bạn đang làm việc với các developer khác, bạn sẽ cần biết ai đang kiểm tra mã xuất nhập và thực hiện thay đổi.

## Git remote

```
$ git remote add origin https... <url> - Liên kết đến remote repository (local & GitHub)
$ git remote set-url <name> <new url> - Thay đổi địa chỉ của remote repository đã Liên kết vào địa chỉ của <new url>.
$ git remote rename <old> <new> - Thay đổi tên của remote repository đã Liên kết.
```

## Git pull: (Hợp nhất từ xa)

```
$ git pull origin main - Git pull kéo tất cả các thay đổi từ main về local.
$ git pull - Git pull kéo tất cả các thay đổi từ branch_mane về local.
$ git pull origin - Git pull kéo tất cả các thay đổi từ kho lưu trữ từ xa vào branch bạn đang làm việc. (pull là sự kết hợp của 2 lệnh khác nhau: fetch và merge)
$ git pull --rebase (Cách pull chống xung đột)

```

## Git stash

```
$ git stash save # Hoặc $ git stash - Lưu lại công việc đang làm ở branch này để chuyển sang branch khác (Khi bạn chưa muốn commit code)
$ git stash pop - Kéo working tree của bạn đã lưu vào stash gần nhất ra
$ git stash list - Xem lại lịch sử thay đổi.
$ git stash show stash@{n} - Xem lại lịch sử thay đổi cụ thể của lần stash save{n}.
$ git stash apply stash@{1} - Apply thay đổi của lần stash save{n}.
$ git stash clear - Xoá toàn bộ stash.

```

## Git rebase: (Hợp nhất code)

```
$ git checkout branch_mane1 - Di chuyển về nhánh nhận sự hợp nhất.
$ git rebase branch_mane2 (Code từ branch_mane2 được hợp nhất vào branch_mane1) - Tiến hành hợp nhất
- Git rebase sẽ reset lại base cho branch bằng cách hợp nhất code của 1 branch khác nhưng sẽ xoá hết lịch sử commit ở branch được rebase

```
