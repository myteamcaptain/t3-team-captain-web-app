import {
  AppInformationTypes,
  BannerSportsType,
  BannerSportsV2NewType,
  CustomerReviewType,
  FaqTypes,
  FooterLinks,
  HowToUseListProps,
  IntroListProps,
  KeyFeatureType,
  MenuItemType,
} from './types';

import {
  LucideAlarmCheck,
  LucideApple,
  LucideArchiveRestore,
  LucideBarChartBig,
  LucideBackpack,
  LucideArmchair,
} from 'lucide-react';

export const APP_INFO: AppInformationTypes = {
  appName: 'Team Captain',
  appAbv: 'TC',
  appDesc: 'This is a website for the Python Whatsapp Bot',
};

export const NAVIGATION_MENU_LIST: MenuItemType[] = [
  {
    label: 'Home',
    link: '/',
  },
  // {
  //   label: 'Blog',
  //   link: '/admin',
  //   menuList: [
  //       {
  //           label: "List 1",
  //           link: "/home",
  //       },
  //   ]
  // },
  {
    label: 'Pricing',
    link: '/#pricing',
  },
  {
    label: 'FAQ',
    link: '/faq',
  },
  {
    label: 'Contact Us',
    link: '/contact-us',
  },
];
export const NAVIGATION_MENU_AUTH: MenuItemType[] = [
  {
    label: 'Login',
    link: '/auth/login',
  },
  {
    label: 'Sign Up',
    link: '/auth/create',
  },
];

export const BANNER_BOT_TEAM_TYPE: BannerSportsType[] = [
  {
    label: 'Basketball Team Bot',
    value: 'basketball',
    image: '/banner-icon/basketball.png',
    coordinate: {
      top: '-3rem',
      right: 1,
      zIndex: 20,
    },
    delay: 1.7,
  },
  {
    label: 'Baseball Team Bot',
    value: 'baseball',
    image: '/banner-icon/baseball.png',
    coordinate: {
      top: 12,
      left: '-3rem',
    },
    delay: 1.2,
  },
  {
    label: 'Volleyball Team Bot',
    value: 'volleyball',
    image: '/banner-icon/volleyball.png',
    coordinate: {
      right: 1,
      bottom: '-3rem',
    },
    delay: 0.7,
  },
  {
    label: 'Soccer Team Bot',
    value: 'soccer',
    image: '/banner-icon/football.png',
    coordinate: {
      bottom: 6,
      left: '-60px',
      zIndex: 20,
    },
    delay: 0.9,
  },
];

export const BANNER_BOT_TEAM_TYPE_V2_NEW: BannerSportsV2NewType[] = [
  {
    label: 'Basketball Team Bot',
    value: 'basketball',
    image: '/banner-icon/basketball.png',
    coordinate: ["top-8", "left-[200px]"],
    width: "w-36",
    delay: 1.7,
  },
  {
    label: 'Baseball Team Bot',
    value: 'baseball',
    image: '/banner-icon/football.png',
    coordinate: ["top-[50%]", "left-[100px]"],
    width:"w-20",
    delay: 1.2,
  },
  {
    label: 'Volleyball Team Bot',
    value: 'volleyball',
    image: '/banner-icon/volleyball.png',
    coordinate:["top-6", "right-[200px]"],
    width:"w-28",
    delay: 0.7,
  },
  {
    label: 'Soccer Team Bot',
    value: 'soccer',
    image: '/banner-icon/football.png',
    coordinate:["top-[70%]", "right-[200px]"],
    width:"w-20",
    delay: 0.9,
  },
  {
    label: 'Soccer Team Bot',
    value: 'soccer',
    image: '/banner-icon/football.png',
    coordinate:["bottom-[-100px]", "right-[400px]"],
    width:"w-20",
    delay: 0.9,
  },
];
export const keyFeatureContainer = (prob?: string, sol?: string) => {
  return `<div className='space-y-2'>
            <p>${prob}</p>
             <p>${sol}</p>
          </div>`;
};
export const KEY_FEATURE_LIST_LEFT: KeyFeatureType[] = [
  {
    label: 'Automated Attendance Polling',
    content: keyFeatureContainer(
      `<b>Problem:</b> Tired of asking "Who's in for the game?" Over and over?`,
      `<b>Solution:</b> Our bot takes care of it. Automatically send out a poll 48 hours before the game, so you know who’s in and who’s out without lifting a finger.`
    ),
    Icon: LucideArmchair,
    animationDelay: 0.1
  },
  {
    label: 'Personalized Reminders',
    content: keyFeatureContainer(
      `<b>Problem:</b> Frustrated with team members who never respond?  `,
      `<b>Solution:</b> We send personalized reminders 24 and 12 hours before the game to those who haven’t responded yet, making sure everyone is on the same page.`
    ),
    Icon: LucideBarChartBig,
    animationDelay: 0.3
  },
  {
    label: 'Substitute Player Management',
    content: keyFeatureContainer(
      `<b>Problem:</b> Scrambling to find enough players last minute? `,
      `<b>Solution:</b> If regular players aren’t available, we automatically reach out to your list of substitutes, ensuring you never have to worry about not having a full team `
    ),
    Icon: LucideBackpack,
    animationDelay: 0.5
  },
];

