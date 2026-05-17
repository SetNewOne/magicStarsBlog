# CC Switch 说明文档与操作指南

资料核对日期：2026-05-17  
当前核对到的官方最新版本：v3.15.0，发布于 2026-05-16

## 1. CC Switch 是什么

CC Switch 是一个桌面工具，用来集中管理多个 AI 编程工具的账号、接口地址、模型、提示词、MCP、Skills、会话和本地代理。

它适合以下情况：

- 你同时使用 Claude Code、Claude Desktop、Codex、Gemini CLI、OpenCode、OpenClaw 或 Hermes Agent。
- 你有多个 API 供应商，需要经常切换。
- 你不想手动改一堆配置文件。
- 你希望用一个界面管理 MCP、提示词和 Skills。
- 你想统计用量、查看余额，或者让请求在多个供应商之间自动切换。

一句话概括：它把原本分散在各个命令行工具里的配置，集中到一个可视化界面里管理。

## 2. 官方渠道与安全提醒

CC Switch 是免费开源软件。官方发布页提醒：最近出现过仿冒网站，可能会诱导付费、充值或收集账号凭据。

只建议使用以下官方渠道：

- 官方网站：https://ccswitch.io
- 官方仓库：https://github.com/farion1231/cc-switch
- 官方下载页：https://github.com/farion1231/cc-switch/releases
- 作者账号：https://github.com/farion1231

凡是要求你为 CC Switch 付费、充值、输入非必要登录信息的网站或客户端，都应视为高风险。

## 3. 支持范围

目前 CC Switch 主要面向这些工具：

- Claude Code
- Claude Desktop
- Codex
- Gemini CLI
- OpenCode
- OpenClaw
- Hermes Agent

不同工具的支持深度不完全相同。比如有些工具支持即时生效，有些需要重启终端或应用；有些工具支持 MCP 或 Skills，有些则以供应商切换为主。实际以你安装的版本界面显示为准。

## 4. 安装前准备

### 4.1 准备 Node.js

如果你要使用 Claude Code、Codex 或 Gemini CLI，建议先安装 Node.js 18 LTS 或更高版本。

验证方式：

```bash
node --version
npm --version
```

### 4.2 安装你要管理的 CLI 工具

按需安装，不需要全部安装。

Claude Code：

```bash
npm install -g @anthropic-ai/claude-code
```

Codex：

```bash
npm install -g @openai/codex
```

Gemini CLI：

```bash
npm install -g @google/gemini-cli
```

如果 npm 下载很慢，可以临时使用镜像源：

```bash
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
npm install -g @openai/codex --registry=https://registry.npmmirror.com
npm install -g @google/gemini-cli --registry=https://registry.npmmirror.com
```

## 5. 安装 CC Switch

### 5.1 Windows

从官方 Releases 页面下载：

- `CC-Switch-v{版本号}-Windows.msi`：安装版，推荐普通用户使用。
- `CC-Switch-v{版本号}-Windows-Portable.zip`：绿色版，解压后运行。

安装后如果打不开，优先检查：

- 是否缺少 Microsoft Edge WebView2。
- 是否被杀毒软件拦截。

### 5.2 macOS

方式一：Homebrew 安装。

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

更新：

```bash
brew upgrade --cask cc-switch
```

方式二：手动下载安装包。

从官方 Releases 下载 `CC-Switch-v{版本号}-macOS.dmg`，然后按提示安装。

### 5.3 Linux

根据发行版选择：

- Debian / Ubuntu：下载 `.deb`。
- Fedora / RHEL / openSUSE：下载 `.rpm`。
- 其他发行版：下载 `.AppImage`。

Debian / Ubuntu：

```bash
sudo dpkg -i CC-Switch-v{版本号}-Linux.deb
sudo apt-get install -f
```

AppImage：

```bash
chmod +x CC-Switch-v{版本号}-Linux.AppImage
./CC-Switch-v{版本号}-Linux.AppImage
```

