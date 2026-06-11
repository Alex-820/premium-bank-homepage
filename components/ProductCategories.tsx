import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { productCategories } from "@/lib/site";

export function ProductCategories() {
  return (
    <section id="personal" className="bg-bank-mist py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Banking Products"
            title="A complete banking relationship, organized around your financial priorities."
            description="Explore everyday accounts, credit, lending, business services, wealth, and investment capabilities through a unified banking experience."
          />
          <a href="/open-account" className="btn-secondary w-fit">
            View all products
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <ProductCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
