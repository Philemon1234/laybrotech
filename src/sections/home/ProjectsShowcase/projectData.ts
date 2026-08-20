import fahariUgandaSafarisImage from '@/assets/images/Portfolio/Fahari-Uganda-Safaris.jpg';
import invisionAutoParlourImage from '@/assets/images/Portfolio/Invision-Auto-Parlour-Limited.jpg';
import lmkVenturesHealthcareImage from '@/assets/images/Portfolio/LMK-Ventures-Healthcare.jpg';
import mealCardDinnerImage from '@/assets/images/Portfolio/Meal-Card-Dinner.jpg';
import naroHoldingsImage from '@/assets/images/Portfolio/NARO-Holdings-Limited-NHL.jpg';
import webhosting256Image from '@/assets/images/Portfolio/Webhosting256.jpg';

export type Project = {
  name: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const portfolioRowOneProjects: Project[] = [
  {
    name: 'Invision Auto Parlour Limited',
    category: 'Website Design',
    image: invisionAutoParlourImage,
    imageAlt: 'Invision Auto Parlour Limited website screenshot',
  },
  {
    name: 'Fahari Uganda Safaris',
    category: 'Tourism Website',
    image: fahariUgandaSafarisImage,
    imageAlt: 'Fahari Uganda Safaris website screenshot',
  },
  {
    name: 'LMK Ventures Healthcare',
    category: 'Healthcare Website',
    image: lmkVenturesHealthcareImage,
    imageAlt: 'LMK Ventures Healthcare website screenshot',
  },
];

export const portfolioRowTwoProjects: Project[] = [
  {
    name: 'NARO Holdings Limited NHL',
    category: 'Business Website',
    image: naroHoldingsImage,
    imageAlt: 'NARO Holdings Limited NHL website screenshot',
  },
  {
    name: 'Webhosting256',
    category: 'Hosting Website',
    image: webhosting256Image,
    imageAlt: 'Webhosting256 website screenshot',
  },
  {
    name: 'Meal Card Dinner',
    category: 'Digital Experience',
    image: mealCardDinnerImage,
    imageAlt: 'Meal Card Dinner project screenshot',
  },
];
