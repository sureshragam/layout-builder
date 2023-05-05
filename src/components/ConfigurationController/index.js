// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showRightNavbar,
            showLeftNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          return (
            <div className="configuration-controller-container">
              <h1>Layout</h1>
              <div>
                <input
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onToggleShowLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="leftNavbar">Left Navbar</label>
                <br />
                <input
                  type="checkbox"
                  id="content"
                  onChange={onToggleShowContent}
                  checked={showContent}
                />
                <label htmlFor="content">Content</label>
                <br />
                <input
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onToggleShowRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="rightNavbar">Right Navbar</label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
