import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/theme";

export function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Frontend App</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80">
              首页
            </Link>
            <Link to="/dashboard" className="transition-colors hover:text-foreground/80">
              仪表盘
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">切换主题</span>
          </Button>
          <Link to="/login">
            <Button>登录</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

