export interface NavigationItem {
    title: string;
    href: string;
    dropdown?: boolean;
  }
  
  export interface ServiceItem {
    title: string;
    href: string;
  }
  
  export interface SocialLink {
    href: string;
    label: string;
    platform: 'facebook' | 'twitter' | 'instagram';
  }