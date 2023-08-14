/**
 * @author Aming
 * @description 🐒解析url口令互转
 * @origin 红灯区
 * @version v1.0.2
 * @name 口令url互转
 * @rule ^(jd|pz)jx([\s\S]+)$
 * @rule ^(code|口令)([\s\S]+)$
 * @priority 100000
 * @admin true
 * @public false
 *
 * 说明：
      1、这是红灯区插件，基于红灯区插件进行的二开 （author Doraemon）

      2、触发示例
          解析jd口令：jdjx ?
          格式化膨胀：pzjx ?
          自动遮掩邀请人的PIN，只保留前1后1

          链接转口令：
            codehttps://
            口令https://

  自定义：
    膨胀解析 默认格式化成bbk的助力格式CXJ_PZ_INVITE_CODES
    自定义变量名格式：
      set AmingScript PZexportName ?
    兔子：
      set AmingScript PZexportName PZ_CODE

  注意：
   1、简单测试可用
   2、无界超授可用
   3、自用插件

  ----------------------

  更新日志：
      v1.0.0 插件上线
      2023.8.14 v1.0.2 新增 功能：链接转东东口令
 */

const AmTool = require('./mod/AmTool');
const AmingScript = new BncrDB('AmingScript');
const request = require('util').promisify(require('request'));
/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203d45e01cd4c8344ffddd8d874f1b64a318191f9514b98d644c03366d9e6625065abd63788a874b592f82e09f16a9d08039d9e9d0811d8e11f4d37fcbbfb3957657480a6ba84a039817692b985c4feaa1c2c4e3e98234aac1029bc0b5d03202e3f02c5a43c3221c1ecb1af4a34e47b8eb161ffcfbfd06bbf2e4d610ac26820bf028b8a7ba38c2fa2e2c9e94fe67446db5bce1d5d90f453404f8613d0399a72bb713a35d9040fc17bdc32b6416e5ca88057039a40414c503062b20d61b1fb1b7e1a7cbc65fc385dad0f3e0cb64dd751e18194640f6d4e8d64532d151b25ac51b7dcef617a2d75049173fcf3458c6d145e63c397e68a46ea0e574940781c91b8c18f589323088329189a659b9cff552456b0d1a2072bcf971c50804fb65e9e40760a802486a259c73453ba799e3a1b0dd7e615bd818251c54028bf7c74b052cdef43b2bf92241ddd3e2e5a8b7b7159f705d00ef16b7de907f39e023a120d58c25f5df9aa0e196834ab8d6b09a74cb6724fb013b81d9677b18d70952ff6ecff4e8c26bb0d800f311783c615b0e56eb2491aaf066c83d4988c883fa634f99e148403b0a49f654964ae8e88cbc870b0b9192e12f21fdf11ddc29fd81d3e925a600d3d94966ebc132f92deafc1ee33731298dbafc8d56483a913bb717c59f33c8cfb95efe59a3fef2955059d80dd845dea4a1ef3a85fcd4586c05a0d25978f6738912eea7fffcd209f5e7a313861c0016c7c2207fe42156bc42541801e977a42dd6a7bc5e928a58526249545f47ca1086cdf2932362ecad27ba4cf6ee0641c3941f2dbd1e25aa454a31cf7e76d791ac7962517ed275b4a54adb74724d60b9e11c38a7510a6454addd5ae124d4cc69fc967c256b2a5808c3bf17de2166658a3cf0d424d7f13a19e0e65749ede31aa264ea9ed5e3242109756ca24a03e40a4fbc156e05086accd4eaf5c4a682075c21a2c97f2cac67b37bbaee980561ee8cc6e496f7998b4aa5d5d615967d665921b16f1a00c6f7c4f702d3f1b3012e249033196d3b46b984ee0030be668df5ae4f6339bd6dd7910c1b11d6565a14e7b61f4bdc6d037e48bb0f1c6a72a755d6d102e31a67db0c8e66181723181bed480509d03a5294daf7c0d0bb2ee29ad7ccf5143f634302c5ee2ef3bcbbb6bf26a29d7a876d030f997a8f49f36e6548729250b3b512bdecc3b4faa0f71c828820ef66de3f12a75503a7ba8d1b978d57c6536913138dde7f150ea9bc143bf8629e26e96512666a674f2f6712724089d0f5063e315804c68a10fcbf6e0539450f15feaa5a2432e96c312422f4aa2257915f23140a658d0d2ad456c7d1af338e598bad528c842bc9f1f840191a8b1c5e2e790c984c27c91d8a635162985d2fd229f655b3143aa402878c2a0521e5ecd747685dfc3f917cc8d96aebf19a3d37a0e29871e9b6a9335cda193b9e3fa9b137451e5e4c181b8aedcd5fd6d123bb2c80900deacca6335a495638063f98190f67c5870cdabb6e21dbbe7ee3e0c647f437d62f02d90a33dfe9615a50fbd41e4e105e06ba6100af0e20dc335e886eca2463242a5e2420876e36b18e4d94b4498ba93e31c1198dac9122f6a3b6e99c09cc8a8defc9bd7a69493cc3b8775689182ff6645a8dac66a5530cc380aa96894b8bf989159268d173c61a3b429440bdc93675cd93df411736ac88c43f91c74c88ca6c96db908229b1ae0c6e68f8d15ecc9528b7e59cd46df46a03c4471bf52e73df80ba1ab4f6ba869417ded7753d2392b1749239d27a2a6955a0a59d91750fe0c6173994f6d8412f09f25cfd67b8a19ab5cec0a572cad80face7bf6ef257e7303414d6600ab51b1b7efe25b52b098be4c211efa9a1ee5eaf56b512507cd0a1c2b99082cee828635c6adbdb03cca968cbb4f25f7a2fe9ee010cc92895d6991c13d70006ca52145e377e4b23ccb574293b65d77f7c93d134aa6e1aa85b7a42703096ec8d091dc8a2dc67f626ee3263be8538b77380c6ac64bbe342fef10520fba8544da0f45c1348d3e38d8adcb4913709579ec693d2594f4bb0c3e839da34e35bb152a21f6448cac646fdc7ca0658efeb96019e7af200d85db6391b6804ebb41941ffa8e1eee74210bb8963b2a48bd1917faf02ae150097e3ee0c0aec56dd90aecb6488b2d6b1b2c71e94f3b6acaaa06b51c57135741a07d172c765b1133b4a6e2c8f21c46cc89e416872543d6e21c0555e4a87aff58f70e3ea669b72908eb791ed700e8015fbf79102714755ce4a2d6c2340c5be6f0ee0ce59ab99c91c09d73df3642530cb0936eda9dea21f1daead15a7cede189344065b88eb62e0aa18e16ffef8218d28decc8f165be33a57bbdbf1d89c06e524acffd05c010450f54aa586912fa5008238650f96a8c28f6efcb18640afe85d93dae0cfa84c38ef03fe575579ac7b5e9244c715150077c15f0f490c5b85a0b6bf53a0919dbba47419f58b172ff93428ef0589d95e1c2f307dd112a3f8b0ede720dd5d1214c6cc390287732138ba8a8bf8d49eac58e9e851a2a8efa300c5b7eb02fef7b78a1a48b5ce9d17603da1f55e658b9f5b5ef5195c1581236a9a043e79f8a5795c69a87f760a2d9fa24c9d6ce247cdd2bb69d1395a41a9e76e43370c1c98f16f857e3b2fb71bf673a3ed9da7d723fdd185b1b19b4f7953e30a1503c5cbcbaf218c5a13ef06f6160d9b560efc7b7a38041e269a02a152cbc43cdfdb0b293f5b7d61f286f791081fe0eb48f571a26750c969ab4861ec1073adf9f4d7f8e8f7531c849c3398d3993edf78cd0efd8cc7a36a28170890add81da303387e7081f2b3fd6b16b63758d611f4ff14e9e37bc24127096cdb2701387a34ff279ac0f08f538d8ddebcfcd5bc54d5f9841094ee6de84451c6378a3798c2ddfe073acd53da53142815dc3424d805ddd6ddb3c2c5a78b82b917198c25d473dc3b3176b2972a40bfebeb13b4dcbac935f357a0f394fc05be07a7b8fef4ca2a8c1229ed03e26efcd9647817c426c95a785723aae207061e669c6b9eab497991193e04e66fe9c0e100deddb8d5a285c21699740754a90009baa46f901d18fd40737fd0b76f5bb129d9994f57a92c5befade4b5d64a390218b6a40e093e9b381aac050b3c70518db1298c3d3d71857bb04868e03c9c4c53c3c443ac7091743651d24d6b6124fdee948e82b5620f2608314380b1fd2b8b816c9a86c50e9bd2b3b8333c28226e9037e7e6774b50d2f30de500a54c556a08c214806a2e0559fb50470e759b9906794c9781667ce2d40f7e8c26a6ab059c876e642dd9b8039c5dfa9b5360bc1da8cf204c9466ccebbf41cc29ac3fc1e05055455ca84868a9446ba2692bb0d1add0a624a0ff65fec0e744485a38cb272a1ee1651c15305a0066a06917ab1dc06318a751d5bcfcf732c1076a8c772dd00c97a2dfac8d06203bba2100ece4202489065dadeab145dd799760b3c23cf4b12d035a5d3dabe89873821ef903ca0d1644cd64136fe2e9a461f84bb920dc7446a4f72f275e4fa01db8d46b16ec4a2ee716284f06714be705d2c4f8225f987c371627bddc85a7d0fbd40a550494e1d83d054edae908271bc18e07629b83d2c397b51d036041e0c1450c09076a9ca3581f6d876bae435140dbbef55f03a6dafecc00ab43002a75b00901db165a4c98c072da2fd1adecae57ace971444de15ea63df6a02f141d5a97207a99ac5caaac9aba9eec8b745548bf7399355072abbd78d566143c489d95c781fd5bfd99b5def5c430db99196bd46dfd6cc3530f32d84a2f2096ecf84f99989b5d0e57cdf9e505311a4791316d460a00f1b43e79a5a5ae42c4770e8c32db141d3d25f50cacaa38287f89ecb88733c4f272daed10f4d09bb35398a233b30ef302ffa5ea5394dc4e606f5a66c2e2bd1a703ba08ca7feb3d5090f11222ed5f8dd676097c2a275104b9377fc2627e0006509017e30537fbeacb02f6aed7e938200b4ee7bfc7708fd0e9c8ddc9c4b3f3e7a7c8f6ff46320912fcd18530726055207f6bd2cb611a8c35e7bb795ea58f255dccbcfe5a15e1e7a638cbb1c4fc41fe1d640d9aa3638d7ab63aacfa079201716a0739ac0b5425e9d94c9d72a6a8726767f23f9077c2527cec83e1e0d6fd13c2387323c161f68ba673f886991faa7ca09931efa3b60f438d65a5e5f5ef6e323590a02421c1525144ad53d2a355fa5469cc9c93199d9c7a38f3c5a5c39bdc97cbdaba955cd5e3f6] */
