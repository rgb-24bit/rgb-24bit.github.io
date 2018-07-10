var obj = {
    "本站简介": "使用 github 的 web-page 服务搭建的个人主页。",
    "本站历程": [
        "建立: 2017-12-13",
        "使用框架: https://jekyllrb.com/",
        "使用框架: https://github.com/hexojs/hexo",
        "使用主题: https://github.com/viosey/hexo-theme-material",
        "使用工具: Emacs - org-mode",
        "使用样式: https://github.com/gongzhitaao/orgcss",
        "使用样式: https://github.com/ptpt/org-notes-style",
        "使用样式: http://doc.norang.ca/org.css",
        "使用样式: https://rgb-24bit.github.io/style/css/main.css",
        "使用工具: https://github.com/abodelot/jquery.json-viewer"
    ],
    "个人信息": {
        "昵称": "rgb-24bit",
        "性别": "♂",
        "专业": "软件工程",
        "学校": "西南石油大学 - 在读",
        "爱好": [
            "中文 VOCALOID(天依)",
            "東方 Project(幽幽子)",
            "编程"
        ],
        "链接": {
            "邮箱": "rgb-24bit@foxmail.com",
            "Github": "https://github.com/rgb-24bit",
            "LeetCode": "https://leetcode-cn.com/rgb_24bit/",
            "BiliBili": "https://space.bilibili.com/108822060/#/"
        }
    }
};

$('#json-renderer').jsonViewer(obj, {collapsed: false, withQuotes: false});