export const KEY_FEATURE_LIST_RIGHT: KeyFeatureType[] = [
  {
    label: 'Final Game Updates',
    content: keyFeatureContainer(
      `<b>Problem:</b> Uncertainty on game day is the  worst.`,
      `<b>Solution: </b> Get a final roster 6 hours before the game. Know exactly who’s showing up, and whether you have enough players, so there are no surprises.`
    ),
    Icon: LucideAlarmCheck,
    animationDelay: 0.2
  },
  {
    label: 'WhatsApp Integration',
    content: keyFeatureContainer(
      `<b>Problem:</b> Don’t want to learn a new app?`,
      `<b>Solution:</b> We work directly within WhatsApp, so you and your team don’t need to download or learn anything new. Everything happens in the same chat you’re already using.`
    ),
    Icon: LucideApple,
    animationDelay: 0.4
  },
  {
    label: 'Stress-Free Management',
    content: keyFeatureContainer(
      `<b>Problem:</b> Being a captain is supposed to be fun, but it feels like work.`,
      `<b>Solution:</b> <b>TEAM CAPTAIN</b> does the heavy lifting, so you can get back to enjoying the game.`
    ),
    Icon: LucideArchiveRestore,
    animationDelay: 0.6
  },
];

export const FOOTER_LINKS: FooterLinks[] = [
  {
    label: 'Info',
    list: [
      {
        label: 'FAQ',
        link: '/faq',
      },
      {
        label: 'Pricing',
        link: '/#pricing',
      },
    ],
    align: 'left',
  },
  // {
  //   label: 'Resources',
  //   list: [
  //     {
  //       label: 'Blogs',
  //       link: '/blogs',
  //     },
  //     {
  //       label: 'Announcements',
  //       link: '/announcements',
  //     },
  //   ],
  // },
  {
    label: 'Company',
    list: [
      {
        label: 'About Us',
        link: '/about-us',
      },
      {
        label: 'Terms of Services',
        link: '/terms-of-services',
      },
      {
        label: 'Privacy Policy',
        link: '/privacy-policy',
      },
    ],
    align: 'right',
  },
];

export const HOW_TO_USE_PROCESS: HowToUseListProps[] = [
  {
    label: 'Create your team’s Group Chat',
    icon: '/how-to-use-img/create.svg',
  },
  {
    label: `Invite “Team Captain” to the Group Chat`,
    icon: '/how-to-use-img/invite.svg',
    position: 'bottom',
  },
  {
    label: `Upload Your League Schedule`,
    icon: '/how-to-use-img/schedule.svg',
    position: 'top',
  },
  {
    label: `Our Bot Will Automate Roll Calls`,
    icon: '/how-to-use-img/notification.svg',
    position: 'bottom',
  },
  {
    label: 'Get Final Attendance Details',
    icon: '/how-to-use-img/attendance_list.svg',
    position: 'top',
  },
];

export const BUSINESS_PHONE_NUMBER = '512-629-8134';
export const BUSINESS_EMAIL = 'myteamcaptain@gmail.com';

export const INTRODUCTION_LIST: IntroListProps[] = [
  {
    title: 'Are You Tired of Being the Team Captain Who Does It All?',
    content: `Managing a sports team can be a headache. Constantly chasing down players to confirm attendance, worrying about whether you'll have enough people for the game, and dealing with last-minute cancellations—it’s overwhelming and takes the fun out of the game.`,
  },
  {
    title: 'Team Captain is here to change that.',
    content: `We automate your team attendance on WhatsApp, so you can stop stressing and start enjoying your time on the field.`,
  },
];

