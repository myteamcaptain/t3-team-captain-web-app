import { LucideProps } from 'lucide-react';
import {
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
  RefAttributes,
} from 'react';
// APP INFORMATION TYPES
export interface AppInformationTypes {
  appName: string;
  appAbv: string;
  appDesc?: string;
}

export interface MenuItemType {
  label: string;
  link: string;
  menuList?: MenuItemType[];
}

export interface BannerSportsCoordinateType {
  top?: number | string;
  bottom?: number | string;
  right?: number | string;
  left?: number | string;
  zIndex?: number | string;
}
export interface BannerSportsType {
  label: string;
  value: string;
  image: string;
  coordinate: BannerSportsCoordinateType;
  delay: number;
}

export interface BannerSportsV2NewType {
  label: string;
  value: string;
  image: string;
  coordinate: string[];
  width: string;
  delay: number;
}

export interface KeyFeatureType {
  label: string;
  content: string;
  Icon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  animationDelay?: number;
  align?: "left" | "right"
}

export interface LinkAppProps {
  label: string;
  link: string;
}
export interface FooterLinks {
  label: string;
  list: LinkAppProps[];
  align?: 'left' | 'right';
}

type HowToUsePosition = 'top' | 'bottom';

export interface HowToUseListProps {
  label: string;
  icon: string;
  position?: HowToUsePosition;
}

export interface IntroListProps {
  title: string;
  content: string;
}

export interface CustomerReviewType {
  customerName: string;
  profileImg: string;
  rating: number;
  rank: string;
  content: string;
}

export interface FaqTypes {
  question: string;
  answer: string;
}
export type SubscriptionTypes = 'basic' | 'starter' | 'pro';
export type SubscriptionPeriod = 'weekly' | 'monthly' | 'yearly';
export interface SubscriptionFeatureProps {
  text: string;
  offered?: boolean;
}

export interface SubscriptionPlanTypes {
  type: SubscriptionTypes;
  period: SubscriptionPeriod;
  amount: number;
  desc: string;
  features: SubscriptionFeatureProps[];
  activated?: boolean;
}
