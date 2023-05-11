/**
 * @author Aming
 * @name 青龙通知接口
 * @origin 红灯区
 * @version 1.0.7
 * @description 青龙通知接口
 * @public false
 * @priority 5
 * @disable false
 * @service true
 */

/* 
  说明：
    1、这是红灯区插件，基于红灯区插件进行的二开 （author Doraemon）

  ----------------------

  注意：
   1、简单测试可用
   2、无界超授可用
   3、自用插件
   4、测试阶段，还在完善。
  ----------------------

  功能：
   1、支持记录所有青龙脚本日志到本地文件，方便排查 ，文件最大10M，超过会自动清空。 （已实现）
   2、支持记录指定脚本活动未开始的日志到本地文件，方便设置定时 （已实现）
      目前支持：（后续会逐渐完善） 
          M关注抽奖 
          M等级/生日礼包 
          M幸运抽奖 
          M加购有礼 
          M无线游戏 
          M打豆豆
          M读秒手速

   3、支持匹配豆子大于等于多少豆 进行消息通知，目前只支持部分脚本，后续完善，或者请提供日志一起完善 （已实现）
      目前支持：（后续会逐渐完善）
          M打豆豆
          M幸运抽奖
          M积分兑换
          M老虎机抽奖
          M盖楼领奖
          M加购有礼
          加购有礼通用-加密


   4、针对脚本日志有提示活动开始时间的，直接通过spy定时任务，添加定时任务 （正在完善）
   5、针对活动详情日志处理
      目前支持：（后续会逐渐完善） 
          M分享有礼：1人，2京豆 分享有豆提示
   6、添加定时功能 都是内联执行 Bncr_spy定时任务功能插件.js 自动添加定时任务
  ----------------------

  变量解释：

      notStartedPattern 未开始活动正则

      notStartedNotify 是否进行未开始活动通知

      beanNotify 是否判断京豆数量

      addCronFlag 是否进行匹配开始时间，并且添加cron

      activityInfoNotify 是否进行活动详情处理通知

      luckAddCron M幸运抽奖添加定时开关

      filterLogsByPattern 正则过滤，对于无用的日志 不写入到所有日志中

  ----------------------

  更新日志：
      v1.0.0 插件上线
      2023.5.8 v1.0.1 修复插件加载异常bug
      2023.5.8 v1.0.2 新增 M积分兑换规则 / M老虎机抽奖 规则 
                      新增 京豆通知阈值
                      新增 活动详情有豆子的时候发送通知，如M分享有礼
                      新增 变量解释注释
      2023.5.9 v1.0.3 修复 未开始活动日志错误信息记录问题
                      新增 部分脚本处理 M盖楼领奖 M读秒手速
                      更新 功能注释
      2023.5.9 v1.0.4 新增 针对M幸运抽奖未开始活动自动解析开始时间
                      新增 M组队瓜分未开始活动定时
      2023.5.10 v1.0.5 优化 京豆数量判断逻辑
      2023.5.11 v1.0.6 支持多用户通知推送
      2023.5.11 v1.0.7 支持通过配置过滤不需要写入所有日志的通知
      TODO：针对493日志发送通知
*/

const AmTool = require("./mod/AmTool");
const wx_active_tool = require('../自用插件/mod/wx_active_tool');

/* 设置你的服务端token */
const setToken = '';

/* 以下是自定义配置 */
const Doraemon_tool = require('../自用插件/mod/Doraemon_tool');
// 需要接收通知的用户id
const recipientUserIds = ['5767715991'];
// 发送通知的平台
const notificationPlatform = 'tgBot';
// 京豆通知阈值
const beanNotifyLimit = 5;

