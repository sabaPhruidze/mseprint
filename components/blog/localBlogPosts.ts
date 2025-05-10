  const rawPosts: BlogPost[] = [
      /* ───────────────────────────────── Premier Local Printing Services ───────────────────────────────── */
      {
        id: 1,
        title: 'Premier Local Printing Services',
        date: '2024-04-10',
        slug: 'premier-local-printing-services',
        image: {
          src: '/images/blog/6.webp',
          alt: 'Premier Local Printing Services',
          sizes: '300px',
          priority: true,
          geoData: {
            location: 'Inglewood',
            latitude: 33.961018,     // :contentReference[oaicite:0]{index=0}
            longitude: -118.35537,   // :contentReference[oaicite:1]{index=1}
            addressRegion: 'California',
          },
        },
      },
    
      /* ─────────────────────────── Comprehensive Printing Solutions for All Projects ─────────────────────────── */
      {
        id: 2,
        title: 'Comprehensive Printing Solutions for All Projects',
        date: '2024-04-22',
        slug: 'comprehensive-printing-solutions',
        image: {
          src: '/images/blog/5.webp',
          alt: 'Comprehensive Printing Solutions for All Projects',
          sizes: '300px',
          priority: true,
          geoData: {
            location: 'Irvine',
            latitude: 33.669445,     // :contentReference[oaicite:2]{index=2}
            longitude: -117.823059,  // :contentReference[oaicite:3]{index=3}
            addressRegion: 'California',
          },
        },
      },
    
      /* ───────────────────────────── Printing Services in Minneapolis, MN ───────────────────────────── */
      {
        id: 3,
        title: 'Printing Services in Minneapolis, MN',
        date: '2024-05-10',
        slug: 'printing-services-minneapolis',
        image: {
          src: '/images/blog/4.webp',
          alt: 'Printing Services in Minneapolis, MN',
          sizes: '300px',
          priority: true,
          geoData: {
            location: 'La Habra',
            latitude: 33.93196,      // :contentReference[oaicite:4]{index=4}
            longitude: -117.94617,   // :contentReference[oaicite:5]{index=5}
            addressRegion: 'California',
          },
        },
      },
    
      /* ─────────────────────────────── Nearby Local Printing Services ─────────────────────────────── */
      {
        id: 4,
        title: 'Nearby Local Printing Services',
        date: '2024-05-20',
        slug: 'nearby-local-printing-services',
        image: {
          src: '/images/blog/3.webp',
          alt: 'Nearby Local Printing Services',
          sizes: '300px',
          priority: true,
          geoData: {
            location: 'Laguna Beach',
            latitude: 33.541679,     // :contentReference[oaicite:6]{index=6}
            longitude: -117.777214,  // :contentReference[oaicite:7]{index=7}
            addressRegion: 'California',
          },
        },
      },
    
      /* ─────────────────── Professional Printing Solutions Tailored to All Budgets ─────────────────── */
      {
        id: 5,
        title: 'Professional Printing Solutions Tailored to All Budgets',
        date: '2024-06-08',
        slug: 'printing-solutions-all-budgets',
        image: {
          src: '/images/blog/2.webp',
          alt: 'Professional Printing Solutions Tailored to All Budgets',
          sizes: '300px',
          priority: true,
          geoData: {
            location: 'Lancaster',
            latitude: 34.686787,     // :contentReference[oaicite:8]{index=8}
            longitude: -118.15416,   // :contentReference[oaicite:9]{index=9}
            addressRegion: 'California',
          },
        },
      },
    
      /* ────────────────── Professional Printing Solutions for Corporate Clients ────────────────── */
      {
        id: 6,
        title: 'Professional Printing Solutions for Corporate Clients',
        date: '2024-06-20',
        slug: 'professional-printing-solutions-corporate',
        image: {
          src: '/images/blog/1.webp',
          alt: 'Professional Printing Solutions for Corporate Clients',
          sizes: '300px',
          priority: true,
          geoData: {
            location: 'Livermore',
            latitude: 37.681873,     // :contentReference[oaicite:10]{index=10}
            longitude: -121.768005,  // :contentReference[oaicite:11]{index=11}
            addressRegion: 'California',
          },
        },
      },
    ];
    
      
      /*  Sort ASCENDING (oldest → newest),
          then assign id 1…N in that same order. */
      import { BlogPost } from 'types/commonTypes';
      
      export const localBlogPosts: BlogPost[] = rawPosts
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(), // oldest first
        )
        .map((post, idx) => ({ ...post, id: idx + 1 }));
      