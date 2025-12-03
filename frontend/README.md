# Frontend App

2025 前端终极架构脚手架

## 🏗️ 技术栈

| 模块     | 选型                | 说明                                           |
| -------- | ------------------- | ---------------------------------------------- |
| 基础框架 | React 18            | 行业标准，生态最强                             |
| 开发语言 | TypeScript          | 全链路类型安全                                 |
| 构建工具 | Vite 5 + SWC        | 极速冷启动和 HMR                               |
| 包管理器 | pnpm                | 节省磁盘空间，安装速度快                       |
| UI 系统  | shadcn/ui           | 基于 Radix UI，100% 样式控制权                 |
| 样式方案 | Tailwind CSS 3      | 实用优先 CSS 框架                              |
| 路由架构 | React Router 7      | loader 和 action 进行数据预加载                |
| 数据请求 | Axios               | 经典 HTTP 客户端，带拦截器                     |
| 表单管理 | React Hook Form     | 性能最好的表单库                               |
| 数据验证 | Zod                 | Schema 定义，表单 + API 数据校验               |
| 状态管理 | Zustand             | 轻量级全局状态管理                             |
| 动画效果 | Framer Motion       | 声明式动画库                                   |
| 代码规范 | Biome + Prettier    | Biome 负责 Lint，Prettier 负责格式化 + Tailwind 排序 |

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 📁 项目结构

```
src/
├── components/          # 组件
│   ├── ui/             # shadcn/ui 组件
│   └── navbar.tsx      # 业务组件
├── layouts/            # 布局组件
├── lib/                # 工具库
│   ├── axios.ts        # Axios 实例和拦截器
│   └── utils.ts        # 工具函数 (cn)
├── pages/              # 页面组件
├── router/             # 路由配置
├── store/              # Zustand 状态管理
├── styles/             # 样式文件
└── main.tsx            # 入口文件
```

## 🛠️ 脚本命令

```bash
# 开发
pnpm dev              # 启动开发服务器

# 构建
pnpm build            # 构建生产版本
pnpm preview          # 预览生产版本

# 代码质量
pnpm lint             # Biome Lint 检查
pnpm lint:fix         # Biome Lint 修复
pnpm format           # Prettier 格式化
pnpm format:check     # Prettier 检查
pnpm typecheck        # TypeScript 类型检查
```

## 🎨 添加 shadcn/ui 组件

```bash
# 初始化 (已完成)
pnpm dlx shadcn@latest init

# 添加组件
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add card
# ... 更多组件
```

## 📝 核心集成示例

### React Hook Form + Zod + Axios

```typescript
// 1. 定义 Schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// 2. 自动推导类型
type LoginForm = z.infer<typeof loginSchema>;

// 3. 使用
const { register, handleSubmit } = useForm<LoginForm>({
  resolver: zodResolver(loginSchema),
});
```

### React Router 7 Loader 模式

```typescript
// route.tsx
export async function loader({ params }) {
  const res = await api.get(`/projects/${params.id}`);
  return res.data;
}

// component.tsx
export default function ProjectDetail() {
  const data = useLoaderData();
  return <div>{data.title}</div>;
}
```

## 📄 License

MIT