export const CUSTOMER_REVIEW_LIST: CustomerReviewType[] = [
  {
    customerName: 'Kize',
    profileImg: '/users/kize.jpg',
    rating: 5,
    rank: 'Youtuber, Sports League Fanatic',
    content:
      'I used to spend hours trying to track down my team members before every game. Now, it’s all done for me. Worth every penny.',
  },
  {
    customerName: 'Z',
    profileImg: '/users/z.jpg',
    rating: 5,
    rank: 'Recreational Soccer Captain',
    content:
      'Finally, I can focus on playing instead of worrying about who’s showing up. Team Captain has made my life so much easier!',
  },
  {
    customerName: 'Robert Garcia',
    profileImg: '/users/robert-basketball.jpg',
    rating: 5,
    rank: 'Adult Basketball League Captain',
    content: `Managing our Sunday league soccer team used to be a nightmare. I'd spend hours texting everyone, trying to figure out who could play. Since we started using Team Captain, it’s been a game-changer. The automated reminders are a lifesaver, and I no longer have to worry about last-minute no-shows.`,
  },
  {
    customerName: 'Carlos Brooks',
    profileImg: '/users/carlos-soccer.jpg',
    rating: 5,
    rank: 'Captain, Sunday League Soccer Team',
    content: `Managing our Sunday league soccer team used to be a nightmare. I'd spend hours texting everyone, trying to figure out who could play. Since we started using Team Captain, it’s been a game-changer. The automated reminders are a lifesaver, and I no longer have to worry about last-minute no-shows.`,
  },
  {
    customerName: 'Sarah McDonald',
    profileImg: '/users/sarah-basketball.jpg',
    rating: 5,
    rank: 'Recreational Basketball Coach',
    content: `I coach a recreational basketball team for adults, and coordinating schedules was always a headache. Team Captain has taken a huge load off my shoulders. The WhatsApp integration is seamless, and I love how it reaches out to substitutes if we’re short on players. Worth every penny!`,
  },
  {
    customerName: 'Lisa Su',
    profileImg: '/users/lisa-frisbee.jpg',
    rating: 5,
    rank: 'Ultimate Frisbee Captain',
    content: `Team Captain has transformed how I manage my ultimate frisbee team. The reminders are perfectly timed, and the substitute management feature ensures we&quot;re never short on players. I don&quot;t know how I managed without it before!`,
  },
];

export const FAQ_LIST: FaqTypes[] = [
  {
    question: 'What is TEAM CAPTAIN',
    answer:
      '<b>TEAM CAPTAIN</b> is an automated service designed to help amateur sports team captains manage their team&quot;s attendance for games. It works through WhatsApp, handling all the heavy lifting of confirming player availability, sending reminders, and ensuring you have enough players for every game.',
  },
  {
    question: 'How does TEAM CAPTAIN work?',
    answer:
      'Once you sign up, you&quot;ll create a WhatsApp group chat with your team members and our <b>TEAM CAPTAIN</b> bot. You provide the game schedule, and our bot will take care of the rest—sending out roll calls, reminders, and final rosters so you know exactly who&quot;s available for your game.',
  },
  {
    question: 'Do I need to download any additional apps?',
    answer:
      'Nope! <b>TEAM CAPTAIN</b> works directly within WhatsApp, which means there&quot;s nothing new to download or learn. It&quot;s as simple as adding our bot to your existing group chat.',
  },
  {
    question: 'What if I don&quot;t have enough players for a game?',
    answer:
      'If you&quot;re short on players, <b>TEAM CAPTAIN</b> will automatically reach out to your list of substitute players. If more members are needed, the bot will continue to send reminders until you have a full team.',
  },
  {
    question: 'How much does it cost?',
    answer:
      '<b>TEAM CAPTAIN</b> costs just $15 per month. That&quot;s only $3.75 per week to drastically reduce the stress of managing your team. ',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Absolutely. We believe in offering flexibility, so you can cancel your subscription at any time with no questions asked.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Just click the "Start Now" button on our website, which will take you to the Stripe payment page. Once you complete your payment, you&quot;ll receive an email with a form to fill out, and you&quot;ll be ready to set up your team in no time.',
  },
  {
    question: 'What happens if my players don&quot;t respond to the roll call?',
    answer:
      'If a player doesn&quot;t respond to the initial roll call, TEAM CAPTAIN will send personalized reminders 24 hours before the game, and again 12 hours before the game. This ensures everyone is reminded and has the chance to confirm their attendance.',
  },
  {
    question: 'Can I add more than one team to my account?',
    answer: `Currently, <b>TEAM CAPTAIN</b> supports one team per subscription. If you manage multiple teams, you&quot;ll need to create separate subscriptions for each. However, we're working on expanding this feature in the future!`,
  },
  {
    question: 'Is my data secure?',
    answer: `Yes, your data is safe with us. We only use WhatsApp for communication and never share your information with third parties. We are committed to keeping your team's data private and secure.`,
  },
];


export const FOUNDER_NAME = "Hyejee Bae";
export const BUSINESS_NAME = "ZK Studios LLC"