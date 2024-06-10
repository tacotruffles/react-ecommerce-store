import CategoryItem from '../category-item/category-items.component';

import './category-menu.styles.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className='category-menu'>
      {categories.map((category) => (
        <CategoryItem id={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryMenu;