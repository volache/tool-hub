// Each tool opens its own address in a new tab. A tool with url: null shows an honest "not open yet" notice instead of a fake destination.
// wash is the colour of the page transition when it is not the tool's own colour (Rizhi uses its page's parchment).
// The brick icon of each tool is defined in icon-specs.js (key = icon).
export const tools = [
  { id: 'assetra', title: 'Assetra 財物管理', description: '匯入財物清冊，保管人只看到自己負責的財物。', keywords: '財物 財產 資產 清冊 保管 盤點 asset assetra', icon: 'assetra', color: 'coral', url: 'https://volache.github.io/assetra/' },
  { id: 'consump', title: 'Consump 消耗用品管理', description: '管理消耗用品的領用、進貨、盤點與報表。', keywords: '耗材 領用 進貨 庫存 盤點 報表 QR consump', icon: 'consump', color: 'indigo', url: 'https://volache.github.io/consump/' },
  { id: 'library', title: '圖書借閱系統', description: '線上圖書館，搜尋館藏書籍並辦理借閱。', keywords: '圖書 書 借閱 館藏 圖書館 library', icon: 'library', color: 'sage', url: 'https://sites.google.com/view/hunread/index' },
  { id: 'directory', title: '機關通訊錄', description: '依群組篩選、搜尋聯絡人，可列印內部與外部通訊錄。', keywords: '通訊錄 電話 聯絡 分機 名冊 directory', icon: 'directory', color: 'blue', url: 'https://sites.google.com/view/hundirectory/index' },
  { id: 'passvault', title: 'PassVault 密碼管理', description: '登入後集中保管帳號與密碼。', keywords: '密碼 帳號 保險箱 登入 password vault passvault', icon: 'passvault', color: 'blue', url: 'https://volache.github.io/passvault/' },
  { id: 'huoban', title: 'Huoban 夥班', description: '團隊勤務排班與庫存管理。', keywords: '排班 勤務 班表 值班 庫存 團隊 huoban', icon: 'huoban', color: 'teal', url: 'https://huoban-three.vercel.app/' },
  { id: 'rizhi', title: 'Rizhi 日知曆', description: '每日黃曆：宜忌、財神喜神方位、月相與值神建除。', keywords: '黃曆 農曆 宜忌 擇日 日曆 月相 rizhi', icon: 'rizhi', color: 'green', wash: '#f0eada', url: 'https://volache.github.io/Rizhi/' },
  { id: 'casefile', title: '案卷案情摘要輔助', description: '整理案卷內容，輔助撰寫案情摘要。', keywords: '案卷 案情 摘要 卷宗 整理 輔助', icon: 'casefile', color: 'amber', url: null }
];
