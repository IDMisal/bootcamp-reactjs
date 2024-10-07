const List = (props) => {
    return (
      <div>
        <div className="coolHeader">{props.title}</div>
        <ul>
          {props.list.map((listItem, index) => {
            return (
              <li key={index} className="coolListItem">
                {listItem}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default List;
  