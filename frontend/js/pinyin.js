// quant-calendar: 拼音/首字母检索模块 (v3.17.10 / FR-3.17.10)
// 零依赖原生实现（不引入构建链/pypinyin），内置最小汉字拼音映射 + 核心股票清单。
// 数据源不可达时（无股票池），检索索引 = 内置核心股票清单 + 自选/持仓/评估出现过的股票。
// 纯函数模块，UMD 导出：
//   - 浏览器: window.QuantPinyin / window.__quantModules.pinyin
//   - Node:   require(...)（供 pytest 调 node 单测 TC-3.17.10）
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantPinyin = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ─── 汉字→全拼 映射（内置最小数据；首字母 = 全拼首字符，一份表同时满足全拼/首字母）───
  // 覆盖内置核心清单全部汉字 + A 股常见名称字；缺失字在 toPinyin/toPinyinInitials 中跳过（不崩溃）。
  const CHAR_PINYIN = {
    '贵': 'gui', '州': 'zhou', '茅': 'mao', '台': 'tai',
    '平': 'ping', '安': 'an', '银': 'yin', '行': 'hang',
    '招': 'zhao', '商': 'shang', '五': 'wu', '粮': 'liang', '液': 'ye',
    '中': 'zhong', '国': 'guo', '神': 'shen', '华': 'hua',
    '格': 'ge', '力': 'li', '电': 'dian', '器': 'qi',
    '长': 'chang', '江': 'jiang', '美': 'mei', '的': 'di',
    '集': 'ji', '团': 'tuan', '信': 'xin', '证': 'zheng', '券': 'quan',
    '宁': 'ning', '德': 'de', '时': 'shi', '代': 'dai',
    '恒': 'heng', '瑞': 'rui', '医': 'yi', '药': 'yao',
    '隆': 'long', '基': 'ji', '绿': 'lv', '能': 'neng',
    '伊': 'yi', '利': 'li', '股': 'gu', '份': 'fen',
    '京': 'jing', '东': 'dong', '方': 'fang',
    '工': 'gong', '石': 'shi', '化': 'hua', '油': 'you',
    '保': 'bao', '发': 'fa', '展': 'zhan',
    '比': 'bi', '亚': 'ya', '迪': 'di',
    '浦': 'pu', '万': 'wan', '科': 'ke',
    '大': 'da', '农': 'nong', '业': 'ye', '民': 'min',
    '光': 'guang', '明': 'ming', '海': 'hai', '天': 'tian',
    '建': 'jian', '设': 'she', '交': 'jiao', '通': 'tong',
    '上': 'shang', '海': 'hai', '证': 'zheng',
    '兴': 'xing', '业': 'ye',
    '紫': 'zi', '金': 'jin', '矿': 'kuang',
    '潍': 'wei', '柴': 'chai', '动': 'dong',
    '福': 'fu', '耀': 'yao', '玻': 'bo', '璃': 'li',
    '三': 'san', '重': 'zhong', '工': 'gong',
    '中': 'zhong', '兴': 'xing',
    '顺': 'shun', '丰': 'feng', '控': 'kong',
    '立': 'li', '讯': 'xun', '精': 'jing', '密': 'mi',
    '歌': 'ge', '尔': 'er',
    '海': 'hai', '天': 'tian', '威': 'wei', '视': 'shi',
    '京': 'jing', '东': 'dong',
    '斯': 'si', '达': 'da', '半': 'ban', '导': 'dao', '体': 'ti',
    '韦': 'wei', '尔': 'er',
    '兆': 'zhao', '易': 'yi', '创': 'chuang', '新': 'xin',
    '汇': 'hui', '川': 'chuan', '技': 'ji', '术': 'shu',
    '复': 'fu', '星': 'xing', '医': 'yi',
    '智': 'zhi', '飞': 'fei', '机': 'ji',
    '航': 'hang', '空': 'kong', '动': 'dong', '力': 'li',
    '中': 'zhong', '航': 'hang',
    '宝': 'bao', '钢': 'gang', '股': 'gu',
    '山': 'shan', '西': 'xi', '煤': 'mei', '业': 'ye',
    '神': 'shen', '火': 'huo',
    '华': 'hua', '能': 'neng', '电': 'dian',
    '特': 'te', '变': 'bian', '压': 'ya', '器': 'qi',
    '许': 'xu', '继': 'ji', '电': 'dian', '气': 'qi',
    '正': 'zheng', '泰': 'tai', '电': 'dian', '气': 'qi',
    '先': 'xian', '导': 'dao', '智': 'zhi', '能': 'neng',
    '深': 'shen', '南': 'nan', '电': 'dian',
    '康': 'kang', '得': 'de', '新': 'xin',
    '沃': 'wo', '森': 'sen', '生': 'sheng', '物': 'wu',
    '华': 'hua', '兰': 'lan', '生': 'sheng',
    '智': 'zhi', '飞': 'fei',
    '大': 'da', '北': 'bei', '农': 'nong',
    '新': 'xin', '希': 'xi', '望': 'wang',
    '通': 'tong', '策': 'ce',
    '沙': 'sha', '河': 'he',
    '白': 'bai', '云': 'yun',
    '万': 'wan', '华': 'hua',
    '南': 'nan', '京': 'jing', '证': 'zheng',
    '广': 'guang', '发': 'fa',
    '浦': 'pu', '发': 'fa',
    '兴': 'xing', '业': 'ye',
    '民': 'min', '生': 'sheng',
    '光': 'guang', '大': 'da', '银': 'yin', '行': 'hang',
    '华': 'hua', '夏': 'xia', '银': 'yin', '行': 'hang',
    '中': 'zhong', '信': 'xin', '银': 'yin', '行': 'hang',
    '交': 'jiao', '通': 'tong', '银': 'yin', '行': 'hang',
    '邮': 'you', '储': 'chu', '银': 'yin', '行': 'hang',
    '建': 'jian', '设': 'she', '银': 'yin', '行': 'hang',
    '农': 'nong', '业': 'ye', '银': 'yin', '行': 'hang',
    '中': 'zhong', '国': 'guo', '银': 'yin', '行': 'hang',
    '中': 'zhong', '国': 'guo', '人': 'ren', '寿': 'shou',
    '新': 'xin', '华': 'hua', '保': 'bao', '险': 'xian',
    '中': 'zhong', '国': 'guo', '太': 'tai', '保': 'bao',
    '人': 'ren', '保': 'bao',
    '中': 'zhong', '国': 'guo', '建': 'jian', '筑': 'zhu',
    '中': 'zhong', '国': 'guo', '铁': 'tie', '建': 'jian',
    '中': 'zhong', '国': 'guo', '交': 'jiao', '建': 'jian',
    '中': 'zhong', '国': 'guo', '中': 'zhong', '铁': 'tie',
    '中': 'zhong', '国': 'guo', '电': 'dian', '建': 'jian',
    '中': 'zhong', '国': 'guo', '石': 'shi', '油': 'you',
    '中': 'zhong', '国': 'guo', '石': 'shi', '化': 'hua',
    '万': 'wan', '科': 'ke', 'A': 'a',
    '招': 'zhao', '商': 'shang', '蛇': 'she', '口': 'kou',
    '万': 'wan', '达': 'da',
    '保': 'bao', '利': 'li', '地': 'di', '产': 'chan',
    '万': 'wan', '科': 'ke',
    '金': 'jin', '地': 'di',
    '华': 'hua', '夏': 'xia', '幸': 'xing', '福': 'fu',
    '阳': 'yang', '光': 'guang', '城': 'cheng',
    '华': 'hua', '侨': 'qiao', '城': 'cheng', 'A': 'a',
    '浙': 'zhe', '江': 'jiang', '证': 'zheng', '券': 'quan',
    '国': 'guo', '泰': 'tai', '君': 'jun', '安': 'an',
    '广': 'guang', '发': 'fa', '证': 'zheng', '券': 'quan',
    '海': 'hai', '通': 'tong', '证': 'zheng', '券': 'quan',
    '华': 'hua', '泰': 'tai', '证': 'zheng', '券': 'quan',
    '申': 'shen', '万': 'wan', '宏': 'hong', '源': 'yuan',
    '东': 'dong', '方': 'fang', '证': 'zheng', '券': 'quan',
    '长': 'chang', '城': 'cheng', '证': 'zheng', '券': 'quan',
    '西': 'xi', '南': 'nan', '证': 'zheng', '券': 'quan',
    '中': 'zhong', '信': 'xin', '建': 'jian', '投': 'tou',
    '国': 'guo', '信': 'xin', '证': 'zheng', '券': 'quan',
    '兴': 'xing', '业': 'ye', '证': 'zheng', '券': 'quan',
    '东': 'dong', '吴': 'wu', '证': 'zheng', '券': 'quan',
    '财': 'cai', '通': 'tong', '证': 'zheng', '券': 'quan',
    '华': 'hua', '安': 'an', '证': 'zheng', '券': 'quan',
    '长': 'chang', '江': 'jiang', '证': 'zheng', '券': 'quan',
    '国': 'guo', '元': 'yuan', '证': 'zheng', '券': 'quan',
    '中': 'zhong', '泰': 'tai', '证': 'zheng', '券': 'quan',
    '太': 'tai', '平': 'ping', '洋': 'yang',
    '中': 'zhong', '国': 'guo', '太': 'tai', '保': 'bao', '险': 'xian',
    '新': 'xin', '华': 'hua', '保': 'bao', '险': 'xian',
    '平': 'ping', '安': 'an', '银': 'yin', '行': 'hang',
    '青': 'qing', '岛': 'dao', '银': 'yin', '行': 'hang',
    '宁': 'ning', '波': 'bo', '银': 'yin', '行': 'hang',
    '苏': 'su', '州': 'zhou', '银': 'yin', '行': 'hang',
    '南': 'nan', '京': 'jing', '银': 'yin', '行': 'hang',
    '北': 'bei', '京': 'jing', '银': 'yin', '行': 'hang',
    '上': 'shang', '海': 'hai', '银': 'yin', '行': 'hang',
    '杭': 'hang', '州': 'zhou', '银': 'yin', '行': 'hang',
    '浙': 'zhe', '江': 'jiang', '美': 'mei', '大': 'da',
    '中': 'zhong', '国': 'guo', '移': 'yi', '动': 'dong',
    '中': 'zhong', '国': 'guo', '电': 'dian', '信': 'xin',
    '中': 'zhong', '国': 'guo', '联': 'lian', '通': 'tong',
    '中': 'zhong', '国': 'guo', '中': 'zhong', '冶': 'ye',
    '中': 'zhong', '国': 'guo', '宝': 'bao', '武': 'wu',
    '中': 'zhong', '国': 'guo', '船': 'chuan', '舶': 'bo',
    '中': 'zhong', '国': 'guo', '动': 'dong', '力': 'li',
    '中': 'zhong', '国': 'guo', '重': 'zhong', '工': 'gong',
    '中': 'zhong', '国': 'guo', '南': 'nan', '车': 'che',
    '中': 'zhong', '国': 'guo', '长': 'chang', '安': 'an',
    '上': 'shang', '汽': 'qi', '集': 'ji', '团': 'tuan',
    '广': 'guang', '汽': 'qi', '集': 'ji', '团': 'tuan',
    '福': 'fu', '田': 'tian', '汽': 'qi', '车': 'che',
    '长': 'chang', '安': 'an', '汽': 'qi', '车': 'che',
    '比': 'bi', '亚': 'ya', '迪': 'di',
    '长': 'chang', '城': 'cheng', '汽': 'qi', '车': 'che',
    '小': 'xiao', '鹏': 'peng', '汽': 'qi', '车': 'che',
    '理': 'li', '想': 'xiang', '汽': 'qi', '车': 'che',
    '蔚': 'wei', '来': 'lai',
    '比': 'bi', '亚': 'ya', '迪': 'di', '电': 'dian', '子': 'zi',
    '宁': 'ning', '德': 'de', '时': 'shi', '代': 'dai',
    '亿': 'yi', '纬': 'wei', '锂': 'li', '能': 'neng',
    '赣': 'gan', '锋': 'feng', '锂': 'li', '业': 'ye',
    '恩': 'en', '捷': 'jie', '股': 'gu', '份': 'fen',
    '天': 'tian', '齐': 'qi', '锂': 'li', '业': 'ye',
    '国': 'guo', '轩': 'xuan', '高': 'gao', '科': 'ke',
    '晶': 'jing', '澳': 'ao', '科': 'ke', '技': 'ji',
    '隆': 'long', '基': 'ji', '绿': 'lv', '能': 'neng',
    '通': 'tong', '威': 'wei', '股': 'gu', '份': 'fen',
    '阳': 'yang', '光': 'guang', '电': 'dian', '源': 'yuan',
    '天': 'tian', '合': 'he', '光': 'guang', '能': 'neng',
    '晶': 'jing', '科': 'ke', '能': 'neng', '源': 'yuan',
    '福': 'fu', '斯': 'si', '特': 'te', '玻': 'bo', '璃': 'li',
    '旗': 'qi', '滨': 'bin', '集': 'ji', '团': 'tuan',
    '锦': 'jin', '浪': 'lang', '科': 'ke', '技': 'ji',
    '三': 'san', '安': 'an', '光': 'guang', '电': 'dian',
    '捷': 'jie', '佳': 'jia', '伟': 'wei', '创': 'chuang', '新': 'xin',
    '立': 'li', '讯': 'xun', '精': 'jing', '密': 'mi',
    '歌': 'ge', '尔': 'er', '股': 'gu', '份': 'fen',
    '海': 'hai', '康': 'kang', '威': 'wei', '视': 'shi',
    '京': 'jing', '东': 'dong', '方': 'fang', 'A': 'a',
    'T': 't', 'C': 'c', 'L': 'l', '科': 'ke', '技': 'ji',
    '汇': 'hui', '顶': 'ding', '科': 'ke', '技': 'ji',
    '中': 'zhong', '际': 'ji', '控': 'kong', '股': 'gu',
    '复': 'fu', '星': 'xing', '医': 'yi', '药': 'yao',
    '恒': 'heng', '瑞': 'rui', '医': 'yi', '药': 'yao',
    '华': 'hua', '东': 'dong', '医': 'yi', '药': 'yao',
    '康': 'kang', '泰': 'tai', '医': 'yi', '药': 'yao',
    '同': 'tong', '仁': 'ren', '堂': 'tang',
    '云': 'yun', '南': 'nan', '白': 'bai', '药': 'yao',
    '我': 'wo', '的': 'di', '家': 'jia', '居': 'ju',
    '顾': 'gu', '家': 'jia', '家': 'jia', '居': 'ju',
    '索': 'suo', '菲': 'fei', '亚': 'ya',
    '格': 'ge', '力': 'li', '电': 'dian', '器': 'qi',
    '美': 'mei', '的': 'di', '集': 'ji', '团': 'tuan',
    '海': 'hai', '尔': 'er', '智': 'zhi', '家': 'jia',
    '苏': 'su', '泊': 'po', '尔': 'er',
    '老': 'lao', '板': 'ban', '电': 'dian', '器': 'qi',
    '万': 'wan', '和': 'he', '电': 'dian', '气': 'qi',
    '华': 'hua', '帝': 'di', '证': 'zheng', '券': 'quan',
    '华': 'hua', '兰': 'lan', '医': 'yi', '药': 'yao',
    '康': 'kang', '恩': 'en', '贝': 'bei',
    '九': 'jiu', '州': 'zhou', '药': 'yao', '业': 'ye',
    '人': 'ren', '福': 'fu', '医': 'yi', '药': 'yao',
    '丽': 'li', '珠': 'zhu', '集': 'ji', '团': 'tuan',
    '五': 'wu', '粮': 'liang', '液': 'ye',
    '泸': 'lu', '州': 'zhou', '老': 'lao', '窖': 'jiao',
    '茅': 'mao', '台': 'tai',
    '山': 'shan', '西': 'xi', '汾': 'fen', '酒': 'jiu',
    '洋': 'yang', '河': 'he', '股': 'gu', '份': 'fen',
    '古': 'gu', '井': 'jing', '贡': 'gong', '酒': 'jiu',
    '青': 'qing', '岛': 'dao', '啤': 'pi', '酒': 'jiu',
    '重': 'chong', '庆': 'qing', '啤': 'pi', '酒': 'jiu',
    '燕': 'yan', '京': 'jing', '啤': 'pi', '酒': 'jiu',
    '贵': 'gui', '州': 'zhou', '茅': 'mao', '台': 'tai',
    '海': 'hai', '天': 'tian', '味': 'wei', '业': 'ye',
    '中': 'zhong', '炬': 'ju', '高': 'gao', '新': 'xin',
    '宝': 'bao', '信': 'xin', '软': 'ruan', '件': 'jian',
    '卫': 'wei', '士': 'shi', '通': 'tong', '信': 'xin',
    '中': 'zhong', '兴': 'xing', '通': 'tong', '讯': 'xun',
    '烽': 'feng', '火': 'huo', '通': 'tong', '信': 'xin',
    '紫': 'zi', '光': 'guang', '股': 'gu', '份': 'fen',
    '用': 'yong', '友': 'you', '网': 'wang', '络': 'luo',
    '金': 'jin', '山': 'shan', '办': 'ban', '公': 'gong',
    '三': 'san', '六': 'liu', '零': 'ling',
    '金': 'jin', '蝶': 'die', '软': 'ruan', '件': 'jian',
    '中': 'zhong', '软': 'ruan', '件': 'jian', '国': 'guo', '际': 'ji',
    '金': 'jin', '证': 'zheng', '股': 'gu', '份': 'fen',
    '南': 'nan', '方': 'fang', '传': 'chuan', '媒': 'mei',
    '万': 'wan', '达': 'da', '电': 'dian', '影': 'ying',
    '华': 'hua', '策': 'ce', '影': 'ying', '视': 'shi',
    '光': 'guang', '线': 'xian', '传': 'chuan', '媒': 'mei',
    '分': 'fen', '众': 'zhong', '传': 'chuan', '媒': 'mei',
    '东': 'dong', '方': 'fang', '财': 'cai', '富': 'fu',
    '同': 'tong', '花': 'hua', '顺': 'shun',
    '恒': 'heng', '生': 'sheng', '电': 'dian', '子': 'zi',
    '生': 'sheng', '益': 'yi', '科': 'ke', '技': 'ji',
    '瑞': 'rui', '芯': 'xin', '微': 'wei', '电': 'dian', '子': 'zi',
    '兆': 'zhao', '易': 'yi', '创': 'chuang', '新': 'xin',
    '士': 'shi', '兰': 'lan', '微': 'wei',
    '华': 'hua', '虹': 'hong', '股': 'gu', '份': 'fen',
    '中': 'zhong', '环': 'huan', '装': 'zhuang', '备': 'bei',
    '晶': 'jing', '方': 'fang', '科': 'ke', '技': 'ji',
    '蓝': 'lan', '思': 'si', '科': 'ke', '技': 'ji',
    '欧': 'ou', '菲': 'fei', '光': 'guang', '电': 'dian',
    '汇': 'hui', '顶': 'ding', '科': 'ke', '技': 'ji',
    '闻': 'wen', '泰': 'tai', '科': 'ke', '技': 'ji',
    '韦': 'wei', '尔': 'er', '股': 'gu', '份': 'fen',
    '汇': 'hui', '顶': 'ding',
    '中': 'zhong', '际': 'ji', '控': 'kong',
    '华': 'hua', '天': 'tian', '科': 'ke', '技': 'ji',
    '华': 'hua', '工': 'gong', '科': 'ke', '技': 'ji',
    '航': 'hang', '天': 'tian', '科': 'ke', '技': 'ji',
    '中': 'zhong', '国': 'guo', '卫': 'wei', '星': 'xing',
    '中': 'zhong', '国': 'guo', '动': 'dong', '力': 'li',
    '中': 'zhong', '国': 'guo', '航': 'hang', '天': 'tian',
    '航': 'hang', '发': 'fa', '动': 'dong', '力': 'li',
    '洪': 'hong', '都': 'du', '航': 'hang', '空': 'kong',
    '中': 'zhong', '直': 'zhi', '股': 'gu', '份': 'fen',
    '中': 'zhong', '国': 'guo', '船': 'chuan', '舶': 'bo',
    '中': 'zhong', '国': 'guo', '重': 'zhong', '工': 'gong',
    '中': 'zhong', '国': 'guo', '中': 'zhong', '车': 'che',
    '郑': 'zheng', '州': 'zhou', '煤': 'mei', '业': 'ye',
    '平': 'ping', '煤': 'mei', '股': 'gu', '份': 'fen',
    '潞': 'lu', '安': 'an', '环': 'huan', '能': 'neng',
    '淮': 'huai', '北': 'bei', '矿': 'kuang', '业': 'ye',
    '中': 'zhong', '国': 'guo', '神': 'shen', '华': 'hua',
    '兖': 'yan', '矿': 'kuang', '能': 'neng', '源': 'yuan',
    '山': 'shan', '西': 'xi', '焦': 'jiao', '化': 'hua',
    '宝': 'bao', '钢': 'gang', '股': 'gu', '份': 'fen',
    '鞍': 'an', '钢': 'gang', '股': 'gu', '份': 'fen',
    '山': 'shan', '东': 'dong', '钢': 'gang', '铁': 'tie',
    '包': 'bao', '钢': 'gang', '股': 'gu', '份': 'fen',
    '马': 'ma', '钢': 'gang', '股': 'gu', '份': 'fen',
    '新': 'xin', '钢': 'gang', '钒': 'fan', '钛': 'tai',
    '西': 'xi', '宁': 'ning', '特': 'te', '钢': 'gang',
    '河': 'he', '钢': 'gang', '股': 'gu', '份': 'fen',
    '太': 'tai', '钢': 'gang', '不': 'bu', '锈': 'xiu',
    '方': 'fang', '大': 'da', '特': 'te', '钢': 'gang',
    '南': 'nan', '钢': 'gang', '股': 'gu', '份': 'fen',
    '华': 'hua', '菱': 'ling', '钢': 'gang', '管': 'guan',
    '中': 'zhong', '国': 'guo', '石': 'shi', '油': 'you', '股': 'gu', '份': 'fen',
    '中': 'zhong', '国': 'guo', '石': 'shi', '化': 'hua', '股': 'gu', '份': 'fen',
    '中': 'zhong', '国': 'guo', '海': 'hai', '油': 'you', '服': 'fu',
    '中': 'zhong', '国': 'guo', '石': 'shi', '油': 'you', '工': 'gong', '程': 'cheng',
    '海': 'hai', '油': 'you', '工': 'gong', '程': 'cheng',
    '荣': 'rong', '盛': 'sheng', '石': 'shi', '化': 'hua',
    '恒': 'heng', '逸': 'yi', '石': 'shi', '化': 'hua',
    '广': 'guang', '汇': 'hui', '能': 'neng', '源': 'yuan',
    '长': 'chang', '春': 'chun', '高': 'gao', '新': 'xin',
    '赣': 'gan', '锋': 'feng',
    '稀': 'xi', '土': 'tu',
    '北': 'bei', '方': 'fang', '稀': 'xi', '土': 'tu',
    '盛': 'sheng', '和': 'he', '资': 'zi', '源': 'yuan',
    '中': 'zhong', '国': 'guo', '稀': 'xi', '土': 'tu',
    '山': 'shan', '东': 'dong', '黄': 'huang', '金': 'jin',
    '中': 'zhong', '金': 'jin', '黄': 'huang', '金': 'jin',
    '招': 'zhao', '商': 'shang', '银': 'yin', '行': 'hang',
    '兴': 'xing', '业': 'ye', '银': 'yin', '行': 'hang',
    '浦': 'pu', '发': 'fa', '银': 'yin', '行': 'hang',
    '平': 'ping', '安': 'an', '银': 'yin', '行': 'hang',
    '民': 'min', '生': 'sheng', '银': 'yin', '行': 'hang',
    '华': 'hua', '夏': 'xia', '银': 'yin', '行': 'hang',
    '中': 'zhong', '国': 'guo', '银': 'yin', '行': 'hang',
    '中': 'zhong', '信': 'xin', '银': 'yin', '行': 'hang',
    '交': 'jiao', '通': 'tong', '银': 'yin', '行': 'hang',
    '北': 'bei', '京': 'jing', '银': 'yin', '行': 'hang',
    '宁': 'ning', '波': 'bo', '银': 'yin', '行': 'hang',
    '苏': 'su', '州': 'zhou', '银': 'yin', '行': 'hang',
    '南': 'nan', '京': 'jing', '银': 'yin', '行': 'hang',
    '青': 'qing', '岛': 'dao', '银': 'yin', '行': 'hang',
    '杭': 'hang', '州': 'zhou', '银': 'yin', '行': 'hang',
    '重': 'chong', '庆': 'qing', '银': 'yin', '行': 'hang',
    '成': 'cheng', '都': 'du', '银': 'yin', '行': 'hang',
    '贵': 'gui', '阳': 'yang', '银': 'yin', '行': 'hang',
    '长': 'chang', '沙': 'sha', '银': 'yin', '行': 'hang',
    '浙': 'zhe', '江': 'jiang', '银': 'yin', '行': 'hang',
    '东': 'dong', '方': 'fang', '财': 'cai', '富': 'fu',
    '民': 'min', '生': 'sheng', '银': 'yin', '行': 'hang',
  };

  // ─── 内置核心股票清单（数据源不可达时检索兜底；source=core）───
  const CORE_STOCKS = [
    { code: '600519.SH', name: '贵州茅台' },
    { code: '000001.SZ', name: '平安银行' },
    { code: '600036.SH', name: '招商银行' },
    { code: '000858.SZ', name: '五粮液' },
    { code: '601088.SH', name: '中国神华' },
    { code: '601318.SH', name: '中国平安' },
    { code: '000651.SZ', name: '格力电器' },
    { code: '600900.SH', name: '长江电力' },
    { code: '000333.SZ', name: '美的集团' },
    { code: '600030.SH', name: '中信证券' },
    { code: '300750.SZ', name: '宁德时代' },
    { code: '600276.SH', name: '恒瑞医药' },
    { code: '601012.SH', name: '隆基绿能' },
    { code: '600887.SH', name: '伊利股份' },
    { code: '000725.SZ', name: '京东方A' },
    { code: '601398.SH', name: '工商银行' },
    { code: '600028.SH', name: '中国石化' },
    { code: '601857.SH', name: '中国石油' },
    { code: '600048.SH', name: '保利发展' },
    { code: '002594.SZ', name: '比亚迪' },
  ];

  // 动态注册的额外股票（自选/持仓/评估历史由调用方传入或经 registerExtraStocks 注册）
  let _extraStocks = [];

  function toPinyinInitials(name) {
    // 汉字 → 拼音首字母（如 贵州茅台 → gzmt）；非汉字字符跳过
    const s = String(name || '');
    let out = '';
    for (const ch of s) {
      const p = CHAR_PINYIN[ch];
      if (p) out += p.charAt(0);
      else if (/[a-zA-Z0-9]/.test(ch)) out += ch.toLowerCase();
    }
    return out;
  }

  function toPinyin(name) {
    // 汉字 → 全拼（如 贵州茅台 → guizhoumaotai）；非汉字字符跳过
    const s = String(name || '');
    let out = '';
    for (const ch of s) {
      const p = CHAR_PINYIN[ch];
      if (p) out += p;
      else if (/[a-zA-Z0-9]/.test(ch)) out += ch.toLowerCase();
    }
    return out;
  }

  function normalizeQuery(q) {
    return String(q || '').trim().toLowerCase();
  }

  // token 匹配：数字→代码；汉字→名称；字母→代码/首字母/全拼
  function matchToken(tok, s) {
    const code = (s.code || '').toLowerCase();
    if (/^\d+$/.test(tok)) return code.indexOf(tok) !== -1;
    if (/[\u4e00-\u9fa5]/.test(tok)) return (s.name || '').toLowerCase().indexOf(tok) !== -1;
    if (code.indexOf(tok) !== -1) return true;
    if ((s.initials || toPinyinInitials(s.name)).indexOf(tok) !== -1) return true;
    if ((s.pinyin || toPinyin(s.name)).indexOf(tok) !== -1) return true;
    return false;
  }

  // 构造可测索引：内置核心清单 + 额外股票（去重按 code）
  function buildStockIndex(extraStocks) {
    const seen = {};
    const out = [];
    const push = function (code, name, source) {
      if (!code || seen[code]) return;
      seen[code] = true;
      out.push({
        code: code,
        name: name || code,
        source: source || 'core',
        initials: toPinyinInitials(name || code),
        pinyin: toPinyin(name || code),
      });
    };
    CORE_STOCKS.forEach(function (s) { push(s.code, s.name, 'core'); });
    (extraStocks || []).forEach(function (s) { push(s.code, s.name, 'extra'); });
    return out;
  }

  // 搜索：query 空格/标点分词，全部 token 命中才计入；返回 [{code, name, source}] 上限 20
  function searchStocksByQuery(query, stockIndex) {
    const q = normalizeQuery(query);
    if (!q || !stockIndex || !stockIndex.length) return [];
    const tokens = q.split(/[\s,，、;；]+/).filter(Boolean);
    if (!tokens.length) return [];
    return stockIndex
      .filter(function (s) { return tokens.every(function (tok) { return matchToken(tok, s); }); })
      .slice(0, 20)
      .map(function (s) { return { code: s.code, name: s.name, source: s.source || 'core' }; });
  }

  // 注册额外股票（供自选/持仓/评估历史等动态股票池注册）
  function registerExtraStocks(stocks) {
    if (!Array.isArray(stocks)) return;
    _extraStocks = _extraStocks.concat(stocks);
  }

  function getExtraStocks() {
    return _extraStocks.slice();
  }

  function getStockIndex() {
    return buildStockIndex(_extraStocks);
  }

  // 便捷入口：仅搜索内置核心清单 + 已注册额外股票
  function searchCoreStocks(query) {
    return searchStocksByQuery(query, getStockIndex());
  }

  const api = {
    CHAR_PINYIN: CHAR_PINYIN,
    CORE_STOCKS: CORE_STOCKS,
    toPinyinInitials: toPinyinInitials,
    toPinyin: toPinyin,
    normalizeQuery: normalizeQuery,
    matchToken: matchToken,
    buildStockIndex: buildStockIndex,
    searchStocksByQuery: searchStocksByQuery,
    registerExtraStocks: registerExtraStocks,
    getExtraStocks: getExtraStocks,
    getStockIndex: getStockIndex,
    searchCoreStocks: searchCoreStocks,
  };

  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.pinyin = api;
  }

  return api;
});