// 规则
const titleRegexMap = {
  'M关注抽奖': { 
    notStartedPattern: /活动未开始/, 
    notStartedNotify: true,
    beanNotify: true, 
    filterLogsByPattern: /活动已结束|活动已经结束|垃圾或领完/,
  },
  'M等级/生日礼包': {
    notStartedPattern: /活动还未开始哦/, 
    notStartedNotify: false,
    filterLogsByPattern: /豆太少了/,
  },
  'M幸运抽奖': { 
    notStartedPattern: /活动未开始|哎哟，当前活动尚未开始噢！|未开始/, 
    notStartedNotify: true,
    luckAddCron: true,
    beanNotify: true,
    filterLogsByPattern: /需要开卡跳过|活动已结束|很抱歉，您来晚了，活动已经结束|已屏蔽|您的开卡时间未在活动设置时间内|不是会员无法参加/,
  },
  'M加购有礼': { 
    notStartedPattern: /活动未开始/, 
    notStartedNotify: true,
    addCronFlag: true,
    beanNotify: true,
    filterLogsByPattern: /活动已结束|活动已过期|垃圾或领完|活动已经结束|activityUrl不存在|京豆计划余额不足|今日奖品全部被领取，明日再来吧|奖品已发完/,
  },
  'M无线游戏': { 
    notStartedPattern: /明日再来，还未开始/, 
    filterLogsByPattern: /垃圾或领完/,
  },
  'M打豆豆': { 
    notStartedPattern: /还未开始/,
    beanNotify: true,
  },
  'M积分兑换': { 
    notStartedPattern: /未开始/, 
    notStartedNotify: true,
    beanNotify: true,
  },
  'M老虎机抽奖': {
    beanNotify: true,
  },
  "M分享有礼": {
    activityInfoNotify: true,
  },
  "M盖楼领奖": {
    beanNotify: true,
  },
  "M读秒手速": {
    notStartedPattern: /活动未开始/, 
  },
  "M组队瓜分": {
    notStartedPattern: /未开始/, 
    notStartedNotify: true,
    addCronFlag: true,
    filterLogsByPattern: /已屏蔽|活动已结束/,
    activityInfoNotify: true,
  },
  "M关注有礼无线": {
    filterLogsByPattern: /活动已结束|礼包已经不存在，不能继续访问！/,
  },
  
  // 添加更多的title和匹配规则
};


/* post接口 */
router.post('/api/qinglongMessage', (req, res) => {
    try {
        const { title, message, token } = req?.body;
        if (token !== setToken) return res.send({ code: 400, data: '', msg: '青龙BncrToken与Bncr setToken不一致' });
        /* 标题 */
        // console.log('title', title);
        /* 推送日志 */
        // console.log('message', message);

        // 日志处理
        handleNotStartedActivity(title, message);

        /* 返回结果 */
        return res.send({ code: 200, data: '', msg: 'ok' });
    } catch (e) {
        res.send({ code: 400, data: '', msg: '参数有误！' });
        console.error(e.toString());
    }
});


/* get接口 */
router.get('/api/qinglongMessage', async (req, res) => {
  res.send('Bncr青龙消息通知接口');
});

