import { getDataPattern } from "../lib/supabaseClient";
import { PageStructureTypes } from "../types/commonTypes";

export const getCategoryPagesData = async (pathname: string) => {
  try {
    switch (pathname) {
      case "/commercial-offset-printing": {
        const [CommercialOffsetPrintingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("offset_printing_page"),
        ]);

        return {
          CommercialOffsetPrintingPageData: CommercialOffsetPrintingPageData ?? [],
        };
      }

      case "/commercial-digital-printing": {
        const [CommercialDigitalPrintingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("digital_printing_page"),
        ]);

        return {
          CommercialDigitalPrintingPageData: CommercialDigitalPrintingPageData ?? [],
        };
      }
      case "/printing-copying": {
        const [PrintingCopyingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("printing_copying_page"),
        ]);

        return {
          PrintingCopyingPageData: PrintingCopyingPageData ?? [],
        };
      }
      case "/direct-mail": {
        const [DirectMailMailingServicesPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("direct_mail_mailing_services"),
        ]);

        return {
          DirectMailMailingServicesPageData: DirectMailMailingServicesPageData ?? [],
        };
      }
      case "/signs": {
        const [SignsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("signs_page"),
        ]);

        return {
          SignsPageData: SignsPageData ?? [],
        };
      }
      case "/online-ordering-portals": {
        const [OnlineOrderingPortalsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("online_ordering_portals_page"),
        ]);

        return {
          OnlineOrderingPortalsPageData: OnlineOrderingPortalsPageData ?? [],
        };
      }
      case "/banners-posters": {
        const [BannersPostersPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("banners_posters_page"),
        ]);

        return {
          BannersPostersPageData: BannersPostersPageData ?? [],
        };
      }
      case "/brochures-collateral": {
        const [BrochuresCollateralPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("brochures_collateral_page"),
        ]);

        return {
          BrochuresCollateralPageData: BrochuresCollateralPageData ?? [],
        };
      }
      case "/business-forms": {
        const [BusinessFormsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("business_forms_page"),
        ]);

        return {
          BusinessFormsPageData: BusinessFormsPageData ?? [],
        };
      }
      case "/labels-packaging": {
        const [LabelsPackagingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("labels_packaging_page"),
        ]);
      
        return {
          LabelsPackagingPageData: LabelsPackagingPageData ?? [],
        };
      }
      case "/printing-copying/manuals-catalogs-booklets": {
        const [ManualsCatalogsBookletsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("manuals_catalogs_booklets_page"),
        ]);
      
        return {
          ManualsCatalogsBookletsPageData: ManualsCatalogsBookletsPageData ?? [],
        };
      }
      case "/pull-up-banners-flags": {
        const [PullUpBannersFlagsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("pull_up_banners_flags_page"),
        ]);
      
        return {
          PullUpBannersFlagsPageData: PullUpBannersFlagsPageData ?? [],
        };
      }
      case "/car-graphics-wraps": {
        const [CarGraphicsWrapsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("car_graphics_wraps_page"),
        ]);
      
        return {
          CarGraphicsWrapsPageData: CarGraphicsWrapsPageData ?? [],
        };
      }
      case "/window-wall-floor-graphics": {
        const [WindowWallFloorGraphicsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("window_wall_floor_graphics_page"),
        ]);
      
        return {
          WindowWallFloorGraphicsPageData: WindowWallFloorGraphicsPageData ?? [],
        };
      }
      case "/signs/interior-office-lobby-decor": {
        const [InteriorOfficeLobbyDecorPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("interior_office_lobby_decor_page"),
        ]);
      
        return {
          InteriorOfficeLobbyDecorPageData: InteriorOfficeLobbyDecorPageData ?? [],
        };
      }           
      case "/tradeshow-event-signs": {
        const [TradeshowEventSignsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("tradeshow_event_signs_page"),
        ]);
      
        return {
          TradeshowEventSignsPageData: TradeshowEventSignsPageData ?? [],
        };
      }
      case "/signs/ada-wayfinding-signs": {
        const [AdaWayfindingSignsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("ada_wayfinding_signs_page"),
        ]);
      
        return {
          AdaWayfindingSignsPageData: AdaWayfindingSignsPageData ?? [],
        };
      }
      case "/signs/yard-outdoor-signs": {
        const [YardOutdoorSignsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("yard_outdoor_signs_page"),
        ]);
      
        return {
          YardOutdoorSignsPageData: YardOutdoorSignsPageData ?? [],
        };
      }
      case "/counter-pop-up-displays": {
        const [CounterPopUpDisplaysPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("counter_pop_up_displays_page"),
        ]);
      
        return {
          CounterPopUpDisplaysPageData: CounterPopUpDisplaysPageData ?? [],
        };
      }
      case "/labels-stickers-decals": {
        const [LabelsStickersDecalsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("labels_stickers_decals_page"),
        ]);
      
        return {
          LabelsStickersDecalsPageData: LabelsStickersDecalsPageData ?? [],
        };
      }
      case "/booth-graphics-signs-banners": {
        const [BoothGraphicsSignsBannersPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("booth_graphics_signs_banners_page"),
        ]);
      
        return {
          BoothGraphicsSignsBannersPageData: BoothGraphicsSignsBannersPageData ?? [],
        };
      }
      case "/signs/delivery-takeout-signs": {
        const [DeliveryTakeoutSignsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("delivery_takeout_signs_page"),
        ]);
      
        return {
          DeliveryTakeoutSignsPageData: DeliveryTakeoutSignsPageData ?? [],
        };
      }
      case "/now-open-signs-graphics": {
        const [NowOpenSignsGraphicsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("now_open_signs_graphics_page"),
        ]);
      
        return {
          NowOpenSignsGraphicsPageData: NowOpenSignsGraphicsPageData ?? [],
        };
      }
      case "/postcards-direct-mailers": {
        const [PostcardsDirectMailersPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("postcards_direct_mailers_page"),
        ]);
      
        return {
          PostcardsDirectMailersPageData: PostcardsDirectMailersPageData ?? [],
        };
      }              
      case "/newsletters-flyers-rack-cards": {
        const [NewslettersFlyersRackCardsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("newsletters_flyers_rack_cards_page"),
        ]);
      
        return {
          NewslettersFlyersRackCardsPageData: NewslettersFlyersRackCardsPageData ?? [],
        };
      }
      case "/presentation-training-materials": {
        const [PresentationTrainingMaterialsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("presentation_training_materials_page"),
        ]);
      
        return {
          PresentationTrainingMaterialsPageData: PresentationTrainingMaterialsPageData ?? [],
        };
      }
      case "/printing-copying/business-annual-reports": {
        const [BusinessAnnualReportsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("business_annual_reports_page"),
        ]);
      
        return {
          BusinessAnnualReportsPageData: BusinessAnnualReportsPageData ?? [],
        };
      }      
      case "/cards-invitations": {
        const [CardsInvitationsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("cards_invitations_page"),
        ]);
      
        return {
          CardsInvitationsPageData: CardsInvitationsPageData ?? [],
        };
      }
      case "/printing-copying/book-printing": {
        const [BookPrintingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("book_printing_page"),
        ]);
      
        return {
          BookPrintingPageData: BookPrintingPageData ?? [],
        };
      }
      case "/printing-copying/poster-printing": {
        const [PosterPrintingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("poster_printing_page"),
        ]);
      
        return {
          PosterPrintingPageData: PosterPrintingPageData ?? [],
        };
      }
      case "/printing-copying/legal-copying": {
        const [LegalCopyingPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("legal_copying_page"),
        ]);
      
        return {
          LegalCopyingPageData: LegalCopyingPageData ?? [],
        };
      }
      case "/standard-direct-mail": {
        const [StandardDirectMailPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("standard_direct_mail_page"),
        ]);
      
        return {
          StandardDirectMailPageData: StandardDirectMailPageData ?? [],
        };
      }
      case "/every-door-direct-mail": {
        const [EveryDoorDirectMailPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("every_door_direct_mail_page"),
        ]);
      
        return {
          EveryDoorDirectMailPageData: EveryDoorDirectMailPageData ?? [],
        };
      }
      case "/advanced-mailing-services": {
        const [AdvancedMailingServicesPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("advanced_mailing_services_page"),
        ]);
      
        return {
          AdvancedMailingServicesPageData: AdvancedMailingServicesPageData ?? [],
        };
      }
      case "/kitting-fulfillment": {
        const [KittingFulfillmentPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("kitting_fulfillment_page"),
        ]);
      
        return {
          KittingFulfillmentPageData: KittingFulfillmentPageData ?? [],
        };
      }
      case "/event-literature-signs": {
        const [EventLiteratureSignsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("event_literature_signs_page"),
        ]);
      
        return {
          EventLiteratureSignsPageData: EventLiteratureSignsPageData ?? [],
        };
      }
      case "/premium-private-labels": {
        const [PremiumPrivateLabelsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("premium_private_labels_page"),
        ]);
      
        return {
          PremiumPrivateLabelsPageData: PremiumPrivateLabelsPageData ?? [],
        };
      }
      case "/product-promotional-labels": {
        const [ProductPromotionalLabelsPageData] = await Promise.all([
          getDataPattern<PageStructureTypes>("product_promotional_labels_page"),
        ]);
      
        return {
          ProductPromotionalLabelsPageData: ProductPromotionalLabelsPageData ?? [],
        };
      }
                                                      
      default:
        return {};
    }
    
  } catch (error) {
    console.error("Error fetching category pages data:", error);
    return {};
  }
};