var tipuesearch = {"pages":[{"tags":"misc","title":"About","text":"機械設計專題網誌 http://project.mde.tw 是台灣國立虎尾科技大學機械設計工程系 (Department of Mechanical Design Engineering, National Formosa University, Taiwan ) KMOL 研究室 (Knowledge Management and Optimal utilization Laboratory) 專題網站, 與課程相關的網誌位於 http://chiamingyen.github.io/kmolab/blog/ . 本網誌的所有資料位於 https://github.com/coursemdetw/project_site , 除了所引用的資料特別聲明各自所宣告的使用授權外, 一律採用 AGPL 授權 https://github.com/coursemdetw/project_site/blob/gh-pages/LICENSE . 歡迎您的蒞臨! 專題成員 https://github.com/coursemdetw/project_site/watchers","url":"http://project.mde.tw/blog/pages/about/"},{"tags":"2016g1","title":"40323123 - 3d printer","text":"raspberry pi connect 3d printer to control the 3d printer 遠端控制3D列印 這邊使用的遠端列印是使用web client控制 目前有兩套在觀望的系統~ 一個是 octopi 另一個是 Astropromt 或者是我們自己寫一套 兩套皆使用樹梅派當為控制電腦及server 使用心得:在之前已經有安裝過octopi，使用狀況是不錯，但是gui介面有些許的問題，使用上是沒什麼大礙，在3D printer的控制板，做動方式，像是一般CNC一樣，接收 G指令 Gcoce 大全 控制系統的code解析 這兩套系統，都有開放原始碼，不過因為解析程式有巨大的阻礙，因為對python和樹梅派不熟悉，導致只會安裝不會自己編譯。","url":"http://project.mde.tw/blog/40323123-3d-printer.html"},{"tags":"Tutorial","title":"yen - 2016 年專題啟動","text":"利用 Github Pages 與 Pelican 建立協同專題製作網誌 機械設計工程網誌啟動 本網誌自 2016 Spring 開始啟動, 相關建置步驟如下: 以 https://github.com/coursemdetw 帳號建立 Gihub 倉儲 https://github.com/coursemdetw/project_site 將倉儲資料 git clone 到近端 利用 git branch 指令, 建立 gh-pages 分支 利用 git checkout 指令, 切換至 gh-pages 分支 開始建立 Pelican 網誌所需的協同架構資料 安排 users 目錄, 將分別存放各協同組員的 .leo 檔案 確定 gh-pages 分支中的網誌 http://coursemdetw.github.io/project_site/ 可以正常運作 根據 Github pages 專用網域設定說明 https://help.github.com/articles/using-a-custom-domain-with-github-pages/ , 建立 CNAME, 納入 project.mde.tw 將 https://github.com/coursemdetw/project_site 倉儲的 Default Branch 設為 gh-pages 分支 在 mde.tw 網域的 DNS 代管設定中, 加入 project.mde.tw 與 coursemdetw.github.io 之間的 CNAME 別名設定 等待 CNAME 別名生效後, http://project.mde.tw 即可正常連結使用 Pelican 網誌設定 由於本網誌將 Pelican https://github.com/getpelican/pelican 設定相關的所有資料都留在 Gihub 倉儲 https://github.com/coursemdetw/project_site 中, 目的在讓其他人可以參考本網誌的所有細節內容. 一般在實際應用, 只需將 blog 目錄 https://github.com/coursemdetw/project_site/tree/gh-pages/blog 中的資料送到全球資訊網伺服器即可. 本專題製作採用 http://leoeditor.com/ 管理所有資料, 但各參與協同的人員各自在 users 目錄下擁有一個 .leo 檔案, 可以分別控管本網誌的所有設定, 並且以協同方式維護網誌內容. 本網誌分為近端與 Github Pages 端的資料管理配置, 關鍵字搜尋採用 https://github.com/getpelican/pelican-plugins/tree/master/tipue_search , 近端的設定檔案為 local_publishconf.py, 而 Github Pages 端的特有設定為 publishconf.py, 且為了區隔兩端的資料連結差異, 近端的 Pelican 轉檔按鈕為 @button local pelican, 而 Github Pages 端的轉檔按鈕為 @button gh-pages pelican. 最後, 為了有效區隔各組員所寫的網誌文章, content 目錄內的各 .md 檔案, 除了要求必須冠上組員帳號外, 也希望在文章標題前面加上組員帳號標示, 以避免組員間因為使用相同的文章標題名稱而無法正確完成 Pelican 網誌的轉檔 (本系統採用自動文章標題轉換為 html 檔名的設定). 組員參與協同 所有專題製作成員均為 https://github.com/coursemdetw/project_site 倉儲的協同者, git clone 資料後, 即可將分支固定在 gh-pages 後進行各項資料協同管理的工作. 參與協同的步驟: git clone 倉儲資料. 確定在近端已經切換分支到 gh-pages, 利用 Leo Editor 開啟 users 目錄下的 user_template.leo 檔案. 修改 @edit user_20160301.md 的標題與內容, 例如, 將 @edit user_20160301.md 改為 @edit 學號_20160301.md, 且將 \"Title: user - 使用者的範例網誌文章標題\" 改為 \"Title: 學號 - 使用者的範例網誌文章標題\", \"Author: user\" 改為 \"Author: 學號\" 之後, 記得將已經修改過的 user_template.leo 存為 學號.leo 檔案. 在學號.leo 專案檔案中, 將滑鼠停在 @button local pelican 節點上, 再點擊 local-pelican 按鈕進行轉檔, 最後利用瀏覽器開啟 project_site 目錄中的 index.html, 檢查是否在近端可以正確轉檔. 若近端的 Pelican 網誌可以正確納入所新增的文章內容, 改將滑鼠停在 @button gh-pages pelican 節點上, 再點擊 gh-pages-pelican 按鈕, 進行 Github Pages 端所需要的內容轉檔. 利用 git add -A, git commit -m \"訊息\", git push origin gh-pages 等3個步驟, 將 gh-pages 分支資料, 提交並推送到 http://project.mde.tw 網誌資料儲存規劃 一個靜態網站的內容除了文字檔案外, 還包括 Javascript 檔案, Brython 檔案, 圖檔, 影片檔案, 以及其他各種非 html 的文件檔, 為了保有本網誌專案倉儲的簡潔, 除了必要的設定與文字檔案外, 其他資料均存放在倉儲以外的相關資源位置, 其規劃如下: Javascript 與 Brython 程式檔案, 除了儘量使用各 CDN 所提供的最新版本外, 目前以 https://github.com/2015fallhw/cptocadp/tree/master/static 對應的 OpenShift 網站存放, 例如, Cango-8v03.js 位於 http://cptocadp-2015fallhw.rhcloud.com/static/Cango-8v03.js 一般圖檔與非 html 文件檔案, 建議以 Github Pages 的網頁架構儲存在獨立的倉儲中, 且該倉儲僅存放檔案, 而無文字檔案, 例如: http://coursemdetw.github.io/project_site_files/files/kmol_1172x340_color_3yrs.png 即為其中的一個圖檔. 影片檔案則分別存在 https://vimeo.com/ 與 https://www.youtube.com/ (相同檔案各存一份). 圖檔引用 影片檔引用 Gocycle_disassemble from 虎尾科大機械設計工程 on Vimeo . 特別提醒 本網誌為了同時支援近端與遠端的資料內容使用, 資料轉檔分為近端按鈕與遠端按鈕, 協同成員在推送資料到遠端之前, 必須確定資料為遠端 Github Pages 格式. 鼓勵各成員深入研究本網誌的細節架構, 勇於提出問題, 解決問題, 打造出最適合機械設計工程團隊使用的網際協同架構、模式與系統工具.","url":"http://project.mde.tw/blog/yen-2016-nian-zhuan-ti-qi-dong.html"},{"tags":"Misc","title":"yen - Github Pages 網頁資料更新問題","text":"突然間, Github Pages 的網頁轉換機制不再更新 使用 Github Pages 建立網頁最大的問題就是, 在完全沒有任何錯誤訊息提醒的情況下, 送到 Github Pages 對應分支倉儲的資料不再成功轉為網頁資料. 因應之道, 只能刪除原先不再更新的倉儲, 另外再建立一個對應的 Github Pages 倉儲, 重新進行各項設定.","url":"http://project.mde.tw/blog/yen-github-pages-wang-ye-zi-liao-geng-xin-wen-ti.html"},{"tags":"Misc","title":"yen - 機械設計專題分類","text":"機械設計專題題目的分類, 一般就學門領域的組合, 可視為熱流體力學, 固體力學, 電子電機與資訊科技的綜合體. 雖然機械設計專題, 以設計流程為主, 但是通常離不開製造、控制與管理的範疇. 也就是說, 機械設計流程必須納入製造、控制與管理的層面, 才能得到更大的價值. 機械指的是機巧的配置, 而配置的內容, 來自熱流體力學, 固體力學, 電子電機與資訊科技的內涵, 其中更因不同的設計、製造、控制與管理流程, 而產生不同的功用. 至於設計則隱含內容的表達與驗證, 其表達的方式通常指口語表達, 文字表達, 2D 圖形表達, 3D 影像表達, 理論分析表達與實體原型的表達等六大類. 因此機械設計專題, 就可以從熱流體力學, 固體力學, 電子電機與資訊科技的組合搭配中, 納入各種設計、製造、控制與管理工具的運用, 最後用表達方式加以呈現的差異, 進行分類. 換言之, 機械設計專題的題目與施行內容的分類, 可以從3個大軸向切入: 所包含的學門領域軸向, 也就是熱流體力學, 固體力學, 電子電機與資訊科技等. 所牽涉的流程層面, 也就是設計、製造、控制與管理流程等. 所使用的表達方式, 也就是口語表達, 文字表達, 2D 圖形表達, 3D 影像表達, 理論分析表達與實體原型的表達等. 其中隸屬於設計的工程設計面, 又可細分為: 選用設計, 也就是從現有的零件或配件群中選用的設計. 配置設計, 也就是根據所選擇的零配件加以組合, 以決定設計的組合順序或組合方式. 參數設計, 也就是決定內容所需的數據或尺寸. 原創設計, 也就是前所未見的配置參數設計或前所未見的整體設計. 重新設計, 也就是根據的新的需求、新的材料與元件發明, 所進行的設計. 客製化設計, 又稱為多選項設計, 也就是設計中的每一個功能, 都提供客戶不同等級的元件選擇所牽涉的設計. 總之, 這裡針對機械設計專題題目分類的目的, 在讓選擇專題題目與製作內容的成員能有些初步概念, 儘管機械設計的範圍很廣, 能夠採用的方式與納入的內容也很多, 但是只要關注機械設計所牽涉的領域、流程與表達方法, 使專題題目具有代表性與功能性, 就能讓最後交付的內容更具價值.","url":"http://project.mde.tw/blog/yen-ji-jie-she-ji-zhuan-ti-fen-lei.html"},{"tags":"Misc","title":"yen - 協同產品設計課程 Task0 延伸練習","text":"如何將電腦教室分組, 比序與排座位的流程網際自動化 在 http://chiamingyen.github.io/kmolab/blog/2016-spring-cd-task0.html 中, 說明了一個實際的電腦教室排座位的流程, 其中使用了網際即時試算表 https://ethercalc.tw/ , 以及幾個 Python3 的資料處理程式, 最後可以根據電腦教室的配置, 完成各組員的座位編排. 座位編排流程如下: 讓所有學員自行分組 分組確定後, 根據學號比序, 產生各組組長 再根據各組組長學號, 再進行組長學號比序, 以決定各組的組序 完成各組序與各組內的組員順序後, 再根據座位編排規定, 最後列出學員座位表, 讓學員依序入座 本機械設計專題製作練習, 希望能夠利用網際程式方法, 以 https://github.com/mitsuhiko/flask , https://www.sqlite.org/ 將流程自動化, 當操作者從網際即時試算表中取得各組分組資料後, 可以輸入本練習所完成的網站表單中, 然後操作者可以根據頁面中的選項, 選擇各組選出組長的方式, 依據學號增量排序, 學號最小者為組長, 或遞減排序, 學號大者為組長, 或者亂數排序後, 排序第一組為組長等三種選擇. 接著操作者可以在頁面選擇組序排列的選項, 也是學號遞增排序, 學號遞減排序或學號亂數排序, 以便訂出各組的組序. 當操作者決定各組內與組外的排序選項後, 按下\"排電腦教室座位\" (也可加入排座位的選項, 列先排, 行先排或者全部按亂數排. 完成座位安排後, 必須將各組組員名單與分組名單分別存入資料庫, 以便後續讓使用者查詢各組座位與分組資訊, 並且在隨後 加入各組員回報電腦使用情形與各組員自評登錄成績之應用. 原始倉儲資料: https://github.com/2015fallhw/2016springcd/tree/gh-pages","url":"http://project.mde.tw/blog/yen-xie-tong-chan-pin-she-ji-ke-cheng-task0-yan-shen-lian-xi.html"},{"tags":"Tutorial","title":"user - 使用者的範例網誌文章標題","text":"這裡放入 user 所寫的文章摘要 這裡為 user 所寫的文章主要內容","url":"http://project.mde.tw/blog/user-shi-yong-zhe-de-fan-li-wang-zhi-wen-zhang-biao-ti.html"},{"tags":"2016g1","title":"40323123 - 專題組員的範例文章標題","text":"這裡放入 40323123 所寫的文章摘要 這裡為 40323123 所寫的文章主要內容","url":"http://project.mde.tw/blog/40323123-zhuan-ti-zu-yuan-de-fan-li-wen-zhang-biao-ti.html"},{"tags":"2016g1","title":"40323130 - 說明如何參與協同機械設計專題網誌編寫","text":"只要是具備協同權限的用戶, 都可以在機械設計專題網誌中貢獻內容 這裡為 40323130 所寫的文章主要內容 本機械設計專題網誌的架構包含近端與遠端的資料檢視設計, 專案資料以 Leo Editor 進行管理. 以下教學影片示範從 http://project.mde.tw 機械設計專題網誌中取得倉儲的網址後, 可以利用 git clone 複製倉儲資料, 之後: 利用 git checkout gh-pages 將工作目錄指到 Github pages 的對應分支內容 以 Leo Editor 開啟 users 目錄下的 user_template.leo 檔案 根據自己的帳號, 修改 .md 檔案存檔的名稱, 目的在透過加入帳號與時間註記, 避免 content 目錄中的檔案彼此複寫 在 .md 的 Title 標題中, 冠上自己的帳號, 主要也是避免 Pelican 將 .md 根據標題轉成 html 時, 產生檔案複寫 本系統的 Pelican 分為近端與遠端轉檔按鈕, 因此若要在近端檢查時, 與要推送到 Github 時採用不同轉檔按鈕 為了簡化 git 指令的 add, commit 與 push, 加入 ungit, 只要啟動隨身系統候, 再利用 start_ungit.bat 開啟, 就可以在瀏覽器中簡化改版過程 Vimeo: 2016project_1 from 虎尾科大機械設計工程 on Vimeo . Youtube:","url":"http://project.mde.tw/blog/40323130-shuo-ming-ru-he-can-yu-xie-tong-ji-jie-she-ji-zhuan-ti-wang-zhi-bian-xie.html"}]};