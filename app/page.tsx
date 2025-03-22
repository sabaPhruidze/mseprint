import Carousel from "../components/Home/Carousel";
import type { Metadata } from "next";
import { getHomeData } from "../db/getHomeData";
import { getHeaderData } from "../db/getHeaderData";
import Cards from "components/Home/Cards";
import HeroSection from "components/Home/HeroSection";
import CTASection from "components/Home/CTASection";

export const metadata: Metadata = {
  title: "MSE Printing | Commercial Printing & Direct Mail Services",
  description:
    "Professional commercial printing services including offset printing, digital printing, direct mail, signs, and custom online ordering portals. Quality printing solutions for businesses.",
  alternates: {
    canonical: "https://www.mseprinting.com/",
  },
  metadataBase: new URL("https://www.mseprinting.com"),
  openGraph: {
    title: "MSE Printing | Commercial Printing & Direct Mail Services",
    description:
      "Full-service commercial printing company offering offset printing, digital printing, direct mail services, and custom online ordering portals for businesses.",
    url: "https://www.mseprinting.com",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/main-page-images/offset-printing.webp",
        width: 1200,
        height: 630,
        alt: "MSE Printing Services",
      },
    ],
  },
};

const Home = async () => {
  const [data, headerData] = await Promise.all([
    getHomeData("/"),
    getHeaderData(),
  ]);

  return (
    <>
      <div>
        <Carousel carouselData={data.carouselData} />
        <div className="flex flex-col lg:flex-row gap-6 p-4">
          <Cards
            cardsData={data.cardsData}
            homeSpecialities={data.homeSpecialities}
          />
        </div>
        <HeroSection heroSection={data.heroSection} />
        <p>
          Interior Office & Lobby Décor: Elevate Your Workspace with Custom
          Branding Your office space is more than just a place to work—its a
          reflection of your brands identity, culture, and professionalism.
          Custom interior office and lobby décor enhance aesthetics, improve
          workplace ambiance, and create a lasting impression on visitors and
          employees. At MSE Printing, we offer tailored décor solutions that
          transform corporate spaces into branded environments. Why Invest in
          Custom Interior Office & Lobby Décor? A well-designed office creates a
          welcoming and professional atmosphere. Heres why custom interior
          office and lobby décor is essential: • Brand Reinforcement: Display
          your company’s logo, mission statement, and brand colors to establish
          a cohesive identity. • Professional Aesthetics: Custom décor elevates
          office interiors, creating a polished and inviting environment. •
          Enhanced Employee Morale: Thoughtfully designed workspaces improve
          productivity, motivation, and workplace satisfaction. • Memorable
          First Impressions: Impress clients and visitors with branded wall
          graphics, signage, and artistic installations. • Functional &
          Decorative Solutions: Use wayfinding signs, wall murals, and custom
          partitions to enhance both aesthetics and navigation. Premium Interior
          Office & Lobby Décor in Minneapolis At MSE Printing, we specialize in
          designing high-quality office and lobby décor tailored to fit your
          business. Whether you need branded wall graphics, privacy partitions,
          or company timeline displays, our experts create visually appealing
          solutions that enhance your workspace. Relevant Pages Explore
          additional print solutions that complement your office and lobby
          décor: • Commercial Offset Printing: is the gold standard for
          producing high-quality printed materials in large quantities: It
          offers precise color accuracy, sharp details, and cost-effective
          production for brochures, catalogs, business cards, and corporate
          stationery, making it ideal for businesses needing professional
          marketing materials and bulk branding solutions. At MSE Printing, we
          use advanced technology with eco-friendly inks and specialty finishes
          like embossing to deliver exceptional, sustainable results that
          elevate your brand. • Commercial Digital Printing: revolutionizes the
          way businesses approach their printing needs: Offering unmatched
          versatility, speed, and customization for short-run brochures,
          personalized direct mail, event invitations, and variable data
          projects. With no printing plates required, it ensures rapid
          production, vibrant colors, and crisp images, perfect for businesses
          wanting high-quality results without large minimum orders, all while
          allowing last-minute design updates. • Tradeshow & Event Signs: Ensure
          your brand gets noticed at industry events: With high-quality
          tradeshow signage, including backdrops, retractable banners, and
          tabletop displays crafted for portability and vibrant, high-resolution
          impact. MSE Printing delivers cohesive, reusable event materials that
          set up easily and shine in crowded venues, perfect for businesses
          attending multiple events. • ADA & Wayfinding Signs: Provide clear
          navigation for customers and employees: With professional
          ADA-compliant and wayfinding signage that improves accessibility and
          usability through tactile elements, braille, and high-contrast
          designs. MSE Printing uses durable acrylic and metal to craft signs
          that meet legal standards and enhance user experience in hospitals,
          schools, or offices. • Yard & Outdoor Signs: Promote your business,
          events, and sales: With durable outdoor signage that stands up to the
          elements while maintaining a professional look, using
          weather-resistant corrugated plastic, aluminum, or PVC. MSE Printing
          offers customizable, double-sided, and bold designs that attract
          attention for temporary promotions or long-term visibility Counter &
          Pop-up Displays Transform reception areas, front desks, and conference
          spaces with high-impact pop-up displays. These versatile marketing
          tools are perfect for showcasing promotions, company values, or new
          product launches. We offer a variety of styles, including retractable
          banners and tabletop displays, all customized with your branding.
          Labels, Stickers & Decals Add personality and professionalism to your
          office with custom decals and stickers. Our high-quality labels can be
          used for branding office equipment, creating window graphics, or
          decorating walls with motivational quotes and company logos. These
          easy-to-apply, removable decals allow for flexible branding options.
          Booth Graphics, Signs & Banners If you attend business expos,
          networking events, or recruitment fairs, our premium booth graphics
          and banners ensure you make a bold statement. We design
          high-resolution, lightweight signage that effectively communicates
          your message and sets you apart from competitors. Delivery & Takeout
          Signs For businesses offering takeout or delivery services, clear and
          professional signage is a must. We create durable, easy-to-read signs
          for restaurant lobbies, pickup areas, and storefronts, ensuring
          customers can quickly locate their orders. Our signs are available in
          weather-resistant and illuminated options for maximum visibility. Now
          Open Signs & Graphics Grand openings and rebranding efforts deserve
          attention! Our custom Now Open signs are designed to generate
          excitement and attract foot traffic. Choose from vinyl banners, window
          clings, A-frame signs, or large-format posters to announce your
          business with confidence. FAQs About Interior Office & Lobby Décor Q:
          What types of office signage do you offer? A: We provide a wide range
          of office décor solutions, including wall graphics, lobby signs,
          window decals, directional signage, and custom branding elements.
          Whether you are looking to improve navigation, add decorative
          elements, or showcase your company mission, we offer tailored signage
          to meet your needs. Our signs are available in multiple materials,
          finishes, and styles to match your office aesthetics perfectly. Q: Can
          you help with design? A: Absolutely! Our experienced design team works
          closely with you to create visually appealing office graphics that
          align with your brand identity. Whether you have existing artwork or
          need a completely new design, we ensure that every element—from font
          choices to color schemes—matches your companys vision. We also offer
          proofs before printing, so you can see how your signage will look
          before installation. Q: Do you offer installation services? A: Yes!
          Our professional installation team ensures that your office signage
          and décor are applied seamlessly, without air bubbles, misalignment,
          or damage to your walls. We handle everything from simple vinyl
          applications to complex 3D logo installations. Our team works
          efficiently to minimize disruptions to your office operations while
          ensuring a clean and professional final result. Q: How long does the
          printing process take? A: Most office décor printing projects are
          completed within a few business days, depending on complexity. For
          standard vinyl wall decals and window graphics, we offer fast
          turnaround times with expedited options available. Larger projects,
          such as full office rebrands, may take longer, but we work closely
          with you to meet your deadlines. If you need something urgent, let us
          know—were happy to accommodate rush orders whenever possible. Upgrade
          Your Workspace with MSE Printing Transform your office into a visually
          compelling and professional space with custom interior office and
          lobby décor from MSE Printing. Contact us at info@mseprinting.com or
          call 612-522-7600 to get started today. Make your office an extension
          of your brand with premium décor solutions that leave a lasting
          impression. Interior Office & Lobby Décor: Elevate Your Workspace with
          Custom Branding Your office space is more than just a place to
          work—its a reflection of your brands identity, culture, and
          professionalism. Custom interior office and lobby décor enhance
          aesthetics, improve workplace ambiance, and create a lasting
          impression on visitors and employees. At MSE Printing, we offer
          tailored décor solutions that transform corporate spaces into branded
          environments. Why Invest in Custom Interior Office & Lobby Décor? A
          well-designed office creates a welcoming and professional atmosphere.
          Heres why custom interior office and lobby décor is essential: • Brand
          Reinforcement: Display your company’s logo, mission statement, and
          brand colors to establish a cohesive identity. • Professional
          Aesthetics: Custom décor elevates office interiors, creating a
          polished and inviting environment. • Enhanced Employee Morale:
          Thoughtfully designed workspaces improve productivity, motivation, and
          workplace satisfaction. • Memorable First Impressions: Impress clients
          and visitors with branded wall graphics, signage, and artistic
          installations. • Functional & Decorative Solutions: Use wayfinding
          signs, wall murals, and custom partitions to enhance both aesthetics
          and navigation. Premium Interior Office & Lobby Décor in Minneapolis
          At MSE Printing, we specialize in designing high-quality office and
          lobby décor tailored to fit your business. Whether you need branded
          wall graphics, privacy partitions, or company timeline displays, our
          experts create visually appealing solutions that enhance your
          workspace. Relevant Pages Explore additional print solutions that
          complement your office and lobby décor: • Commercial Offset Printing:
          is the gold standard for producing high-quality printed materials in
          large quantities: It offers precise color accuracy, sharp details, and
          cost-effective production for brochures, catalogs, business cards, and
          corporate stationery, making it ideal for businesses needing
          professional marketing materials and bulk branding solutions. At MSE
          Printing, we use advanced technology with eco-friendly inks and
          specialty finishes like embossing to deliver exceptional, sustainable
          results that elevate your brand. • Commercial Digital Printing:
          revolutionizes the way businesses approach their printing needs:
          Offering unmatched versatility, speed, and customization for short-run
          brochures, personalized direct mail, event invitations, and variable
          data projects. With no printing plates required, it ensures rapid
          production, vibrant colors, and crisp images, perfect for businesses
          wanting high-quality results without large minimum orders, all while
          allowing last-minute design updates. • Tradeshow & Event Signs: Ensure
          your brand gets noticed at industry events: With high-quality
          tradeshow signage, including backdrops, retractable banners, and
          tabletop displays crafted for portability and vibrant, high-resolution
          impact. MSE Printing delivers cohesive, reusable event materials that
          set up easily and shine in crowded venues, perfect for businesses
          attending multiple events. • ADA & Wayfinding Signs: Provide clear
          navigation for customers and employees: With professional
          ADA-compliant and wayfinding signage that improves accessibility and
          usability through tactile elements, braille, and high-contrast
          designs. MSE Printing uses durable acrylic and metal to craft signs
          that meet legal standards and enhance user experience in hospitals,
          schools, or offices. • Yard & Outdoor Signs: Promote your business,
          events, and sales: With durable outdoor signage that stands up to the
          elements while maintaining a professional look, using
          weather-resistant corrugated plastic, aluminum, or PVC. MSE Printing
          offers customizable, double-sided, and bold designs that attract
          attention for temporary promotions or long-term visibility Counter &
          Pop-up Displays Transform reception areas, front desks, and conference
          spaces with high-impact pop-up displays. These versatile marketing
          tools are perfect for showcasing promotions, company values, or new
          product launches. We offer a variety of styles, including retractable
          banners and tabletop displays, all customized with your branding.
          Labels, Stickers & Decals Add personality and professionalism to your
          office with custom decals and stickers. Our high-quality labels can be
          used for branding office equipment, creating window graphics, or
          decorating walls with motivational quotes and company logos. These
          easy-to-apply, removable decals allow for flexible branding options.
          Booth Graphics, Signs & Banners If you attend business expos,
          networking events, or recruitment fairs, our premium booth graphics
          and banners ensure you make a bold statement. We design
          high-resolution, lightweight signage that effectively communicates
          your message and sets you apart from competitors. Delivery & Takeout
          Signs For businesses offering takeout or delivery services, clear and
          professional signage is a must. We create durable, easy-to-read signs
          for restaurant lobbies, pickup areas, and storefronts, ensuring
          customers can quickly locate their orders. Our signs are available in
          weather-resistant and illuminated options for maximum visibility. Now
          Open Signs & Graphics Grand openings and rebranding efforts deserve
          attention! Our custom Now Open signs are designed to generate
          excitement and attract foot traffic. Choose from vinyl banners, window
          clings, A-frame signs, or large-format posters to announce your
          business with confidence. FAQs About Interior Office & Lobby Décor Q:
          What types of office signage do you offer? A: We provide a wide range
          of office décor solutions, including wall graphics, lobby signs,
          window decals, directional signage, and custom branding elements.
          Whether you are looking to improve navigation, add decorative
          elements, or showcase your company mission, we offer tailored signage
          to meet your needs. Our signs are available in multiple materials,
          finishes, and styles to match your office aesthetics perfectly. Q: Can
          you help with design? A: Absolutely! Our experienced design team works
          closely with you to create visually appealing office graphics that
          align with your brand identity. Whether you have existing artwork or
          need a completely new design, we ensure that every element—from font
          choices to color schemes—matches your companys vision. We also offer
          proofs before printing, so you can see how your signage will look
          before installation. Q: Do you offer installation services? A: Yes!
          Our professional installation team ensures that your office signage
          and décor are applied seamlessly, without air bubbles, misalignment,
          or damage to your walls. We handle everything from simple vinyl
          applications to complex 3D logo installations. Our team works
          efficiently to minimize disruptions to your office operations while
          ensuring a clean and professional final result. Q: How long does the
          printing process take? A: Most office décor printing projects are
          completed within a few business days, depending on complexity. For
          standard vinyl wall decals and window graphics, we offer fast
          turnaround times with expedited options available. Larger projects,
          such as full office rebrands, may take longer, but we work closely
          with you to meet your deadlines. If you need something urgent, let us
          know—were happy to accommodate rush orders whenever possible. Upgrade
          Your Workspace with MSE Printing Transform your office into a visually
          compelling and professional space with custom interior office and
          lobby décor from MSE Printing. Contact us at info@mseprinting.com or
          call 612-522-7600 to get started today. Make your office an extension
          of your brand with premium décor solutions that leave a lasting
          impression.
        </p>
        <CTASection rqsafData={headerData.requestQuoteSendAFileData} />
      </div>
    </>
  );
};

export default Home;
