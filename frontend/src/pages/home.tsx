import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Palette } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "极速开发",
    description: "Vite + SWC 提供极速的冷启动和热更新，开发体验飞起。",
  },
  {
    icon: Shield,
    title: "类型安全",
    description: "TypeScript + Zod 实现编译时和运行时的双重类型保障。",
  },
  {
    icon: Palette,
    title: "精美 UI",
    description: "shadcn/ui + Tailwind CSS 让你拥有 100% 的样式控制权。",
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          2025 前端终极架构
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          React 18 + TypeScript + Vite + shadcn/ui + React Router 7 + Zustand
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/login">
            <Button size="lg">
              开始使用 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            了解更多
          </Button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

