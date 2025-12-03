import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/lib/axios";

// 1. 定义 Schema (Zod)
const loginSchema = z.object({
  email: z.string().min(1, "请输入邮箱").email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要 6 个字符"),
});

// 2. 自动推导 TS 类型
type LoginForm = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();

  // 3. 使用 React Hook Form + Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 4. 提交处理 - 这里的 data 类型是 100% 安全的
  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await api.post("/auth/login", data);
      // 保存 token
      localStorage.setItem("token", response.data.token);
      // 跳转到仪表盘
      navigate("/dashboard");
    } catch (error) {
      // 错误已在 axios 拦截器中统一处理
      console.error("登录失败:", error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="w-[400px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">登录</CardTitle>
            <CardDescription>输入您的邮箱和密码登录账户</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "登录中..." : "登录"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

