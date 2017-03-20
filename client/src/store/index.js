import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import dealLyric from '../js/dealLyric.js'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		indexCurrentPage: '',
		audio: {
			playList: [
				// {
				// 	name: '告白气球',
				// 	author: '周杰伦',
				// 	songCover: 'https://p4.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg?param=400y400',
				// 	lyric: dealLyric('[00:00.00] 作曲 : 周杰伦\n[00:01.00] 作词 : 方文山\n[00:24.32]塞纳河畔 左岸的咖啡\n[00:26.67]我手一杯 品尝你的美\n[00:30.08]留下唇印的嘴\n[00:35.02]花店玫瑰 名字写错谁\n[00:37.74]告白气球 风吹到对街\n[00:40.71]微笑在天上飞\n[00:44.79]你说你有点难追 想让我知难而退\n[00:49.84]礼物不需挑最贵 只要香榭的落叶\n[00:55.22]喔 营造浪漫的约会 不害怕搞砸一切\n[01:00.54]拥有你就拥有 全世界\n[01:05.92]亲爱的 爱上你 从那天起\n[01:12.19]甜蜜的很轻易\n[01:16.57]亲爱的 别任性 你的眼睛\n[01:22.59]在说我愿意\n[01:28.59]\n[01:34.00]\n[01:40.69]\n[01:49.68]塞纳河畔 左岸的咖啡\n[01:52.08]我手一杯 品尝你的美\n[01:55.80]留下唇印的嘴\n[01:59.89]花店玫瑰 名字写错谁\n[02:02.64]告白气球 风吹到对街\n[02:05.91]微笑在天上飞\n[02:09.95]你说你有点难追 想让我知难而退\n[02:14.84]礼物不需挑最贵 只要香榭的落叶\n[02:20.09]喔 营造浪漫的约会 不害怕搞砸一切\n[02:25.65]拥有你就拥有 全世界\n[02:30.86]亲爱的 爱上你 从那天起\n[02:37.03]甜蜜的很轻易\n[02:41.97]亲爱的 别任性 你的眼睛\n[02:47.89]在说我愿意\n[02:52.58]亲爱的 爱上你 恋爱日记\n[02:58.61]飘香水的记忆\n[03:03.11]一整瓶 的梦境 全都有你\n[03:09.15]搅拌在一起\n[03:13.55]亲爱的别任性 你的眼睛\n[03:21.91]在说我愿意'),
				// 	allTime: '03:35',
				// 	songAddress: 'http://m2.music.126.net/RMJR7wDullRqppBk8dhLow==/3435973841155597.mp3'
				// },
				// {
				// 	name: '锦鲤抄',
				// 	author: '银临',
				// 	songCover: 'https://p4.music.126.net/b7vZLSY7UvKe6aLs3_jaxg==/5859297464423609.jpg?param=400y400',
				// 	lyric: dealLyric('[00:00.00] 作曲 : 银临\n[00:01.00] 作词 : 慕清明\n[00:33.190]蝉声陪伴着行云流浪\n[00:37.240]回忆开始后安静遥望远方\n[00:41.260]荒草覆没的古井枯塘\n[00:45.450]匀散一缕过往\n[00:48.890]\n[00:49.450]晨曦惊扰了陌上新桑\n[00:53.650]风卷起庭前落花穿过回廊\n[00:57.770]浓墨追逐着情绪流淌\n[01:01.900]染我素衣白裳\n[01:06.390]\n[01:07.260]阳光微凉 琴弦微凉\n[01:11.440]风声疏狂 人间仓皇\n[01:15.560]呼吸微凉 心事微凉\n[01:19.740]流年匆忙 对错何妨\n[01:24.480]你在尘世中辗转了千百年\n[01:28.670]却只让我看你最后一眼\n[01:32.880]火光描摹容颜燃尽了时间\n[01:36.820]别留我一人 孑然一身\n[01:41.240]凋零在梦境里面\n[01:45.300]\n[02:02.020]萤火虫愿将夏夜遗忘\n[02:05.680]如果终究要挥别这段时光\n[02:09.670]裙袂不经意沾了荷香\n[02:13.800]从此坠入尘网\n[02:17.160]\n[02:17.970]屐齿轻踩着烛焰摇晃\n[02:22.060]所有喧嚣沉默都描在画上\n[02:26.110]从惊蛰一路走到霜降\n[02:30.300]泪水凝成诗行\n[02:34.790]\n[02:35.790]灯花微凉 笔锋微凉\n[02:39.410]\n[02:39.910]难绘虚妄 难解惆怅\n[02:43.980]梦境微凉 情节微凉\n[02:48.090]迷离幻象 重叠忧伤\n[02:52.030]\n[02:52.840]原来诀别是因为深藏眷恋\n[02:57.080]你用轮回换我枕边月圆\n[03:01.200]我愿记忆停止在枯瘦指尖\n[03:05.250]随繁花褪色 尘埃散落\n[03:09.680]渐渐地渐渐搁浅\n[03:14.180]多年之后 我又梦到那天\n[03:21.290]\n[03:21.970]画面遥远 恍惚细雨绵绵\n[03:29.930]如果来生太远寄不到诺言\n[03:34.120]不如学着放下许多执念\n[03:38.230]以这断句残篇向岁月吊唁\n[03:42.300]老去的当年 水色天边\n[03:46.730]有谁将悲欢收殓\n[03:50.570]蝉声陪伴着行云流浪\n[03:54.760]回忆的远方'),
				// 	allTime: '04:03',
				// 	songAddress: 'http://m10.music.126.net/20170318172825/5e3541c43190d4cc2fa1fa77ebb75220/ymusic/2d03/4ff0/33cc/7dd6f83383489ca1657be18151aabca9.mp3'
				// }
			],
			nowTime: '00:00',
			isPlaying: false,   //代表当前是否有歌曲进入audio标签，与歌曲播放状态和暂停状态无关
			playStatus: 'paused',  //播放还是暂停
			playWay: 'random', //代表播放模式
			playIndex: 0 //代表当前audio内在播放playList中索引为playIndex的歌曲
		},
		detail: {}
	},
	mutations: {
		routeToHomeChild (state, child) {
			state.indexCurrentPage = child;
		},
		beginPlay (state) {
			state.audio.isPlaying = true;  
			state.audio.playStatus = 'play';
		},
		changeNowTime (state, nowTime) {
			state.audio.nowTime = nowTime;
		},
		changePlayStatus (state, status) {
			state.audio.playStatus = status;
		},
		addToPlayList (state, song) {
			state.audio.playList.push(song);
		},
		changePlayIndex (state, index) {
			state.audio.playIndex = index;
		},
		changePlayWay (state, way) {
			state.audio.playWay = way;
		},
		setDetail (state, detail) {
			state.detail = detail;
		}
	}
});