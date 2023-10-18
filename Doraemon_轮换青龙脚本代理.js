/**
 * @author Doraemon
 * @name Doraemon_轮换青龙脚本代理
 * @origin 红灯区
 * @version v1.0.1
 * @description 轮换青龙脚本代理
 * @rule ^(轮换青龙脚本代理)
 * @admin true
 * @public false
 * @priority 666
 * @disable false
 说明：
 1、在红灯区同级目录创建一个文件夹，名字随意 如：自用插件
 轮换青龙脚本代理.js 放到自用插件中

 2、设置一些变量
 （必填）执行面板 对应红灯区奶酪棒位置，从0开始，多个用,分割
 set Doraemon switchProxyScript_qlIndex xxx

 （必填）需要随机替换的代理地址，多个用|分割，需要增加备注的话，链接后面加&remark=我是dddd，不加的话，默认为 默认值

 (参考代理剩余次数设置必要参数)
 1、如果是巨量，需要增加tradeNo=xxxx&tradeKey=xxxx

 2、如果是星空，（暂未开发）

 3、如果是携趣，需要增加 &ukey=xxx, 用于判断免费代理剩余次数

 4、如果是品易，（暂未开发）

 set Doraemon switchProxyScript_proxyUrl xxx

 （必填）设置对应的key值比如（M_WX_PROXY_URL）
 set Doraemon switchProxyScript_key xxx

 设置错误信息推送
 set Doraemon switchProxyScript_recipient tgBot:userId:xxx

 注意：
 1、无界超授 可用
 2、自用插件
 3、简单测试可用
 ----------------------

 功能：
 1、通过设置的代理地址，实现自动替换青龙面板中指定变量的值（已实现）
 2、每次会判断设置的代理次数是否低于指定的值，如果低于，则不设置这个代理（已实现）
 ----------------------

 更新日志：
 v1.0.0 插件上线
 2023.10.18 v1.0.1 新增 支持携趣代理
 新增 替换错误日志推送
 */
