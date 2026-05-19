import { Button } from "@/components/ui/Button";
import { BackgroundPattern } from "@/components/visuals/BackgroundPattern";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-bg py-20 text-center">
      <BackgroundPattern />
      <div className="site-container relative">
        <div className="mx-auto max-w-2xl">
          <p className="bg-gold-gradient bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-extrabold text-primary">الصفحة غير موجودة — لكن الحل دائمًا موجود</h1>
          <p className="mt-4 text-muted">The page could not be found, but the path back is clear.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">العودة للرئيسية</Button>
            <Button href="/contact" variant="outline">تواصل معنا</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
