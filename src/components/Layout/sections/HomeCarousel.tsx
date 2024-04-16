import { IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import buffaloImg from '../../../assets/images/buffalo-chicken.png';
import guacamoleImg from '../../../assets/images/guacamole.png';
import kaleImg from '../../../assets/images/kale-caesar.png';
import { Button } from '../../Elements';

type FoodItemType = {
  img: any;
  description: string;
  name: string;
};

type CategoryType = {
  id: number;
  title: string;
  content: FoodItemType[];
};

const categories: CategoryType[] = [
  {
    id: 0,
    title: 'Salads',
    content: [
      {
        name: 'Kale Caesar',
        img: kaleImg,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae tempora quasi debitis eum totam voluptatem vitae!',
      },
      {
        name: 'Guacamole Greens',
        img: guacamoleImg,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae tempora quasi debitis eum totam voluptatem vitae!',
      },
      {
        name: 'Buffalo Chicken',
        img: buffaloImg,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae tempora quasi debitis eum totam voluptatem vitae!',
      },
    ],
  },
  {
    id: 1,
    title: 'Warm Bowls',
    content: [],
  },
  {
    id: 2,
    title: 'Sides',
    content: [],
  },
];

export function HomeCarousel() {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeCategoryData = categories.find(
    (category) => category.id === activeCategory
  );

  function Category({ item }: { item: CategoryType }) {
    const isActive = item.id === activeCategory;
    const activeCategoryClass =
      'text-black after:absolute after:content-[" "] after:h-[5px] after:w-[5px] after:bottom-[-5px] after:left-[50%] after:rounded-full after:bg-black';
    return (
      <li
        className={twMerge(
          'relative text-2xl text-faded cursor-pointer sm:text-3xl',
          isActive ? activeCategoryClass : ''
        )}
        onClick={() => setActiveCategory(item.id)}
      >
        {item.title}
      </li>
    );
  }

  function FoodItem({ item }: { item: FoodItemType }) {
    return (
      <div className="food-card relative">
        <div className="card-image">
          <Button className="absolute top-4 left-4 text-sm h-7 w-[100px] cursor-auto">
            Popular
          </Button>
          <img
            src={item.img}
            alt={item.name}
            className="rounded-md w-full h-full min-h-[350px] object-cover"
          />
        </div>
        <div className="card-content">
          <h3 className="text-xl uppercase my-4 italic font-medium">
            {item.name}
          </h3>
          <p className="mb-3">{item.description}</p>
          <a href="#" className="order-button object-fit flex items-center">
            <span className="text hover:underline">Order now</span>
            <IconArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <section id="food-presentation">
      <div className="carousel-header mt-2 p-4 flex flex-wrap justify-center overflow-auto">
        <ul className="food-classes w-full max-w-[450px] flex justify-between">
          {categories.map((item) => (
            <Category item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="carousel-content p-4">
        <div
          className={twMerge(
            'tab-content',
            activeCategoryData && activeCategoryData.content.length > 0
              ? 'grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4'
              : ''
          )}
        >
          {activeCategoryData?.content.map((item) => (
            <FoodItem key={item.name} item={item} />
          ))}
          {activeCategoryData?.content.length === 0 && (
            <span>Sem conteúdo para essa categoria</span>
          )}
        </div>
      </div>
    </section>
  );
}
