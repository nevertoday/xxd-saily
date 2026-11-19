# Saily 新手教程（非官方）

Saily 是 Nord Security 做的旅行 eSIM：出发前在 App 里买好目的地的流量套餐、装进手机，落地打开数据就能上网；它还另外卖一个美国 +1 电话号码。这个仓库是一个讲 Saily 的学习站，写给第一次用的人，也写给用熟了想用得更深的人，说人话。

> **这是非官方学习站**，和 Saily、Nord Security 都没有关系。功能、价格以 [Saily 官方帮助中心](https://support.saily.com/hc/zh-cn) 和 Saily App 为准。本站不写具体价格，不放优惠码或推荐码。

网站：<https://saily.xiaoxiaodong.ai>（还没上线）

现在只有骨架：页面结构、导航、搜索和检查脚本都搭好了，正文还在写。怎么改、写作规矩和资料来源见 [docs/MAINTAINING.md](docs/MAINTAINING.md)。

## 在本机跑起来

```bash
npm install
npm run dev        # http://localhost:4440
npm run build && npm run check
```

## 许可

代码和文字用 MIT 许可，见 [LICENSE](LICENSE)。`public/xxd/` 是 xxd-ui-kit 的构建产物，不在 MIT 范围内，见 `public/xxd/LICENSE`。
