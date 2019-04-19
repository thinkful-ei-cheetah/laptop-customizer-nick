import React from 'react'
import FEATURES from './FEATURES'

export default function FormSection(props) {
  const features = Object.keys(FEATURES)
    .map(key => {
      const options = FEATURES[key].map((item, index) => {
        const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
          <div className={featureClass}

            onClick={() => props.handleUpdate(key, item)}>
            {item.name}
            ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(item.cost)})
                </div>
        </li>
      });

      return <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          {options}
        </ul>
      </div>
    }); 

  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATION</h3>
      {features}
    </section>
  )
}
