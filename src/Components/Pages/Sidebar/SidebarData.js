import homeform from './../../../images/sidebar_icons/home-formulary.svg'
import dashboardimg from './../../../images/sidebar_icons/bar-chart-square.svg'
import drugimg from './../../../images/sidebar_icons/druganalytics.svg'
import analyticsimg from './../../../images/sidebar_icons/analytics.svg'
import reportsimg from './../../../images/sidebar_icons/reports.svg'
import homeactive from './../../../images/sidebar_icons/home-line-active.svg'
import bar from './../../../images/sidebar_icons/bar-chart-square-active.svg'
import drugnormal from './../../../images/sidebar_icons/layers-three-active.svg'
import pienormal from './../../../images/sidebar_icons/pie-chart-active.svg'
import analyticsnormal from './../../../images/sidebar_icons/analytics-active.svg'

export const SidebarData =[
   
      {
        navItem: '',
        id: 'overview',
        // show: false,
        img: homeactive,
        imgLight:homeform,
        imgSelected:homeform,
        imgLightSelected:homeform,
        link: '/overview',
        bgShade: 'linear-gradient(to right,rgb(0, 137, 249),rgb(0, 55, 255))',
      },
      {
        navItem: '',
        id: 'dashboard',
        // show: false,
        img: bar,
        imgLight:dashboardimg,
        imgSelected:dashboardimg ,
        imgLightSelected:dashboardimg,
        link: '/dashboard',
        bgShade: 'linear-gradient(to right,rgb(0, 137, 249),rgb(0, 55, 255))',
      },
      {
        navItem: '',
        id: 'drugexplorer',
        // show: false,
        img:drugnormal,
        imgLight:drugimg,
        imgSelected:drugimg,
        imgLightSelected:drugimg,
        link: '/drugexplorer',
        bgShade: 'linear-gradient(to right,rgb(0, 137, 249),rgb(0, 55, 255))',
      },
      {
       navItem: '',
        id: 'analytics',
        // show: false,
        img:  analyticsnormal  ,
        imgLight:analyticsimg ,
        imgSelected: analyticsimg ,
        imgLightSelected:analyticsimg ,
        link: '/analytics',
        bgShade: 'linear-gradient(to right,rgb(0, 137, 249),rgb(0, 55, 255))',
      },
       {
       navItem: '',
        id: 'reports',
        // show: false,
        img:  pienormal ,
        imgLight:reportsimg ,
        imgSelected: reportsimg ,
        imgLightSelected:reportsimg ,
        link: '/reports',
        bgShade: 'linear-gradient(to right,rgb(0, 137, 249),rgb(0, 55, 255))',
      },
      
     
]

