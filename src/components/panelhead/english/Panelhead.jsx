import "./panelhead.scss"
import SearchIcon from '../../svg/search'

const Panelhead = () => {
  return (
    <div className="panel-head-main">
    <div className="search-box">
      <input className="search-txt" type="text" name="" placeholder="Search.... "/>
      <a className="search-btn">
        <SearchIcon fill="lightgrey"/>
      </a>
    </div>
    <div className="username-container">
      <img className="admin-image" src="/assets/image/81.jpg" alt="team" />
      <div className="admin-des-cont">
      <p className="admin-name">Admin name</p>
      <p className="admin-email">admin email</p>
      </div>
      
      

      </div>
    </div>
  ) 
}

export default Panelhead;