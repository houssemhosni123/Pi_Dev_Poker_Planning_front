import { CoreMenu } from '@core/types';
import { Role } from 'app/auth/models';



export const menu: CoreMenu[] = [
  // Dashboard Admin
  {
    id: 'apps',
    type: 'section',
    title: 'Admin & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    role: [Role.Admin], 

    children: [
      {
        id: 'listuser',
        title: 'List Users',
        translate: 'List Users',
        type: 'item',
        icon: 'user',
        url: 'apps/user/user-list'
      },
      
      
      {
        id: 'list',
        title: 'Ajouter Role Projets',
        translate: 'Ajouter Role Projets',
        type: 'item',
        icon: 'plus-circle',
        url: 'TacheProjet/AjouterTacheProjet'
      },
      
      
      
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'Calendar',
        type: 'item',
        icon: 'calendar',
        url: 'Reunion/AfficherCalendar'
      },
      
      {
        id: 'Question',
        title: 'Ajouter Question',
        translate: 'Ajouter Question',
        type: 'item',
        icon: 'plus-circle',
        url: '/Feedback/addQuestion'
      },
      {
        id: 'email',
        title: ' List Iteration',
        translate: 'List Iteration',
        type: 'item',
        icon: 'menu',
        url: 'Iteration/AfficherIteration'

      },
      {
        id: 'email',
        title: ' Crée Session',
        translate: 'Crée Session',
        type: 'item',
        icon: 'plus-circle',
        url: 'Session/add'

      },
      {
        id: 'email',
        title: ' List  Session',
        translate: 'List Session',
        type: 'item',
        icon: 'menu',
        url: 'Session/get'

      },
      {
        id: 'Reunion',
        title: 'Reunion',
        translate: 'Reunion',
        type: 'item',
        icon: 'map',
        url: 'Reunion/AjouterReunion'
      },
      {
        id: 'Reclamation',
        title: 'Reclamation',
        translate: 'Reclamation',
        type: 'item',
        icon: 'alert-triangle',
        url: 'Reclamation/AfficherReclamation'
      },
      {
        id: 'Feedback',
        title: 'List Feedback',
        translate: 'List Feedback',
        type: 'item',
        icon: 'check-square',
        url: 'Feedback'
      },
      {
        id: 'TacheProjet',
        title: ' List TacheProjet',
        translate: 'List TacheProjet',
        type: 'item',
        icon: 'menu',
        url: 'TacheProjet/AfficherTacheProjet'

      },
    ]
  },
  //Dashbord Product owner
  {
    id: 'apps',
    type: 'section',
    title: 'ProductOwner & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    role: [Role.ProductOwner], 

    children: [
      {
        id: 'Product owner',
        title: 'Dashbord Product owner',
        translate: 'Dashbord Product owner',
        type: 'item',
        icon: 'home',
        url: 'statistiques'

      },
      
      {
        id: 'Projet',
        title: ' List Projet',
        translate: 'List Projet',
        type: 'item',
        icon: 'menu',
        url: 'projets'

      },
      
    ]
  },
  //Dashbord  ScrumMaster 
  {
    id: 'apps',
    type: 'section',
    title: 'Scrum Master & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    role: [Role.ScrumMaster], 

    children: [
      {
        id: 'email',
        title: 'Dashbord Scrum Master',
        translate: 'Dashbord Scrum Master',
        type: 'item',
        icon: 'home',
        url: 'Reclamation/AfficherChartsPie'

      },
      {
        id: 'TacheProjet',
        title: ' List TacheProjet',
        translate: 'List TacheProjet',
        type: 'item',
        icon: 'menu',
        url: 'TacheProjet/AfficherTacheProjet'

      },
      {
        id: 'email',
        title: ' List  Session',
        translate: 'List Session',
        type: 'item',
        icon: 'menu',
        url: 'Session/get'

      },
      {
        id: 'email',
        title: ' Crée Session',
        translate: 'Crée Session',
        type: 'item',
        icon: 'plus-circle',
        url: 'Session/add'

      },
     
      {
        id: 'email',
        title: ' List Iteration',
        translate: 'List Iteration',
        type: 'item',
        icon: 'menu',
        url: 'Iteration/AfficherIteration'

      },
      
      {

        id: 'Reunion',
        title: 'Reunion',
        translate: 'Reunion',
        type: 'item',
        icon: 'map',
        url: 'Reunion/AjouterReunion'
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'Calendar',
        type: 'item',
        icon: 'calendar',
        url: 'Reunion/AfficherCalendar'
      },
      {
        id: 'Reclamation',
        title: 'Reclamation',
        translate: 'Reclamation',
        type: 'item',
        icon: 'alert-triangle',
        url: 'Reclamation/AfficherReclamation'
      },
      
    ]
  },
  // Dashbord developer 
  {
    id: 'user-interface',
    type: 'section',
    title: 'Devoloper Interface',
    translate: 'MENU.UI.SECTION',
    icon: 'layers',
    role: [Role.developer], 
    children: [
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'MENU.APPS.CALENDAR',
        type: 'item',
        icon: 'calendar',
        url: 'Reunion/AfficherCalendar'
      },
      {
        id: 'colors',
        title: 'Reclamation',
        translate: 'MENU.UI.COLORS',
        type: 'item',
        icon: 'activity',
        url: 'Reclamation/ajouterReclamation'
      },
      {
        id: 'colors',
        title: 'Vote',
        translate: 'MENU.UI.COLORS',
        type: 'item',
        icon: 'activity',
        url: '/Iteration/FrontIteration'
      },
      
      
      /*{
        id: 'cards',
        title: 'SprintBacklog',
        translate: 'MENU.UI.CARDS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'list',
        badge: {
          title: 'New',
          translate: 'MENU.UI.CARDS.BADGE',
          classes: 'badge-light-success badge-pill'
        },
        children: [
          {
            id: 'card-basic',
            title: 'Ajouter SprintBacklog',
            translate: 'MENU.UI.CARDS.BASIC',
            type: 'item',
            icon: 'circle',
            url: 'AjouterSprintBacklog'
          },
          {
            id: 'card-advance',
            title: 'Affichage Sprint Backlog',
            translate: 'MENU.UI.CARDS.ADVANCE',
            type: 'item',
            icon: 'circle',
            url: 'AfficherSprintBacklog'
          },
          {
            id: 'card-statistics',
            title: 'Statistics',
            translate: 'MENU.UI.CARDS.STATISTICS',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/statistics'
          },
          {
            id: 'Card-analytics',
            title: 'Analytics',
            translate: 'MENU.UI.CARDS.ANALYTICS',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/analytics'
          },
          {
            id: 'card-actions',
            title: 'Actions',
            translate: 'MENU.UI.CARDS.ACTIONS',
            type: 'item',
            icon: 'circle',
            url: 'ui/card/actions'
          }
        ]
      },*/
     /* {
        id: 'components',
        title: 'Components',
        translate: 'MENU.UI.COMPONENTS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'archive',
        children: [
          {
            id: 'components-alerts',
            title: 'Alerts',
            translate: 'MENU.UI.COMPONENTS.ALERTS',
            type: 'item',
            icon: 'circle',
            url: 'components/alerts'
          },
          {
            id: 'components-avatar',
            title: 'Avatar',
            translate: 'MENU.UI.COMPONENTS.AVATAR',
            type: 'item',
            icon: 'circle',
            url: 'components/avatar'
          },
          {
            id: 'components-badges',
            title: 'Badges',
            translate: 'MENU.UI.COMPONENTS.BADGES',
            type: 'item',
            icon: 'circle',
            url: 'components/badges'
          },
          {
            id: 'components-breadcrumbs',
            title: 'Breadcrumbs',
            translate: 'MENU.UI.COMPONENTS.BREADCRUMBS',
            type: 'item',
            icon: 'circle',
            url: 'components/breadcrumbs'
          },
          {
            id: 'components-buttons',
            title: 'Buttons',
            translate: 'MENU.UI.COMPONENTS.BUTTONS',
            type: 'item',
            icon: 'circle',
            url: 'components/buttons'
          },
          {
            id: 'components-carousel',
            title: 'Carousel',
            translate: 'MENU.UI.COMPONENTS.CAROUSEL',
            type: 'item',
            icon: 'circle',
            url: 'components/carousel'
          },
          {
            id: 'components-collapse',
            title: 'Collapse',
            translate: 'MENU.UI.COMPONENTS.COLLAPSE',
            type: 'item',
            icon: 'circle',
            url: 'components/collapse'
          },
          {
            id: 'components-divider',
            title: 'Divider',
            translate: 'MENU.UI.COMPONENTS.DIVIDER',
            type: 'item',
            icon: 'circle',
            url: 'components/divider'
          },
          {
            id: 'components-drop-downs',
            title: 'Dropdowns',
            translate: 'MENU.UI.COMPONENTS.DROPDOWNS',
            type: 'item',
            icon: 'circle',
            url: 'components/dropdowns'
          },
          {
            id: 'components-list-group',
            title: 'List Group',
            translate: 'MENU.UI.COMPONENTS.GROUP',
            type: 'item',
            icon: 'circle',
            url: 'components/list-group'
          },
          {
            id: 'components-media-objects',
            title: 'Media Objects',
            translate: 'MENU.UI.COMPONENTS.OBJECTS',
            type: 'item',
            icon: 'circle',
            url: 'components/media-objects'
          },
          {
            id: 'components-modals',
            title: 'Modals',
            translate: 'MENU.UI.COMPONENTS.MODALS',
            type: 'item',
            icon: 'circle',
            url: 'components/modals'
          },
          {
            id: 'components-navs',
            title: 'Navs',
            translate: 'MENU.UI.COMPONENTS.COMPONENT',
            type: 'item',
            icon: 'circle',
            url: 'components/navs'
          },
          {
            id: 'components-pagination',
            title: 'Pagination',
            translate: 'MENU.UI.COMPONENTS.PAGINATION',
            type: 'item',
            icon: 'circle',
            url: 'components/pagination'
          },
          {
            id: 'components-pill-badges',
            title: 'Pill Badges',
            translate: 'MENU.UI.COMPONENTS.PBADGES',
            type: 'item',
            icon: 'circle',
            url: 'components/pill-badges'
          },
          {
            id: 'components-pills',
            title: 'Pills',
            translate: 'MENU.UI.COMPONENTS.PILLS',
            type: 'item',
            icon: 'circle',
            url: 'components/pills'
          },
          {
            id: 'components-popovers',
            title: 'Popovers',
            translate: 'MENU.UI.COMPONENTS.POPOVERS',
            type: 'item',
            icon: 'circle',
            url: 'components/popovers'
          },
          {
            id: 'components-progress',
            title: 'Progress',
            translate: 'MENU.UI.COMPONENTS.PROGRESS',
            type: 'item',
            icon: 'circle',
            url: 'components/progress'
          },
          {
            id: 'components-ratings',
            title: 'Ratings',
            translate: 'MENU.UI.COMPONENTS.RATINGS',
            type: 'item',
            icon: 'circle',
            url: 'components/ratings'
          },
          {
            id: 'components-spinner',
            title: 'Spinner',
            translate: 'MENU.UI.COMPONENTS.SPINNER',
            type: 'item',
            icon: 'circle',
            url: 'components/spinner'
          },
          {
            id: 'components-tabs',
            title: 'Tabs',
            translate: 'MENU.UI.COMPONENTS.TABS',
            type: 'item',
            icon: 'circle',
            url: 'components/tabs'
          },
          {
            id: 'components-timeline',
            title: 'Timeline',
            translate: 'MENU.UI.COMPONENTS.TIMELINE',
            type: 'item',
            icon: 'circle',
            url: 'components/timeline'
          },
          {
            id: 'components-toasts',
            title: 'Toasts',
            translate: 'MENU.UI.COMPONENTS.TOASTS',
            type: 'item',
            icon: 'circle',
            url: 'components/toasts'
          },
          {
            id: 'components-tooltips',
            title: 'Tooltips',
            translate: 'MENU.UI.COMPONENTS.TOOLTIPS',
            type: 'item',
            icon: 'circle',
            url: 'components/tooltips'
          }
        ]
      },
      {
        id: 'extensions',
        title: 'Extension',
        translate: 'MENU.UI.EX.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'plus-circle',
        children: [
          {
            id: 'ex-sweet-alerts',
            title: 'Sweet Alerts',
            translate: 'MENU.UI.EX.SWEET_ALERTS',
            icon: 'circle',
            type: 'item',
            url: '/extensions/sweet-alerts'
          },
          {
            id: 'ex-blockui',
            title: 'BlockUI',
            translate: 'MENU.UI.EX.BLOCKUI',
            icon: 'circle',
            type: 'item',
            url: 'extensions/blockui'
          },
          {
            id: 'ex-toastr',
            title: 'Toastr',
            translate: 'MENU.UI.EX.TOASTER',
            icon: 'circle',
            type: 'item',
            url: 'extensions/toastr'
          },
          {
            id: 'ex-noui-slider',
            title: 'Slider',
            translate: 'MENU.UI.EX.SLIDER',
            icon: 'circle',
            type: 'item',
            url: '/extensions/noui-slider'
          },
          {
            id: 'ex-drag-drop',
            title: 'Drag & Drop',
            translate: 'MENU.UI.EX.DRAGDROP',
            icon: 'circle',
            type: 'item',
            url: 'extensions/drag-drop'
          },
          {
            id: 'ex-tour',
            title: 'Tour',
            translate: 'MENU.UI.EX.TOUR',
            icon: 'circle',
            type: 'item',
            url: 'extensions/tour'
          },
          {
            id: 'ex-clip-board',
            title: 'Clipboard',
            translate: 'MENU.UI.EX.CLIPBOARD',
            icon: 'circle',
            type: 'item',
            url: 'extensions/clipboard'
          },
          {
            id: 'ex-media-player',
            title: 'Media Player',
            translate: 'MENU.UI.EX.MEDIAPLAYER',
            icon: 'circle',
            type: 'item',
            url: 'extensions/media-player'
          },
          {
            id: 'ex-content-menu',
            title: 'Context Menu',
            translate: 'MENU.UI.EX.CONTEXTMENU',
            icon: 'circle',
            type: 'item',
            url: 'extensions/context-menu'
          },
          {
            id: 'ex-swiper',
            title: 'Swiper',
            translate: 'MENU.UI.EX.SWIPER',
            icon: 'circle',
            type: 'item',
            url: 'extensions/swiper'
          },
          {
            id: 'ex-tree-view',
            title: 'Tree View',
            translate: 'MENU.UI.EX.TREEVIEW',
            icon: 'circle',
            type: 'item',
            url: 'extensions/tree-view'
          },
          {
            id: 'i18n',
            title: 'I18n',
            translate: 'MENU.UI.EX.I18N',
            icon: 'circle',
            type: 'item',
            url: '/extensions/i18n'
          }
        ]
      },*/
     /* {
        id: 'page-layouts',
        title: 'Page Layouts',
        translate: 'MENU.UI.LAYOUTS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'layout',
        children: [
          {
            id: 'layout-collapsed-menu',
            title: 'Collapsed Menu',
            translate: 'MENU.UI.LAYOUTS.COLLAPSED_MENU',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/collapsed-menu'
          },
          {
            id: 'layout-boxed',
            title: 'Boxed Layout',
            translate: 'MENU.UI.LAYOUTS.BOXED_LAYOUT',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/boxed-layout'
          },
          {
            id: 'layout-without-menu',
            title: 'Without Menu',
            translate: 'MENU.UI.LAYOUTS.WITHOUT_MENU',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/without-menu'
          },
          {
            id: 'layout-empty',
            title: 'Layout Empty',
            translate: 'MENU.UI.LAYOUTS.LAYOUT_EMPTY',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/layout-empty'
          },
          {
            id: 'layout-blank',
            title: 'Layout Blank',
            translate: 'MENU.UI.LAYOUTS.LAYOUT_BLANK',
            icon: 'circle',
            type: 'item',
            url: 'ui/page-layouts/layout-blank'
          }
        ]
      }*/
    ]
  },
  
];
