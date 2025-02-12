import Categories from '@/components/shared/categories';
import FiltersPanel from '@/components/shared/filtersPanel';
import CartBox from '@/components/shared/cartBox';
import { prisma } from '@/prisma/prisma.client';
import './page.css'

export default async function Home() {
  const categories = await prisma.caregory.findMany({
    include: {
      products: {
        include: {
          variations: true,
        }
      },
    }
  })
  return (
    <section>
      <Categories />
      <div className="main-container">
        <FiltersPanel />
        <CartBox categories={categories} />
      </div>
    </section>
  );
}
