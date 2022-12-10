import './menuBar.scss'
const menuItem = [
  {id:'menu1',title:'پیتزا ایتالیایی'},
  {id:'menu2',title:'سالاد'},
  {id:'menu3',title:'پیش غذا'},
  {id:'menu4',title:'کیک و دسر'},
  {id:'menu5',title:'نوشیدنی'},
]

const MenuBar = () => {
  return (
    <nav className="MenuBar mt-5 d-flex flex-column">
      {menuItem.map(item => <p key={item.id} className='text-start'>{item.title}</p> )}
    </nav>
  );
};

export default MenuBar;
