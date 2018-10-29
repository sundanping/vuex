// 初始状态，利用函数可重新生成初始状态

export default (initialState = {}) => ({
    userinfo: {},
    loggedIn: false,
    token: '',
    check: 12,
    redirect: '/',
    msgNum: 0,
    playQueueLen: 0,
    nickName: '',
    isShowButton: false,
    isVoteShowin: false,
    isStatusExist: false,
    currentLocation: '',
    newMsg: null,
    giftInfo: {},
    channelList: [], // 当前时间频率列表LIST
    currentChannel: {}, // 当前频率
    currentProgram: {},
    currentTopic: {}, // 当前显示话题
    contentHeight: 0, // 内容区宽度 .main-content
    currentActivityId: '',
    openedActivityId: '',
    forbidActivityClose: false, // 阻止活动详情页面关闭
    currentFontType: {
      name: '',
      style: {}
    },
    deviationTime: 0, // 本地时间与服务器时间偏差
    backTopRight: 0, // 回到顶部按钮右侧偏移
    ...initialState
  });
