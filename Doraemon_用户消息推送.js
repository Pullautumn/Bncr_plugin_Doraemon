/**
 * @author Doraemon
 * @name Doraemon_用户消息推送
 * @origin 红灯区
 * @version v1.0.3
 * @description Doraemon_用户消息推送
 * @rule ^(push)\s*([\s\S]+)$
 * @rule ^(图片推送)\s*([\s\S]+)$
 * @admin true
 * @public false
 * @priority 1000
 * @disable false
 * 
  说明：
    1、在红灯区同级目录创建一个文件夹，名字随意 如：自用插件
        Doraemon_用户消息推送.js 放到自用插件中

    2、设置变量
    
      预设的图片名称，放在无界根目录下的public文件夹下
        set Doraemon userMessagePush_img_name xxx.jpg

      无界的host 要保证对接的平台(例如wx千寻)能访问到该地址
        set system Host http://192.168.31.192:9090

    3、命令示例：
        推送图片：
          图片推送 支付宝大包，快冲

        推送文字：
          push 支付宝大包，快冲

  注意：
    1、无界超授
    2、自用插件
  ----------------------

  功能：
    1、通过奶酪棒与用户的绑定关系，进行文字消息的推送，每个用户间隔10S（已实现）
    2、通过预先存放的图片，进行推送（已实现）
  ----------------------

  更新日志：
      v1.0.0 插件上线
      2023.10.24 v1.0.1 新增 图片推送功能，经测试 tgBot无法实现图片携带文字
      2024.04.25 v1.0.2 修复 图片推送功能 文字 图片 分两条数据
*/
/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a0420338a42ee633629a33da3aa2ecafe5406d346e0b75442aab903204eaf5ca8cfbdf75d0fb693967c30d46ee6daebaca1bd49138889fd1a5a8f5bf300041b30e10d5017a2f854451f8f6f93042d888b53d9329a3f99097cb752052c6fc3b712485176be58deb430a4d1facd0d854a09e517428a7ea7dfad8932396f9718fb00b39a7e4d3ec86cb3c4cc03b154fbe41c6b61bdc8521fbd14521f1c22ae885d41d583afccccb18b7422c202089d79530a9cd2f0497e47758ba665ed434491bb2ba65510768297464d19024ce90c7d98a3ef7006bdf8e10fc38cd8c702fe1de017125e57b248da4b263ed03dfaa24613ff658bc37c99b94b4012ccfefc61edc1d863d4920c436814879713755705f69849af66ac2745e705773d0883a632e004b860ce218910706f9f782d24b9484d74b24b7535fa3dbbf291bd0cfef74ab2c8680a2fb44018b11d5c926fe9a4dacd0df7cca4efcbd2501f8db7eb3c25cfcb8c45967d83352bef74526176cc2331fc21b8f0356b4c962d33a8ec7a2e5ff8a259919b938ad871a6bfd96510ff50e7a01e1d7bb1fcfd72a8a11fd5c2f63efc4bbff73791ed40c7230d731797026146a5e64457fdc45e87c8e4eecfbefba7ff79c0f74f2db98b7a70ad4f4f2a7ccedf0f34ee4bee7cb082cd5a6e0fbc80dc5f5d6ff7fc02eb5445655e89429197f5ea5ec7e112964359767d579793d3765aca02b27d6b63bf0ca07f9c5ff66e97ae34397b527f345d857a5ecfef5445fe774fa151a0e99f841a84ba94bdcd211968a19de0975b1ad348bb8f499d6d5211548f58b8ad3dd0c59618a53b9a39c532ed2281eaf9d2f6dba0538bde0afee921ba6243ebe195bdaa210e94c1068f6c011c7b03ee9b6bda233d63e96959f2a6b23771477df26d26021b41885164ac484e7a7575ac2746fdeebbe4dba3e9c813807297a79e995522b0e88b29d7ec081634eff301fa98ffbdbf1c3ea4b0cd489e3dcac1c28f4795d205c83fec325d4cfe717ceb78759f805ccf90bd18e785ac116d2da47d9d6d3b2809157b308b145154838aabd928f2fca98f979fe63e3289d6dae408a818973a6b78d053f1b55e6ab6ba23049535bce86583790a7fdd0271f92d3596cce5ecd1363eccb7097ed9f0b7646aaedc67f76cfe0dd3e649d0edc13c36d4b9cb6c464dab1672326470b1cbef2d10516c0b2587eb7ee3d2face0ec943e17e5026a23c4db720ec55e7a2982385e6cef816d4de04452e13999b566966877a924826aa6c5953544c8d47cbf4b2032ff3e7bf84348cb08b75e6e9316713f67be8a1bccebea7be5e3d777c48b6800b7835bd9dbcb19be07dc3a7097fdc412fd6e80bf22cb12902b671cf6245378496a52aa56f30b555f16a0eff40f5cb808059043d294e126c0bad9a15da56d42542a83af540ce0746c877ceeb137741772ff9792d7a9925818894223ccd914e4a4bf3bbe729e91660754d27f85434ff6c6a4881c9bc3d13829df5287436451045c182c8089c4b7283268dac035af2b92bcd4064d318cfa74ebf17955d69027f05202efe9dbdbcb9f6a036e40480825572271c1e6631279d2c64fd4ef622ac5f3c4fb48d6a5cb12ca0c4c459f62821cffda90943d3e3b57d44171e1b77a72e825ceede530d9a84c2bb9ff1b6dd41df807436bec48aa119bdf062a01da7cb3073dce6cf2892dec438210736b21d14d692560d475940d9232b192eb441084555adedfa3153bb71692e23183a8f1f2223b226f603c822d89d26bbdcb763e27357d08556ebbedc7f161a343ff8ee9d713e7bc09a46784d8f97cd44707e4e1b350ac723a7d7a6396c1003b1adf7c5755ca3819e66ecac6fad8c266ab93d7ce1a9d029b5835243f06059936301d829a7d0146426011ab24552f58a72426886cad965378a570f2c2b32d25115cbede07612b1aeb51c376f6ee02e0af4bd434af2026f55d9b16bbde0fb04f9953690ced3d341307c635ee17c92ef04b49d60b2808c54b55684185ce50933ba546c53506b8deb8e77cef6b0043ef0c8c9f2e15276de27074694aebc425a9b04612657f1a2b09d6fb0de04119e47d173c12fdc511a0880262ee883a131b4a8f837399be3ab57a58571e6d96ac4ffd88b025b37401fa559bc8b2b8b281e4a03682c4f46022218ec2b853a794be6ab9b060fea3d63acd64f9182d6e52d7e2000796a9568bfaea4e09feb77a6116a9b3314a4d8ad23683e1a899593f9f6f5f25389cd295bdcb542d2ac1af70a48f8b354e17086a96df7086dc8a28c7d184393417ec491a3522f7f834a70ba9acaf372912658fc5e81902fd361e3f1e9f0c7c6bbb1f67766f6f0dad9da03c2307da24a63c2cdefe2f0b6af072a4d093a027c21f5d0c2f3d6f165e64449ccdece0f008bb0babd82084e2994497f2539a7649c2cb77f1b0fcbcf5edd19c58b8e72afff01368c75f408d677d51a97e3ea6d13ae3a14241695be6e93f851035cbdebd5df959ee7a8a3e076941b820db15008490978d43a337f5855ee25b4024882602cac66c37c0c4d7572bd45926115c7770db1a6934934a4ff46fb66222d0e4d28540abed2b103bf4182254d396e679b62ac5b5fdbf65bfb729785ca2faa47df45ab428ee4380776cdc95533dd64a400c6cb2ce84d7ec3f53021324b6cd7d05a3c98213c0284d4d4b4fe849f3a334466c2f64fc0560ae04d8779a2dee579ae7cf7a9df11110bbbd52adbe84aeb3ee13207c260c18201d924526c03dc4a08fbe00f4c34dd936355af9a6e7f7ddb41ba089004a952e44e91a2264c71eeb171b03979de5169d1f247d77911e8341a7aef49e091c0922e9f8a82ef0f5ff887fce976852908418fd9ebcbd93e1c073105a0a7922eae3bc81f8d81f347fd2ea08cdba63dd8d4c03c034337a51a8010dd1825b665db9c436c491291e1e4cbad839d685fd25198f5ffae01b6b7e801f2c91eb6efc159ee91544a8d69169f8df4713752f2744ac4a21b48e20f6149f59eeca176b7b1ee577fdbd5adc8b49f7f73b5ac11d0f073723e793bbcb63cf45de7180bc0ceca61a283b15bccac1dc7459f04b8a86cdfdfde7a4cb0692d0f7e7ba4b50bba6b0a818488da6e26e9fc0a5cffc9e71307d2500d2369ac85ecd505251676610e4e0b85b0fed92118fbc84c72e912fcced1a11042ada5f99133752b65e1e58efd8e2a233b85d4ef20a6af2f25520512ba88d7707b5e28480a5d7ce3275b40544caa224d159ce34f26b3e67d429714118c0c33b5a393322762f639d34341fb59bb368c9b20f219fcaaf998b0414e249c9d3d18b32d52205c3f7d1f5fdd91be2fdcccefe281dbd6e31c7f160ef56b42016ea50ab35e36080094ce9b569ca48261eb1738383db4e7a668637ac4759e5b506bcbef8cbcd2d7a101b93648210c8eb94711340b90211410d8d06b8ddca59b90d81fe5e36fbf1f4aef59351ffca5b837b5d26365117a00918003eda16a4e0cb9dae0c140f6328940919d6699a4e987e2f985e8e5ff06c05ea06066eee09d1c2fa8d0a7ab88a6886f6ef4eccc64bc71b6fbc30751aff7dc07172ef556f7f3e0dfad6438eecacb9a1fc37deaf365f82dad319147c99690bd3f11700b0b7d7055bf197faf50132b60295e89dce24781205cd0c018a2f1fe644795b85bf5a95e3d72ec1fbddf794e50b1612099cfc21c871fda66ba9e3bd33ed291c9dc4735b6361d8ee5abe54876fd75ea6b5e57cb899172ec0b0443350fffeaa163dfab9a0507326059e28dc027d16e5a0075da01a8dbc36736497a6eba0c5ef45903273ba9cedaeea8b9fd88c33299802fd34f284c3a2ccafe528b45701e6cf1084726f223325475272abd7ad19d2c0a247fae3261502e2c45522501b4c235f397ce827cdd755867e34917acb28872c6fa0cf0075a91f48cdf90fc2ccac508a7031917db98563b067d199032cd931d755304c3bc4990757361d3bb279d1eb36813ec4fc142d9651d6b9034f980ad76e49d60d725f19764c1b8bd67dedc59cecdbacc70a0e42700dd0a6b70be95c1f0f8fea3108182620f59a76e2691e8199b9da03230c03a8aa7683a3256c43deda232fd6754a6d4836e0644bf059a45c91ca8579c7a614df7faa6a4d7c5c3dbc05da15825ceb0b0a337d08f6b66b07cffeae62de151567f27473840d08b8e3aef5b8b499d0fef934e8d93ac37baa191aa9fbc4d633f40b5308890955a515ac6f70119834c3a24bd20cbb6ea43ddd3304d954624cb6cca5f2ab2433aacd757bfe793161f511aff82bfc44dbc70084f534dff1f9227cd755850c881d64350a42de6e0323c737405fb927046b75446047009e6c5371c23a76f96e9107893fee56536178b9f3f5948d5deb4117011ab1271d8cf98738c272eba96c4ded4743944d8aa6616fe1229cfb4c48abe2e5e18e35b3331a6d7db26b61da29d0f456d3fa76bcd6849ab90f88f0347f47b0dd930368fd00cb6fd21c40fdabe1c75ed530ccb20b2256138c91c99490444d85bf1f64ed7f2a5a6836cd1284030f7e96944e5b71d08af50e0f24b20a677c3d6bad58fdb2799148bcd1748474ae868f78f5901dd2636c067bb8ffe52beedbfeb70e9dbc56e075ca6ae90ab9516b77eab20f369a62f3c4d6bf46] */






