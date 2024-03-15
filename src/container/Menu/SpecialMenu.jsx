import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.Drinks.map((Drinks, index) => (
            <MenuItem key={Drinks.title + index} title={Drinks.title} price={Drinks.price}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Foods</p>
        <div className="app__specialMenu_menu_items">
          {data.Food.map((Food, index) => (
            <MenuItem key={Food.title + index} title={Food.title} price={Food.price}/>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;