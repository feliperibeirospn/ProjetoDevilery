import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { TigelaComponent } from './components/tigela/tigela.component';

const routes: Routes = [
  // Redirect to home if path is empty
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Define route for home component
  { path: 'home', component: HomeComponent },
  {path: 'tigela', component:TigelaComponent},
  // Define route for cart component
  { path: 'cart', component: CartComponent },
  { path:'cart-modal', component: CartModalComponent },
  // Define route for product list component (assuming it's the full path)
  { path: 'products', component: ProductListComponent }, // Changed path to 'products'
  // Wildcard route for 404 page (any other path)
  { path: '**', component: PageNotFoundComponent },

  { path: 'navbar', component: NavComponent},
];

export { routes };
