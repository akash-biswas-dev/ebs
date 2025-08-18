import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Prerender
  },
  {
    path:'dashboard',
    renderMode:RenderMode.Server
  },
  { 
    path: 'auth',
    renderMode: RenderMode.Prerender
  },
  {
    path:'**',
    renderMode:RenderMode.Prerender
  }
];