/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a042039a719747f50834704475d1179d49a0336e100572600dfb70eced6305ba290067a980344eac103f7872183f4f2eacc1611fde84d21dda3e4929d96be01cbbc3b207e87260f22b930b1eb142f54045eb47dd3e292f3dd9f9cfe2052107322b81567dc70c87ba3b01bfd1e919d7d2e0287927a7a672f0f69aa3e1f967bef0af1ee63a3e84d2a676247959857f4c32ab314a3f5fc7068ac1573d5479e4428344cb2356c713885f35ab463ab9def04163c3c98e34c3fa1437db6276ab14a9c9c998674bf96729110530812bae6f1599b751d328b2127d09324d8de20a1c467e8a69429125ea3d9ede23d0c82ca505b8f748aded2b72adbdacebb3d980dfc4993b1cb46817a4b74a3bddb3e1827d9ed0ba7086fa7a503fb7aa6b91f5f18aaa425d5f0f14e72a94419933282c57638d7ac1edd0292e8a19c84d4d46b2d85d43dd161c22f6277275012a6b949a0ebfa15a26b2a6ae885e52841f7e9d6266f1e06ad137f172fb669fef34f340a075063818a5f0ae85e72cbe5c9089c572f32fa5d4eedc96fb855bb31563a0e961130772540961d0e9ad3ddbb0d33337a1752de9c9bdc2bb284b5c39280f9622b2a7ecf4589882dc5f90544f53ceeb9f3b499237fece074f5d55557ff297c02ab762803115001dd8a166deb6b7066ae5e7bbaeca6de6a9a49d0f63bb99ec4a8d29493c5ea7b3b12d3cdea451e4677795352147610c0aa05dd5bdf789cb37008d79fa5cc23a961e8f2ee2c76342e30615c495c4ed773585f82b133fbbaf2704d070b17a5986ac6a37d5ce659454442bc20bc3d70c896d2a1a89915b23ba9aedb792d00a152903506a28c4b5f2a08b4df854eb161a2706cbb3df4fa3d9e0f6cdb8e116a15472a3c4eb1c44ff96d1fe57560858b8a90121d73836673f68196e991556faa937478a308a644d73a5cb8b57895c035a0481131f5a4117ea2272a77624fe868eaf95bd884df3e0c6be22a6a9b5b18023f01d7fec357fffc132641eca8ef9b55c1ad957456a41b6941cd3fe126d9efd8e5545f15bf3929e80e79916f2b47046be81ad3e96dd0c8027756ccc276a3dad58afa83b7caaff1f2266e37f0b6fe609d2e8518fb3c35c38e5c510feb4458c824bbac05f5cebde2b214bfe741b474697f546e8d9d398009fb37e93a48c33595f03f6abc193dc0987b1bd33a6ff2f2e82db10e061575905067e761b751cb7e68ac9a2bad1dfc29ca82d96ec897787cddcd140ffd51a62b8563314fced782745aaad76478001f2f085ca4b62f63e19850cafb899ea1303a5070c7af4e3589e8ea833a842b5e423eea68bbcdedeb8dac0a2aa63adbafeb8d466214270fb9ea2b4cf2a54a34c07f6d6ad964a07e3e922fee02b309b7eb8d1203b8393875d0b1a9991c31d2cba9b95da4eccfb21fd2344d185d3833703cbb79619142d148b0a32fe9d63f5e6e4045e39281debcc490c5bfdffa20fb363ac720534355952a09098e34c293c34a5a3f1278086569d02788aa80f282fc139c10d9f0854be501ba43f364b6830370d719075cd4c24be63cb0e248e460f38bacb6e9717ee7f77d50b49c08d3d6c8dfce8be14b3adaf8230a2a0683b3c78e3cb9824a108535a4a60d329114a02a98ab49a8313b03620cf05dd083288da94f78a288f14f349884bf7d34ae3b80a6865f478ae0b7adbc4e3f66ea340f240173257fa8c352668d05f2b720c94e586de36d6ec822d7899d2c38ae66f4351fd94c11fb69a4f1fe1bb38d56382f136b183573e88eb9fe514dbe8be1913a6016db5b0fea7b691ae86ef211825d9fe85ead464fcc8215f44831ce0c084658378bbc7a0eb86fc14e31a0b5e8bfd83321b715387bd7a0d87299dcceb9b4bc506d5afb22fbd8f906e4f943c4480e13bda026a39105209be556cd8e4ce996826b4a1d0acb7c5bfbaf370c7de787b9b867df5cc4912497093c73ca3fbfe2d707858b5c2e360feba9cc60a9c998d034a1bb7a03bcc91e9e5a5074fec8eca80647b364511cf5434295c49e4b1a9786c19ce3cba7379ebd757369a8748c93328e1bcb2df6018d56e8f42d3720978762b7cd08607b0f860150e0d0d275527cbe4c9ec25aad3691b46f8c459069e45f7265fe3d224d2fa9026f7f1b91db93301f6b3984f3517c58779e44e473d8d04620c56066468647018529f30998d589a137c56185e58302971fa988e56f86e6d52d59626b840c3aea4f1c7401c5b6457e8349661997206670744ee42bb8946c1c5fd39e2f4167bfdc196bbde8fed471c6b34293c1ba0d46e904a28da1ef2d1eaa7580aead9a74e4d89f4f631db82987fb68568f102f31786d66e697c9b3f8ebf280e538d70271b14f9f92e6247f28cdfa90274dba255f05b4516a970db3c220ec02554d765a041c1a10a145ece4a7b2c019888efcabd2242a01b468c283a53d3723d520d291717605b58a3880e90b95df6e1b1bf8300186caa99147f26a28f07f65d0d32b68db38261f98414c3dea1a75d6ed84b3a200648b9c8854c360de3cf157170c08fc61feedcf2a83b1fad650dcabd84b0b1902eb98ac93bfd91df6f310207ab39f4f587017ced11cdfe2cbe146dd25800f85e5b8ef70aa79a11a579667ff6a7186717526e78c8684c81173c5677b3b6624d1cbc027069603994623ec49ded6a9e49c7396aa230ec49db3ebb614cdde3cc8b6b6b264cf44660b61f9868ea7d4b3c8434935dac6ff532c44571bf0106d839d1a446568db79e1d981bb309707779bce18c5e8d695a643fb1c9b152398bfbb34a3d0053174c03844f106f94e1005306554545c95781ba1dca099eef20297314cf1b1e8262f10b708840d0b4c5d10d326a93e31144725a580bd70120ff6cda3d09e4967b2ce7e0a48adefa9df816c5e8fff19abfbeac6c48d7af407bcb658ec5efd05ff33983ba642fa85212b7a99777e55ef87453e920fd2a60b9a32dc5d57f17c9ca6520631893471d2d4d01856dd7cb13257c46ae85405f001b189f08177e3759d2031050830a3b00b7355f5e7cf7527e20224a7182b2227759d881a62e113056bc5b08b6dd7a49cb67ed6e31c132e10dc7f22bfd08ad372e35a237b5b0a427e1cc5e796f6ebb3fca82ed868178e384e72cc5d1f764d32bd95c9ace92ed65bf67587344af45f141461a212ee0cdfd568157a2e7874fef0d0ec81db761a819d4bd01631dd99b34a77d81e0d2ca2231072cf725d8e4061ed86d419aa72af42abdd43ef7171ab013aaf5852a8ade5f32d6b60215a7970ffce31009fddbb674e7bf4aff5d72a23dbd072332d250970d49efc8d64ee48fc689a473e2887f955326547732e80916433039da89c2eb04d3e5084c3fa73e1f555fa8b7ed48045b2a2814b60d29a5856fafa92fe0803d694cce7a8f0a6fc3c3ae29b1f1a8fbe7179bc841b2a187d8df02a0f52dea86a523e005c78c15b830343a593411b99f1293932fec326c6cab502eb4ce8e1c157b07180596b0f4deb9cb4d4447f03907110e5457d6ca3e8f63d2f1e5a57054a3c8b5553005ddfaf15df6b8431aee6ea999d559bf5fa6c36f856dc46711b268db809350d139f0c00756dd802852f0f7b295f8617561e2e4aa56048a36e8e33a4f755c150a34d266a818e810444adbc11d1a1b4fb9e0c4b44ce3cf4b1565cee684264d22168964441977ad370ac6a74b2ab953c140e9182013205a522d72c1ce346b756a4ee851e117f9c2469bfbc3da45dd096df5675aeadf8558393ac4a829a8b3686c2a490f09843f2b8e0ee4dd19510f6814f979220becff5d616a44e4bf132438655020d1be0f5185be8354465a2d40568c63aa739c6114965b962f1737c4ddbceecad6ac8b16922a65b992001530070f4c15c3ad9feaaf0816cb7c7a047d81d1af94474c47cfef1dd6a839eebbf481ad795bf3f03146745e50e2388648d190f54429c91e03edd6f987ca54478b5ecae7c79a51668af0ce9892c38582131dce42c69347ba832a94a122052b8f95a868c61ae49b302c9612778bfa9263b8deb0d6b90a95ed7f87fb179fcaae78728a8c05736da4be054261aa8783c4836d2c8b277ab563c25c3bbcc3d892308b2dfd264c4e080e33f3efb613510e00a2f4c8c5fd0ae04a375b3b5e4bfba163f8ee9ac7fdf5fcb235fb2641e1e27f25ed1cc03221e7b246f044e3dda5ebdf0e8b4b2027f1ac73db48c8abe95a15ad4fca055524cd54f459d33aae3c0ce9fd116192cfd3eb042d029afd7d56bb87542ff82d22721f61e66aeb98067fa75459edfba93606f34af56985367374ba730249a12a13f5d7157d73526fa5aa06acdf1372f6aedf02cc41ceab990e0a93310a427c3b7ec9248561d746b724ac0d6aca0fb329a68e68c634916d950d8885e88858d5293c0f8397204f954420425921621190ca6b05069abb7f5e4620521017c8228bbae7bec031b283061821ed4abb0cf6499d18197f5a8294260ae88d6c63728ca1149b36396d353e804c41b973130da9adb9a4128075e0cb4d778ab0431d874b01b9fe2a5b74077d2195ce1e427f66dde51957e22544029d61dfcc14d556e6fb8befe9bf9608bd4935bc9bb08535527455d137811dcd27de5d4291b20da9ac18e045861ff19c97e6b3c08764d75296456a459178515f1c4aed422f5463bd538a40336e7ba8ffa15bffdd037d7a5b49905ab1c4f394db99bfde2caf8d4e27c0b11a400d36f5ccff6abfc45a5a8fb5e576ccce9df208015558e62a1a8aa89b2f923367206991bb14030fa6ba235ce2419c26e88c5cbf147e60688d638c516045da9116913991b04268c6b49504dd41ef3e3ba379d1cb0272373c1d3b506109e351ced2e582bbf006d992ac9ad962517776245f20ef013fabaf58e3b497fd90fb721c62177b17fecdb4f5988f257e2638a7c16525b2e969b7d62f55b4b68fe4e5a1d200728881c831cd39145fbdd03dd9f736c1d71873f4e1a951699c4421eec1d51c8835f1951dc1fb46818a150796e559ed90748d078e5a3c7f22d27742859801b4e3c7a5254fc83e4ed5d0d791beb8ad52a8eb7793a0531ed4d44c51bd6e6f79896b7bfccf2ff085cb4e37fd1378973e1dd50212ef7ac794eb66934d9c54780088cbedf2e64b412d5f7ea4cb93c92e76a0a4b21ab87cef96984324d99815adf4e7522ad5e21150004d8dc90cd62f6fa60ae3f11420bbb24e9a29dd7dab7c4dc4903d5c1d44336794a2b2478a6f8cf892f1f5c67efc53392d855a204b0f9d405b3bfc750c98383b9009ca80459851a504666b4cca3d0c00fb4d46ea9bb304e7f0017a5ef1e30c31e497807cbd7635c884d1ef460c7c71f18267bf9867c0ec5acd9d18d3d15d1f4db8589ae635f5b2b89c881c7b891d74418cc8b1c0f841efe8f7797c3fee645142bd4c4bc67e1c97bb1755792c590f9bf262d9fbfc4c39248753325d2e052fc144d47fe2867f0841d54134643ff5159c8baf4e08cf09ab790eebc35dc7bebd30deb65b4d71fa37ecc5f2ef93843dcc8026b28467e8736197028e91e96d5deaf9bf550477488d93dcbcd949c63bda1acb3bcac343599e64eda2eeea4c76e65255e5c4d3aa31996d0df68cda7ba99aa8955cdf6190122614a34acf726e65d64aa21b8612d983c978a8d1ab3ec6648c829c71774ef41c5633010557dc6912418b541e6da42ae8d4dda567cce342fdabdd769688db088671a8bd586e6162e6a273e25f4f4b10c5edff91454e7b5f376c3c44aa95b07d10b23c8b76ba21fe1b6ad91dcf72b81aa56501084de427848b1289b7fe20d850d6087190d00bd42631816fcb41ce94ae2c79e851e911ae4e17f1d5aa10087565cf4305466faa18dfff71e038710ad8e8c31a531f4c0df66ccd07f57a72a487f6e2f3c6182565121947062efd19ac4049d3aa0311686c0df57d2dc6b460981ffef5ae15a3e00358b5eeded7d21d7222a0ce315f9da916a07aa72874b95a5550c41b6d2f77495d53a71ab35a5f8295571adb2bd2f64975db5fc12c780e051e100ec617c7f1680ed264948bcdd62ee29c3e9396f27910c60df342b2c9b97bfa82dc1ac4bc094bc2d297eac4bbb6fc722229f7cf772dcdf3379bbf80a078713ae3a1edfae815fba814805b2384102e5c5071d7a19d063210b75cefff3ec78ef488bc09f1a1f723d4537bf1fb25f718a1d556dba364946395f9f977c78093c8957d4cc0381fe995ff8a6b34ddd057e7552f407da3bb794de1e6b407495f5af4d36338acfded2009c67f167eceda25354732f2a806b6926164b5827afd430be5532195c044e3e483334c85356d377c759febaec0a1f45d4ba68fb4a983ca13f4a7893a5f7b0ee08f31842f58c577f91c23317ed2748dff03e7abad9c8960a37951a259c301d16e212ab5fd36441c6fcd86e000c8d8c3d98dba7aa52a51532038cc229fd852842abca68a3c542a487f48e6e6a3c6aae32174f6ae3939cc8166667a48dc52f8e081ae706db0c019e1aeeacb860a86004f2eac47c7c4122b451fb831e1449926b1964b2a402c0427cbaa1cc47b957fa3dbb3111a1cb8ced1d1b9eb5f6699dea845437c3d6157ed2fc1d745f25d5053c256123e9e25c8ddcb99c8f4fa0e28a9949f824d4cecc0d34d27438d1cd501f7497f2134661475786678be401b49eab8c92788694c6b329205f9d4008febfbd30911e0222993ce20b59a6f62c0e56f23446cecbd99f764a764773259312486ceecc7de20df0b8ca3ec3b124541ade6dd64dbef3db95826030c653c4dae1969fbdb2c2a72beb778bf70c610d1989f0c5a26e2f570a16f78c7abf2e241e80a444514364c26ca5f6b15468bf9a68eeb8633b602ed52e10950054f6cd39293b5ae4ab9bea670fb1f3e91c55f64eebc3a81c6d9bf427e6040d4c3c71ea1b75efd176673a6fcef322537b866e29cd685350b2a8cf924ba5b31f65d15f0dbd620e768bbf7bad158c18edfa5d3e8592aa4413b7e32a8b8484efb812cccc7e68ef3e5479d927fe110dceae8e0c7429b58f9e2c06674c3bc3b304d3f9397383607b90a7341605bc5b068f796a7cf8f8338351efab422c40b1ecefc4a80bbe88d468443fd47228b6b24a88f6ec6a2c8e2cddd5844dcbee4db80f8cc8ce0877c25ec3142647e9ba15ceb247205bfebafba846cffacb77a375d9a18a202dd21ceb98a9b3548bc76d78c226d638d5bd1bf5d369ba54334d545b512814e837aac213f77d6aa053019b2b45903346b77c11ef2da77a94801e6668c91820dbb31484fb0d5f986e1bc99ef946543437d098a0588a0acb21e2f99cbc5485ebc261a38b60c1e2ee9531b7d1b9a1f19c608522fe0b5c705376ff0aabdbe045ec4f7f90090827e28d4af79a3944ad2d4fe3249c8cd91cfc190754fab75f7f3f48a8fef14c7276d71ceb1e9aeb94ac2a673f7c359cff155b413f57738492358b3156c5cb04f50a61b7f1bddcc84be021b1d9010881a0047dd119e27b6d0c101cfa44f93cfa0281de0ca4d9cd9a5ab6c9cabc52e1f7e932b0ad2d521ef61e0030150f37ed554c67d7fc53696e02f422c4a17b7faba79b98d41ff69ff474d1bed105191f50bf01316ed0513f88dc0eb9a4010c7c56126e77be5a5d584ce5e2e2ac27b69fc06ae30760140a705e9dba80aa07b33684bdeac72499a9ec4beb73066c7575004c91b96c6cefe4cfa4510d6faf1b536c38e8a47e4c13593b4af888a6015d5e37bc6aa192c3aca09cc052b74b5a1187afc6cbe25d49d1b641d7c692b52ed7677c3d7da239ddcafbd81275ef2ca95d9b4492db96dba62835050bf6e6b7a6efa87cc423d229c67034683333067db19e270403180c68777b03aef045a8098a15a038db6a7fc672af06ac60a9816390dc444328533eb36f4cc09ea1797c3cc19250833cc4f139204d9fcce12894c6f3301111bf93bc098aa4fc76d9dc70b4d22d6b0abb81cb8b1f67e6852a90d639e0fda24493fc4a436f5a1b3ff83328fb98651f1b04ee35257c60e7fabe6cb0e7fc9c9dee49df12d87da7c63b1db4845fcd8983f1155a9f7a5fc6208349c67169d0203d49ed950923eab48f2091b016d45d6a61898ea0210d05faded16e3080e69fefe58e1fa10d8c45a3a07eecaae36389c00fda888ce30a7a122d78855ddc44ae076a21d71bf4e16b37b584e27f7e82d22781e432c878239374141fac8db3b3af240031d2e9c83efa576670682fcd92c895abfd1b570ab492e661b603d74e4dc5337aa7b72b6085dcd6b97762896ae96d980ebdb73e897dfe75552f65c5317ffc2a2d50fb81c4614654db7809245dda7be487f90e94d13779f5442309f1bbb99c17989bc4ae5e23780d2fd1312b810309f237005908e70cedecf415ca74f9b58783426588966e27a99ada41be6c70c3ff9a14351d63ec2c658d2147aef05a854aeafc6d48f98d48ce66bf5ada8907c6dde377cee5e372bf9ed03ee8878c14733355bed9fff712d2266fbbb199ce4a5bfe306bfb36874178d5f3f856af5a20290e7a4bb09562a3bd12fcbd56c98c339a5ed96c66969f7194c883a6eae3ac09d31359195a75d84294713e9820e1c0d87707118e42b173ffd780e2847a502e68e7e2c116850d4b38994c805d95375e5b477d9589dd4fd57bae60f6b08aa43de77896183b6068bbcc5b20d298626598105b80b3fb7efeb7b2b4c7e1f1e3288cc7ed4e2d19be70d32bd3489d3a0af44179d4c8c046cd5e7a971da3b8b9fe8a6f0f834eba410e6dac73bf295904cbb590741da5c5a0fb47810a9c962a495c6fdbb2a139540d8a2f6ef9d834d86605a08c95b9f469ceb6c84b9b0fef9472d2525c81e3ef8e53df85a144ddc998769dcdbe119f694a740a9da1f23a965839ffa5dc9a2853ae444a18cd412fafea3c654b4997edfae305e68fcc529bfef481c2240b203c2d8b5281282c102bf67ecbc2e1e9a281476a6389ef0f71b7d0ed7c95ff4d1269c0cfe09069cae6cf7ad2d0fa730de33105915a962686f3b4dffa56d1040783b619adbd3ae0d270b56f6ca34d0edb4397181436bd6da016cd5c552c4be67dbd86b2c73ca713b05a9b0b825dd2f95c338e84e676fb0cfd70f293048ff50db5d4a3ba1e2da0700d989cf5d16bb424e1c8f1219946021f6147ebcb94f5a1a08decd8ae4fb72954b4f4d9cd6cc8710a3621e67921ac9c35af7c8d9dedf69eef6af22b2970a1709f600a8a9d08a07cb9eb3cb12bc69c916b7137b1c0b18bd28d7853f87143f9944900567c5f21cf36524987ffb8a861149000852310c50ce82490513b3934c40d35e82a21b1c5f327d3781226ff919ad23006231b772519e4b625cbe0a4482f373f5b8e1ec2613b31152e737bcddbb823a079656daab908b59253aa6f4580704db21e16a62aa53196af639f88f9cd7f884a3a7fb42abf3f8ac9575cd50a9da3b81cd36524eac2173b6a8dbc05250300eea8a4fcfbf7ae049c3b825cabe680fa645c2ab4977f8f1d4135da12909a03dd82f001a2e58f898c2fbbfb749e82fe9df5b024b8296cd8eb873277be139b943851969561028a34a3ddae46966724d4ccce814273cc4c26552305a0781e786f008b9d8f8cd7696f3bf8cce9563bc8ac8b2970745c03b9fc43786afc05611c0c5e3ae874eaeea45c1fbdb1271da13ac727bebffd29bf0a5710a5b34131404778d07d25f2873b27f7c8b0e543e7327473eb079dfc22dbf567d273c12735c0df9003fa91d091c03c5a8c427347710c5bf5bcc2b446cb535f0595fd3e9ef8fe2dde925af51446d85490c06b4cecbba46eee7a34679f04e15c3495f751e41723cd4a213b57f4bf25ada2068fe2b232be874bf0e9b2b7e702e51a4b78cfae4f29f02eb24a593e1f01c3478c716143b9aea10fba6362f212ec5c3be2f583534e38fb4801a48333915908b87ad8b22fd2dcbab5bfbf0920c87bff00f4310bae45c15833c2d3dfe2bf2b60e9ea7b57e3b097aeb477a2c39fde9cb58d445ad082247385777ff99f81f88902934dc788ec6019e57029b161fc3bdc8768f2c4e9adac0f74700b4df04ad79e0a542c2f4b4fa9f0e48b76cb4e99563b1834f596e32ffb313446aaa514fc66b057441dbf77039fbb3cc2e88818ec8dbcd54183d2eb89d1acb2a2890d16867046cd55af86720e1a4abd3d9a08ede6ab7d541a21f8a44e2a191ad9e0a04b808ca7f6b1d1f288fc55beafa44865a25825c5044d78b3446c22520bcbe52dcf147c4cd066b25312beb1ba1ee7f13fa799d3666691987d19b3aefe29eac7956adc3d329bde440f6c2e34ee3982660d0117b8ec94d178cbdc1be1ba3e7578b81b19863072d910380da8524e930dc42744973b0f6111a4d9a90675cb198facc3ae8f1297723a2ad72492b584403c89e404d38fa83266cad69523155d82dba6cf27cbbddce680dd2ac59a360ba271bfde85ab7367893a0b871507ceab35ea8463c7c0bef28cbf5cc00a8274e74e8b105874b168ae39f923600a1a12ffac3ae0050055227fbe3d839ded1dfb37928eb041781d478260a6bdb0cdc476611010c56dc4e08ecb8c468213a6b513e7924fd760d0973736d49c17f774b2619609439291626c8939a5b529eda63c23baa69a86ab8199624ba31d4ba8648ed2e3bc1c59d554e964ef48ae4c0abd9aa4bc9191dec03d5f78c451d33dba604eea45f51875c76135170312d35e237cbd112f125d87a1a5ed27dc4ed7b374cc8f32af2601e3ca623dffe4959cf6c551f9fb54b2dd56eec930029e43b269a3bc720354292b51b13ef8dcceb32bd473c32ac7431e27184b7e042ba2b86dc4003ff5d2464e736b283e2c7384aecaf186bd592ef78e0931c4d99ccebe26a86b03e8f5f75acbea92ae490ad8cadba9054bcea9243fd9e4461eeffe342ab3772f0579240769c79ac51f14cfff7353ca0faa4410c4ee2106bf2f2317939f81b866deff64bd735eca5381813af18c7ac796c580f67f8ac90a6d9c598148f13b1cde4e54a2a963c7e384a7a9b2b1e60e04e34aed22446d0e025297555237f57d02d54f820bae83eda1f80ce1e98dd3b021e3bfe9847728d3cddede0390e39e185cdf7a552cce6963d6b0f205e09717d5429847300db23c2dd749409c6045e638c3aab3e6181d3f08ee9bfe7ccb1d03c55d96a8fd080b3eff241e495c4bb26628c905810655f607f4518c83add8222aff364fa081efad2f9] */