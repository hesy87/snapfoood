import './menuBar.scss'
const menuItem = [
  {id:'menu1',title:'Italian Pizza'},
  {id:'menu2',title:'Salad'},
  {id:'menu3',title:'Desert'},
  {id:'menu5',title:'Drinks'},
]

const MenuBar = () => {
  return (
    <nav className="MenuBar mt-5 d-flex flex-column">
      {menuItem.map(item => <p key={item.id} className='text-end'>{item.title}</p> )}
    </nav>
  );
};

export default MenuBar;
