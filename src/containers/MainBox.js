import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    id: '',
    className: 'item'
  }

  menuChange = (e) => {
    console.log(e);
  }

  render() {

    

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar menuChange={this.menuChange}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
