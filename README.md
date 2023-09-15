# 怎麼會-前端 coding 共學 repo

## 首頁內容是成員資料，連結至個人網頁，member 資料夾中有個人專用資料夾

## 共同協作操作說明
### 授權共用repo設定是使用Collaborators，可以參考附圖
![image](https://github.com/adens123/howcomegoodatcoding/assets/72215185/1027dec6-4cad-4038-a5c3-9802352deb61)

![image](https://github.com/adens123/howcomegoodatcoding/assets/72215185/5922ee1f-cd70-4eaa-8fed-ae5171be2672)

1. 確認已經權限，被授權者會收到通知email，點連結到github去 accept授權

2. 複製共用repo到本機，可以用download或clone
https://github.com/adens123/howcomegoodatcoding
※ 補充說明：因為我們是協作既有repo，要使用clone，才會包含git commit歷程；自己要另外做新的專案再用download

* download：純資料沒有包含git commit歷程，先不要做作任何程式修改，從git init開始做。
  ```
  git init       //若已經初始化過就可以不用輸入
  git add .
  git commit -m "first commit" // 初始化後首次commit會自動建立本地分支，名稱預設為master，可以用 git branch 查詢有哪些本地分支
  git remote add origin https://github.com/adens123/howcomegoodatcoding.git // 建立遠端連結到遠端repo，並且把這個遠端連結的節點取名為origin(可自行修改)
  git branch -M main // 將本地分支 master 改名為 main
  (注意)這裡要多一行指令，因為你在本機修改code的同時，其他人已經有更新github上的repo，所以本機在commit之後，
  要先從github上pull最新的repo資料下來，你push上去的資料才會完整
  git pull // 將遠端repo最新資料抓下來合併 (執行後會出現錯誤訊息，正常，繼續往下做)
  git branch --set-upstream-to=origin/main main // git pull1 報錯的解法，要先建立本地分支的上游追蹤分支
  git pull origin main --allow-unrelated-histories // download下來的檔案沒有commit歷程，要忽略才能pull成功
  git push -u origin main      // 僅限第一次輸入，往後只需要輸入 git push
  ```
  關於git pull會報錯，及解法原因可參考：  
  https://www.1ju.org/git/git-pull

  https://matthung0807.blogspot.com/2020/04/git-pull-refusing-to-merge-unrelated.html

  https://gitbook.tw/chapters/github/push-to-github
  
  執行過第一次之後，只要這4行
  ```
  git add .
  git commit -m "first commit"
  git pull
  git push
  ```

* clone：clone指令要在本機的終端機執行
  ```
  git clone https://github.com/adens123/howcomegoodatcoding.git
  ```
  如果不熟悉可以參考https://ithelp.ithome.com.tw/articles/10272256

  要push到github上的共用repo，只要這4行
  ```
  git add .
  git commit -m "first commit"
  
  (注意)這裡要多一行指令，因為你在本機修改code的同時，其他人已經有更新github上的repo，所以本機在commit之後，
  要先從github上pull最新的repo資料下來，你push上去的資料才會完整
  git pull
  
  git push
