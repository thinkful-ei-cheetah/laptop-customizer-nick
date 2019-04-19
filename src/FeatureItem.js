import React from 'react'

export default function FeatureItem(props) {
  const { features, selected, featureTitle, handleUpdate } = props;
  
  const options = features[featureTitle].map((item, index) => {
    const selectedClass = item.name === selected[featureTitle].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    return (
      <li key={index} className="feature__item">
        <div className={featureClass}

          onClick={() => handleUpdate(featureTitle, item)}>
          {item.name}
          ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(item.cost)})
                  </div>
      </li>
    );
  });

  return (
    <div className="feature">
      <div className="feature__name">{featureTitle}</div>
      <ul className="feature__list">
        {options}
      </ul>
    </div>
  );
}
