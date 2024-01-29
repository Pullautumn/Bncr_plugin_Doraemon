/**
 * @name redis_tool
 * @version v1.0.4
 * @author Doraemon
 * @origin 红灯区
 * @description 调用redis工具
 * 
 * 
  描述：
     先安装redis依赖 npm i ioredis
  
  更新：
    v1.0.0 插件上线
    2023.11.11 v1.0.1 新增 getAllKeys() 返回当前索引库所有keys 
                      新增 flushdb() 清空当前索引库
    2023.11.30 v1.0.2 新增 getAllKeysByKeyword(keyword, count = 1000) 根据 根据keyword查询keys
    2023.12.01 v1.0.3 新增 luaDel(keys, pattern) 使用lua脚本 del  
    2024.1.29  v1.0.4 优化 luaGet(keys)
 */

/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a042039ef2d2b48b8ec359b301f03baaba15ba6041ecb153a6bdc6874514ef4f3c690dc173b78bf16126dd9d26931416d58f713909d0e9edfd237238bf67d884fcf9086c766a376246bb1a65015811cfb670e91e1b8765be97e3ba61ce555482881ecbd31c3909c75fa94546dc876e729e3874dead0e51270a5d437a3c84f88092e0699ed81d5ce885797e7a5db7a8bc052de1a5368a150c94989573a1657351f3c26fb9265082756a49428653345cce3e590eb78c6d9455b86151790e44e1b924d45d5e38fc548cbc9a32afc292acd8ae8a21d26b9dfb835c88cb9eddcac477955e511ec6f4e8a0b1c06fd867162535d15810c1e225149f97723fe2b92eacc033e7e34f148aaf43d6e559ee2b07a114cb8bc38f82dfd8fa089d905ad92e9e5eab675df65626466c7f31bbbc4e1afd15d63ba57b90ff3e6642de3cda17a5380aea3399d0776ecff85f121728419ef34dc604867e175ffcb8978d73cf6ea7119ca8507afc75f2afd6413866fea94849e1b5f2bfcf9c4350ba8cac5c71d87f8a3fd7e77092117e9625a4cb27aed4100d66260d9dea5d4e70753d18e9e6553cc80049e07c21151004aec1c387e4ace2b8f2b3f8cb18d6fe78dfeef54f48af437c39f03998f7364cad66d67fb5abbc0a4f3cf579be39fceefb3eafa66f35c5946745d1b31ee48257169ae4ab403fbe090a4977d7088f6212ce25e3463c562269d94acf33c44dc9bf165f0e8d5464a13e848b1df78f9038f5de4bd9b5a3b98c46e048a4e85be4a4212d9331ed41d982e92488327996364cb9af8cd64f85e68e7243e86fcf20e75cb6a53253878a3831ca252f5c0e34b5ba36822aa07e3af7c558d563aafafd478c088ee7fba821516989acb36cb7c80f5145b152d71e6ea2821ac180162255178a75d87c10a38ae5e51d9f7b9a48df571209955911ac72e93aff12fe19838732b341a83f33fd0ec6b15e0e77937cf3c14d7173df009eda13a408904e8641671a9cdb6ebba29aae5dd1c2b112217c62ad1a7b1dd9290288817204292f81028ac2c5f4b4a801b1515d6c0a7d96b9e466e3bbc70e93a29b785c66c4f81405eb4e6f09dccc429e3efd87dfd1c9cf0fa45fa2a41b5c61d650ca24405509e1210003f28d94e9f6a1027e1a77deabe6296271594f2f947d36888909befdde69dfaec73ebfd86b7fdcf468268e7082ef58453f955b6436b300b2a89dc5bda4f01d7931dcf1d2a7785ded3c4c13822717cfb96a6a9a15e36722c61b871140d0d5108aa1054e81ffa666a693ffda9ff068b224b4c7ea7a12c4c75779682eae3a3d6c2d53e2e6213f0ea42eaba7d7b97be038f395141cea1a25e13bd843d6c1eba6007f351b75dbc39260429004633a50674175cc86c1d0a5061f96ae9bb9c75124a087e2eda5e3d1219dbf573dd226c0e1d907d22abdfdd9875e78aa0c8b73feea97c069f06c4b08c3c9fc6ab56d5c7d2143a574d00c3f51ae70dfb9d3fe6ad3cb3ca53b5749cd5361444e94096d5ba71e70006b0ff785945c1bc9d8605b96917998bb0089d8e5100270163e1c142527ba8403b9eee89eef0d432b357dd068a2b58bb42dc5a9d3e153a19f2054ecb247c76c2dda21c81f6abb483365ab443b08475afcf4bcf03f44dba3415a3dd0c20281e3a49344d0da2c4c409fcf2d03ffc5c760b895b6d6d4779a99798e442727db5ab3d498444b88308f263b3a77f552fe7bb5c59ceac17e4d63db8a1053101c4a8ad4c0b474aac9e115791d62c742f4c9b032cc76c1a0a36660681a465edb2a95b7c9c3880b190dda472a5e10ff65c47f152047238eb83a5563626321cd82ead588865c7156e61050df77c43c972d875afce2a774c33533412aec9c3e960fa25fca222475a240a4a693e3938c632379fa7fd693617cb4ec72bbfb11807fb58160e66f627495cef05a747a7f6e95750378342f77eeb3d0413a0ca46eeb06f385e61f42bd1cbcaf3e28e4b0ace652fe0066fc4b75a66e454a8d2c1600593ed8ce47d5a740d1aa3b9932e0fe415cda8aa83a2d67a86249568449abbd7aaa1987c1f9ec3961792ed69f13e1ab85a52798ed65db594606f1b5365d779fb90c6222dc198235ca17fb715f5605789e982c954ab7ead634aca991e39a8f6d8674b1225ec309ae68df6c16303db44940e5177d7b9407c3b3a8614b19940b77305c31114f408cacd08a112dd75dd68c04070f0e11bca2f126bba45bebc3017fc537779f289a0a7782f6be0a4859dbb54587b548e932578931169157ab9778586abef61d2685cba313f8f7dff4b5cdf4f5bf3d6d3d986de1a123cfea922844512d79643428452e31ec1282d5e1d13931a90d844ef7738c3ac13c61c2470a7442fb5e5bb53642e3f94a9cfa5894f46489dafe897516d0827fefe4f0f85cfe2fc7cfa72bc73a09f3d3fbed13fea3f5e71bbc5eec67812dd794189f28bf8a41b8fa0a425b3e6dde218d2796cf28c244e739cc9ba148139241b8b5480a4a87d0db71948d1338452153e7a9f4df0a3bc467e241192e9dfb22fe617f872a00bea63db29bbddcc462395ccf78f70fb2d1d725e9fe9417b05050e4271cd1d9f1f613b1b0f1a7d197c9d329d5c6fcc7e1cc26a66f9e8128b647894cf9eec4d3a609af1186c7ee178860fafe76316c18c6d66cbd5e5282b140f7a08320f549e841384b4925dab44f7640a5ad25c76c9e2a1438279351d78e5e5f4c78513abe11963d90d1ed59c48b34dd8085eda01e0bbfd7bbeee043bb3ee161221fd73f94f4502e03eb696e495b5dd8676248899c31453ea84e52032fee90aec7402c2b2a7b1d98b7aa2297339addbbd03d1fded82ccc8c832638f00245958849d157d80c2fc128b3c1f598a29d91e00128f4b9e30b4372a15bdb7fe8d203ab928bd1dcd3e3e9108eb7566358ffc36940800b3aa102c36ea265f86a49839eaf5fb27b00ea8bcb536bff9986d01397c5b891160f5b57464cdb65a2387e4db53f7f01f66bbdd83ea51c74e7bb6f7283c39aa753aba7671fb1e13e30c2a762c55df30c2e2052e7e3833f83ecc55673fe708f7056d9c2b239d12c45e10076c54e02da93eda79bf950080a6adf0471af660ae698a5b54b51711c98ab50f745b37089eea1f7a4d5590a4764e1f61bf502e1c54a6822ee8ca6c62e0b02378b653115ae675a0887df0def34ea11aee55ac41d151be1e52ca616e8e5c04fc6155b04014e89092988e521e6db0ccc4f7a7704a16cd935e79c0f05395fdb5131d4e1b4f74263909e13ec166abecd3eab1171c9ad64b5621b597909ba226a1c0a78831a62589ba701970fc2764fe94be5711c5dc7c621609586c645adf6a35733d9a6f0f8b506ffbfc0ed2d967e3b6115ed8f97ffc6f235b7bebcf79c6df8271d20468ba651bb79cbec325e359ed655b918ac3f90d38de20e1de3229bf577e61d7371152bb80099c7c0f87b6b5d082542591987acda09381d607e579845fea919c6981b569726f0cedcffbe3eebcc0e5aee80eb41b8b276f5d68cdf90aab3c9de86dd73a9b99be506d41e80069423279849ed9cfa5170024871a3eb3a1b0c2d38d70cf8a81af7c428758fd6cc3f3cf2eb39a7cda5df1244f0eb123780ab03b6ebfdb41ef71f75a8adc484344113e193ea810404128ecff3ca114b7b6a04a4951d531039670750e399e985a330fcfef0f48db3d5042748978696b730382d5bdcff558a58372556f8e1e4529eec26a00d25b3b47cab7c98cc551dffb0490cf819dbcb63b5fbe35643db3a2c010f52bf4ceef4426d16433519ecd145f37c9e8efd417c32f8184a36731a3d9bfa673ba48b1eacfbb48acdf6423dd3ed0ba5db718b7097a57c520a7ada3ecdf05605e772b463672c9efd94abe46aca55990978367357785c5da7beb797ee80b77b925497010c4464f6f7a11cc130a51bac8c7804f191f34f2b3af161bd619abb5c7efe0457a824a50e4ccd53cc485bc25259ffa64b5abd5950906a54856fe937814e080b8b5cce7fa460dc6ed80711313f38044c705b6c26e812ac155f279cc27e6aa92f7d7d4ec44b09408fdf634fe8e33104f36f3955c4933ded2f5eb1e0530264b6dd0c9466f8b2c8ed7adcb7990926c3017a2f8aa9d82a128426c43c04810e1912d66d7b3a9d2207c228365043b23660dc2b696a269540e448be41f21019118b7aa8d3cea397363b3c98882af9015a26ad6a0e666db726af74b4b8e82056a6f800fe3fde20321d6025fb30b060ca9fe7afd0932f514eec79088ea23de8540f55968b4674e2116e8551aef7108c4db28971b4907a6121df5261f3f1544c89216036638d18f9d5bb33576d0454e3cff22a610e7aedd2279451bd40480e20a70a1b28825f23fb8f7718612c6795b2ef7296eb7114ae5130abe367c990132b592d5d03e412544e4eff1cdabb549672e14a8d1a428ed412e542eb3f4d58c5495ff8e2393f5bc7a9a8d2a99f71a00d75804bfef81ab5f34af0b34bc1f323a1ca939ebe90f2c133c76573af2e4cd8fad9efeae7151138aa4bb7692c2c580047359ccd5c8e179463d3715fb8351103500752511bce5379ac37a3eab8142abe7375944ecdb1ddb86e547d5cfa84967e65c42e313fbe8d108b9adde39dccc09a64e6a4c30bba5c34754bf7d2244ba84fd9f8da3905a5dd02fe4b8aaf4c47c84243c145281fa2af51ebbf428cbbe83fabdfca4bdcfebbcd24884cf85966e50f9924e61aa7dcca06ac0ed93ab13ee97e0976a4c26d0f2ce9a6e10a058f4880ba8125dedd63ea30725842c81d753e847fc14355148c60ed593e6c6958a381bccb5ae3b0c895d2b16f7c21e99aa683bcb8e960f0dd96e8c050caaf52147d71fc22987bfec1bbeeba6a85ad4954dd53eb63987efa31aabe7d656988bb8d25cd858936fe382dad686da7868692130027cfbc66b897b8ef685c4509fc28a390911cc491f7c9b0f5e38ce07c5be9ba7f6c7ad173ea660725fbba9a40ee7a3a0105908382f0659a9030aac64b5e9e78a577438a95ac41fa7dadc02076fa2aa0b91257e55c25ce0b96220eb2066b21aa9807be96ab3e58df0fd0353ad3f31c3ea3fda300c1ade7c3b199890a614b7e06d46b41a991f9c92388703ec74b618d2d58ce3757b9f78d1726e84ecdf68294610c2893696c13a1e7e51ebb89b146aea4687d2a6c1cf1ea2e9640d23f04f648e52f91156996fba30207275342bd6c8d99f099fb9e8d28f43980b16a2a2d0f4e3125bd3d00be9af59b22f6662da2f25279b52ecb470af6ebe38d89e1ba824c6478074aae4936797f7e13267ca3341afe1ae6381fb8c83f1d0c58b0a93c8fdb5d64edd01a5705b57f2e63b9bbb233a782769932426e252ca578326cd36ce5517a9679f8303ca573da782b5b2431dfb9759bb241e850b02009a05bfcdec6883a744b2e1c61b7fbfd4916a9b478633acac585e46382b090a0000829f7684b3677545772b9c7944393570c413ef09bdf0c0fc62767a155588780d737129b3e2c0bfd57ddbf80f7c4291b3f590f27cf7100c25ea02ebb7804991bab74389e78bdf2a6bd16020b48d9b3c974f5531169f8eb34776b191360880e473b89e9be4d63ef0f1e812a92010737c9d33cb61c189cfc2fbad50818d67e76af5a1d9165a4f6a1ab1fd61878eeb124a1bfea7394d55bd7c2df82c148177b730716cd9372d5b5eb1ea93e05ecbd9204364966dcc1db1ac2301226683f767a9c474b9bfbc019a6244fb4a284153a0a3bc52cfa64e75b59f0036dcb000de5dd4e3797dd03a21f46aa8924e288a945b843bf85756481914d7ff3df9056066d1914462e3f980ff8e09a5b7f95fbac820c31071663c02c7cb8f985b33688189a9337f639632fa758c3026e2c776e9fb7929d78fe41abf3ecaa3d5e65371ba2b99b743f052dd1065721eded803550439854251e8613f79d2019669fc7ef85a09daa9b47f24a0e0a8c7b925f16bd210a1ed2a3b155b10e4a75a591af65d8acb077bf9913db2e18f12cf7b8c54cb4408e0b5f0b4990c98762406834e011a4ad440c5b9b17d2671eb698a37a4cef87b5715a381c9319a9d518f018e7cd4e6bd50fc23046701eff3079724469207f4e51f7fce75f249d338eebf547afddf914620287637069b921462a198bcff99fba1525bf1015f4a10c85b706acc0eaeea96125e5560842faf747d8f343836e221818ab3952827c992b54026ed7a2840e49175a2572e144052f0d8e82e50411e47f2782a18b7dc4a9d548650a2adff2c638f4058654af9bb8ac4fff6d47d1b10b5939a6471525dd6098286e3a2d76364c9b4cf882cc6167c96d78f833d3e93288d6c99a06156559fb105fceb3504edb4a9b089a9bc2f8cf2252c61fcc86cf0791d96f1b9e30d4871623b9120d5d6f863a4595b1a591336db90c110634c5e4b185e92d6027fa929915874b125c4ee26f7fe36ac9dc046a9f9a00237b685c903056562d1726120ddb2926da7e97747d103311b25f9a8fa9b96b481d4f5c7fa7972ac56571dc389c037720481ee8974acd0086e08487d8f79409b65d9a1d850b09a1955804b04e3459be203186086d4d977976e7b6fb9c924fb39bd663700c0cdde2a479748babb3bf50ec3efbf42730e4ab983c5fe64cd3168daabd337c18e004bc63597c6a65bfd2caef85699df371a8cc91a06081d20f08843bf91600a148da8f49a1c7431e0f6cdf6f074fdbb0b7806ba79ad2b83526c51bc3b85800991d45a7bf0a7ea0a1e40b9bf82704a656ae7cf9b0174983e9687471ed824575920b72dda0fd038a79e6c509a84e28cec466208d9592064152699c708c1429073371f4f04240c7d503f0048f13335fe9929e651ef877290ae86de368a2dbcd1a3237f5ab0b20403c5558d83ba2c5a3975b020c6efa080b1e242c90df05a6dbd1004af4e13e2512b9d0fe2f39ac7390dc680ddcf372df7f87786caf6a50b18134584e07b85b706e95bfc8b817f385b71b056fb8d80c9582e6712b4d6655efb24ff4af6775325a4bd333c114bf8f2077e5a44b9813969cd376f52a012459f439cd1dc98217ac32c0d5c9aab2386d050aebbe0eaa8ad8059a93b8269a4e5f55a6302c0e565f45b3737a45a5f5b71d03407577862f960fc1f22dfce433c85a89a85a9c9a61a82748955fad3243782d705f13f51b98cd9d57b4557207f930dc41a3def1736e080d04cc5caad43ac76f4929bf5d768f2069db1d915795126d68205e9e413dc88158f68f044ae3dcbf97dd616e7e7e7238b805c968355c4cd99bea81425a32a48fe6188bd94a80b17221e2b2aa722a5c20c3a7fded943d09538ab5918ecc17b2845ad823e390c2af4a6e38f8cadc93222ca66e07a6b2b1554a6e4cac62b7bcfdc456ba6a01f78c6dcd1181664f49c51be8dea1db97233d6a704302f76725bffea5101d978ed9617de58861f550594814ef9933fffd71425f7daff0961ab108949b2919a48ad9c516b9e74b2494fb65c3ef7f0cb82bb764def0d48dc1b5e1192496f4b8a4b95c8b45babc422a3263c6d63df35d2953a6ce8b3bd14a673ef1092243e2545548de5937cb75a135c7d3b150ed8d21332daf4c44aae86198ecc855b3b5e19d4d75c0b38bf8100dc72de52e3cb05fc8f59c851e9a58b032ba79722f41e8ee9b464a3276aa84c9e62b81bf1a70e60cdd3394c8a3b8ab7015e12f7ce7bbb221cb4a9892fed7d4a8124cc5e971bd73aab5744448e2e2cd6f4cdae6d2404ac4ca6096b0ab458e13d713f78f9c8ec4d35b5d29080cd0833559939e3172140020e0912cf9158ec97cd35e7b585ccc36abf3b796bc2d7b1ad6abe5105afc874a42f423963db2b2786514c1a40f22a80ea193ec573be0fee3ae8f8b822614683302cb74b2dc6aa2170b49a70537387b347cbcd54bc9e9f762ddbf71c02a59ae3d216e388abe6c2e483dd3018c48f1d6999749967a92bc2369101ea44566b8bf9732a058177178d124ae939ef3aa51a03a2f4e4c80e40184be61f936617c1a6ab6480fab1125bc96f174ca7a65177a634daf6b83248708a71d3be69e0d2603eeec6af3ea4fdc0d995cabb99c1bc16864d06218f6d1c77aaba48084b2c47092af8ddd9e3a536e68e4c1fb1511d995ce24b16f853403e602e80dbfff30cdf92c641a452f6994f4f9d13e0c36680ab09fbf248f837608bc420cf67ea0191f1588cecbac6683ea6d89b24f71c06ebc5cba02ad146d90e5b7506d2e04cb8ce7f6c01156eaf0897b744fc8ec5cee7563f19c3189d6dd1dde61865be856146b7283f9145722d0a24af747c9cb917497cf80779839f9c346f533bf949a012ea7d3064c8e2a87b854137a6111c8971deea046c797b25602e0eb64aedf6ccdca46d69930373b58852a495560ff4f0ce2831f3a73f0dfcfcfd975db3d535fbfe68fb7140c696ec242d1b495d9faec1cbdf441a9fe3bf2249f479720bfb81d7d2c669bff0f7f49a0f69bfd8d3b9ed189b8ca6e0b8416d568399d122e94172ac6cd10c8aa2f2872a9f1f2bad0fefae746afa95eacd15ad0c94bb81673573d7f09004756d6c9ad8d45cd431d4abaae0b7fb60f03bb9676dd400509792d5c0cda0079666c7508ab38e35c164691caee1cb712f4959075b78a3b5144fa6b3d1d56eb32147388087f6d3dfefe071c85e08c92185108ff2e270f8423ac6bebf3a307f497afab914b2ad10b429b02ba91ebba084635b1b79245010fd163f8a84e1756356c15df39e1ca218361c6f058ffab6ab28ee9f92bda5e6a0994c54dd4a1bd5400e927420de3fb899a89aa94dd81b185ce55341845cc5fdd83762187f96a76d8dd] */