Arch Linux 可使用 AUR：

```bash
paru -S cc-switch-bin
```

## 6. 第一次启动建议

启动后先做这几件事：

1. 确认主窗口能正常打开。
2. 确认系统托盘里出现 CC Switch 图标。
3. 到设置里选择语言、主题和关闭行为。
4. 如果经常切换供应商，建议关闭行为选择“最小化到托盘”。
5. 如果已经手动配置过 Claude、Codex、Gemini 等工具，可以先导入现有配置作为默认供应商。
6. 重要操作前先导出配置，避免误操作后难以恢复。

## 7. 添加供应商

供应商可以理解为“某个 AI 服务接口的一套配置”，通常包括名称、API Key、接口地址和模型。

### 7.1 使用预设添加

最常用方式：

1. 在主界面选择你要配置的应用，例如 Claude Code、Codex 或 Gemini。
2. 点击右上角的添加按钮。
3. 在预设列表里选择供应商。
4. 填入 API Key。
5. 如有需要，选择模型或点击获取模型。
6. 保存。

预设会自动填入很多固定信息，你通常只需要填 API Key。

### 7.2 自定义供应商

当你的服务商不在预设列表里时，选择“自定义”：

1. 填写供应商名称。
2. 填写 API Key。
3. 填写接口地址。
4. 选择或填写模型。
5. 保存后测试连接。

如果供应商支持标准模型列表接口，可以使用“获取模型”按钮自动拉取可用模型。

### 7.3 统一供应商

如果同一个服务商可以同时给多个应用使用，可以创建“统一供应商”：

1. 进入添加面板里的“统一供应商”。
2. 填写名称、API Key 和接口地址。
3. 勾选要同步的应用。
4. 保存并同步。

适合多工具共用同一个中转服务或聚合服务的场景。

## 8. 切换供应商

### 8.1 主界面切换

1. 在供应商列表里找到目标供应商。
2. 点击“启用”。
3. 等待状态变为当前启用。
4. 按对应工具要求重启终端或应用。

### 8.2 托盘切换

1. 右键系统托盘里的 CC Switch 图标。
2. 找到对应应用的子菜单。
3. 点击目标供应商。
4. 等待提示完成。

托盘切换适合日常频繁切换，比打开主界面更快。

### 8.3 生效规则

常见规则如下：

- Claude Code：通常可以即时生效。
- Gemini CLI：通常可以即时生效。
- Codex：通常需要关闭并重新打开终端。
- OpenCode / OpenClaw：通常需要关闭并重新打开终端。
- Claude Desktop：建议按 CC Switch 面板提示确认本地路由或代理状态，首次切换后重启 Claude Desktop 做一次验证。

如果切换后没有变化，先重启对应工具，再检查当前启用的供应商是否正确。

## 9. 恢复官方登录

如果你想从第三方接口切回官方登录：

1. 添加对应的官方预设，例如 Claude 官方、OpenAI 官方或 Google 官方。
2. 启用该官方预设。
3. 重启对应 CLI 工具或桌面应用。
4. 按官方登录流程重新登录。

## 10. MCP 管理

MCP 可以让 AI 工具连接外部能力，例如访问网页、读取时间、访问数据库或调用外部工具。

操作方式：

1. 点击顶部的 MCP。
2. 点击添加。
3. 选择预设模板，或手动填写自定义配置。
4. 选择要同步到哪些应用。
5. 保存。

常见预设包括：

- fetch：获取网页内容。
- time：提供时间信息。
- memory：存储和检索信息。
- sequential-thinking：增强推理流程。
- context7：查询技术文档。

注意：并不是每个应用都支持 MCP。界面里能打开的开关，才代表当前版本支持同步。

## 11. Prompts 提示词管理

Prompts 用来管理不同场景下的系统提示词。

常见用法：

