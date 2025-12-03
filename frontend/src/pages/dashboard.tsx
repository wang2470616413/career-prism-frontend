import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Users, CreditCard, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/axios";

// 定义数据类型
interface DashboardData {
  totalRevenue: number;
  subscriptions: number;
  sales: number;
  activeNow: number;
}

// React Router 7 Loader - 数据预加载模式
export async function dashboardLoader(): Promise<DashboardData> {
  try {
    const response = await api.get<DashboardData>("/dashboard/stats");
    return response.data;
  } catch {
    // 如果 API 调用失败，返回模拟数据
    return {
      totalRevenue: 45231.89,
      subscriptions: 2350,
      sales: 12234,
      activeNow: 573,
    };
  }
}

const stats = [
  {
    title: "总收入",
    icon: CreditCard,
    formatter: (value: number) => `¥${value.toLocaleString()}`,
    key: "totalRevenue" as const,
  },
  {
    title: "订阅用户",
    icon: Users,
    formatter: (value: number) => `+${value.toLocaleString()}`,
    key: "subscriptions" as const,
  },
  {
    title: "销售额",
    icon: TrendingUp,
    formatter: (value: number) => `+${value.toLocaleString()}`,
    key: "sales" as const,
  },
  {
    title: "活跃用户",
    icon: Activity,
    formatter: (value: number) => `+${value}`,
    key: "activeNow" as const,
  },
];

export function DashboardPage() {
  // 使用 loader 预加载的数据，无需 loading 状态
  const data = useLoaderData() as DashboardData;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold tracking-tight">仪表盘</h2>
        <p className="text-muted-foreground">欢迎回来！这是您的数据概览。</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.formatter(data[stat.key])}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

