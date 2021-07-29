module.exports = {
  usernamual: [
    {
      产品描述: [
        '产品描述/简介',
        '产品描述/基本概念',
        '产品描述/应用场景',
        '产品描述/技术白皮书',
        '产品描述/产品定价'
      ],
      API对接: [
        'API对接/基础',
        'API对接/本地开发调试',
        'API对接/API中心',
        'API对接/API编排'
      ],
      应用管理: [
        '应用管理/应用设置',
        '应用管理/应用权限设置',
        '应用管理/发布管理'
      ],
      对象存储: ['对象存储/对象存储管理']
    }
  ],

  privateImage: [
    '私有部署/私有部署安装',
    '私有部署/更新记录',
    {
      type: 'category',
      label: '私有部署独有功能',
      collapsed: false,
      items: [
        '私有部署/自定义登录方式',
        '私有部署/接入统计',
        '私有部署/接管发布环境权限',
        '私有部署/邮件API',
        '私有部署/平台间应用同步',
        '私有部署/自定义后端插件'
      ]
    }
  ],

  tutorial: [
    '快速入门/使用流程',
    '快速入门/创建应用',
    '快速入门/连接数据源',
    '快速入门/创建数据模型',
    '快速入门/页面设计',
    '快速入门/发布应用',
    '快速入门/权限管理'
  ],

  openAPI: ['OpenAPI/介绍', 'OpenAPI/组织', 'OpenAPI/应用']
};
