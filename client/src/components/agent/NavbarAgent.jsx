import Search from "../../assets/agent/icon/search.png"

function NavBarAgent(props){
    return (
      <nav className="bg-utilWhite px-14 py-4 flex gap-4 justify-between relative top-0 left-0">
        <h1 className="headline5 w-full flex items-center">
          {props.pageName}
        </h1>
        <div className="flex gap-3 px-3 py-4 border border-gray400 rounded">
          <img src={Search} alt="" width={24} />
          <input type="text" className="body1 h-6" placeholder="Search..." />
        </div>
      </nav>
    );
}
export default NavBarAgent