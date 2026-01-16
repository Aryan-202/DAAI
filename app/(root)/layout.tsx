// app/(root)/layout.tsx
import Header from "@/components/layout/header";
import FloatingFAQButton from "@/components/custom/faq-button";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingFAQButton />
    </>
  );
}