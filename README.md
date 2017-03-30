## Angular2 Memo

1. Name 命名方式：SpecialSuperHeroService --> special-super-hero.service.ts
1. `Lambda "a => a"`：因為回應的物件是非同步的(不是馬上回應)，所以需要用 lambda 的方式取得資料。
1. `*ngFor = "let hero of heroes"`
1. `[(ngModel)]`：來綁定雙向資料
1. `[class.selected]="hero === selectedHero"`：在" "內成立 (truthy) 時，套用 selected
1. `:`：後面放的是屬性
1. `=`：後面是要 assign 的值
1. `==`：基本型態間的比較 (比記憶體位置)
1. `===`：物件間的比較
1. [Property] 屬性、[Attribute] 屬性、[Class] 類別、[Style]css
1. (event) 事件
1. [(Two-way)] 屬性與事件

---

### angular-quickstart
 
 進度：學習已完成
 
 來自 Angular2 官方網站的教學範例
 Angular2 app 的初始文件 

"node_modules" Folder 沒有上傳上來，
它可以透過教學文件中的步驟1 `npm install` 指令來建立

[官方網站](https://angular.cn/docs/ts/latest/quickstart.html)

[我的筆記](http://popo-chuang-blog.logdown.com/posts/1048517)

---

### angular2-tour_of_heroes

來自官方網站的進階教學範例

進度：目前進行中 10 %...

[官方網站](https://angular.io/docs/ts/latest/tutorial/)

[Gaduo的範例](https://github.com/Poduo/Angular2-guide-example)
 

實作 1：英雄編輯器 THE HERO EDITOR
 - 使用雙大括號插值表達式 (單向資料繫結的一種形式) 來顯示應用的標題和 Hero 對象的屬性
 - 使用 ES2015 的樣板字符串寫了一個多行樣板，使我們的樣板更具可讀性
 - 為了同時顯示和修改英雄的名字，使用了內置的 ngModel 指令，往 <input> 元素上新增了雙向資料繫結
 - ngModel 指令將這些修改傳播到每一個對 hero.name 的其它繫結。

實作 2：主從結構 Master / Detail
 - 把元件上的方法繫結到用戶事件上，比如按鍵和點擊
 - click 事件
 - 顯示一個可選英雄的列表
 - 新增了選擇英雄的能力，並顯示其的詳情
 - 如何在元件樣板中使用內置的 ngIf 和 ngFor 指令

實作 3：多個元件 Multiple Components
 - 把主從結構的頁面重構成多個元件
 - 重複使用元件，傳遞數據給元件並建立更多可復用的資源
 - 製作英雄詳情元件
 - 拆分英雄詳情元件
 - 英雄詳情樣板
 - 新增 HERO 屬性，讓一個元件接收輸入
 - 更新 AppModule
 - 更新 AppComponent

實作 4：服務 Services
 - 新增更多的元件
 - 建立了一個能被多個元件共享的服務
 - 使用 ngOnInit 生命週期鉤子，以便在 AppComponent 觸發時獲取英雄數據
 - 建立了一個模擬的英雄數據，並把它匯入我們的服務中

實作 5：路由 Routing ===============ing
 - 使用路由在不同的檢視及其元件之間進行導航
 - 新增了 Angular 路由器 在各個不同元件之間導航
 - 學會了如何建立路由鏈接來表示導航欄的選項
 - 使用路由鏈接參數來導航到用戶所選的英雄詳情
 - 在多個元件之間共享了 HeroService 服務
 - 把 HTML 和 CSS 從元件中移出來，放到了它們自己的文件中
 - 新增了 uppercase 管道，來格式化數據
 - 將路由重構為路由模組，並匯入它

實作 6：HTTP
 - 新增了在應用程式中使用 HTTP 的必備依賴
 - 重構了 HeroService ，以透過 web API 來載入英雄數據。
 - 擴展了 HeroService 來支援 post 、 put 和 delete 方法。
 - 更新了元件，以允許用戶新增、編輯和刪除英雄。
 - 配置了一個內存 Web API 。
 - 學會了如何使用 「可觀察對象」

---

### angular-quick40

進度：遇到問題，先暫停

來自Will在台中演講的教學，練習step by step操作

---

### quickstart-master

進度：尚未開始

來自 Youtube 教學影片的範例
