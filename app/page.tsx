"use client"
import Categories from '@/components/shared/categories';
import './page.css'
import FiltersPanel from '@/components/shared/filtersPanel';
import CartBox from '@/components/shared/cartBox';

export default function Home() {
  return (
    <section>
      <Categories/>
      <div className="main-container">
        <FiltersPanel/>
        <CartBox/>
      </div>
    </section>
  );
}