/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203313c93abc38d9d94b5fb625e012b00eec411a535b7d76290d2d878be2ad8c33c958c3da223a9d64d02849b5bea8d97a24bed46a0d03247c0c177fbdf92b7a789903111dd63c7d8bae5979289a614ae7927eccbb846947ab1d657a5ec055f4426218cb3d4ac0c6969df309c61a7d1cce34f0347134aba298fcb95d5c2201f6d4a152cccc4e0757cf0df788cea5019e12ddb6904df1693a9cf0fcdcb5aa699fcfab8a5f5eebfa6659fc1ae70275f1982ee3f1f490e680b220ead81f46d164763842b313be9f337f88d8fdf85719be049890c00db6a261b3b3c2c7f391ccf01528e7a636147b35055e0bf3d0c41b43b433a78e54412491e4a98de9b51f71be1287521f9e127014d93f98b4815098e1a4b442b5c84aeef934dc19623b6fef86c311f36b71a6ea2332fbb16894377e3ee6a771dbddf472be32248e533d6c636bc92df2e949556cbbcef92f6e8384003209191a6f8e2383a96a3c178a6edaa1c9467e7ea4775f219a05d3d316472089645fb624674c19db91d9f005cb1e9a8241d18937a38bab5d6f85842fd3d8931743b58c90c6348fe3202a2528dba18e561fba4d03476466ab35d13fde08db7f051e8fe363a7ba0dbe15a8e9d16a36727e95697708ef41c951f7dd3badc3a3683136d345aa44d7b1bfe2f2569dd2b02304976565a3464ebf08a9821a6c55949c253d2a8353ef04d10aab92129aadc84ccfaf7b192c1bab87f023d9b13b7b380762ed55c3b4566375c5c2ea962cb6d788fffd84c4097a2012d33eb7cf46f67aface1fc3e12424e63693ebb69fab70a791a6a01cb066fdfdeab952c7833278dbf7d6e4fb46d100f0eccb56fb05a0beb04695d893b0b35ca2f65ee4ffee6c90f4c33dd65c8cbc3ee311ccfa5f2642572f49151d567aff7e66737c213ae72104cbc06f828f334010e234162e558cdb1fe66f78903917b690a9d0ac1db1999289603c33704d271bc9d6ff6758f8b4bc296e1732b3df76f6c912cf6fa2a83d08b84a0d163c96f2c320b48d459da8c48583eece643ca88a810a929053da9085dc053bd20a59ca3bc4862242afb1c46da3960d50037dbcbb8a8b13551d00dba82f5ccb5a5fbeff7dddf7fbdc184e549c6bb0d0900971f778e739872f3e0239ed1e872faf704ed441fa4b20be1a7be59558ce6af64c2df8612b1114f4fe920f64c0c6778a6e84aa7d2b1c2ced18bf89d288070247ad83a020e9227738793dda2b709babf73a1b9de7a19a111dd025ff024deafe0d09f1a56dfe0ea4479070db05e0bb8bafa6c3e3d009e5c3d622374cccc7955281737f4769f5e034235cc2d28e347fa734011657f1955aef6a95d8d483ee3d96aa60afb70940504497bbfeaf5c95f16f9f1257844ffec5faa93731a1479ec3d4dd60ef3aa4f4ec89097cf07dce19202483692b68556dee8fd70c50ef0473fe0065925ee9940f6f24a5430d07bfa59788688bd31867b0666725398d447a009e4c57e3e138ddd641d53a4664a49d98f36f27c621fcfcff001d2c158bdeca0fba0add15e8399fdae7d4adacc9df4de3ffb5f4408f56fd31f8a1fb1fc7bff4dd50b1c57efa8b6e9e86768f3d0af8d7716f8edd53a5c14e4f9b5f118438d8cec6c001e675ddcf01db47c53f5d7d65d7d9b824bc84a2b9a29994918cd79cd98ee1c055adcb163323f3e22561f2eaebb2ca29bce8f9dbb2b2d5a40e9770daa43035cfe2e0039330adb477f7fa64191ec05ddc2189b5e5eac8526111121a8623a9eaa9d5754a03c09028e6633611d5839a9100f37e1814371a0576d0919ce5c78dcfe11bf6cb7220b78ef064f91828f54edde1216c49573ae7bd34a419124100fb398df0ca3c79fd9a8a993f6f403d8f047c8430ab77f79cd90845a5b98ffb8169bf24d46920682dfa66e4dae23d518e902440395748f11e908ef9d22b096b7b270ca018a771f13d83e4545d111e4d068fca701260a7a5063c5337ebedaaad278342d5db40111466e5905985c47a14a7185ec752bcad2f79340ac46ea13a637b69ccac281052ecee3d401d8cdc636d317d31382d68d7c1b68fe1ad6a4e003c5ce6932cceb6b9a7ea094a8c3109e7ce5895ee39edc9ab9a5547f1ed6d31a5602a4a606123b811b625849ca46ba4e20d3473903ca3e34f8526a043d5c0befb0b5833ec60ede30da7046ca475cd52964b0ddaf29763862d9546a1824e1121cc5533cebc3225b882484abca1fa02a0cf5925dcaf437ad70a2705c05d40aa988dce38dd94bf4c5c57739aaf2c36c84986c1d2dd98bfe50b87d533d0b53499ab006cea52eb1b0cdc7919c541c29613fd7d1143326d6021d910eb89c5c954f42ff754a0e97dbb03a43a92500fe165ce4689b416108b14fa13eff637bf481472c3a2ab1c4256d169ab32b631e08f4e2a37fffed29ef36dcb2003cfbe2fd05db4f926ad8148e352a32cfd38225958d01dc85bcd754fc8da1374a8b96d1b576ba48aa867b6e1cf6a9d4108e54549eb53b9fac1a37e989f49462950a55eae04158dbf0c79bbc590d366446e5757a3fbe71f5c6217a31378d869fb87e0e854e83ecfa5d361e227cc5ce86314cf89dde8c13886beed3eedbc8ad170a3fd6e7a6b186c0be0f4a9587634aa0aaab2efd1e5a587575dd1a3fddaa4c8541f2ca3a22f86361cf3e37c1c1bb781fc4f254088427bb468c85796eaec8ad36740fa43960b72c74783c64b5f004456bcb63b3298b9aca5a2de76d939ff81b247ac364a069ddd5a4e8400b6b8b1d2a26a334af2493a9a91d754c78bca0585d91ef97f5e444ab69be71dcd1a15edcf9a65e1b4c7286389f09035edf68c7e93888ff0d75d62e108114ab4ea114a44d13a86339849efe2e734567e37a7abb853952fd5e23bcc4e3498f40498a596ae43648d582af78eda38b21a9d423d604b0f3ecc6ad190799aafe2a87588bdf5ddf3d8d5696a0612848189a27d62827cc5850d024c5e936e06a3f84bea18f773c01a2f362dec43184495bcd3b03d164f09a81a14f2cf8453b4a478161b5ff58f251fb51f9b14486ce6775d40d2f74696922c3f3f3b29d812f7f9f9a82c3860840a717d5141adf36fcb60350ad80b836a683a8888b5f1abe529a81fdd5688ad8e7dcdc77f6898cc27bd4754a243bd0f15f7538e63abf7318f801ece33f064e907437dd70792da905c5546b5fb7281b8c08eff1378ae00ccc570298f591b1bc42a3ee20a22617e90ffa341fe993c8bfcf64358636969c38fdc0bea04bfa6377184d7f0a24b64ce2c45f4f093a22e30c3d73652614fddd00218acd56eac0301f7b180010741b62d52fe9bb98a2bc1a378ddf2e7e2ea7ea3c2659d62cae8376b3dbbe8f7ddb38329a2ab3c665e3efd17dd0014a5cba32bcdfa3c760b80e3a988b4f818da6536801b7263824836ab679ee82f8519cd0920105d684f8187495303779acfb6ad61d2ed54847e61563f115f5e60ba6ed13bc004982ba341b49ff7f60866e8efa30d3d4ac5d3eeeec9c6c23e0706b744702126339be5b0f4b7ada8897806184e35eb8180392be4aa5777413525938e8e5106cf4325f065660d37db9a0938d5f5c8e947054df9666f3b63268157ec9ddbd5b4719447d06a70f3a079706c58c498ca866ed24dba7cef1bd4061e1f6aa475ae982f8ecb9d87181b0721ba5659a5bcab1bea4d8cff2515729f9bdaa4b133db175e00c0ca03eeedf481f3e74009f7eba018b893c6d1422242165fb3135a364c8bf6bc1d2778a845f25a3b2ee9705ec1dab1f093e31f58908add829774a5ef0c66a640dec88974271acb32e102ee1358e13828a8baaf071c5cd4f6c37f69d0eb7abd4e30ebb426e1a8968ac52323dbcb97061181f3a5a4e2095edd1bf3867f23c0763af232de71830fc52ae7ad501969cf44e98448589202dc9e746a5e6b18f4296ee9473236767b4eb56d999ab367662b319ac36f525b4dccf9824aa83a03c160a06f7cfc7bc19b6e2e2179d29aa19b6ec9cf0f0d3129bcba0a5394bdc742385e662c9e2ef7e489f95a560f33f0aa7312b1b2e2ed8ca6d9177f04343dc7a4aa12e86737e14a7475ced5d487af4e51aebe8c5b8c37fafb7878d038c2456011afb4638e0ee3f52b5dbc5e37996b1442e65a941776aad7daff2d45f07eede3b0c665d155cb1ac4f54897dd741464a318bd61a81ce6f49cdce0f4fa8f7163d0f2d206684ee22d2e966dbbd0db21d601bcfea3b39792142e470eac01cb9624e587717db1fbc6fd554aaa2d9bda9b77325600ac9c5a111a966aa6100caa992ab6f599c004a33a08c00c0f80e84452a7510da6ec9c72eee33a1328ce3e54c298d2a9d242f59a8805ba7439f2bc282216bcd2477c9bd0115355761ffddfddbcd39d46a349b032b99064a5f35dc64fb71f322c149dc898a7310e6f743ad4aa46ccc7d8cbb4a1c53efcaf41a43593c236413d088aae396658020de03013b2eb7dd2da8aa55a8866aa732fff96277ff1ef8f80201dd71a7142e55e638f50b6c5b23d375f6300905599336ea883b1cbf699d2f779f06b4228dae1109d6993f07d31f42a977b0dfa395d86910431a54b1f8aa2685cb6b1ba1ab8cec5994480081b54751d2aea32dcc639d88c099996e525523b1b39c7188f237c7124fc0ee36a4fb8e2b17b058bb9fdb925e8b359cb13c6915bafc239e54b804f9de60b7788a6196e7144a085dd5cf8455de6b3f823ef43744108a21185b5b1a9895c43034d4c931c345c9743f8ee023b862f13d21466536f9cbc49808e3976935847dfbb4c290e8ffc988368e95b82a0b422865e5f683bb7eae77d72ab02776bf0f7e91cad755917b645d9ab939cad3ef33a0fa8c38ab9436c277c385bf28865be1cd842b245eeae831b4b17f67bb3de97dc123603c408df816ddbd6155377b797a4d1aecee6f8eed9bdddf3801e4d0847ef23ee51889c45fa970c0003d0f93f7a0715a4e9643429caad7ae8d8a86d733b8b21aca1f38ed2639538ef5a11796dd6e5bb71e7ac10a2ee5e77ddfa79b617e9b7102d522bb8b9723d6940c27bca31c316b61d2aea71a6302467a13fb0082c4b6809bb875287d70f1e58f1073650f070e0930ddc5b4c393c8f968dfb94e68900830116ddfb32e7cb5fce2236ed98285b0ace2908e0a6093fe27c713b27fd6b7139ac64f8bad58d421b0b91be7164b74937656c901282c5add1fc1224206364bfd2e5a77365477c7c6d993478ce9cc5428b9dc51e19bb6a3abf39989b787aad59b5e97bf2daceac4ece6c56030b0fb9966b65980779c94a2177343dbbbfa2c043d70683f5d79d2bec92e8d5bc45f61d23f5bf6afbb18753234749ae472ecefde32bcb38cd3aca1bc01eca5cead56393370971ce64fe4987c02032fe4de7116dd158d49e962af74a75c20a8a2059234c832318da353f32e2dc86a2b189146cb2554083b5bbf17cbd9ae9971637b4fb186317ff4e700c8bd6e1fd39bee684293aaef1f0f70c6cced0a4156f0803ba222e9f2acfdca0b01906e77c583b01b2a40889b5d48387bd2859374dfc559caa1318b811683d5676882fa6fcd78a67f94d20c674fd7c15f99bbfd45cff00ccc0004f3a1e581f70d83d8a51be79c3035864be19e6490868c1d72aa40f0c33d5f090b0e7b5f5ff697f1bb1666172179e1c4b675441ecdc786d83a3e5c9b3640503e718192a10a9a556ed64c3746a04ec25f6299a53f2636660f358ee4ff62fd0d6989eaf9326a0ae8205e312566ff0453ef6f0a20c49c7ef37165fb4e2827425c6ccd13e8ce0a27dba8c0b5631ba21914517f5b88674dd3530a87dbb03a1ce32e6da7db4fce1bcd3c086e7f769aa0b0c69732f3087a6c691f2afe371ca14e9a18921c2c039a4d1f448ff8f17d536decfe8d3e8c7e74ba57be4de07fadd484014c3a231a020b8cec2834021fedbe922528b0cfa5ed979153d9a41a16c4672439b02fcdf621cc834b57d42a646b95ebe957f4ef9786c532f46d8ce46e02e7f833a66a41ac9dfc2a6891db2cdc07612040a68603203718aa6a6947cff98df39659450ee5c15493171cad68cc32c468a2d1984a7365ec80b177264a858b1042ee4f88fef202a45b8c2e92a30771e35b46b59a1d5d7080e1eab57133e55d2990e67ad01aea6f5aaa2737d9fd0d68ccf974e3a1856cc3b787f2cc6089ad4163a3535b34089e16f0e5cdb62c0009cac1bed7bc76202be49567c0c5147373a159c53a6176d879d36f84ffdf204f171be910dc2ac534f6144f4a3230b5ade99d09ea5b2efc713ab8f7dd35b64f9f0521afc15c6f24ba66cea49dfc9620b26252c2862d419d726c622cff31b720df2d1c58b1bea2980a60373750592cec49b9d0a6e138c67f9d6b3801c8e886f2366e04f8c639b5d76d606218bd402ed62261bba4b51154a4c69fd7bc6a7fad771687d426a3e332037c114c31e233a7840c7488f375cda0105079553b637decbe2d877a9d47604fa9d87a7f9fb44b70c7c02dad199e72577156094e0eeaaea6a1b116821afe1ada611f093daac84464b455b321142c992f188637d5d6bcc86d643b0769087b74a287d33cec85c4e4fa778a900eb3aff5e95aabb140236c09e594c2a3591a710aa4395ce223ff3e78090125ed989c513d8fc69358c725c8c5c303a7794997c4311432238cf3652876feedaa342bafe3db4c5be2bc4952c64af00b1e5a106063792e16d24476f6be0f2629d65d64f36f6e34e6d3a91709fab8c573f5a812bf9364a7d8d75f38927f578b8029d0c78308ef3d58917b0d33175fd5cdaa05ed068896387af7d9781b56873b8a608f57202f34fcdbab3224af56d4ddaf3bd185f677e926dd1d240ca9860b7ca8ad91bc23a313b9072d79fcbfb495f27b2bf73c71dff4671667d95979577d1c36459b2bc08d553f88c1d7d09c352c1fa848200dcda9b3c37f55a1e5d80e3838de9295ff9c8bfc444e8601d2ffe0f8474783629f551ef3e657a839313a18510e2cd171438efcffc78ecf5f9e943c52dfd2e3714967f0251c369a0cb6229fc87d8fc5ccb5a226c6d988add47df985cf2711a0483c5a13497dd24c63d81c54ec24637f5f77a6023ada71ee5ad5da128219dd5ec509901f4c540fb87078b8b367b23db6cf11b973a25bf7d566e9bf59d1f1f6682e48deec77c321bf9786b5e3c04df432e6409c37fd9d92806b9145982a85c4719e2eab34eeb4e4ba8abfae57a51f0d14b44ab9a41fa93532767abe34a59d373a415acd721e22ce26087c8b172992a7b452312110551ae7fde6be24689603c397fbdabd835b21bc13e960293b8e67fc33957480d78dd40cb0ac63902871791c6703648a188eb83fbd286969e680a11ff76073824b65ae219d4038efd2ead657f1014f16af55afc8b9bfc06d444dc3a0259af720b65f8b75608eb40c95cca44a604bf584e793e065b59b0eeae8ef9b4ee5352dd1ee76e23439ee05e4c256c9fe2a09422c25f0fc1dab76a1113cc659deefcd173a68d329bfe22238f9eae54b00d6f00c1eef77e47a239ff2e3abdaa90a163b88afbca99acf64e8c0a3712c4dcfa18a3eb991d6aefa0a915db7e54dd9fcabaf0b5a63c73ebf4ca6ecd4d80ee2bcb487bf39539613532617a4d8204c30b60fff5564d502c38eeb34afa32f49708a6f774488ad4b954dca4b7030f2e19d9fd1ce3b613a54a9c55c59d59e7813584485de3e5b258c7b4dfbfd00d7e5350d0e220dc9affe4fbf72cc854c86b2b2bc05c88b466fadae85ba68db62daf8f61c97b97404cb5de8cce88ca57c27ac81bff2a79abb358d4f4b20f19ac742af3c02d5dae3ce81878b8f904796484804af35c8f3065706857035e0ee1b525f7ecb8643f61b4302aa7c8b53bca613bdd8cb24f9da5ab00beef9aaed9077c5385f98e956b2135df42964762534280021db86b570e82f221fcf64f71bf2fa393744b5ba411f677d6253517be42fa7815045685a6659a42d55ccbacc1e4e6998d79144b1211ea3504376b5ee430fc1d46a01fa0a96c3568ab4c2b3ac5c600a2987057f9dfa6cac55f4be84e098619609b39813c09fb69ae6ed331b49bf85cbd9f492a7015db2f376cee45355b8c2bf984ae372956ede557c9d863b44538413dcf9949a76d48f35f3dad65d98ff9ba95df23af27ae1e3ab6d9421a3ed1abfd20d2bea9f158551922a0b55c7ab3d3cdf068530ff08d2292f54c92f17110a170f5aa98c2cd1f4cfa2467bf7bd069b74a90871d32eb933010e222aab1dba6fc79399e37b0f167292ce1cc187c38e1433692ce64cadda85fc3ee38baa477d0d322587ea2a294040689a6d111d40831bbdee1038b992ca6367c6a5a8c57f4049e275787d8cb96b07ba8b04b5fa2b3401fffdc0b3f0cabc6693e9f319d7c272aa94f2dee3b718f4255e9c6275a468a778e31a3d87766a43d38e08e655e007c6e8858181ecb3e2cec6dbf1ad441e4292c2449def92e8096e53237f6830b7c23668239ccade4014b52f5035644c8f2c30b4c4c39b17ae4729a797d69dd0e38bb8cb6be16bb0c5ca25f22734e16585bc4c79cbf0cbb8c1f2b253ef57c0dcb8a8d15f918f8fd26dfdcd6087697008b785ab4e8689e9f1d0eaedff0678adee9a9fc3e443b8e239cce983db4bcc28e4ee121a7f359951edcbc3bad1f3d0c9daecb3538a23c3f2fb36b261eaddbbd53653b3a0fbcc83968e02b41116673a1718af7c88bf07d1fe06080a294eb792526acb8a06e7d085279b4fcb74e6b3399d147621305fa69ba9116287b6ff752ee05ebf00926ca301f8bb92551813f91d821f91036d0aff0f60683e4d79049fba73123919eddcc5fbdfc741faf0aee7e7fc821b2355e5aab5839d824cc722669b7e03a622dbaed4cd212508e6aff4db2094850f8d17a83884eb06874759acabb9bd5748a617bceb1fc0451c] */
 

