// app/(auth)/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >{children}</ThemeProvider>
      
    </div>
  );
}