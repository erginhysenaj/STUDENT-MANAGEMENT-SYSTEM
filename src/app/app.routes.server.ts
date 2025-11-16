import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    // Use server-side rendering instead of prerendering for better dev performance
    renderMode: RenderMode.Server
  }
];
