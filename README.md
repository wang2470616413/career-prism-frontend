# Artboard Standalone

这是从 [Reactive Resume](https://github.com/AmruthPillai/Reactive-Resume) 项目中提取出来的独立 Artboard 模块。

Artboard 是一个简历渲染器，用于预览和打印简历模板。

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

服务将在 http://localhost:6173 启动。

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 项目结构

```
artboard/
├── src/                    # 源代码
│   ├── components/         # React 组件
│   ├── pages/              # 页面组件
│   │   ├── artboard.tsx    # 主画板页面
│   │   ├── builder.tsx     # 构建器预览
│   │   └── preview.tsx     # 预览页面
│   ├── templates/          # 简历模板
│   ├── store/              # Zustand 状态管理
│   ├── router/             # React Router 路由
│   ├── providers/          # React Context Providers
│   └── styles/             # CSS 样式
├── libs/                   # 共享库
│   ├── schema/             # 简历数据结构定义 (Zod)
│   ├── utils/              # 工具函数
│   └── hooks/              # React Hooks
├── public/                 # 静态资源
└── sample.json             # 示例简历数据
```

## 可用模板

- Azurill
- Bronzor
- Chikorita
- Ditto
- Gengar
- Glalie
- Kakuna
- Leafish
- Nosepass
- Onyx
- Pikachu
- Rhyhorn

## 使用方式

### 通过 URL 参数加载简历数据

访问 `/builder` 或 `/preview` 页面时，可以通过 postMessage 或 URL 参数传递简历数据。

### 示例数据

项目包含 `sample.json` 作为示例简历数据，可用于测试和开发。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand (状态管理)
- React Router
- Zod (数据验证)

## 许可证

MIT License - 继承自 Reactive Resume 项目

