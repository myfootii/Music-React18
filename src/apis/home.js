import api from './instance';

// 二维码登录
// 1、调用此接口可生成一个 key
const getQRkey = () => { return api.get(`/login/qr/key?timestamp=${Date.now()}`, {}) };
/*
    * 2、二维码生成接口
    * 调用此接口可生成二维码图片的 base64 和二维码信息
    * 可选参数: qrimg 传入后会额外返回二维码图片 base64 编码
*/
const createQR = ({ key = '', qrimg = true }) => { return api.get(`/login/qr/create?key=${key}&qrimg=${qrimg}&timerstamp=${Date.now()}`, {}) };
// 3、二维码检测扫码状态接口
// 获取二维码扫码状态：800 为二维码过期；801 为等待扫码；802 为待确认；803 为授权登录成功(803 状态码下会返回 cookies)
const checkQR = ({ key = '' }) => { return api.get(`/login/qr/check?key=${key}&timestamp=${Date.now()}`, {}) };
// 4、根据返回的cookies，获取用户登录的状态
const getQRLogin = ({ cookie = '' }) => { return api.post(`/login/status?timestamp=${Date.now()}`, { cookie }) };

// 邮箱账号密码登录
const loginPwd = ({ email = '', password = '' }) => { return api.post(`/login`, {email, password }) };
// 发送验证码
const sentCode = ({ phone = '', ctcode = '86' }) => { return api.get(`/captcha/sent?phone=${phone}&ctcode=${ctcode}`, {})};
// 验证验证码
const verifyCode = ({ phone = '', ctcode = '86', captcha = '' }) => { return api.get(`/captcha/verify?phone=${phone}&ctcode=${ctcode}&captcha=${captcha}`, {})};
// 手机号快捷登录
const loginPhone = ({ phone = '', password = '', ctcode = '86', captcha = '' }) => { return api.post(`/login/cellphone`, {phone, password, countrycode: ctcode, captcha }) };
// 退出登录
const logout = () => { return api.get('/logout', {}) }




// 首页轮播图
const getBanner = () => { return api.get('/banner', {}) };

// 歌词
const lyrics = ({ id = '' }) => { return api.get(`/lyric?id=${id}`, {}) }

/* ********* 排行榜 ********* */
// 排行榜
const toplist = () => { return api.get('/toplist', {}) }
// 排行榜歌单列表
const topRankList = ({ id = '', s = 8 }) => { return api.get(`/playlist/detail?id=${id}&s=${s}`, {}) }
// 所有榜单内容摘要
const topListDetail = () => { return api.get('/toplist/detail', {}) }


/* ********* 歌单相关 ********* */
// 最热推荐
const hotPlayList = () => { return api.get('/playlist/hot', {}) };
// 歌单列表
const playList = ({ order = 'hot', cat = '', limit = 50, offset = 0 }) => { return api.get(`/top/playlist?limit=${limit}&order=${order}&cat=${cat}&offset=${offset}`, {}) };


// 歌单详情
const playListDetail = ({ id = '', s = 8 }) => { return api.get(`/playlist/detail?id=${id}&s=${s}`, {}) };
// 歌单分类
const catlist = () => { return api.get('/playlist/catlist', {}) }
// 相关歌单推荐
const playlistRelated = ({ id = '' }) => { return api.get(`/related/playlist?id=${id}`, {}) }
// 歌单评论
const playlistComment = ({ id = '', limit = 20, offset = 0, before = 0 }) => { return api.get(`/comment/playlist?id=${id}&limit=${limit}&offset=${offset}&before=${before}`, {}) }
// 收藏、取消歌单 1：收藏 2取消
const subPlayList = ({ t = 1, id = '' }) => { return api.get(`/playlist/subscribe?t=${t}&id=${id}`, {}) }
// 歌单收藏用户
const playlistSCollect = ({ id = '', limit = 20, offset = 0 }) => { return api.get(`/playlist/subscribers?id=${id}&limit=${limit}&offset=${offset}`, {}) }

/* ********* 歌曲 ********* */
// 歌曲详情 多个id , 隔开
const songDetail = ({ ids = '', timestamp = 0 }) => { return api.post(`/song/detail?timestamp=${timestamp}`, { ids: ids }) }
// 获取相似音乐
const simiSong = ({ id = '' }) => { return api.get(`/simi/song?id=${id}`, {}) };
// 包含这首歌的歌单
const simiPlayList = ({ id = '' }) => { return api.get(`/simi/playlist?id=${id}`, {}) };
// 获取相似歌手 歌手ID
const simiArtist = ({ id = '' }) => { return api.get(`/simi/artist?id=${id}`, {}) };
// 获取最近 5 个听了这首歌的用户 歌曲 id
const simiUser = ({ id = '' }) => { return api.get(`/simi/user?id=${id}`, {}) };
// 歌曲相关视频
const mlog = ({ id = '', mvid = '', limit = 9 }) => { return api.get(`/mlog/music/rcmd?songid=${id}&mvid=${mvid}&limit=${limit}`, {}) };

export {
  hotPlayList,
  playList,
  
  toplist,
  topRankList,
  topListDetail,

  lyrics,
  getBanner,

  playListDetail,
  catlist,
  playlistRelated,
  playlistComment,
  subPlayList,
  playlistSCollect,
  
  songDetail,
  simiSong,
  simiPlayList,

  getQRkey,
  createQR,
  getQRLogin, 
  checkQR,
  loginPwd,
  sentCode, 
  logout,
  verifyCode,
  loginPhone
}