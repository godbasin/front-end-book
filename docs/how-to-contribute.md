## 如何参与知识框架的编写

### 对已有文章的修改
1. 访问该文章页面，在文章最底下，找到“我想完善该文章！”，点击后可修改。
2. 修改完成后，点击 Commit 提交可自动发起 MR。
3. MR 通过后，代码将自动合入，后续会自动部署到 Github Pages 中。

### 新建文章内容
1. Fork 该仓库到自己名下，主分支为`sourcecode`分支。
2. 挑选自己想要写的内容。
3. 将 [demo.md](./demo.md) 拷贝到对应的文件夹中。
4. 修改文章标题(`title`)、作者(`author`)和校验者(`reviewer`)。
5. 开始完成该文档内容。
6. 在 [config.js](./.vuepress/config.js) 文件中添加上该文档的链接。
7. 本地运行`npm run dev`，检查文章内容是否准确。
8. Commit 和 Push 代码。
9. 提交 [MR](https://github.com/front-end-fighting/front-end-world/compare) 到 [front-end-fighting/front-end-world](https://github.com/front-end-fighting/front-end-world) 仓库，分支选择`sourcecode`分支（主分支）。
10. 代码合入后，将自动部署到 Github Pages 中。

### 注意事项
- 一人写，至少要有另外一人 review，请在 markdown 文档头部描述作者和校验者 github ID
- **引用其他文章内容，必须注明来源**
- **大家尽量可以尝试写自己的理解，避免全都是复制粘贴哈，将内容消化了才能有更多收获**
- 请通过 [MR](https://github.com/front-end-fighting/front-end-world/compare) 的方式，提交自己的内容


## 希望补充更多内容

你可以通过发起 [issue](https://github.com/front-end-fighting/front-end-world/issues/new) 的方式，提出想要学习和补充进大纲的内容。
