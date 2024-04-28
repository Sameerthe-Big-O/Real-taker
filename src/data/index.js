import Administrator from '../assets/svgs/Adniministration.svg';
import Buildings from '../assets/svgs/Building.svg';
import Contacts from '../assets/svgs/Contact.svg';
import Dashboard from '../assets/svgs/Dashboard.svg';
import Tenants from '../assets/svgs/Tenants.svg';
import Supervisor from '../assets/svgs/Supervisors.svg';
import Reports from '../assets/svgs/Reports.svg';
import Directory from '../assets/svgs/Directory.svg';
import ServiceCategory from '../assets/svgs/ServiceCategory.svg';

export const MenuData = [
        {
          id: 1,
          url: '/admin',
          title: 'Dashboard',
          icon: Dashboard ,
        },
        {
          id: 2,
          url: '/administration',
          title: 'Administration',
          icon:Administrator ,
        },
        {
          id: 3,
          url: '/buildings',
          title: 'Building',
          icon: Buildings ,
        },
        {
          id: 4,
          url: '/contacts',
          title: 'Contacts',
          icon: Contacts ,
        },
        {
          id: 5,
          url: '/tenants',
          title: 'Tenants',
          icon: Tenants ,
        },
        {
          id: 6,
          url: '/directory',
          title: 'Directory',
          icon: Directory ,
        },
        {
          id: 7,
          url: '/serviceCategory',
          title: 'ServiceCategory',
          icon: ServiceCategory ,
        },
        {
          id: 8,
          url: '/superVisor',
          title: 'SuperVisor',
          icon: Supervisor ,
        },
        {
          id:9,
          url: '/reports',
          title: 'Reports',
          icon: Reports,
        },
];