1. 点击顶部的 Prompts。
2. 新建预设。
3. 输入名称。
4. 用 Markdown 写提示词内容。
5. 保存。
6. 打开该预设的启用开关。

适合的场景：

- 代码审查模式。
- 项目架构分析模式。
- 中文回复模式。
- 测试用例生成模式。
- 文档写作模式。

同一应用同一时间通常只启用一个提示词预设。切换新预设时，旧预设会自动停用。

## 12. Skills 技能管理

Skills 是给 AI 工具添加特定能力的一组文件。

操作方式：

1. 点击顶部的 Skills。
2. 搜索或浏览技能。
3. 点击安装。
4. 等待安装完成。
5. 在对应工具中使用。

卸载技能时，CC Switch 会先做备份。需要恢复时，可从 Skills 页面里的备份恢复入口找回。

如果你有自己的技能仓库，也可以在“仓库管理”里添加 GitHub 仓库。

## 13. 会话管理

Sessions 用来浏览、搜索和恢复各工具的历史会话。

常见操作：

- 搜索历史会话。
- 按项目或时间查看会话。
- 恢复某个会话继续工作。
- 删除不需要的会话。

如果恢复会话时路径不对，先确认原项目目录是否仍然存在。

## 14. 本地代理与本地路由

CC Switch 可以启动一个本地代理，把请求先发到本机，再由 CC Switch 转发到实际供应商。

它的主要用途：

- 记录请求日志。
- 统计用量。
- 支持自动故障转移。
- 让不同 API 格式之间做兼容转换。
- 让某些桌面应用通过 CC Switch 使用第三方供应商。

默认地址：

```text
http://127.0.0.1:15721
```

启动方式：

1. 在主界面打开代理开关，或进入设置里的代理服务页面。
2. 确认监听地址和端口。
3. 按需要开启对应应用的接管或本地路由。
4. 发起一次真实请求，确认能正常返回。

建议：

- 普通用户使用默认的 `127.0.0.1`。
- 不清楚局域网访问风险时，不要改成 `0.0.0.0`。
- 修改端口前先停止代理。
- 如果端口被占用，换一个端口或关闭占用端口的程序。

## 15. 用量、余额与配额

CC Switch 可以显示部分供应商的配额、余额或用量。

一般规则：

- 官方订阅类供应商通常会自动显示配额。
- Token Plan 或第三方供应商通常需要手动打开用量查询，并选择对应模板。
- 代理日志开启后，可以看到请求次数、模型、Token、延迟和成功失败状态。

如果用量统计为空，检查：

1. 代理服务是否运行。
2. 应用接管是否开启。
3. 日志记录是否开启。
4. 请求是否真的经过 CC Switch。

## 16. 备份、导入与同步

CC Switch 自身配置默认保存在：

```text
~/.cc-switch/
```

常见内容：

- `cc-switch.db`：主要数据。
- `settings.json`：本机设置。
- `backups/`：自动备份。
- `skills/`：技能目录。
- `skill-backups/`：技能卸载前的备份。

建议：

- 大量导入、升级或迁移前，先导出配置。
- 不要直接手动编辑 `cc-switch.db`。
- 如果要多设备同步，优先使用设置里的 WebDAV 同步或把配置目录放在可靠的同步盘中。
- 下载远程配置前，确认它是不是你想覆盖到本机的版本。

## 17. 推荐的日常使用流程

### 17.1 第一次配置

1. 从官方 Releases 下载并安装。
2. 安装你需要的 CLI 工具。
3. 启动 CC Switch。
4. 添加第一个供应商。
5. 启用供应商。
6. 重启对应 CLI 工具或桌面应用。
7. 输入一句简单问题测试。
8. 成功后再添加更多供应商。

### 17.2 每天使用

1. 让 CC Switch 保持托盘运行。
2. 需要切换时从托盘选择供应商。
3. 对需要重启的工具，重开终端。
4. 用简单问题确认当前供应商可用。
5. 如果失败，再切换备用供应商。

