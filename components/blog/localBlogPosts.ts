/*  Raw posts WITHOUT ids.
    Put the newest one last – we’ll sort & renumber below. */
    const rawPosts = [
        {
          title: 'Premier Local Printing Services',
          date: '2024-04-10',
          slug: 'premier-local-printing-services',
          image: {
            src: '/images/blog/6.webp',
            alt: 'Premier Local Printing Services',
          },
        },
        {
          title: 'Comprehensive Printing Solutions for All Projects',
          date: '2024-04-22',
          slug: 'comprehensive-printing-solutions',
          image: {
            src: '/images/blog/5.webp',
            alt: 'Comprehensive Printing Solutions for All Projects',
          },
        },
        {
          title: 'Printing Services in Minneapolis, MN',
          date: '2024-05-10',
          slug: 'printing-services-minneapolis',
          image: {
            src: '/images/blog/4.webp',
            alt: 'Printing Services in Minneapolis, MN',
          },
        },
        {
          title: 'Nearby Local Printing Services',
          date: '2024-05-20',
          slug: 'nearby-local-printing-services',
          image: {
            src: '/images/blog/3.webp',
            alt: 'Nearby Local Printing Services',
          },
        },
        {
          title: 'Professional Printing Solutions Tailored to All Budgets',
          date: '2024-06-08',
          slug: 'printing-solutions-all-budgets',
          image: {
            src: '/images/blog/2.webp',
            alt: 'Professional Printing Solutions Tailored to All Budgets',
          },
        },
        {
          title: 'Professional Printing Solutions for Corporate Clients',
          date: '2024-06-20',
          slug: 'professional-printing-solutions-corporate',
          image: {
            src: '/images/blog/1.webp',
            alt: 'Professional Printing Solutions for Corporate Clients',
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
      