### 17.3 更换电脑

1. 在旧电脑导出配置。
2. 在新电脑安装 CC Switch 和对应 CLI 工具。
3. 导入配置。
4. 检查 API Key、路径和代理设置。
5. 每个常用工具都跑一次简单测试。

## 18. 验证方法

配置完成后，不要只看界面状态，建议真实跑一次。

Claude Code：

```bash
claude
```

然后输入：

```text
你好，请简单介绍一下自己
```

Codex：

```bash
codex
```

然后输入同样的问题。

Gemini：

```bash
gemini
```

然后输入同样的问题。

判断成功的标准：

- 工具能正常启动。
- 没有 API Key 或网络错误。
- AI 能正常回复。
- 如果开启代理，代理面板能看到请求记录。
- 如果使用用量统计，能看到对应请求或余额变化。

## 19. 常见问题处理

### 19.1 切换供应商后没生效

处理方法：

1. 重新打开终端或重启对应应用。
2. 检查 CC Switch 里当前启用的供应商。
3. 检查 API Key 和接口地址。
4. 用速度测试或简单请求验证供应商是否可用。

### 19.2 API Key 无效

检查：

1. 是否复制完整。
2. 前后是否有空格。
3. Key 是否过期。
4. 供应商接口地址是否填错。
5. 模型名称是否可用。

### 19.3 Windows 打不开

处理方法：

1. 安装 Microsoft Edge WebView2。
2. 检查杀毒软件或安全软件拦截。
3. 改用官方 Releases 的最新版。

### 19.4 Linux AppImage 打不开

先加执行权限：

```bash
chmod +x CC-Switch-*.AppImage
```

仍然失败时可尝试：

```bash
./CC-Switch-*.AppImage --no-sandbox
```

### 19.5 代理启动失败

常见原因是端口被占用。

处理方法：

1. 换一个端口。
2. 或关闭占用端口的程序。
3. 保存后重新启动代理。

### 19.6 配置丢失

处理方法：

1. 检查 `~/.cc-switch/` 是否还在。
2. 查看 `~/.cc-switch/backups/`。
3. 从 CC Switch 的备份恢复或导入之前导出的配置。

### 19.7 官方订阅没有显示配额

处理方法：

1. 确认该供应商处于当前启用状态。
2. 检查账号是否过期或需要重新登录。
3. 手动刷新一次。
4. 检查网络连接。

### 19.8 第三方余额不显示

处理方法：

1. 打开供应商卡片里的用量查询。
2. 选择合适的模板。
3. 保存后测试脚本。
4. 确认供应商处于当前启用状态。

## 20. 卸载

Windows：

- 从“设置 → 应用”卸载。
- 或使用安装目录下的卸载程序。

macOS：

- 将 `CC Switch.app` 移到废纸篓。
- 如需清空配置，可删除 `~/.cc-switch/`。

Linux：

```bash
sudo apt remove cc-switch
```

或按你的发行版包管理器卸载。

注意：删除 `~/.cc-switch/` 会删除 CC Switch 保存的供应商、提示词、MCP、Skills 等数据。删除前建议先备份。

## 21. 最小可用检查清单

如果你只想确认它能不能正常用，按这个清单走：

- 已从官方 Releases 下载。
- CC Switch 能打开。
- 托盘图标能看到。
- 至少添加了一个供应商。
- 供应商已启用。
- 对应 CLI 工具或桌面应用已经重启。
- 真实问了一句简单问题并收到回复。
- 如开启代理，代理面板能看到请求。
- 已导出一份配置备份。

## 22. 资料来源

- CC Switch 官方网站：https://ccswitch.io
- GitHub 仓库 README：https://github.com/farion1231/cc-switch
- GitHub Releases：https://github.com/farion1231/cc-switch/releases
- 中文用户手册：https://github.com/farion1231/cc-switch/tree/main/docs/user-manual/zh

